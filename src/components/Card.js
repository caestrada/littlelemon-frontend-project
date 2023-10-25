import React from 'react'

export default function Card(props) {
  return (
    <article className='card'>
      <img src={props.data.image} alt={props.data.title} />
      <div className="card-content">
        <h3>{props.data.title}</h3>
        <h4>{props.data.price}</h4>
        <p>{props.data.description}</p>
        <p>Order a delivery</p>
      </div>
    </article>
  )
}
