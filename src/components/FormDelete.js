import React from "react";

export default function FormDelete(props){
    const { onDeleteClicker, userId } = props; // Destructuring props correctly
    const userToDelete = async () => {
        onDeleteClicker(userId); // Call onDeleteClicker with only the userId
    };
return(
    <>
        <div>
            <button onClick={userToDelete}>Delete User</button>
        </div>
    </>
    )
}