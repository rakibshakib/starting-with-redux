import React from 'react';
import { useDispatch } from 'react-redux';
import { removePeople } from '../../redux/actions/peopleAction';

const AddedPeopleCart = ({item}) => {
    const dispatch = useDispatch();
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
                <button onClick={()=> dispatch(removePeople(item))} className='btn'>Remove People</button>
            </div>
        </div>
    )
}

export default AddedPeopleCart
