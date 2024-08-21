import React from 'react'
import Lists from '../components/recipe-list/page'

const fetchList = async () => {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data = await apiResponse.json();

        return data.recipes;

    }
    catch (error) {
        console.log(error.message)
    }
}



export default async function Recipes() {
    const finalList = await fetchList();
    return (
        <div>
            <Lists finalList={finalList} />
        </div>
    )
}
