import React, { useState } from "react";
import { Datas } from "./Data";
import FilterList from "./FilterLIst";
const FormSearch=()=>{
const[tilte,setTilte] =useState("")

   return(
    <>
    
    <form style={{textAlign:"center", marginTop:25}}>
        <input type="search" name= "search" onChange={(e) => setTilte(e.target.value)} style={{with:150,borderRadius:25,height:50}}/>
    </form>   
    <div style={{background:"black",marginTop:70, 
    justifyContent:"space-between", justifyItems:"center", color:"white"}}>
     {Datas.filter((Data)=>
      Data.Titre.toLocaleLowerCase().includes(tilte)||Data.Titre.toLocaleUpperCase().includes(tilte)

     ).map((Data,index) =>(    
        <div>
            <FilterList key={index} Titre={Data.Titre} PostUrl={Data.PostUrl} Description= {Data.Description}/>
        </div>
         ))}
        
    </div>
    </>
   )
}
export default FormSearch;