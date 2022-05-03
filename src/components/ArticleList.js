/* ArticleList
Make an ArticleList component as a child of App. It should return:

a <main> element with the following components inside:
an array of Article components (one component for each post passed down as a prop to ArticleList)
make sure to assign a unique key prop to each Article */

import blogData from '../data/blog'
import Article from "./Article"

function ArticleList() {
   return ( 
   <main>
       {blogData.posts.map((post) => 
        <Article key={post.id} post={post} />)}
    </main>

    )
}
export default ArticleList