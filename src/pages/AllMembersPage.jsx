import { useEffect,useState } from "react"
import AllMembersList from "../extra/AllMembersList"

export default function AllMembersPage(){
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
            console.error('Error fetching members:', error);
            setIsLoading(false);
        });
    
    },[])
    if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
    }

    return(
        <div className="AllMembersPage">
            <AllMembersList members={loadedMembers}/>
        </div>
    )
}