import "./AddCard.css"

export default function AddCard(props){
    return(
        <div className="AddCard" style={{backgroundColor: props.backgroundColor}}>{props.children}</div>
    )
}