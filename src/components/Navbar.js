import Fox from "../assets/LogoFox.png";

// function Navbar() {
//     return (
//     <div className="burgerNav">
//   <nav class="navbar">
//       <div class="navbar-container container">
//       <h1 class="logo"><img class="fox" src={Fox} alt="Logo mendowebx"/>MENDOWEBX</h1>
//         <input type="checkbox" name="" id=""/>
//           <div class="hamburger-lines">
//               <span class="line line1"></span>
//               <span class="line line2"></span>
//               <span class="line line3"></span>
//           </div>
//           <ul class="menu-items">
//               <li><a href="#home">INICIO</a></li>
//               <li><a href="#about">NOSOTROS</a></li>
//               <li><a href="#contact">CONTACTO</a></li>
//               <li><a href="#blog">BLOG</a></li>
//           </ul>
          
//       </div>
//   </nav>
//     </div>
//     );
//   }
  
//   export default Navbar;

  function Navbar() {
    return (
    <div className="burgerNav">
      <h1 class="logo"><img class="fox" src={Fox} alt="Logo mendowebx" width="30"/> MENDOWEBX</h1>
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