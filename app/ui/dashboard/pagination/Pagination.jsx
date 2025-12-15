"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import React from 'react'


const Pagination = ({count}) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();
  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page") || 1
  
  const ITEMS_PER_PAGE = 2
  // console.log(typeof(page))

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count

  const handleChangePage = (type)=> {

    type === "prev" ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1)
    replace(`${pathName}?${params}`)


  }

  return (
    <div className='flex justify-between mt-4'>
            <button className='py-1 px-4 cursor-pointer bg-[#68717C] rounded-lg' disabled = {!hasPrev} onClick={()=>handleChangePage("prev")}>Prev</button>
            <button className='py-1 px-4 cursor-pointer bg-[white] text-black rounded-lg' disabled = {!hasNext} onClick={()=>handleChangePage("next")}>Next</button>
        
    </div>
  )
}

export default Pagination