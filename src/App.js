import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnavbaar/Newnav';
import Signup from './components/signup_sign/Signup';
import Sign_in from './components/signup_sign/Sign_in';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Newnav />
    <Routes>
      <Route path='/' element={<Maincomp />} />
      <Route path='/login' element={<Sign_in />} />
      <Route path='/register' element={<Signup />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
