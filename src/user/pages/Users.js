import React from 'react';
import Userslist from '../components/Userslist';

function Users()
{
    const USERS = [
        {id:"u1",
        name:"Ohm Patel",
        image:"https://pbs.twimg.com/profile_images/1188911868863221772/fpcyKuIW_400x400.jpg",
        places: 5
        }
    ];

    return <Userslist items={USERS} />;
}

export default Users;