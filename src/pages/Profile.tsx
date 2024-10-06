
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
            <h1 id="profile">Hello {user && user.firstName ? user.firstName : ''} {user && user.firstName ? user.lastName : ''}</h1> 
            <div>
                <img src={user && user.image ? user.image : ''} alt="profile"/>
            </div>

         </div>

        </>
    )
}       

export default Profile;