import { useState} from 'react';
import img1 from './assets/gymsite.png'
import img2 from './assets/portfolio.png'
import img3 from './assets/test.png'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Hero() {
    const images = [img1,img2,img3];
   

    const [index, setIndex] = useState(0);
    const length = images.length;
    const handlePrevious = () => {
      setFadeIn(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex === 0 ? length - 1 : prevIndex - 1));
        setFadeIn(true);
      }, 200);
    };
    const handleNext = () => {
      setFadeIn(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
      setFadeIn(true);
    }, 200);
    };

    const [fadeIn, setFadeIn] = useState(true);

   
   
  return (
    <div className="py-10">
        <div className="grid grid-cols-2 gap-5 grid-rows-2">
        <div className=" w-full h-[300px] flex flex-col relative top-4">
            <h1 className="text-4xl font-semibold text-blue-400">Ryan Singleton</h1>
            <h2 className="text-2xl relative left-4 text-blue-300">Aspiring software engineer</h2>
            <p className="flex relative top-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id risus felis.
                 Maecenas eleifend elementum rhoncus. In luctus, sem eu dictum pulvinar,
                 lacus nisi euismod quam, vitae ultricies arcu nulla ut nibh. Cras dignissim
                  est at lorem euismod hendrerit.
            </p>
        </div>
        <div className="bg-slate-300 rounded-xl w-full h-[300px]"></div>
        <div className="justify-center w-full col-span-2 flex flex-row items-center gap-4">
        
        <button className='hover:-translate-x-2  h-fit flex hover:scale-110 duration-300 cursor-pointer' onClick={handleNext}><FaArrowLeft className='size-10'/></button>
        <img src={images[index]} alt={ `Slide ${index}`} className='h-[300px] w-[600px] duration-300 rounded-2xl' 
        style={{opacity: fadeIn ? 1 : 0}}/>
        <button className='hover:translate-x-2  h-fit flex hover:scale-110 duration-300 cursor-pointer' onClick={handlePrevious}><FaArrowRight className='size-10'/></button>
        </div>
    </div>
    </div>
  )
}

export default Hero