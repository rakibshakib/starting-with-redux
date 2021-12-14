import React from 'react'

const RemovePeopleCart = ({item}) => {
    return (
        <div>
            <div className='people-cart'>
                <figure className='cart-img'>
                    <img src={item?.image} alt="" />
                </figure>
                <div>
                    <h4>Name: {item?.first_name} {item?.last_name}</h4>
                    <h5>Email: {item?.email}</h5>
                    <p>Phone: {item?.mobile}</p>
                    <p>Amount: $ {item?.budget_amount}</p>
                </div>
            </div>
        </div>
    )
}

export default RemovePeopleCart
