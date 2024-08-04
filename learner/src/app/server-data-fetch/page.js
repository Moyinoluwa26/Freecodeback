import Link from 'next/link';
import React from 'react';


async function getData() {
    try {
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json();
        return data.users;
    }
    catch (error) {
        console.log(error.message);
    }
}


export default async function serverside() {
    /*const res = await fetch('https://dummyjson.com/users')
    const data = await res.json()
    console.log(data.users);*/

    const FetchedData = await getData();

    /*fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);*/

    return (
        <div>
            <h1>Server Side Data Fetching </h1>
            <h2>FetchedData</h2>
            <ul>
                {FetchedData && FetchedData.length > 0 ? FetchedData.map(user => (
                    <li key={user.id} className='mt-5 cursor-pointer'>
                        <Link href={`/server-data-fetch/${user.id}`} >{user.firstName}</Link></li>
                )) : null}
            </ul>
        </div>
    )
}
