/* Make a Header component as a child of App. It should return:

a <header> element with the following elements inside:
an <h1> with the name of the blog, passed as a prop */
import blogData from '../data/blog';

function Header() {
  return <h1>{blogData.name}</h1>;
}

export default Header;
