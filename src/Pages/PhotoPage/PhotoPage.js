import Container from '../../Components/Container/Container';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';

const PhotoPage = () => {

    const { id } = useParams();

    const [photo, setPhoto] = useState(null)
    const [photoDeleted, setPhotoDeleted] = useState(false)

    useEffect(() => {
        fetch(`${API_URL}/photos/${id}`)
        .then(res => res.json())
        .then(data => {
          setPhoto(data)
        })
      }, [id])

      const deleteHandler = () => {
        fetch(`${API_URL}/photos/${id}`, {
            method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
          setPhotoDeleted(true)
        })
      }


    if (!photo) {
        return '';
    }

  return (
    <Container>
        {photoDeleted ? <h1><Link to={`/photosPage`}>Photo was deleted. See other photos:</Link></h1> : (
            <div>
                <button onClick={deleteHandler}>Delete</button>
                <h1>{photo.title}</h1>
                <img src={photo.thumbnailUrl} alt='art'></img>
            </div>
        )}
     
    </Container>
  )
}

export default PhotoPage