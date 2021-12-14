import React from 'react';
import { useSelector } from 'react-redux';
import RemovePeopleCart from './RemovePeopleCart';

const RemovePeople = () => {
    const removedPeople = useSelector((state) => state.peoples.removedPeople);

    return (
        <div>
             <div>
                {
                    removedPeople.map(item => <RemovePeopleCart item={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default RemovePeople
