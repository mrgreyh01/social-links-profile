/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import avatar from '/images/avatar-jessica.jpeg'


function App() {

  const Buttons = ({url, label}) => {

      const handleClick = () => {
        window.open(url, '_blank');
      };

      return(
          <button onClick={handleClick} className=' flex-grow mx-6  bg-grey rounded-lg text-white font-semi text-center hover:bg-green hover:text-offBlack  px-16 py-3 '>{label}</button>
      );
  };

  return (
    <>
     <div className='bg-offBlack h-screen flex justify-center items-center '>
       <div className='bg-darkGrey rounded overflow-visible shadow-lg p-8 mx-4  md:max-w-md w-full'>
          
          <div className="flex flex-col items-center"> 
            <img src={avatar} alt='avatar-img' className='h-20 w-20 rounded-full mb-4' /> 
            <h1 className='text-white text-2xl font-bold mb-2'>Jessica Randall</h1>
            <h4 className='text-green text-center font-regular mb-4'>London, United Kingdom</h4> 
            <p className='text-white text-sm text-center font-regular mb-6'>"Front-end developer and avid reader."</p>
          </div>

          <div className='flex  flex-col '>
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

          

          {/* GitHub
          Frontend Mentor
          LinkedIn
          Twitter
          Instagram */}
       </div>
     </div>
    </>
  )
}

export default App
