import Comment from "./Comment"
import React from "react"
import PropTypes from "prop-types"
import AddNewComment from "./AddNewComment"
/*
const Post = ({post : {id, title, body} , comments}) => {
    return( <div className="post" key={id}>
        <div className="post-title">
            <h1>{title}</h1>
        </div>
        <div className="post-body">
            <p>{body}</p>
        </div>
        <div className="post-comments">
            {
                comments.map((comment , i) =>
                    <Comment key={i} {...comment}/>
                )
            }
        </div>
    </div>
    )
}
Post.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired
}
 
export default Post
*/
class Post extends React.Component{
    static propTypes = {
        posts : PropTypes.array.isRequired,    
    }
    static defaultProps = {
        posts : []
    }
    render() {
        const { posts , addComment} = this.props;
        return(
            <div>
                { posts.length &&
                    posts.map((post) => (
                        <div className="post" key={post.id}>
                            <div className="post-title">
                                <h1>#{post.id}.{post.title}</h1>
                            </div>
                            <div className="post-body">
                                <p>{post.body}</p>
                            </div>
                            { post.comments.length && 
                                post.comments.map((comment , i) => 
                                    <Comment key={i} {...comment}/>
                                )
                            }
                            <AddNewComment postid={post.id} addComment={addComment}/>
                        </div> 
                    ))
                }
                { !posts.length && 
                    <h1 style={{textAlign:"center"}}>Create a New Post </h1> 
                } 
            </div>
        )
    }
}
export default Post
