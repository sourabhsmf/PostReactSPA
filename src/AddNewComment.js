import React from "react";
class AddNewComment extends React.Component{

    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e){
        const {_commentbody , _commentname , _commentemail} = this.refs
        e.preventDefault()
        this.props.addComment(_commentbody.value , _commentbody.id - 1 , _commentname.value , _commentemail.value)
        _commentbody.value = ""
        _commentname.value = ""
        _commentemail.value = ""  
    }
    render(){
        const { postid } = this.props;
        return(
            <form onSubmit={this.submit} style={{paddingLeft: 9 + "%"}}> 
                <div className="form-group">
                    
                    <div className="col-sm-4">
                        <input ref="_commentname" className="form-control" placeholder="Add your comment title"></input>
                    </div>

                    <div className="col-sm-4">
                        <input ref="_commentemail" className="form-control" placeholder="Add your email"></input>
                    </div>

                </div>
                <br/><br/>
                <div className="form-group">
                    <div className="col-sm-8">
                        <textarea ref="_commentbody" id={postid} className="form-control" row="15" col="15" placeholder="Add your comment"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{margin: 1 + '%' + 59 + '%'}}>Comment</button>
                </div>
            </form>
        )
    }
}
export default AddNewComment