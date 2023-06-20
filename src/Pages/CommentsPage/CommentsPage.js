import Container from '../../Components/Container/Container';
import { useEffect } from 'react';
import { API_URL } from '../../config';

const CommentsPage = () => {

useEffect(() => {
  fetch(`${API_URL}/comments`)
  .then(res => res.json())
  .then(data => console.log(data))

 
}, [])


  return (

    <Container>
        <div>CommentsPage</div>
    </Container>
  )
}

export default CommentsPage