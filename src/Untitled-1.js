<div className="container">
<ul className="prendas-list">
     {
        pageData.items.map((item, index)=>(
     <li className="bg-white shadow items-center" key={index}>
         <div className="w-10/12 overflow-x-hidden mx-auto p-4 mb-4">
             <a  href="#">
                                             
                 <div className="pt-3 flex items-center justify-between">
                     <p className="">{item.nombre}</p> 
                     <img className="hover:grow hover:shadow-lg max-w-md mx-auto" src={item.urlimagen}></img>
                 </div>
                 <p className="pt-1 text-gray-900">${item.precio }</p>
             </a>
         </div>
     </li>                     
 ))
     }
 </ul>
</div>
export const query =  graphql`
    query($slug: String){
        menusJson(slug: {eq: $slug}) {
            title
            description
            items{
                urlimagen
                nombre
                descripcion
                precio
            }
        }
    }
`