import './App.css';
import Login from './Components/Login';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='home' element={<Login/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/*' element="Error"/>
    </Routes>

    </>
  );
}

export default App;
