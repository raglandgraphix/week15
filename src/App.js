import { useState } from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import FormCreate from './components/FormCreate';
import FormDelete from './components/FormDelete';
import FormUpdate from './components/FormUpdate';

function App() {
 const [usersList, setUsersList] = useState([]); // State for movie data
//set the api URL_ENDPOINT
  const URL_ENDPOINT = 'https://65bcf572b51f9b29e932a58d.mockapi.io/users';
//create a fetch statement
  const getUser = ()=>{
    fetch(URL_ENDPOINT)
        .then(data => data.json())
        .then(data => setUsersList(data))
        .catch(error => {
          console.log('Error. The endpoint you requested failed');
        });
  }
  useEffect(() => {
    getUser();
  }, []); // Empty dependency array to fetch only once

  //function that adds a user to the api
  const handleButtonClick = (e,dataInput) => {
    e.preventDefault();
    fetch(URL_ENDPOINT,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name:dataInput.name,
        telephone:dataInput.tel,
        createdAt:dataInput.createdAt
      })
    }).then(()=>getUser());
  };
//function that allows me to delete a user
  const deleteUser = (id)=>{
    fetch(`${URL_ENDPOINT}/${id}`,{
      method:'DELETE'
    }).then(()=>{getUser()});
  }
//function that updates the user
  const updateUser = (updateData)=>{
    fetch(`${URL_ENDPOINT}/${updateData.id}`,{
      method:'PUT',
      body:JSON.stringify(updateData),
      headers:{
        'content-type':'application/json'
      }
    }).then(()=>{getUser()});
  }
  return (
    <div className="App">
        <FormCreate onClicker={handleButtonClick} />
        {usersList.map((user,index)=>(
          <div className='border' key={index}>
            <img src={user.avatar}/>
            <h3>Name:{user.name}</h3>
            <h3>Telephone:{user.telephone}</h3>
            <h3>ID: {user.id}</h3>
            <FormDelete userId = {user.id} onDeleteClicker={deleteUser} />
            <FormUpdate userId = {user.id} onUpdateClicker={updateUser}/>
          </div>   
          ))}
      </div>
  );

}

export default App;
