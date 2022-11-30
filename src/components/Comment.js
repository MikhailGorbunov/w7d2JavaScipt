const Comment = ({commentObj}) => {



    return (
        <li><a href="{commentObj.url}">{commentObj.name}</a></li>
        // href="https://www.w3schools.com"

    );


}

export default Comment;