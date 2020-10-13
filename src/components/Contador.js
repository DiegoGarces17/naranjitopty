import React, {useState, Fragment} from 'react';

const Contador = () =>{
   
    const [numero, setNumero] = useState(1);
        const aumentar = () => {
          setNumero(numero+1)
        }
        const disminuir = () => {
       
          if (!(numero-1 < 1)){
            setNumero(numero-1)
          }
          else{
            setNumero(numero)
          }      
          
        }

    return( 
        <Fragment>
            <button onClick={aumentar} className="bg-blue-700">+</button>
            <button onClick={disminuir} className="bg-red-700">-</button>
            <h3> numero de combos {numero}</h3>
            <h3>Total {numero*25}</h3>
        </Fragment>
       
   );
}
export default Contador;