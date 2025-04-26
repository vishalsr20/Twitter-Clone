import React from 'react'
import Image from 'next/image'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
const FeedCard: React.FC = () => {
    return( <div className='border-r-0 border-l-0 border-b-0  border
     transition-all cursor-pointer  border-gray-600 p-4 hover:bg-slate-900'>
        <div className='grid  gap-3 grid-cols-12'>

            <div className='col-span-1'>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqxoBfpLbd2Fkuh-4iXDmqKpYqzgp4CqEb1A2D34Aaw-mJGKqeFg&s=10&ec=72940544" 
                alt="Avatar Image"
                width={50}
                height={50}
                
                />
            </div>
            
            <div className='col-span-11 '>
                <h5>
                    Vishal Rathod
                </h5>
                <p>
                Absolutely, Vishal Jee! Navi Mumbai is home to a vibrant tech ecosystem with a mix of established IT giants, innovative startups, and specialized software firms. Here's an overview of notable software companies in the area:
                </p>

                <div className='flex  justify-between mt-5 text-xl items-center'>
                <div>
                    <BiMessageRounded/>
                </div>
                <div>
                    <FaRetweet/>
                </div>
                <div>
                    <AiOutlineHeart/>
                </div>

                <div>
                    <BiUpload/>
                </div>
                </div>
            </div>

        </div>
    </div>
    )
}
export default FeedCard