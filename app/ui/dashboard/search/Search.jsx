"use client"

import debounce from 'debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();

  const handleSearch = debounce ((e)=> {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1)

    if(e.target.value) {
      params.set("q", e.target.value)
    }
  
   else {
    params.delete('q')
   }
   replace(`${pathName}?${params}`)
  }, 200)
  


 

  return (
    <div>
         <div className='flex items-center gap-2 bg-[#2e374a] rounded-xl p-1 pl-2'>
            <MdSearch />
            <input className='bg-transparent border-none outline-none' type='text' onChange={handleSearch} placeholder={placeholder}></input>
        </div>

    </div>
  )
}

export default Search