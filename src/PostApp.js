import React from "react"
import Post from "./Post"
import data from "../data/data"
import AddPost from "./AddNewPost"

class PostApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts : [],
        }
        this.addPost = this.addPost.bind(this)
        this.addComment = this.addComment.bind(this)
    }
    addPost(title , body){
        const posts = [
            ...this.state.posts,
            {
                id : this.state.posts.length + 1,
                title,
                body,
                comments : []
            }
        ]
        this.setState({posts})
    }
    addComment(commentbody , index , commentname , commentemail){
        const comments = [
            ...this.state.posts[index].comments,
            {
                id : this.state.posts[index].comments.length + 1,
                name : commentname ,
                email : commentemail,
                body : commentbody
            }
        ]
        this.state.posts[index].comments = comments 
        const posts = this.state.posts
        this.setState({posts})
    }
    render(){
        const {posts} = this.state
        const {addPost , addComment} = this
        return(
            <div className="postApp">
                <AddPost onNewPost={addPost} />
                <Post posts={posts} addComment={addComment}/>
            </div>
        )
    }    
}
export default PostApp