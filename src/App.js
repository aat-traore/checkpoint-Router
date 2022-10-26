import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Description from './component/Pages/Description';
import MoviList from'./component/Pages/MoviList';


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<MoviList/>}></Route>
    <Route path='/description/:Titre' element={<Description/>}></Route>

    </Routes>
  
  </> 

  
   
   )
}

export default App;
