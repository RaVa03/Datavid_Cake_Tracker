import "./MainLayout.css"
import NavBar from "./NavBar"
export default function MainLayout(props){
    return(
        <div>
            <NavBar/>
            <main className="mainLayout">
                {props.children}
            </main>
        </div>
    )
}