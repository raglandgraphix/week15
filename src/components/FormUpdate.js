import React from "react";

export default function FormUpdate(props){
    const { onUpdateClicker, userId } = props; 

    const userUpdate = async(e)=>{
        e.preventDefault();
        let updatedName = document.querySelector(`#updateName${userId}`);
        let updatedTel = document.querySelector(`#updateTel${userId}`);
        
        // console.log(`myName is${updatedName} and my Telephone is${updatedTel}`);
        const updatedData = {
            name:updatedName.value,
            telephone:updatedTel.value,
            id:userId
        }
        onUpdateClicker(updatedData);
        updatedName.value='';
        updatedTel.value='';
    }

    return(
         <form>
              <label>Name</label><input id={`updateName${userId}`} type='text' val=''></input>
              <label>Telephone</label><input id={`updateTel${userId}`} type='tel'></input>
              <button onClick={userUpdate} >Update</button>
            </form> 

    )
}