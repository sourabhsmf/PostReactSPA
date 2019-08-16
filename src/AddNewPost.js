import {Component} from 'react';
/**
 * Class for adding new posts
 */
class AddPost extends Component {
  /**
 * Renders the UI
 * @param {object} props for object.
 */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  /**
 * Renders the UI
 * @param {object} e for event object.
 */
  submit(e) {
    const {_title, _body} = this.refs;
    e.preventDefault();
    this.props.onNewPost(_title.value, _body.value);
    _title.value = '';
    _body.value = '';
  }
  /**
 * Renders the UI
 * @return {object} UI object.
 */
  render() {
    return (
      <div className="newPost">
        <button type="button" className="btn btn-default"data-toggle="collapse"
          data-target="#form-add-new-post">
          <span className="glyphicon glyphicon-plus"></span>
        </button>
        <div id="form-add-new-post" className="collapse">
          <form method="get" onSubmit={this.submit}>
            <div className="form-group">
              <label className="col-sm-2">Post Title </label>
              <div className="col-sm-10">
                <input ref="_title" type="text" className="form-control"
                  placeholder="Title goes here"></input>
              </div>
            </div>
            <br/><br/>
            <div className="form-group">
              <label className="col-sm-2">Post Body</label>
              <div className="col-sm-10">
                <textarea ref="_body" className="form-control"
                  row="1" placeholder="Body goes here"></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary"
              style={{margin: 1 + '%' + 50 + '%'}}>POST</button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddPost;
