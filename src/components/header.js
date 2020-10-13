import React from "react";
import ilustracion from '../imgs/fulllog.jpg';

export default () => (
<header className="bg-gray-100">
    <div className="container mx-auto p-2 max-w-4xl flex justify-center items-center">
      <div className="flex-1">
        <h1 className="font-bold text-5xl font-sans sm:font-serif md:font-mono lg:font-sans xl:font-serif">Bienvenidos al Naranjito</h1>
        </div>
           <img src={ilustracion} alt="logo de la empresa" style ={{height:"200px"}}></img>  
        </div>
</header>

)