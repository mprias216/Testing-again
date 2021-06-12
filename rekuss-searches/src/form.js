import React, {useState} from 'react';
import './form.css';

//seclector is to get info, dispatch is to run it
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './resultsBarSlice';

function form(props) {
  const {heading} = props;
    this.heading = props.heading;
    const dispatch = useDispatch();
  const [charactersList, searchBar] = useState(0);
  }

//const charactersList = document.getElementById("charactersList");
//const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = hpCharacters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchString) ||
      character.house.toLowerCase().includes(searchString)
    );
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("https://hp-api.herokuapp.com/api/characters");
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

loadCharacters();


  if(this.state.redirect) {
      return <redirect to ={"/darkKnight?info=" + this.state.charactersList}/>;
    }
  return (
    <form class="topnav">
          <h1> {this.heading} </h1>
  <a class="active">Home</a>
  <input type="text" placeholder="Search for a series or movie..">
    <button
    aria-label="Go" 
    onClick={() => dispatch(charactersList())}
    >
  </form>
);

export default form;