import Link from "next/link"
import { Button } from "@/components/ui/button"
import LocalSearchBar from "@/components/shared/navbar/search/LocalSearchBar"
import Filter from "@/components/shared/Filter"
import { HomePageFilters } from "../../../constants/filters"
import HomeFilters from "@/components/home/HomeFilters"
import NoResult from "@/components/shared/NoResult"
import QuestionCard from "@/components/cards/QuestionCard"
export default function Home() {

  const questions= [
    { 
      _id: '1', 
      title: 'Cascading Deletes in SQAlchemy?', 
      tags: [{ _id: '1', name: 'python' }, { _id: '2', name: 'sql' }], 
      author: { _id: '1', name: 'John Doe', picture: 'profile.jpg' },
      upvotes: 10,
      views : 2,
      answers: [],
      createdAt: new Date('2021-09-01T12:00:00.000Z')
    },
    { 
      _id: '2', 
      title: 'How to center a div', 
      tags: [{ _id: '3', name: 'css' }, { _id: '4', name: 'html' }], 
      author: { _id: '2', name: 'Jane Smith', picture: 'profile.jpg' },
      upvotes: 5,
      views : 3,
      answers: [],
      createdAt: new Date('2021-09-01T12:00:00.000Z')
    },
  ];
  

  return (
    < >
      <div className="flex  w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 ">All Qustions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full ">
          <Button className="primary-graident min-h-[46px] px-4 py-3 !text-light-900 ">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:item-center flex-col">
        <LocalSearchBar
          route='/'
          iconPosition='left'
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"

        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />


      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {
        questions.length > 0 ?
        questions.map((question)=>(
          <QuestionCard 
          key={question._id}
          _id={question._id}
          title={question.title}
          tags={question.tags}
          author={question.author}
          upvotes={question.upvotes}
          views={question.views}
          answers={question.answers}
          createdAt={question.createdAt}
          
          />
        ))
        : <NoResult
          title = "There's no question to show"
          description = "Be the first to break the silence? Ask a question and kickstart the dicussion. our query could be the next big thing others learn from. Get involved!"
          link="/ask-question"
          linkTitle="Ask a Question"
        />}
      </div>
    </>
  )
} 