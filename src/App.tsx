import { Suspense } from 'react';
import './App.css'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Technologies from './Components/Technologies/Technologies';
import type { ITechnologyType } from './TechnologyType';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer';

const dataFetch = async (): Promise<ITechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

const TechnologyPromise = dataFetch();

function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
      <HeroSection />
      <Suspense fallback={<h1>Loading Technology Data</h1>}>
        <Technologies TechnologyPromise={TechnologyPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
