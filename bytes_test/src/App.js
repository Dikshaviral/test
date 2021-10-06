import About from './About';
import './App.css';
import Footer from './Footer-1';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import ReviewSlider from './ReviewSlider';
import Subscribe from './Subscribe';


function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Products/>
     <About/>
     <ReviewSlider/>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
