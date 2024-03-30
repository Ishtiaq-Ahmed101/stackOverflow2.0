import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import RenderTag from '../RenderTag';
const hotQuestions = [
  {_id:'1' , title: 'How Do I Use express as a custom server in next.js'},
  {_id:'2' , title: 'Cascading Deltes in SqlAlchemy?'},
  {_id:'3' , title: 'How to perfectly Center a Div with Tailwind Css?'},
  {_id:'4' , title: 'Best Practices for data fetching in a Next.js application with serve-Side (SSR)?'},
  {_id:'5' , title: 'Redux toolkit Not Updating state as expected'},
];

const popularTags = [
  {_id:"1", name: "javascript", totalQuestions:5 },
  {_id:"2", name: "react", totalQuestions:4 },
  {_id:"3", name: "next", totalQuestions:5 },
  {_id:"4", name: "vue", totalQuestions:3 },
  {_id:"5", name: "reduc", totalQuestions:10 },
]

const RightSideBar = () => {

  return (
    <section className='background-light900_dark200 light-border sticky right-0 top-0 h-screen  w-[350px] flex flex-col gap-6 p-6 pt-36 justify-between overfowl-y-auto shadow-light-300 dark:shadow-none max-xl:hidden custom-scrollbar   '>
    <div>
    <h3 className='h3-bold text-dark200_light900 '> Top Questions</h3>
    <div className='flex mt-7 w-full flex-col gap-[30px]'>
    {hotQuestions.map((question)=>{
      return(
      <Link
      href={`/question.${question._id}`}
      key={question._id}
      className='flex cursor-pointer items-center justify-between gap-7  '
      >
        <p className='body-medium text-dark500_light700'>{question.title}</p>
        <Image
        src="/assets/icons/chevron-right.svg"
        alt='chevron right'
        width={20}
        height={20}
        className='invert-colors'
        />
      </Link>
    )})}
    </div>
    </div>
    <div className='mt-16'>
    
    <h3 className='h3-bold text-dark200_light900 '> Popular Tags</h3>
    <div className='mt-7 flex flex-col gap-4 '>
      {popularTags.map((tag)=>{
        return(
          <RenderTag
          key={tag._id}
          _id={tag._id}
          name={tag.name}
          totalQuestions={tag.totalQuestions}
          showCount
          />

        )
      })}

    </div>
    </div>
    </section>
  )
}

export default RightSideBar