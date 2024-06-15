import "./AllMembersList.css"
import MemberCard from "../ui/MemberCard"
export default function AllMembersList(props){
    return(
        <ul className="AllMembersList">
            {
                props.members.map((m)=>(
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
    )
}