import { Switch, Route, Link, useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  console.log({ history });

  const forward = () => {
    history.goForward();
  }

  const back = () => {
    history.goBack();
  }

  const push = ( url ) => {
    history.push( url );
  }
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
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
                
        <button onClick={() => push('/chanchitofeliz')}>Push</button>
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

