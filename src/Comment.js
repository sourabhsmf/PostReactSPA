const Comment = ({id, name, email, body}) =>
  <div className="comment" id={id}>
    <h3>{name}</h3>
    <span><i>   by {email}</i></span>
    <p>{body}</p>
  </div>;
export default Comment;
