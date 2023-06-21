import Container from '../../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';

const CommentsPage = () => {

  const [comments, setComments] = useState([])

useEffect(() => {
  fetch(`${API_URL}/comments`)
  .then(res => res.json())
  .then(data => setComments(data))

 
}, [])


  return (

    <Container>
        <ul>
          {comments.map(comment => <li><Link to={`/comments/${comment.id}`}>{comment.name}</Link></li>)}
        </ul>
    </Container>
  )
}

export default CommentsPage