import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Mobiles from './components/Mobiles';
import SignUp from './components/SignUp';
import Cup from './components/Cup';
import SingleBar from './components/SingleBar';
import SingleCup from './components/SingleCup';
import SignIn from './components/SignIn'
function App() {
  return (
   <div>
    
     <NavBar/> 
       <Routes>
     <Route path="/" element={<><Mobiles/> <Cup/></>}></Route>
        <Route path="/mobiles/:id" element={<SingleBar/>}></Route>
        <Route path="/cups/:id" element={<SingleCup/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
     </Routes>
 
  {/* <h1 id="tit">ICE STONE</h1>
  <h3 id="tit">LIFE IS LIKE ICE CREAM,ENJOY IT BEFORE IT MELTS</h3> */}
    </div>
  );
}

export default App;
