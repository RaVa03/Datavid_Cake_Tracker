import "./AddMemberPage.css"
import { useNavigate } from 'react-router-dom'
import AddMemberForm from "../forms/AddMemberForm"

export default function AddMemberPage() {
    const navigateTo=useNavigate();
    function addMemberHandler(memberData){
        console.log(memberData)
        fetch(
            "http://localhost:3000/add-member",
        {
            method: 'POST',
            body: JSON.stringify(memberData),//datele pe care le trimitem
            headers: {
                'Content-type': 'application/json'//evidentiem ca datele sunt de tip JSON
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
          });
    }
    return (
        <div className="AddMemberPage">
            <AddMemberForm onAddMember={addMemberHandler}/>
        </div>
    )
}