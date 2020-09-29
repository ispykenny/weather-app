import React  from 'react';
import { useHistory } from "react-router-dom";


function Form(props) {
  const history = useHistory();
  const getData = async(event) => {
    event.preventDefault();
    let location = document.querySelector('#location').value;
    if(location.includes(" ")) {
      location.split(' ').join('')
    }
    history.push(`${location}`)
  }


  return(
    <div>
      <form className="inputEl" onSubmit={getData}>
        <input type="text" id="location" placeholder="Search City"></input>
        <button>Get weather</button>
      </form>
    </div>
  )
}

export default Form;