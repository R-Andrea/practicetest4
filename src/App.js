import "./App.css";
import { useState, useEffect } from 'react';
import Cards from "./components/cards";

const App = () => {
  
  const [characters, setCharacters] = useState(null)

  const [isDisabled, setDisabled] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)

  const [lightSabre, setLightSabre] = useState(null)
  const [type, setType] = useState(null)
  const [isLiving, setIsLiving] = useState(false)
  const [email, setEmail] = useState(null)

  useEffect(()=> {
    if (lightSabre && email && type) {
      setBtnDisabled(false)
    }
  }, [lightSabre, email, type, isDisabled])



  function submitForm(e) {
    e.preventDefault()
    let object = {
      "lightsabre": lightSabre,
      "type": type,
      "isLiving": isLiving,
      "email":email
    }

    setDisabled(true) 
    console.log(email)
    fetch("/api/calculate", {
      method: 'Post',
      body: JSON.stringify(object)
    })
    .then(response => {
      return (response.json())})
    .then((data) => setCharacters(data))
    
  }

  return (
    <div className="App">
      <h1>Which Star Wars character are you?</h1>
      {characters? <Cards characters={characters}></Cards> : 
      <form>
        <label>Select the colour of your lightsabre</label>
        <select name="lightsabre" id="lightsabre" onChange={(e) => setLightSabre(e.target.value)} disabled={isDisabled}  required>
          <option value=""></option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <label>Choose your alliance</label>
        <select name="type" id="type" onChange={(e) => setType(e.target.value)} disabled={isDisabled}  required>
          <option value=""></option>
          <option value="Jedi">Jedi</option>
          <option value="Sith">Sith</option>
          <option value="Neither">Neither</option>
        </select>
        <label name="isLiving">I prefer living organisms over robots</label>
        <input type="checkbox" id="isLiving" name="isLiving" value="true" disabled={isDisabled} onChange={(e) => setIsLiving(e.target.value)} required></input>
        {isDisabled ? <input type="email" placeholder="..." disabled value=""></input>:<input type="email" onChange={(e)=> setEmail(e.target.value)} required></input>}
        <button type="submit" disabled={btnDisabled} onClick={submitForm}>Submit</button>
      </form>}
      
    </div>
  );
};

export default App;
