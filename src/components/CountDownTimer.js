import React, { useEffect,  useState } from "react"
import '../index.css'
import patternHills from '../images/pattern-hills.svg'
import facebookIcon from '../images/icon-facebook.svg'

 var intervalId;
 var futureDate = new Date("April 22, 2025 15:37:25").getTime();

const CountDownTimer = (props) => {
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let timer = {
       days : '',
       hours : '',
       mintues : '',
       seconds : '',
    }
     

     const [countDown,setCountDown] = useState({timer});
    
  
   useEffect(()=>{
    
    intervalId=setInterval(()=>{
      
      var currentDate = new Date().getTime();

      var remainingDate = futureDate - currentDate;
      
      var d = Math.floor(remainingDate / (1000 * 60 * 60 * 24));
      var hr = Math.floor((remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var min = Math.floor((remainingDate % (1000 * 60 * 60)) / (1000 * 60));
      var sec = Math.floor((remainingDate % (1000 * 60)) / 1000);
      
       timer.days = d;
       timer.hours = hr;
       timer.mintues = min;
       timer.seconds = sec;
       
       setCountDown(timer);

       
      if(remainingDate<0)
      {
         clearInterval(intervalId);
      }
      
      },1000)
   },[timer])


  return (
    <>
    <div className=" flex flex-col gap-4">
      <h1 className="text-center text-2xl font-semibold  my-36  mx-auto">WE'RE LAUNCHING SOON</h1> 
    </div>
    <div className="flex flex-row justify-center relative bottom-[100px]  gap-4">
    
     <div className="flex flex-col items-center gap-2">
        <span className=" border border-red-500 bg-gradient-to-br from-purple-200 to-orange-600 text-transparent bg-clip-text font-bold p-8 rounded text-4xl">
          {countDown.days < 10 ? '0'+countDown.days:countDown.days}
        </span>
        <span className="uppercase tracking-widest">Days</span>
       </div>
     
      <div className="flex flex-col items-center gap-2">
        <span className=" border border-red-500  bg-gradient-to-br from-yellow-200 to-blue-600 text-transparent bg-clip-text font-bold p-8 rounded text-4xl">
        {countDown.hours < 10 ? '0'+countDown.hours:countDown.hours}</span>
        <span className="uppercase tracking-widest">Hours</span>
       </div> 

       <div className="flex flex-col items-center gap-2">
        <span className=" border border-red-500  bg-gradient-to-br from-blue-500 to-pink-600 text-transparent bg-clip-text font-bold p-8 rounded text-4xl">
        {countDown.mintues < 10 ? '0'+countDown.mintues:countDown.mintues}</span>
        <span className="uppercase tracking-widest">Minutes</span>
       </div> 

       <div className="flex flex-col items-center gap-2">
        <span className=" border border-red-500  bg-gradient-to-br from-red-200 to-yellow-600 text-transparent bg-clip-text font-bold p-8 rounded text-4xl">
        {countDown.seconds < 10 ? '0'+countDown.seconds:countDown.seconds}
        </span>
        <span className="uppercase tracking-widest">Seconds</span>
       </div> 
       </div>
    <footer>
      <img src={patternHills} alt="patternHill"></img>
     </footer>
     </>
  )
};

export default CountDownTimer;
