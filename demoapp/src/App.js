import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProsComp from "./components/PropsComp";
function App() {
  function fn(){
    alert("My Profile");
  }
  return (
    <div className="App">
       <ProsComp isCapable={false} desc={{description:"This card is of the professional which is traind in JAVASCRIPT"}} name={["swatika"]} fn={fn} id={101} gender="male" img="https://thumbs.dreamstime.com/b/portrait-successful-mature-businesswoman-arms-crossed-confident-business-professional-female-smiling-smart-suit-business-180283728.jpg" />
       <ProsComp isCapable={true} desc={{description:"This card is of the professional which is traind in ANGULAR"}} name={["Ranjan"]} fn={fn} id={103} gender='male' img='https://media.istockphoto.com/id/1138563417/photo/african-american-businessman-smiling-on-grey.jpg?s=612x612&w=0&k=20&c=BA7cBTeFK-y0akeJlQhTT4PZ632Cci7CMjuPhWU3bTc=' />
       <ProsComp isCapable={false} desc={{description:"This card is of the professional which is traind in REACT.js"}} name={["Randeep"]}  fn={fn} id={104} gender='female' img='https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-combed-min-1024x683.jpg' />
    </div>
  );
}

export default App;
