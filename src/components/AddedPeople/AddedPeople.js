import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddedPeopleCart from './AddedPeopleCart';

const AddedPeople = () => {
    const addedPeoples = useSelector((state) => state.peoples.addedPeople);
    console.log("the length of added people", addedPeoples.lengtht)
    return (
        <div>
            <div>
                {
                    addedPeoples.lengtht === 0 && (
                        <p>No people added in the list <br />
                        Go to <Link to='/home'>People</Link> page for adding people</p>
                    )
                }
            </div>
            <div>
                {
                    addedPeoples.map(item => <AddedPeopleCart item={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default AddedPeople
