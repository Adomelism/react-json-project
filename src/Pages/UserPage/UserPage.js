import { useParams } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';


const UserPage = () => {

    // console.log(useParams())
    const params = useParams();
    // console.log(params.id)
    const id = params.id;

    const [user, setUser] = useState(null)

    useEffect(() => {

      fetch(API_URL + `/users/${id}?_embed=posts&_embed=albums`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
    }, [id])

    if (!user) {
      return '';
    }
    
  return (
    <Container>
      <div>
        <h1>Information about {user.name}</h1>
        <div>Nickname: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
        <div>Company: {user.company.name}</div>
      </div>
    </Container>
  )
}

export default UserPage