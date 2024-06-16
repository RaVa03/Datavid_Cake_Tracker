import "./MemberCard.css"
export default function MemberCard(props){
    const birthDateValue = new Date (props.birthDate);
    const birthDateString = birthDateValue.getUTCDate() + "/"+ (birthDateValue.getUTCMonth() +1) + '/' + birthDateValue.getUTCFullYear();
    return(
        <div className="MemberCard" >
            <div className="MemberImage">
                <img src={props.image}  content="crop" width={100} height={"100px"}/>
            </div>
            <div className="MemberInfo">
                <h1>{props.firstName} {props.lastName}</h1>
                <p>Birthdate: {birthDateString}</p>
                <p>Current location: {props.city}, {props.country}</p>
            </div>
        </div>
    )
}