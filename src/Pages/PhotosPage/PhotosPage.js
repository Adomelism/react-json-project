import Container from '../../Components/Container/Container';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
// import { Link } from 'react-router-dom';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { v4 as uuid } from 'uuid';

const PhotosPage = () => {

    const [photos, setPhotos] = useState([])

    const photoElement = photos.map(photo => (
      <Item
      key={uuid()}
      original={photo.url}
      thumbnail={photo.thumbnailUrl}
      width="600"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={photo.thumbnailUrl} alt='' />
      )}
    </Item>
    ))



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
      <Gallery>
            {photoElement}
          </Gallery>


      {/* <div>
        <Link to='/photos/create'>Add a new photo</Link>
      </div>
        {photos.map(photo => <Link to={`/photos/${photo.id}`} key={photo.id}><img src={photo.thumbnailUrl} alt='art'></img></Link>)} */}
    </Container>
  )
}

export default PhotosPage