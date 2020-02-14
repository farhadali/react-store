import React from 'react'
import {ProductConsumer} from "../context"

export default function HomePage() {
    return (
        <div>
            <ProductConsumer>
                {value=>{
                    console.log(value)
                }}
            </ProductConsumer>
        </div>
    )
}
