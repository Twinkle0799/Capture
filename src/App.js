import React from "react";
//import pages
import AboutUs from "./pages/aboutUs"; 
//import Globalstyle
import Globalstyle from './components/globalstyle';

function App()
{
  return(
    <div className="App">
      <Globalstyle/>
      <AboutUs/>
    </div>
  );
}

export default App;