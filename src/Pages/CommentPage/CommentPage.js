import Container from '../../Components/Container/Container';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';

const CommentPage = () => {

  const { id } = useParams();

  const [comment, setComment] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/comments/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setComment(data)
    })
  }, [id])

  if (!comment) {
    return '';
  }

  return (
    <Container>
      <h1>Author: {comment.email}</h1>
      <h2>Headline: {comment.name}</h2>
      <h3>Comment: {comment.body}</h3>
    </Container>
  )
}

export default CommentPage