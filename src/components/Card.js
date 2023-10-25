import React from 'react'

export default function Card(props) {
  return (
    <article className='card'>
      <img src={props.data.image} alt={props.data.title} />
      <div className="card-content">
        <div className="title-price">
          <h3>{props.data.title}</h3>
          <p>{props.data.price}</p>
        </div>
        <p className='card-description'>{props.data.description}</p>
        <p className='order-delivery'>Order a delivery</p>
      </div>
    </article>
  )
}
