import Container from '../../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';


const UsersPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
    
        fetch(API_URL + '/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)         
        })
    }, [])
    
    
  return (
    <Container>
        <h1>Users:</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                 <Link to ={`/users/${user.id}`}>{user.name}</Link>
                </li>))}
            
        </ul>
    </Container>
  )
}

export default UsersPage