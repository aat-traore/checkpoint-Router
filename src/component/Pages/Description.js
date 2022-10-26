import React from "react";
import { Link ,useParams} from "react-router-dom";
import { Datas } from "./Data";
function Description(){
    let {Titre} = useParams();
    const movies= Datas.filter(el=> el.Titre === Titre )
    return(
        <>
        <div>
        <Link to='/'>
        <button>
            Come Back
        </button>
        </Link>
        <iframe width="300" height="420" src={movies[0].src} title="1899 Bande Annonce VF (2022) Par les créateurs de DARK" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
         <p>{movies[0].Description}</p> 
          </div>
        </>
    )
}
export default Description;