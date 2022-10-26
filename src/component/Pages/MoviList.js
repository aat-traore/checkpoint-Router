import React from 'react'
import Movidcard from'./Movidcard';
import { Datas } from "./Data";
import QueryList from './QueryList';
import { useState } from 'react';
import {Link} from'react-router-dom';

export default function MoviList() {
  const[tilte,setTilte] = useState("")
  const [movies,setMovies] = useState(Datas)

  return (
    <>
    <form style={{textAlign:"center", marginTop:25}}>
        <input type="search" name= "search" onChange={(e) => setTilte(e.target.value)} style={{with:150,borderRadius:25,height:50}}/>
    </form>   
    <div style={{background:"black", 
    justifyContent:"space-between",  color:"white"}}>

     {movies.filter((movie)=>
      movie.Titre.toLocaleLowerCase().includes(tilte) 
      ||movie.Titre.toLocaleUpperCase().includes(tilte)

     ).map((el,index) =>(    
        <div key={index}>
            <Movidcard  Titre={el.Titre} PostUrl={el.PostUrl} Description= {el.Description}/>
            <button>
             <Link to={`/description/${el.Titre}`}>More</Link>
          </button>
        </div>
         ))}
    </div>
   <div> <QueryList movies={movies} setMovies={setMovies}/></div> 
    
    
        
        
        </>
  )
}
