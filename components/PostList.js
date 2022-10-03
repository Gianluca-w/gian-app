import Post from "../components/Post";

function PostList({ posts }) {

    return (
        <div>
            <h1>Lista de posts</h1>
            <div className="post-container">
                {posts.map((post) => (
                    <div key={post.id} className={"post"}>
                        <Post {...post}></Post>
                    </div>
                ))}
            </div>
        </div>

    )

}

export default PostList;