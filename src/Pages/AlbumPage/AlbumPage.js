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
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const titleHandler = (e) => setTitle(e.target.value)
  const authorHandler = (e) => setAuthor(e.target.value)

  useEffect(() => {
    fetch(API_URL + `/albums/${id}?_expand=user`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setAlbum(data)
      setTitle(data.title)
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

  const editHandler = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/albums/${id}?_expand=user`, {
      method: 'PATCH',
      body: JSON.stringify({
        title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  }


  const albumsInfo = albumDeleted ? <Link to={`/albumsPage`}>Album was deleted. Back to Albums List.</Link> : (
          <div>
            <h1>Title: {album.title}</h1>
            <h2> Author: {album.user.name}</h2>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={() => setEdit(true)}>Edit</button>
          </div>
      
        
  );


    const albumForm = (
      <form onSubmit={editHandler}>
        <div className='form-control'>
          <label htmlFor='title'>Title: </label>
          <input value={title} onChange={titleHandler} type ='text' id='title' name='title'></input>
        </div>

        <div className='form-control'>
          <label htmlFor='author'>Author ID: </label>
          <input value={author} onChange={authorHandler} type ='number' id='author' name='author'></input>
        </div>

        <button>Save</button>
      </form>
    )

  return (
    <Container>
      {edit ? albumForm : albumsInfo}       
    </Container>
  )
};

          

export default AlbumPage