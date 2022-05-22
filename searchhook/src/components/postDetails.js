import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const PostDetails = () => {
    const params = useParams();
    const location =useLocation();
    
    return (
        <div className="panel panel-info">
            <div className="panel-heading">
                {params.topic} Page
            </div>
            <div className="panel-body">
                <p>
                    {params.topic} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                </p>
                <h2>You are on page number {location.search.split('=')[1]}</h2>
            </div>
        </div>
    )
}

export default PostDetails;