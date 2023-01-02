import Boton from "../components/Boton";
import Navbar from "../components/Navbar";

function Header() {
  return (
    <div className="headerPadre">
<Navbar/>
  <div className="header">
<h1>
  <span style={{"--start-color":"#02DF71", "--end-color":"#2A6FF1", "--content": "'Diseñar.'", "--delay":"0s"}}>
    Diseñar.
  </span>
  <span style={{"--start-color":"#2A6FF1","animation-name":"a2", "--end-color":"#02DF71", "--content": "'Programar.'", "--delay":"1.5s"}}>
    Programar.
  </span>
  <span style={{"--start-color":"#02DF71", "animation-name":"a3", "--end-color":"#2A6FF1", "--content": "'Publicar.'", "--delay":"3s"}}>
    Publicar.
  </span>
</h1>
<h2>Entrá al universo de las webs, internet te espera.</h2>
  
<Boton/>
  </div>
</div>
  );
}

export default Header;
