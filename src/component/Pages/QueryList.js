import React, { useState } from "react";

const QueryList=({movies, setMovies})=>{

    const [newMovie, setNewMovie] = useState(
        {
            Titre:'',
            PostUrl:'',
            Description:''
        }
    )

    const handleAdd=(e)=>{
        e.preventDefault();
        setMovies([...movies, newMovie]);

        setNewMovie({
            Titre:'',
            PostUrl:'',
            Description:''
        })
    }

    return(
    <>
    <form  className="col-4" style={{textAlign:"center", marginTop:25}} onSubmit={handleAdd}>
        <input  type='text' name="titre" placeholder="titre" onChange={(e)=>setNewMovie({...newMovie, Titre: e.target.value})}/>
        <input type='text' name="url" placeholder="postUrl" onChange={(e)=>setNewMovie({...newMovie, PostUrl: e.target.value})}/>
        <input type='text' name="description" placeholder="description" onChange={(e)=>setNewMovie({...newMovie, Description: e.target.value})}/><br></br>
        <button type="submit" >Ajouter</button>
    </form>
    </>
    )
}
export default QueryList