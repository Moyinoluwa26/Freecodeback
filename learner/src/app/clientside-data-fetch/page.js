'use client';


import React from 'react';
import useSWR from 'swr';
//import { useEffect, useState } from 'react';
//useEffect hook 
//swr useSWR hook\
//loading state


export default async function serverside() {
    /*const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);


    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://dummyjson.com/users')
                const data = await res.json();
                setData(data.users);
                setLoading(false);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, []);

    if (loading) {
        return <h1 className='text-3xl font-bold '>Loading User! Please wait......</h1>
    }*/

    const fetcher = (...args) => fetch(...args).then(res => res.json());

    const { data, error, loading } = useSWR('https://dummyjson.com/users', fetcher);
    if (loading) {
        return <h1 className='text-3xl font-bold '>Loading User! Please wait......</h1>
    }
    if (error) {
        return <h1 className='text-3xl font-bold text-red-500'>Error! {error.message}</h1>
    }

    //    const Users = await data.users;
    console.log(data);

    return (
        <div>
            <h1>Client Side Data Fetching</h1>
            {/*<ul>
                {Users && Users.length > 0 ? Users.map(user => (
                    <li key={user.id} className='mt-5 cursor-pointer'>
                        <a href={`/clientside-data-fetch/${user.id}`} >{user.firstName}</a></li>
                )) : null}
            </ul>*/}

        </div>
    )
}
