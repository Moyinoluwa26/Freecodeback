import React from 'react';




export default async function userDetails
    ({ params }) {

    const res = await fetch(`https://dummyjson.com/users/${params.details}`)
    const data = await res.json();

    return (
        <div>
            <h1>{data.firstName}</h1>
            <h2>{data.lastName}</h2>

        </div>
    )
}
