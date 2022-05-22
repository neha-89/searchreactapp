import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
   
    
    return (
        <div className="panel panel-info">
            <div className="panel-heading">
                PostPage
            </div>
            <div className="panel-body">
                <p>
                    Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                </p>
                <h2>JavaScript</h2>
                <Link to ={`/post/Javascript?pagenumber=1`} className="btn btn-success">Details</Link>
                <h2>React</h2>
                <Link to ={`/post/React?pagenumber=2`} className="btn btn-info">Details</Link>
                <h2>Node</h2>
                <Link to ={`/post/Node?pagenumber=3`} className="btn btn-danger">Details</Link>
            </div>
        </div>
    )
}

export default Post;