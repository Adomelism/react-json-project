import Container from '../../Components/Container/Container';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';

const PhotosPage = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
    
        fetch(`${API_URL}/photos`)
            .then(res => res.json())
            .then(data => {
                setPhotos(data)     
                // console.log(data)    
        })
    }, [])

  return (
    <Container>
      <div>
        <Link to='/photos/create'>Add a new photo</Link>
      </div>
        {photos.map(photo => <Link to={`/photos/${photo.id}`} key={photo.id}><img src={photo.thumbnailUrl} alt='art'></img></Link>)}
    </Container>
  )
}

export default PhotosPage