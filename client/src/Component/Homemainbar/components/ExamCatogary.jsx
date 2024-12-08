import React from 'react'

const ExamCatogary = () => {
  return (
    <div>
      <section className="courses flex flex-col items-center my-9">
        <h1 className=" font-semibold  text-3xl">Exam Categories</h1>
        <p className="mb-3">
          {" "}
          Currently we are offering only NDA but in future we will be expanding our Domain.
        </p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 m-4">
        <DefenceCategory/>
        <DefenceCategory/>
        <DefenceCategory/>
            
          </div>
        </section>
    </div>
  )
}

export default ExamCatogary
