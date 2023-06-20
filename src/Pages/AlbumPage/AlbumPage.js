import { Link, useParams } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import axios from 'axios';

const AlbumPage = () => {

  const params = useParams();
  const id = params.id
  // console.log(id)

  const [album, setAlbum] = useState(null)
  const [albumDeleted, setAlbumDeleted] = useState(false)

  useEffect(() => {
    fetch(API_URL + `/albums/${id}?_expand=user&_embed=photos`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setAlbum(data)
    })
  }, [id])
  
  if (!album) {
    return '';
  }

  const deleteHandler = () => {
    fetch(`${API_URL}/albums/${id}`, {
        method: 'DELETE',
})
    .then(res => res.json())
    .then(data => {
      setAlbumDeleted(true)
    })
  }



  return (
    <Container>
      {albumDeleted ? <h1><Link to={`/albumsPage`}>Album was deleted. Back to Albums List.</Link> </h1> : (
         <div>
         <h1>Title: {album.title}</h1>
         <h2> Author: {album.user.name}</h2>
         <img src={album.photos[id].thumbnailUrl} alt="album"></img>
       </div>
      ) }
        <button onClick={deleteHandler}>Delete</button>
    </Container>
  )
}

export default AlbumPage