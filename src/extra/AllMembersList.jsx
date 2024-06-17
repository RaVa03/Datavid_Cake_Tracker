import "./AllMembersList.css"
import MemberCard from "../ui/MemberCard"
import { useState, useEffect } from "react";
import Button from "../ui/Button";

export default function AllMembersList(props){
    const [originalMembers, setOriginalMembers] = useState([...props.members]);
    const [displayedMembers, setDisplayedMembers] = useState([...props.members]);
    const [isSorted, setIsSorted] = useState(false);

    useEffect(() => {
        setOriginalMembers([...props.members]);
        setDisplayedMembers([...props.members]);
    }, [props.members]);

    const calculateTimeUntilBirthday=(birthDate)=>{
        const currentDateUTC= new Date();
        const birthDateUTC=new Date(birthDate);
        const futureBirthdayUTC=new Date(Date.UTC(currentDateUTC.getUTCFullYear(), birthDateUTC.getUTCMonth(), birthDateUTC.getUTCDate()))
        if (currentDateUTC>futureBirthdayUTC)
        {
            futureBirthdayUTC.setUTCFullYear(currentDateUTC.getUTCFullYear() + 1);
        }
        const timeLeft = futureBirthdayUTC - currentDateUTC;
        return Math.ceil(timeLeft / (1000 * 60 * 60 * 24)); 
    }

    const sortByClosest=()=>{
        const sorted = [...originalMembers].sort((a,b)=>{
            const timeA=calculateTimeUntilBirthday(a.birthDate);
            const timeB=calculateTimeUntilBirthday(b.birthDate);
            return timeA - timeB;

        })
        setDisplayedMembers(sorted);
        setIsSorted(true);
    }
    
    const resetToOriginal = () => {
        setDisplayedMembers([...originalMembers]);
        setIsSorted(false);
    };

    const toggleSortOrder = () => {
        if (isSorted) {
            resetToOriginal();
        } else {
            sortByClosest();
        }
    };

    return(
        <div className="AllMembersList">
             <div className="SortButton">
                <Button onAction={toggleSortOrder} color="#dfedf6" textColor="#232c4b" text={isSorted ? 'Show Original List' : 'Sort by Closest Birthday'}/>
            </div>
            <ul className="AllMembersListUL">
            {
                displayedMembers.map((m)=>(
                    <MemberCard
                        _id={m._id}
                        id={m.id}
                        key={m.id}
                        firstName={m.firstName}
                        lastName={m.lastName}
                        birthDate={m.birthDate}
                        country={m.country}
                        city={m.city}
                        image={m.image}
                    />
                ))
            }
            </ul>
        </div>
    )
}