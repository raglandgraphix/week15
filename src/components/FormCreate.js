import React from "react";
import { useState } from "react";
//create the function component
export default function FormCreate({onClicker}){
    const [data,setData]=useState(null);
    //get the values from the form.
    const handleSubmit= async(e)=>{
       // e.preventDefault();
      
        let name = document.querySelector('#name').value;
        let tel = document.querySelector('#tel').value;
        let date = new Date();
        let join = date.toISOString();
        const dataInput = {
            name:name,
            tel:tel,
            createdAt:join
        }
        onClicker(e,dataInput);
    }
return(
<form >
    <label>Name:</label><input id="name" type="text" val=''></input>
    <label>Telephone:</label><input id="tel" type="tel" val=''></input>
    <button  onClick={handleSubmit}>Submit</button>
</form>
)
}


