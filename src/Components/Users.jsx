import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const loader = useLoaderData()
    
    return (
        
            <>
            <div>
            <ul>
            {
                loader.map(user =><li key={user._id}><User  user={user}></User></li>)
            }
            </ul>
            </div>
            </>
        
    );
};

export default Users;