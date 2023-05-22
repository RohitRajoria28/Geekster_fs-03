import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
