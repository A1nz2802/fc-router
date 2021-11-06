import { Switch, Route, Link } from "react-router-dom";

// Link permite actualizar la URL de nuestra aplicación sin refrescar nuestra app
const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" >Inicio</Link>
          </li>
          <li>
            <Link to="/perfil" >Perfil</Link>
          </li>
          
        </ul>
      </nav>
      <section>
        <Switch>
          <Route exact path="/">
            <h1>Inicio</h1>
          </Route>
          <Route exact path="/perfil">
            <h1>Perfil</h1>
          </Route>
          <Route path="*">
            404: ruta no encontrada
          </Route>
        </Switch>  
      </section>
    </div>
  )
}

export default App;

