/* Make an About component as a child of App. It should return:

an <aside> element with the following elements inside:
an <img> element, with the src set to an image passed as a prop
the <img> element should use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215"
the image should also be accessible! Give it an alt attribute of "blog logo"
a <p> element, with the about text for the blog passed in as a prop */

import blogData from '../data/blog';

function About() {
  return (
    <aside>
      <img
        src={
          blogData.image ? blogData.image : 'https://via.placeholder.com/215'
        }
        alt="blog logo"
      ></img>
      {/* {blogData.img ? blogData.img : 'https://via.placeholder.com/215'} */}
      {/* <alt="blog logo"/> */}
      <p>{blogData.about}</p>
    </aside>
  );
}

export default About;
