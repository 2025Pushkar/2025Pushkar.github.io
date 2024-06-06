import React from 'react'

function SectionTitle({
    title,
}) {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className='section-title text-2xl text-fourth font-semibold'>{title}</h1>
        <div className='section-line w-60 h-[0.25px] bg-fourth'>
        </div>
    </div>
  )
}

export default SectionTitle


  