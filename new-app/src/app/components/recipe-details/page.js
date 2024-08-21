import React from 'react'

export default function RecipeDetailsItem({ theDetails }) {
    return (
        <div>
            <div className='p-6 lg:max-w-6xl max--2xl mx-auto '>
                <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='w-full lg:sticky top-0 sm:flex gap2'>
                        <img src={theDetails.image} alt={theDetails.title} className='w-4/5 rounded object-cover h-full object-cover rounded-lg' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-extrabold text-gray-900'> {theDetails.name}</h1>
                    </div>
                    <div className='flex gap-4 flex-wrap mt-5'>
                        <p className='text-2xl font-extrabold text-gray-600'>{theDetails.mealType[0]}</p>
                    </div>
                    <div>
                        <p className='text-xl mt-4 font-semibold text-gray-800'>{theDetails.cuisine}</p>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-2xl font-extrabold text-gray-900'>Ingredients</h2>
                        <ul className='mt-4'>
                            {theDetails.ingredients.map((item) => (
                                <li key={item.index} className='text-lg font-semibold text-gray-800'>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
