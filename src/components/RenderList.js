import React from 'react';
const products  =[
{title: "Shoe", id:1},
{title:"iphone13", id:2},
{title:"Rice", id:3},
{title:"Perfume", id:4}
]

const productList = products.map(product =>
    <li key ={product.id}>
        {product.title}
    </li>
)
const RenderList = () => {
  return (
    <div>RenderList
        {productList}
    </div>
  )
}

export default RenderList