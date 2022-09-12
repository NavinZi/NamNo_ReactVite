import React from 'react'

function Home() {
    return (
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-800 w-[100%]">
            <div className='grid grid-cols-3 gap-20  p-8'>
                <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <img className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                    <h1 className="text-lg">
                        <p className="font-bold ml-3">
                            Article Title
                        </p>
                        <p className='text-left pt-2 text-sm'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate, ad excepturi asperiores voluptates molestias saepe nemo amet, sunt quae eveniet in! Maxime quia id in, voluptate deserunt hic eveniet?
                        </p>
                    </h1>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <img className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <img className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <img className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <img className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <img className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <img className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <img className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </div>
            </div>
        </div>
    )
}

export default Home