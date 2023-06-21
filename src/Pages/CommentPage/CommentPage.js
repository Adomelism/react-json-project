import Container from '../../Components/Container/Container';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';

const CommentPage = () => {

  const { id } = useParams();
  const [comment, setComment] = useState(null)
  const [deleteComment, setDeleteComment] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}/comments/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setComment(data)
    })
  }, [id])

  const deleteHandler = (event) => {
    event.preventDefault();
    setDeleteComment(true);
    fetch(`${API_URL}/comments/${id}`, {
  method: 'DELETE',
});
  }

  if (!comment) {
    return '';
  }

  return (
    <Container>
      {deleteComment ? <h1><Link to={`/commentsPage`}>Comment was deleted. See rest of the comments:</Link></h1> : (
        <div>
          <h1>Author: {comment.email}</h1>
          <h2>Headline: {comment.name}</h2>
          <h3>Comment: {comment.body}</h3>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      

      )}

    </Container>
  )
}

export default CommentPage