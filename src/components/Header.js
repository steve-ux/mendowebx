import Boton from "../components/Boton";
import Navbar from "../components/Navbar";
import Videoloop from "../assets/tv-pixel.mp4";
import Flecha from "../assets/Arrow-down.png";

function Header() {
  return (
    <div className="headerPadre">
       <video className="video" autoPlay loop muted>
      <source src={Videoloop} type="video/mp4" />
      </video>
<Navbar/>
  <div className="header">
<h1>
  <span style={{"--start-color":"#02DF71", "--end-color":"#02DF71", "--content": "'Diseñar.'", "--delay":"0s"}}>
    Diseñar.
  </span>
  <span style={{"--start-color":"#02DF71","animation-name":"a2", "--end-color":"#02DF71", "--content": "'Programar.'", "--delay":"1.5s"}}>
    Programar.
  </span>
  <span style={{"--start-color":"#02DF71", "animation-name":"a3", "--end-color":"#02DF71", "--content": "'Publicar.'", "--delay":"3s"}}>
    Publicar.
  </span>
</h1>
<h2 style={{"visibility":"hidden"}}>.</h2>
  
<Boton/>
<div className="divFlecha">
<img src={Flecha} alt="Imagen flechas" width="50" className="flecha"/>
</div>
  </div>
</div>
  );
}

export default Header;
