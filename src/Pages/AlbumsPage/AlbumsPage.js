import { useState, useEffect } from 'react';
import Container from '../../Components/Container/Container';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AlbumsPage = () => {

  const [albums, setAlbums] = useState([])

  useEffect(() => {

  //   fetch(API_URL + '/albums?_expand=user')
  //   .then(res => res.json())
  //   .then(data => {
  //     setAlbums(data)
  // }) 

      axios.get(`${API_URL}/albums?_expand=user`)
      .then(res => setAlbums(res.data))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <Container>
      <Link to='/albums/create'>Create a new album</Link>

      {albums.map(album => (
        <Link key={album.id} to={`/albums/${album.id}`}>
            <h1>ID: {album.id} Title: {album.title}</h1>
            <h2>Author: {album.user.name}</h2>
            {/* <img src={album.photos[0].thumbnailUrl} alt='album'></img> */}
        </Link>
      ))}
    </Container>
  )
}

export default AlbumsPage