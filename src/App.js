import React from "react";
import "./App.css";
import LikeCounter from "./components/LikeCounter";
import Title from "./components/Title";
import ArticleList from "./components/ArticleList";
function App() {
  return (
    <main>
      <Title content="Some Simple Title" />
      <LikeCounter />
      <ArticleList />
    </main>
  );
}
export default App;
