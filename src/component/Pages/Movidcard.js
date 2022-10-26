import React from "react";
const Movidcard=(props)=>{

  return (
      
      <>
      <div style={{border:10}} >
        <h2>{props.Titre}</h2>
        <img src={props.PostUrl} alt='poster img' />
        <p>{props.Description}</p>
      </div>

      </>
        


        
    )
}
export default Movidcard;
