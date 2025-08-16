import './App.css';
import Navbar from './Navbar/Navbar';
import Introduction from './Introduction/Introduction';
import CustomerSay from './CustomerSay/CustomerSay';
import Suggest from './Suggest/Suggest';
import Highlights from './Highlights/Highlights';
import Footer from './Footer/Footer';
/* import {Routes , Route} from 'react-router-dom'; */

function App() {
  return (
    <>

    <Navbar/>
    <Introduction/>
    <h1 style={{textAlign:'center' , marginTop:'60px'}}>What Our Users Say</h1>
    <CustomerSay/>
    <Suggest/>
    <Highlights/>
    <Footer/>
    
{/*     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/recipes' element={<Recipes/>} />
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/about' element={<About/>} />
    </Routes> */}
    </>
  );
}

export default App;
