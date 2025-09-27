function Header() {
  return (
    <header>
      <div id="menu-icon" class="menu-icon">
        ☰
      </div>
      <h1>Movies La Molina</h1>
      <nav id="menu" class="hidden">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="contacto.html">Contact</a>
          </li>
          <li>
            <a href="calculadora.html">Calculadora</a>
          </li>
          <li>
            <a href="game.html">Game</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

ReactDOM.render(<Header />, document.getElementById("header"));
