/* Article
Make an Article component as a child of ArticleList. It should return:

an <article> element, with the following elements inside:
an <h3> element displaying the title of the article, passed as a prop
a <small> element displaying the date of the article, passed as a prop
a default value of "January 1, 1970" should be used if no date is passed as a prop
a <p> element displaying the preview of the article, passed as a propArticle
Make an Article component as a child of ArticleList. It should return:

an <article> element, with the following elements inside:
an <h3> element displaying the title of the article, passed as a prop
a <small> element displaying the date of the article, passed as a prop
a default value of "January 1, 1970" should be used if no date is passed as a prop
a <p> element displaying the preview of the article, passed as a prop */

function readEmoji(mins) {
  const time = mins < 30 ? 5 : 10;
  const emoji = mins < 30 ? '☕️' : '🍱';

  let emojis = '';
  for (let i = 0; i < mins; i += time) {
    emojis += emoji;
  }
  return emojis;
}

function Article({ post }) {
  const { title, date, preview, minutes } = post;
  const emoji = readEmoji(minutes);
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date ? date : 'January 1, 1970'} • {emoji} {minutes} read
      </small>
      <p>{preview}</p>
    </article>
  );
}
export default Article;
