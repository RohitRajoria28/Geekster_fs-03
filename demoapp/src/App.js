import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProsComp from "./components/PropsComp";
import Counter from "./components/Counter";
import Image from "./components/Image";
import Profile from "./components/Profile";
function App() {
  function fn(){
    alert("My Profile");
  }
  return (
    <div className="App">
         <Profile/>
         <hr />
         <Image/>
          <hr />
        <Counter/>
    </div>
  );
}

export default App;
