import { useParams } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';



const AlbumPage = () => {

  const params = useParams();
  const id = params.id
  console.log(id)

  const [album, setAlbum] = useState(null)

  useEffect(() => {
    fetch(API_URL + `/albums/${id}?_expand=user&_embed=photos`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setAlbum(data)
    })
  }, [id])
  
  if (!album) {
    return '';
  }

  return (
    <Container>
      <div>
        <h1>Title: {album.title}</h1>
        <h2> Author: {album.user.name}</h2>
        <img src={album.photos[id].thumbnailUrl} alt="album"></img>
      </div>
    </Container>
  )
}

export default AlbumPage