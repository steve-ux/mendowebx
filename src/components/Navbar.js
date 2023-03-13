import Fox from "../assets/LogoFox.png";

  function Navbar() {
    return (
    <div className="burgerNav">
      <h1 class="logo"><img class="fox" src={Fox} alt="Logo mendowebx" width="30"/> PIXELPEAK</h1>
  <input id="toggle" type="checkbox"/>

<label for="toggle" class="hamburger">
  <div class="top-bun"></div>
  <div class="meat"></div>
  <div class="bottom-bun"></div>
</label>

<div class="nav">
  <div class="nav-wrapper">
    <nav>
      <a href="#Inicio">INICIO</a><br/>
      <a href="#Nosotros">NOSOTROS</a><br/>
      <a href="#Contacto">CONTACTO</a><br/>
      <a href="#Blog">BLOG</a>
    </nav>
  </div>
</div>
    </div>
    );
  }
  
  export default Navbar;