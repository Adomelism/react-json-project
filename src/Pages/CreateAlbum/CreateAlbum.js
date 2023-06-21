import { useState, useEffect } from "react";
import Container from "../../Components/Container/Container";
import { API_URL } from "../../config";
import axios from "axios";
import { Link } from "react-router-dom";


const CreateAlbum = () => {

    const [title, setTitle] = useState('')
    const [user, setUser] = useState('')
    const [users, setUsers] = useState([])
    const [createAlbum, setCreateAlbum] = useState(false)

    useEffect(() => {
        axios.get(`${API_URL}/users`).then((res) => {
          setUser(res.data[0].id);
          setUsers(res.data);
        });
      }, []);


    const titleHandler = (event) => setTitle(event.target.value)
    const userHandler = (event) => setUser(event.target.value)

    const createAlbumHandler = (event) => {
        event.preventDefault();
        setCreateAlbum(true)

        const newAlbum = { title, userId: Number(user), };
        axios.post(`${API_URL}/albums`, newAlbum)
        .then(res => console.log(res.data))
}
    

    
  return (
    <Container>
        {createAlbum ? <h1><Link to={`/albumsPage`}>Album was created. Check all albums:</Link></h1> : (

<form onSubmit={createAlbumHandler}>
<div className="form-control">
    <label htmlFor="user">User: </label>
    <select onChange={userHandler} value={user} >
        {users.map(user => <option key={user.id}>{user.name}</option>)}
    </select>
</div>

<div className="form-control">
    <label htmlFor="title">title: </label>
    <input onChange={titleHandler} value={title} type='text' name='title' id='title'></input>
</div>

<input type='submit' value='create new album'></input>
</form>

        )}
       
    </Container>
  )
}

export default CreateAlbum