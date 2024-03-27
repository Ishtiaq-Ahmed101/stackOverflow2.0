"use client"
import React from 'react'
import { Button } from '../ui/button'
import { HomePageFilters } from '@/constants/filters'
const HomeFilters = () => {
    const active ="Frequent";
  return (
    <div className='mt-10 flex-wrap gap-3 md:flex hidden'>

        {HomePageFilters.map((item)=>{
            return(
                <Button key={item.value} onClick={()=>{}}
                className={`body-medium rounded-lg px-6 py-3 shadow-none capitalize ${active === item.value ? 'bg-primary-100 text-primary-500': 'bg-light-800 text-light-500'} `}
                >
                {item.name}
            </Button>
            )
          
        })}
    </div>
  )
}

export default HomeFilters