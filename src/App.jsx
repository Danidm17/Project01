import { Create } from "./components/Create";
import { List } from "./components/List";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>

        </ul>
      </nav>

      <section className="content">
        <List />
      </section>

      <aside className="lateral">
        <Search />
        <Create />
      </aside>

      <footer className="footer">
        &copy; Master en React - <a href="/#">web.es</a>
      </footer>

    </div>


  );
}

export default App;
