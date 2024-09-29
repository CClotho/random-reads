
import {useUser} from "features/hooks/useUser";
import { useState } from "react";
const Profile = function(): React.JSX.Element {

const {user,loading} = useUser();
    

    if(loading) {
        return <div> Loading ....</div>
    }
    return (

        <>

         <h1>Hello {user.firstName} {user.lastName}</h1> 

        </>
    )
}

export default Profile;