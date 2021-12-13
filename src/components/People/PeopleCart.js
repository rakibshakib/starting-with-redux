import React from 'react'
import './Cart.css'

const PeopleCart = ({ item }) => {
    return (
        <div className='people-cart'>
            <figure className='cart-img'>
                <img src={item?.image} alt="" />
            </figure>
            <div>
                <h4>Name: {item?.first_name} {item?.last_name}</h4>
                <h5>Email: {item?.email}</h5>
                <p>Phone: {item?.mobile}</p>
                <p>Amount: $ {item?.budget_amount}</p>
                <button className='btn'>Add People </button>
            </div>
        </div>
    )
}

export default PeopleCart
