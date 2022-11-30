import FilmList from "../components/FilmList";
import FilmHead from "../components/FilmHead";
import FilmButton from "../components/FilmButton";
import { useState } from "react";

import './FilmBox.css';



const FilmBox = () => {
// create the comments data in state 
    const [films] = useState([
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]);
    
    const [bottomTitle] = useState(
        {
        name : "View more upcoming releases >>", 
        url : "https://www.imdb.com/calendar/?region=gb"}
    );


    return (
        <div className="main-container">
        {/* Pass the comments to the list */}
          <FilmHead title="Upcoming Film releases for UK"/>
          <FilmList allFilms={films}/>
          <FilmButton bottomTitle={bottomTitle}/>
        </div>
    );


}

export default FilmBox;