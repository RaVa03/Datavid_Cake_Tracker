import AddCard from "../ui/AddCard";
import "./AddMemberForm.css"
import { useState} from 'react';
import Button from "../ui/Button";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddMemberForm(props){

    const[firstNameValue, setFirstNameValue]=useState("");
    const[lastNameValue,setLastNameValue]=useState("");
    const[birthDateValue,setBirthDateValue]=useState(new Date());
    const[countryValue,setCountryValue]=useState("");
    const[cityValue,setCityValue]=useState("");
    const[imageValue,setImageValue]=useState("");
    
    function submitHandler(event){
        event.preventDefault();
        const memberData={
            firstName: firstNameValue,
            lastName: lastNameValue,
            birthDate: birthDateValue,
            country: countryValue,
            city: cityValue,
            image: imageValue
        }
        props.onAddMember(memberData);
        console.log(memberData)
    }
    
    return(
        <AddCard backgroundColor="#b5e5f5">
            <form className="AddMemberForm" onSubmit={submitHandler} method="POST">
            <h1 className="cardTitle">Add a new member</h1>
               <div className="divForm">
                    <label htmlFor="firstName">First name</label>
                    <input onChange={(event)=>{setFirstNameValue(event.target.value);console.log(event.target.value);}} type="text" name="firstName" id="firstName" placeholder="Enter your first name"  required/>
                </div> 
                <div className="divForm">
                    <label htmlFor="lastName">Last name</label>
                    <input onChange={(event)=>{setLastNameValue(event.target.value);console.log(event.target.value);}} type="text" name="lastName" id="lastName" placeholder="Enter your last name" required/>
                </div>
                {/* <div className="divForm">
                    <label htmlFor="birthDate">Birth Date</label>
                    <input onChange={(event)=>{setBirthDateValue(event.target.value);console.log(event.target.value);}} type="text" name="birthDate" id="birthDate" placeholder="Enter your birth date"  required/>
                </div> */}
                <div className="divForm">
                    <label htmlFor="birthDate">Birth Date</label>
                    <DatePicker selected={birthDateValue} onChange={(date) => setBirthDateValue(date)} name="birthDate"  required/>
                </div>
                <div className="divForm">
                    <label htmlFor="country">Country</label>
                    <input onChange={(event)=>{setCountryValue(event.target.value);console.log(event.target.value);}} type="text" name="country" id="country" placeholder="Enter the country" required/>
                </div> 
                <div className="divForm">
                    <label htmlFor="city">City</label>
                    <input onChange={(event)=>{setCityValue(event.target.value);console.log(event.target.value);}} type="text" name="city" id="city" placeholder="Enter the city"  required/>
                </div>
                <div className="divForm">
                    <label htmlFor="image">Image url</label>
                    <input onChange={(event)=>{setImageValue(event.target.value);console.log(event.target.value);}} type="url" name="image" id="image" placeholder="Enter the image url"  required/>
                </div>
                <div className='buttonForm'>
                    <Button color="white" text={"Add memeber"} ></Button>
                </div>
            </form>
        </AddCard>
    )
}