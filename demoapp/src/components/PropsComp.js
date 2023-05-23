function ProsComp({isCapable,desc,name,fn,id,gender,img}){
    const card={
        backgroundColor:"white",
        color: "black",
        height:"600px",
        width: "300px",
        padding:'30px',
        margin:"30px",
        boxShadow: "0 0 10px black",
    }
    return (
        <div style={card} >
            <img src={ img} width="100%" height="300px" />
            <h6>{ id}</h6>
            <h2>{ name[0]} </h2>
            <p>Is Available for Joining : { isCapable?"YES":"NO"}</p>
            <h3>{ gender}</h3>

            <h4>{ desc.description}</h4>
            <button onClick={ fn} >Profile</button>
        </div>
    )
}
export default ProsComp;