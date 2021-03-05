


const Car = (props) => {
    return (
      <div className="carClass">
        
       <img src={props.image}/>
        <h2>
          Tesla  {props.name}, cost £{props.price} available in {props.color} {props.text}
        </h2>
        <img src={props.img}/>
      
      </div>
    );
  };
  export default Car;

  