import React from "react"
import { graphql } from 'gatsby' 
import Combos from '../src/components/combos'

export default (props) => {
    const pageData = props.data.menusJson
    return(
        <div>
            <header className="bg-gray-800 h-48">
                <div className="mx-auto flex h-full">
                    <h1 className="capitalize text-6xl font-bold text-white mx-auto my-auto"> {pageData.title}</h1>
                </div>
            </header>
            <Combos/>
        </div>
    )
}

export const query =  graphql`
    query($slug: String){
        menusJson(slug: {eq: $slug}) {
            title
            description
            items{
                nombre
                descripcion
                precio
            }
        }
    }
`