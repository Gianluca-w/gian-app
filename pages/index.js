import PostList from '../components/PostList'

export default function Home(props) {

  return (
    <div>
    
            <PostList posts={props.posts}/>
        
    </div>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  console.log(posts);
  // Pass data to the page via props
  return { props: { posts } }
}