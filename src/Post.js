import Comment from './Comment';
import React from 'react';
import AddNewComment from './AddNewComment';
/**
 * Class for post object
 */
class Post extends React.Component {
  /**
 * Renders the UI
 * @return {object} UI object.
 */
  render() {
    const {posts, addComment} = this.props;
    return (
      <div>
        {
          posts.length ?
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-title">
                <h1>#{post.id}.{post.title}</h1>
              </div>
              <div className="post-body">
                <p>{post.body}</p>
              </div>
              { post.comments.length ?
                      post.comments.map((comment, i) =>
                        <Comment key={i} {...comment}/>
                      )
                : ''
              }
              <AddNewComment postid={post.id}
                addComment={addComment}/>
            </div>
          ))
          :
            <h1 style={{textAlign: 'center'}}>Create a New Post </h1>
        }
      </div>
    );
  }
}
export default Post;
