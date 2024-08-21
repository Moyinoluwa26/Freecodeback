import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';


export default function Lists({ finalList }) {
    return (
        <div>
            <div className=' flex flex-col items-center p-4 mx-auto w-full'>
                <h2 className='text-4xl font-bold text-gray-800 mb-12 '>Recipes </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 mx-9 '>
                    {
                        finalList && finalList.length > 0 ?
                            finalList.map(recipes =>
                                <Link href={`/recipe-list/${recipes.id}`} key={recipes.id}>
                                    <Card>
                                        <CardContent>
                                            <div className='bg-white rounded-md mt-5 overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all'>
                                                <div className='w-full aspect-w-16 aspect-h-8  sm:h-80 '>
                                                    <img src={recipes.image} className='object-cover h-full' alt={recipes.name} />
                                                </div>
                                                <div >
                                                    <CardHeader className=" h-24">
                                                        <CardTitle className="mx-auto ">{recipes.name}</CardTitle>
                                                    </CardHeader>
                                                    <CardFooter className="flex flex-row justify-between">
                                                        <div className='text-lg text-gray-600'>Rating : {recipes.rating}</div>
                                                        <div className='text-lg text-gray-600'>{recipes.cuisine}</div>
                                                    </CardFooter>

                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                            : null
                    }
                </div>
            </div>
        </div>
    )
}
