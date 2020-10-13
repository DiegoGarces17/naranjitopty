import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Modal, Button } from 'react-materialize';
import M from 'materialize-css'
import banderacol from '../imgs/col.png';
import banderapa from '../imgs/pa.png';
import Contador from '../components/Contador';



const trigger = <Button className="bg-red-600">Agregar +</Button>;

export default (props) =>{

    const pageData = useStaticQuery(graphql`
        {
            allMenusJson{
            edges{
                 node{
                     slug
                    title
                     description
                  }
                }  
            },
            menusJson {
                items {
                    urlimagen
                    descripcion
                    nombre
                    precio
                }
            }
        }
    `);

    return(
        <Fragment >
            <nav className=" justify-between flex-wrap bg-orange-600">  
                <div className="grid grid-cols-12 gap-4 hijo">    
                
                    {
                        pageData.allMenusJson.edges.map((element,index)=>{
                            const{ node } = element;
                            return(
                                <div className="col-span-10 navitem">
                                <h5 className="lg:inline-block text-teal-200 hover:text-white mr-4">
                                {node.title}
                                </h5>
                                </div>
                                
                                
                            )
                        })
                    }
                  <div className="bandera col-span-1"><img src={banderacol} alt="banderita colombia"></img></div>
                  <div className="bandera col-span-1"><img src={banderapa} alt="banderita panama" ></img></div>
                   
                </div>
            </nav>
            <ul className="grid grid-cols-3 gap-4 container">
                {
                    pageData.menusJson.items.map((item, index)=>(
                <li className="bg-white shadow items-center" key={index}>
                    <div className="w-10/12 overflow-x-hidden mx-auto p-4 mb-4 tarjeta" > 
                        <h5>{item.nombre}</h5>
                        <div className="imagentarjeta">
                            <img className="hover:grow hover:shadow-lg mx-auto responsive-image" src={require( '../imgs/' + item.urlimagen) }></img>
                        </div>                           
                        
                        <p className="pt-1 text-gray-900">Precio: ${item.precio } USD</p>
                        <Modal trigger={trigger}>
                        <div className="imagenmodal">
                            <img className="hover:grow hover:shadow-lg mx-auto responsive-image" src={require( '../imgs/' + item.urlimagen) }></img>
                        </div>  
                            
                            <p className="pt-1 text-gray-900">${item.descripcion }</p>
                            <p className="pt-1 text-gray-900">${item.precio }</p>
                            <Contador/>
                        </Modal>
                    </div>
                </li>                     
            ))
                }
            </ul>

        </Fragment>
       );

}
