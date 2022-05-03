import React from 'react';
import blogData from '../data/blog';
import Header from '../components/Header';
import About from '../components/About';
import ArticleList from '../components/ArticleList';

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList />
    </div>
  );
}

export default App;
