import React from 'react'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className='bg-[#182237] rounded-lg px-4'>
      <div className='mt-4'>
        <h1 className='font-semibold text-[#b7bac1]'>Latest Transactions</h1>
      </div>

      <div className='mt-2'>
        <table className='w-full'>
          <thead>
          <tr>
            <td className='p-2'>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td className='flex items-center gap-2 py-3'>
                <Image className='rounded-4xl' src= '/noavatar.png' alt='user-image' height={30} width={30} />
                <span>Sharad Ghimire</span>
              </td>
              <td><span>Completed</span></td>
              <td>14.0001</td>
              <td>$30000</td>
            </tr>
          </tbody>

          <tbody>
            <tr> 
              <td className='flex items-center gap-2  py-3'>
                <Image className='rounded-4xl' src= '/noavatar.png' alt='user-image' height={30} width={30} />
                <span>Sharad Ghimire</span>
              </td>
              <td><span>pending</span></td>
              <td>14.0001</td>
              <td>$30000</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td className='flex items-center gap-2  py-3'>
                <Image className='rounded-4xl' src= '/noavatar.png' alt='user-image' height={30} width={30} />
                <span>Sharad Ghimire</span>
              </td>
              <td><span>completed</span></td>
              <td>14.0001</td>
              <td>$30000</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td className='flex items-center gap-2 py-3'>
                <Image className='rounded-4xl' src= '/noavatar.png' alt='user-image' height={30} width={30} />
                <span>Sharad Ghimire</span>
              </td>
              <td><span>canceled</span></td>
              <td>14.0001</td>
              <td>$30000</td>
            </tr>
          </tbody>







        </table>
      </div>
    </div>
  )
}

export default Transactions