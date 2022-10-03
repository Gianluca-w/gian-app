import React from 'react';

const Post = ({title,body}) => (

<div className={"post"}>
    <h1>{title}</h1>
    <p>{body}</p>
</div>

);
export default Post;