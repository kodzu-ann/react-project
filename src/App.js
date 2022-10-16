import "./App.css";

import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <>
      <div className="App">
        <SearchEngine />
      </div>
      <a
        href="https://github.com/kodzu-ann/react-project.git"
        className="github-link"
        target="_blank"
        rel="noreferrer"
      >
        link to github
      </a>
    </>
  );
}
