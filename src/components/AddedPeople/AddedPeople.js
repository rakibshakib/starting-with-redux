import React from 'react'
import { useSelector } from 'react-redux'
import PeopleCart from '../People/PeopleCart'

const AddedPeople = () => {
    const addedPeoples = useSelector((state) => state.peoples.addedPeople)

    return (
        <div>
            <div>
                {
                    addedPeoples.lengtht === 0 && <p>No people added in the list</p>
                }
            </div>
            <div>
                {
                    addedPeoples.map(item => <PeopleCart item={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default AddedPeople
