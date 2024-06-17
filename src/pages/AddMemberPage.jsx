import "./AddMemberPage.css"
import { useNavigate } from 'react-router-dom'
import AddMemberForm from "../extra/AddMemberForm"
import { useEffect, useState } from "react";

export default function AddMemberPage() {
    const navigateTo=useNavigate();
    const [isLoading, setIsLoading] = useState(true);
	const [loadedMembers, setLoadedMembers] = useState([]);
    useEffect(()=>{
        setIsLoading(true);
        fetch(
           "http://localhost:3000",
           {headers: { 'Content-type': 'application/json'
        }}
        ).then((response)=>{
            return response.json();
        })
        .then((data)=>{
            const members =[];
            for(const key in data)
            {
                const member={
                    id:key,
                    ...data[key]
                }
                members.push(member)
            }  
            setIsLoading(false) 
            setLoadedMembers(members) 
        })
        .catch(error => {
            console.error('Error fetching members to check:', error);
            setIsLoading(false) ;
        });
    
    },[])
    const validateData = (data) => {

        //General validations
        if(data.firstName == '') {
            return "First name field cannot be empty!"
        }
        if(data.lastName == '') {
            return "Last name field cannot be empty!"
        }
        if(data.birthDate == '') {
            return "Birthdate field cannot be empty!"
        }
        if(data.country == '') {
            return "Country field cannot be empty!"
        }
        if(data.city == '') {
            return "City field cannot be empty!"
        }
        if(data.image == '') {
            return "Image field cannot be empty!"
        }
        
        //Minimum AGE validation
        const currentDateUTC= new Date();
        const birthDateUTC=new Date(data.birthDate);

        let age=currentDateUTC.getUTCFullYear()-birthDateUTC.getUTCFullYear();
        const currentMonth = currentDateUTC.getUTCMonth();
        const birthMonth = birthDateUTC.getUTCMonth();
        const currentDay = currentDateUTC.getUTCDate();
        const birthDay = birthDateUTC.getUTCDate();

        if(currentMonth < birthMonth || ((currentMonth===birthMonth) && (currentDay<birthDay))){
            age--;
        }
        if (age < 18)
            return "Age must be greater than 18 years old!";
        

        //UNIQUE NAME and LOCATION validation
        if(!isLoading){
            console.log("loaded members:",loadedMembers)
            for(const index in loadedMembers)
                {
                    if(data.firstName === loadedMembers[index].firstName && data.lastName === loadedMembers[index].lastName){
                        return "This name already exists!"
                    }
                    if(data.country === loadedMembers[index].country && data.city === loadedMembers[index].city){
                        return "This location already exists!"
                    }

                }
        }
        return "Member succesfully added!"
        
    }

    function addMemberHandler(memberData){
        console.log(memberData);
        const message = validateData(memberData);
        if(message != 'Member succesfully added!') {
           alert(message);
        }
        else{

            fetch(
                    "http://localhost:3000/add-member",
                {
                    method: 'POST',
                    body: JSON.stringify(memberData),
                    headers: {
                        'Content-type': 'application/json'
                }
            }
            ).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
        
            })
            .then(() => {
                navigateTo('/');
            })
            .catch(error => {
                console.error('Error:', error);
                alert(`Error: ${error.message}`);
            });
        }
    }
    return (
        <div className="AddMemberPage">
            <AddMemberForm onAddMember={addMemberHandler}/>
        </div>
    )
}