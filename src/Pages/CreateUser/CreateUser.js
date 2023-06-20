import { useState, useEffect } from "react";
import Container from "../../Components/Container/Container";
import axios from "axios";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";


const CreateUser = () => {

    const [user, setUser] = useState([])
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [suite, setSuite] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [phone, setPhone] = useState('')
    const [website, setWebsite] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [catchPhrase, setCatchPhrase] = useState('')
    const [bs, setBs] = useState('')
    const [createUser, setCreateUser] = useState(false)

    useEffect(() => {
        axios.get(`${API_URL}/users`).then((res) => {
          setUser(res.data[0].id);
        });
      }, []);

    const nameHandler = (event) => setName(event.target.value)
    const usernameHandler = (event) => setUsername(event.target.value)
    const emailHandler = (event) => setEmail(event.target.value)
    const streetHandler = (event) => setStreet(event.target.value)
    const suiteHandler = (event) => setSuite(event.target.value)
    const cityHandler = (event) => setCity(event.target.value)
    const zipcodeHandler = (event) => setZipcode(event.target.value)
    const latHandler = (event) => setLat(event.target.value)
    const lngHandler = (event) => setLng(event.target.value)
    const phoneHandler = (event) => setPhone(event.target.value)
    const websiteHandler = (event) => setWebsite(event.target.value)
    const companyNameHandler = (event) => setCompanyName(event.target.value)
    const catchPhraseHandler = (event) => setCatchPhrase(event.target.value)
    const bsHandler = (event) => setBs(event.target.value)

    const createUserHandler = (event) => {
        event.preventDefault();
        setCreateUser(true);
        fetch(`${API_URL}/users`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                username,
                email,
                address: { street: street, city: city, suite: suite, zipcode: zipcode, geo: { lat: lat, lng: lng } },
                phone,
                website,
                company: { name: companyName, catchPhrase, bs },
                userId: Number(user),
                

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

    }
    
    

  return (
    <Container>

        {createUser ? <h1><Link to={`/usersPage`}>User was created. See list of users:</Link></h1> : (

<form onSubmit={createUserHandler}>
<div className="form-control">
    <label htmlFor="name">name:</label>
    <input onChange={nameHandler} value={name} type='text' id='name' name='name'></input>
</div>

<div className="form-control">
    <label htmlFor="username">username:</label>
    <input onChange={usernameHandler} value={username} type='text' id='username' name='username'></input>
</div>

<div className="form-control">
    <label htmlFor="email">email:</label>
    <input onChange={emailHandler} value={email} type='email' id='email' name='email'></input>
</div>

<div className="form-control">
    <h4>Address:</h4>
    <label htmlFor="street">street:</label>
    <input onChange={streetHandler} value={street} type='text' id='street' name='street'></input>
</div>

<div className="form-control">
    <label htmlFor="suite">suite:</label>
    <input onChange={suiteHandler} value={suite} type='text' id='suite' name='suite'></input>
</div>

<div className="form-control">
    <label htmlFor="city">city:</label>
    <input onChange={cityHandler} value={city} type='text' id='city' name='city'></input>
</div>

<div className="form-control">
    <label htmlFor="zipcode">zipcode:</label>
    <input onChange={zipcodeHandler} value={zipcode} type='number' id='zipcode' name='zipcode'></input>
</div>

<div className="form-control">
    <h4>Geo:</h4>
    <label htmlFor="lat">lat:</label>
    <input onChange={latHandler} value={lat} type='number' id='lat' name='lat'></input>
</div>

<div className="form-control">
    <label htmlFor="lng">lng:</label>
    <input onChange={lngHandler} value={lng} type='number' id='lng' name='lng'></input>
</div>

<div className="form-control">
    <label htmlFor="phone">phone:</label>
    <input onChange={phoneHandler} value={phone} type='phone' id='phone' name='phone'></input>
</div>

<div className="form-control">
    <label htmlFor="website">website:</label>
    <input onChange={websiteHandler} value={website} type='text' id='website' name='website'></input>
</div>

<div className="form-control">
    <h4>Company:</h4>
    <label htmlFor="CompanyName">name:</label>
    <input onChange={companyNameHandler} value={companyName} type='text' id='CompanyName' name='CompanyName'></input>
</div>

<div className="form-control">
    <label htmlFor="catchPhrase">catch phrase:</label>
    <input onChange={catchPhraseHandler} value={catchPhrase} type='text' id='catchPhrase' name='catchPhrase'></input>
</div>

<div className="form-control">
    <label htmlFor="bs">bs:</label>
    <input onChange={bsHandler} value={bs} type='text' id='bs' name='bs'></input>
</div>



<input type='submit' value='create new user'></input>
</form>

        )}
       
    </Container>
  )
}

export default CreateUser