import React from 'react'
import './Homemainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BatchList from './Batchlist'
import NDACoaching from './NDACoaching/NDACoaching'
import ImageComponent from './components/ImageComponent'
import FeatureSection from './components/FeaturesSection'
import Footer from './Footer/Footer'

function Homemainbar() {
  const user = useSelector((state) => state.currentuserreducer);
  const mentor = useSelector((state) => state.currentmentorreducer); // Added mentor selector
  const location = useLocation();
  const navigate = useNavigate();
  const batchlist = useSelector((state) => state.batchreducer);

  const checkauth = () => {
    if (mentor === null) {
      alert("Login as a mentor to add a batch");
      navigate("/AuthMentor"); // Navigate to mentor auth page
    } else {
      navigate("/Addbatch");
    }
  }

  return (
    <>
    {/* <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Batches</h1>
        ) : (
          <h1>All Batches</h1>
        )}
        {mentor && ( // Check if mentor is logged in
          <button className="ask-btn" onClick={checkauth}>Add batch</button>
        )}
      </div>
      <div>
        {batchlist.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{batchlist.data.length} batches</p>
            <BatchList batchlist={batchlist.data} />
          </>
        )}
      </div>
    </div> */}

    {/* Home page */}
      <ImageComponent/>
    <NDACoaching/>
    <FeatureSection/>
    <div className="flex m-2 py-3 w-90vw
    h-[60vh]  bg-gray-300 p-3 rounded-md shadow-md ">
      <div className="player">
        <iframe src="https://www.youtube.com/embed/8JfDAm9y_7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
      </div>
      <div className="leftside">
        <h1>Why choose us?</h1>
        <p>Our platform is designed to help you grow and learn. We provide you with the best learning experience possible.</p>
        <div className="button">Explore</div>
      </div>
    </div>

    <section>
      <h2>kj fladf l jf</h2>
      <p> lakjfe ldfja fdkfja kdsjfdfiefjapidfdskfj kfd fkdfj fl;j</p>
      <div className="cards  grid grid-row-3 grid-flow-col gap-4">
      <article className="flex flex-col items-start px-6 py-7 bg-sky-50 rounded-lg max-w-[360px]">
      <h2 className="text-2xl font-semibold leading-none text-neutral-800">
        PIQ FORM
      </h2>
      <p className="mt-6 text-sm font-medium leading-5 text-neutral-500">
        Use Physics Wallah's detailed study materials that
        <br />
        simplify complex ideas into easily understandable
        <br />
        language
      </p>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/acc4249c6c37236227e11e9613c3338ee8e21fe8ea92a3cb429333468b999386?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b"
        alt="Physics Wallah study materials illustration"
        className="object-contain self-stretch mt-3.5 w-full aspect-[1.49]"
        loading="lazy"
      />
    </article>
    <article className="flex flex-col px-6 py-7 bg-orange-50 rounded-lg max-w-[368px]">
      <h2 className="self-start text-2xl font-semibold leading-none text-neutral-800">
        Reference Books
      </h2>
      <p className="mt-5 text-sm font-medium leading-5 text-neutral-500">
        Our experts have created thorough study materials
        <br />
        that break down complicated concepts into easily
        <br />
        understandable content
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/787ce111fe2f3080906fe63ff4fe2839c301affca9a26725b21e78ec7eec047f?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b"
        className="object-contain mt-5 w-full aspect-[1.49]"
        alt="Reference books illustration"
      />
    </article>
    <article className="flex flex-col items-start px-6 py-7 bg-emerald-50 rounded-lg max-w-[360px]">
      <h2 className="text-2xl font-semibold leading-none text-neutral-800">
        Important Documents
      </h2>
      <p className="mt-2.5 text-sm font-medium leading-5 text-neutral-500">
        Unlock academic excellence with Physics Wallah's <br />
        NCERT Solutions which provides you step-by-step <br />
        solutions
      </p>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa526c296c3d077e9ce6a9a899f0a0fadff18ac764b48c2614b47e47519f6270?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b"
        alt="Physics Wallah NCERT Solutions"
        className="object-contain self-stretch mt-1.5 w-full aspect-[1.49]"
        loading="lazy"
      />
    </article>
    <article className="flex flex-col px-6 py-7 bg-violet-50 rounded-lg max-w-[368px]">
      <h2 className="self-start text-2xl font-semibold leading-none text-neutral-800">
        Previous PPDT Question
      </h2>
      <p className="mt-5 text-sm font-medium leading-5 text-neutral-500">
        Our experts have created thorough study materials
        that break down complicated concepts into easily
        understandable content
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/787ce111fe2f3080906fe63ff4fe2839c301affca9a26725b21e78ec7eec047f?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b"
        className="object-contain mt-5 w-full aspect-[1.49]"
        alt="Study materials visualization"
      />
    </article>
    <article className="flex flex-col items-start px-6 py-7 rounded-lg bg-slate-50 max-w-[360px]">
      <h2 className="text-2xl font-semibold leading-none text-neutral-800">
        Preparation Tips
      </h2>
      <p className="mt-2.5 text-sm font-medium leading-5 text-neutral-500">
        Unlock academic excellence with Physics Wallah's
        <br />
        NCERT Solutions which provides you step-by-step
        <br />
        solutions
      </p>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa526c296c3d077e9ce6a9a899f0a0fadff18ac764b48c2614b47e47519f6270?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b"
        alt="Illustration of Physics Wallah's NCERT Solutions"
        className="object-contain self-stretch mt-1.5 w-full aspect-[1.49]"
      />
    </article>
      </div>
    </section>

    <section>cousers</section>
    <section>FAQ's</section>

      <Footer/>
    </>
  )
}

export default Homemainbar;
