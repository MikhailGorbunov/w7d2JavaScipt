import Comment from "./Comment";
// import './FilmList.css';


const FilmList = ({allFilms}) => {

    const filmNodes = allFilms.map((comment) => {
        return <Comment key={comment.id} commentObj={comment}/>

    }); 

    return (
        <>
        <ul>
            {filmNodes}
        </ul>
        </>
    )


}

export default FilmList;