import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      Hello Ingress Academy
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/about"  element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
