
import { useAuth } from "features/hooks/AuthProvider";
import { useState } from "react";
const Profile = function(): React.JSX.Element {

const {user,loading} = useAuth();

    if(loading) {
        return <div> Loading ....</div>
    }

    return (

        <>

         <div>
            <h1>Hello {user.firstName} {user.lastName}</h1> 
            <div>
                <img src={user.image} alt="profile"/>
            </div>

         </div>

        </>
    )
}       

export default Profile;