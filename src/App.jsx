import { useState } from "react";
import { Create } from "./components/Create";
import { List } from "./components/List";
import { Search } from "./components/Search";

function App() {

  const [listState, setListState] = useState([])

  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MyMovies</h1>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="/#">Home</a></li>
          <li><a href="/#">Movie</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contact</a></li>

        </ul>
      </nav>

      <section className="content">
        <List listState={listState} setListState={setListState} />
      </section>

      <aside className="lateral">
        <Search listState={listState} setListState={setListState} />
        <Create setListState={setListState} />
      </aside>

      <footer className="footer">
        &copy; Master en React - <a href="/#">web.es</a>
      </footer>

    </div>


  );
}

export default App;
