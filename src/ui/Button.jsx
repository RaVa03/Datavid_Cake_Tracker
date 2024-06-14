import "./Button.css"

export default function Button(props){
    const buttonStyle={
        backgroundColor: props.color
    }
    return(
        <button style={buttonStyle} className="Button" onClick={props.onAction}>{props.text}</button>
    )
}