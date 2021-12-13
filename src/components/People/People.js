import React, { useEffect, useState } from 'react';
import PeopleCart from './PeopleCart';

const People = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch('/people-data.json').then(res => res.json()).then(data => setPeople(data))
    }, [])
    return (
        <div>
            <div>
                {
                    people.map(item=> <PeopleCart item={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default People
