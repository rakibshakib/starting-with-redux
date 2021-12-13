import React from 'react'
import { useDispatch } from 'react-redux'
import { addPeople } from '../../redux/actions/peopleAction'
import './Cart.css'

const PeopleCart = ({ item }) => {
    const dispatch = useDispatch()
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
                <button onClick={()=> dispatch(addPeople(item))} className='btn'>Add People </button>
            </div>
        </div>
    )
}

export default PeopleCart
