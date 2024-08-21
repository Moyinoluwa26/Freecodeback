import React from 'react';
import RecipeDetailsItem from '@/app/components/recipe-details/page';

async function fetchListdetails(url) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${url}`)
        const data = await apiResponse.json();
        return data;

    }
    catch (error) {
        console.log(error.message)
    }
}

export default async function detailsPage({ params }) {
    const details = await fetchListdetails(params?.details);
    console.log(details)
    return (
        <div>
            <RecipeDetailsItem theDetails={details} />
        </div>
    )
}
