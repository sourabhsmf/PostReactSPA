import React from 'react';
import Post from './Post';
import AddPost from './AddNewPost';
/**
 * Class for handling Post app state.
 */
class PostApp extends React.Component {
  /**
 * Submits the form.
 * @param {object} props of react element
 */
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.addPost = this.addPost.bind(this);
    this.addComment = this.addComment.bind(this);
  }
  /**
 * Submits the form.
 * @param {string} title of post
 * @param {string} body of post
 * @return {void} The sum of the two numbers.
 */
  addPost(title, body) {
    const posts = [
      ...this.state.posts,
      {
        id: this.state.posts.length + 1,
        title,
        body,
        comments: [],
      },
    ];
    this.setState({posts});
  }
  /**
 * Submits the form.
 * @param {string} commentbody variable.
 * @param {string} index variable.
 * @param {string} commentname variable.
 * @param {string} commentemail variable.
 * @return {void} The sum of the two numbers.
 */
  addComment(commentbody, index, commentname, commentemail) {
    const comments = [
      ...this.state.posts[index].comments,
      {
        id: this.state.posts[index].comments.length + 1,
        name: commentname,
        email: commentemail,
        body: commentbody,
      },
    ];
    const posts = this.state.posts;
    posts[index].comments = comments;
    this.setState({posts});
  }
  /**
 * Submits the form.
 * @return {void} The sum of the two numbers.
 */
  render() {
    const {posts} = this.state;
    const {addPost, addComment} = this;
    return (
      <div className="postApp">
        <AddPost onNewPost={addPost} />
        <Post posts={posts} addComment={addComment}/>
      </div>
    );
  }
}
export default PostApp;
