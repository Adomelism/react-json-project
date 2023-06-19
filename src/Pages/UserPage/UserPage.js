import { useParams } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';


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
        console.log(data)
        console.log(data.address.geo.lat)
        console.log(data.address.geo.lng)
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
        <div>Email: <a href={`mailto:${user.email}`}>{user.email}</a></div>
        <div>Address: 
          <Link to={`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`}>
              {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </Link> 
        </div>
        <div>Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></div>
        <div>Website: <a href={`https://${user.website}`} target='_blank' rel='noreferrer'>{user.website}</a></div>
        <div>Company: {user.company.name}</div>
      </div>

      <h2>Albums of {user.name}:</h2>
      <ul>
        {user.albums.map(album => <li key={uuid()}>{album.title}</li>)}
      </ul>

      <h3>Posts of {user.name}:</h3>
      <ul>
        {user.posts.map(post => <li key={uuid()}>{post.title}</li>)}
      </ul>
   
    </Container>
  )
}

export default UserPage