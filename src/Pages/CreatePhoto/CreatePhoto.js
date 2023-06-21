import { useState, useEffect } from "react";
import Container from "../../Components/Container/Container";
import axios from "axios";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";

const CreatePhoto = () => {

    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [thumbnailUrl, setThumbnailUrl] = useState('')
    const [createPhoto, setCreatePhoto] = useState(false)

    const titleHandler = (event) => setTitle(event.target.value)
    const urlHandler = (event) => setUrl(event.target.value)
    const thumbnailUrlHandler = (event) => setThumbnailUrl(event.target.value)

    const createPhotoHandler = (event) => {
        event.preventDefault();
        setCreatePhoto(true);

        const newPhoto = { title, url, thumbnailUrl, };
        axios.post(`${API_URL}/photos`, newPhoto)
        .then(res => console.log(res.data))
       }


  return (
    <Container>
        {createPhoto ? <h1><Link to={`/photosPage`}>Photo was created. See list of photos:</Link></h1> : (

            <form onSubmit={createPhotoHandler}>
            <div className="form-control">
                <label htmlFor="title">title: </label>
                <input onChange={titleHandler} value={title} type='text' name='title' id='title'></input>
            </div>

            <div className="form-control">
                <label htmlFor="url">url: </label>
                <input onChange={urlHandler} value={url} type='text' name='url' id='url'></input>
            </div>

            <div className="form-control">
                <label htmlFor="thumbnailUrl">thumbnailUrl: </label>
                <input onChange={thumbnailUrlHandler} value={thumbnailUrl} type='text' name='thumbnailUrl' id='thumbnailUrl'></input>
            </div>

            <input type='submit' value='add new photo'></input>
            </form> 

        )}

   </Container>
  )
}

export default CreatePhoto