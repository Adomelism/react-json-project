import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import { API_URL } from '../../config';


const CreateComment = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [createdComment, setCreatedComment] = useState(false)
    const [user, setUser] = useState('')

    const nameHandler = (event) => setName(event.target.value)
    const emailHandler = (event) => setEmail(event.target.value)
    const bodyHandler = (event) => setBody(event.target.value)

    useEffect(() => {
        axios.get(`${API_URL}/comments`).then((res) => {
          setUser(res.data[0].id);
        //   setUsers(res.data);
        });
      }, []);

    const createCommentHandler = (event) => {
        event.preventDefault();
        setCreatedComment(true)
        
        const newComment = { postId: user, name, email, body, };
        axios.post(`${API_URL}/comments`, newComment)
        .then(res => console.log(res.data))
    }

  return (
    <Container>

        {createdComment ? <h1><Link to={`/commentsPage`}>Comment created. See list of comments:</Link></h1> : (

            <form onSubmit={createCommentHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Name: </label>
                <input onChange={nameHandler} value={name} type='text' name='name' id='name'></input>
            </div>

            <div className='form-control'>
                <label htmlFor='email'>Email: </label>
                <input onChange={emailHandler} value={email} type='email' name='email' id='email'></input>
            </div>

            <div className='form-control'>
                <label htmlFor='body'>Body: </label>
                <input onChange={bodyHandler} value={body} type='text' name='body' id='body'></input>
            </div>

            <input type='submit' value='create new comment'></input>
            </form>

        )}
        
    </Container>
  )
}

export default CreateComment