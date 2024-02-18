import './App.css';
import Header from '../src/component/cabecera'
import Footer from '../src/component/Footer';
import Alumno from '../src/component/alumnos'
import Profesor from './component/Profesor';

function App() {
  return (
    <>
      <Header></Header>
      <Alumno></Alumno>
      <Profesor></Profesor> 
      <Footer></Footer>
    </>
  );
}

export default App;
