import React from 'react';
import { useSelector } from 'react-redux';
import PeopleCart from './PeopleCart';

const People = () => {
    const peoples = useSelector((state)=> state.peoples.peoples)
    return (
        <div>
            <div>
                {
                    peoples.map(item=> <PeopleCart item={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default People
