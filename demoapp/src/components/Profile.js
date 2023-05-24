import { useState } from "react";
import "./Profile.css";
function Profile() {
  const [style, setStyle] = useState({
    bgColor: "white",
    color: "black",
    title:"Check to Switch to Dark Mode"
  });
  const changeTheme = (event) => {
    if (event.target.checked) {
      setStyle({
        bgColor: "black",
        color: "white",
        title:"UnCheck to Switch to Light Mode"
      });
    } else {
      setStyle({
        bgColor: "white",
        color: "black",
        title:"Check to Switch to Dark Mode"
      });
    }
  };
  const [user,setUser]=useState({
    name:"Vishnu",
    email:'vishnu@gmail.com',
    gender:'male',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnACrIBWUA7-q_UwiaGIgE1y_fueUJVYhtsh6guVcv&s'
  })
  return (
    <div>
      <div className="container">
        <div className="left">
          <img
            src={user.img}
            height="100%"
            width="100%"
            alt=""
          />
        </div>
        <div
          className="right"
          style={{ backgroundColor: style.bgColor, color: style.color }}
        >
          <h3>Name : {user.name}</h3>
          <h3>Email : {user.email} </h3>
          <h3>Gender: {user.gender}</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nemo
            iusto ex eaque placeat ratione, commodi beatae voluptatibus,
            expedita, atque obcaecati deleniti nam perspiciatis dolore ea
            necessitatibus? Illum, aliquam porro?
          </p>
          <label htmlFor="">{style.title}</label>
          <input type="checkbox" onChange={changeTheme} />
          <p></p>
        </div>
      </div>
      <div style={{textAlign:'center'}} >
        <button onClick={()=>{
            setUser({
                name:"Vishnu",
                email:'vishnu@gmail.com',
                gender:'male',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnACrIBWUA7-q_UwiaGIgE1y_fueUJVYhtsh6guVcv&s'
              })
        }} >Vishnu</button>
        <button onClick={()=>{
            setUser({
                name:"Shalu",
                email:'Shalu@gmail.com',
                gender:'female',
                img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80'
              })
        }} >Shalu</button>
      </div>
    </div>
  );
}

export default Profile;
