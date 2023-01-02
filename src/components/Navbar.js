function Navbar() {
    return (
    <div className="burgerNav">
  <nav class="navbar">
      <div class="navbar-container container">
      <h1 class="logo">MENDOWEBX</h1>
        <input type="checkbox" name="" id=""/>
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
          <ul class="menu-items">
              <li><a href="#home">INICIO</a></li>
              <li><a href="#about">NOSOTROS</a></li>
              <li><a href="#contact">CONTACTO</a></li>
              <li><a href="#blog">BLOG</a></li>
          </ul>
          
      </div>
  </nav>
    </div>
    );
  }
  
  export default Navbar;