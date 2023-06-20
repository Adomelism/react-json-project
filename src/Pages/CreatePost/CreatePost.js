import Container from "../../Components/Container/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";



const CreatePost = () => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [postCreated, setPostCreated] = useState(false)

    const titleHandler = (event) => setTitle(event.target.value)
    const bodyHandler = (event) => setBody(event.target.value)
    const userHandler = (event) => setUser(event.target.value)
    

    useEffect(() => {
      axios.get(`${API_URL}/users`)
      .then(res => {
        setUser(res.data[0].id)
        setUsers(res.data)
      })
    
    }, [])

    const newPostHandler = (event) => {
        event.preventDefault();
        setPostCreated(true)
        fetch(`${API_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId: Number(user),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

    }
    

  return (
    <Container>
        {postCreated ? <h1><Link to={`/postsPage`}>Post was created. See all posts:</Link></h1> : (

<form onSubmit={newPostHandler}>
<div className="form-control">
    <label htmlFor="title">Title: </label>
    <input value={title} onChange={titleHandler} type='text' id='title' name='title'></input>
</div>
<div className="form-control">
    <label htmlFor="body">Body: </label>
    <textarea value={body} onChange={bodyHandler} id='body' name='body'></textarea>
</div>
<div className="form-control">
    <label htmlFor="user">User: </label>
    <select id='user' name='user' value={user} onChange={userHandler}>
        {users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
    </select>
</div>

<input type='submit' value='Create New Post'></input>

</form>
            
        )}

    </Container>
  )
}

export default CreatePost