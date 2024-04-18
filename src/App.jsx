/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import avatar from '/images/avatar-jessica.jpeg'


function App() {

  const Buttons = ({url, label}) => {

      const handleClick = () => {
        window.open(url, '_blank');
      };

      return(
          <button onClick={handleClick} className=' flex-grow  mx-10  bg-grey rounded-lg text-white font-semi text-center hover:bg-green hover:text-offBlack  px-2 py-3 '>{label}</button>
      );
  };

  return (
    <>
     <div className='bg-offBlack h-screen flex justify-center items-center p-8'>
       <div className='bg-darkGrey rounded overflow-visible shadow-lg py-10 max-w-sm w-full '> 
          
          <div className="flex flex-col items-center"> 
            <img src={avatar} alt='avatar-img' className='h-20 w-20 rounded-full mb-4' /> 
            <h1 className='text-white text-2xl font-bold mb-2'>Jessica Randall</h1>
            <h4 className='text-green text-center font-regular mb-4'>London, United Kingdom</h4> 
            <p className='text-offWhite text-sm text-center font-regular mb-6'>"Front-end developer and avid reader."</p>
          </div>

          <div className='flex  flex-col mx-1'>
            <Buttons url={"https://github.com"} label={"Github"}/>
            <br />
            <Buttons url={"https://frontendmentor.com"} label={"Frontend Mentor"}/>
            <br />
            <Buttons url={"https://linkedin.com"} label={"LinkedIn"}/>
            <br />
            <Buttons url={"https://x.com"} label={"Twitter"}/>
            <br />
            <Buttons url={"https://instagram.com"} label={"Instagram"}/>
          </div>

       </div>
     </div>
    </>
  )
}

export default App


// sm:max-w-lg lg:max-w-xl md:max-w-md 