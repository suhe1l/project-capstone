import React from 'react'
import HomeImage from '../assets/HomeImage.jpg'
import TreadmillMobile from '../assets/treadmill-cropped.png'
import TreadmillDesktop from '../assets/Treadmill.jpg'
import Bike from '../assets/bike.jpg'

const HeroSection = () => {
  return (
    <section>
        <div>
            {/* Background Image */}
            <div className="w-full h-[500px] md:h-[490px] lg:h-[560px] overflow-hidden">
                <img
                    src={HomeImage}
                    alt="Home Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="bg-white container mx-auto px-4 lg:px-0 md:mt-2">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-10 lg:py-14">
                    {/* Left Side: Heading */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-3 lg:mb-0">
                        <h1 className="heading-1">
                            A LIFESTYLE,<br /> <span className="line-through italic text-gray-400">NOT A ROUTINE</span>
                        </h1>
                    </div>

                    {/* Right Side: Paragraph and Buttons */}
                    <div className="lg:w-1/2 text-center lg:text-left lg:mt-3 lg:ml-20">
                        <p className="text-normal">
                            FITtrack is your ultimate fitness companion, allowing you to log workouts, track progress, and discover new exercises effortlessly. Join a community of fitness enthusiasts and take control of your health today!
                        </p>
                        <div className="font-oswald flex justify-center lg:justify-start space-x-4">
                            <button className="btn-black">Get Started</button>
                            <button className="btn-normal">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Track Segment */}
        <div id='about' className="section-style">
            <div className="flex-box">
                {/* Left Side: Copy */}
                <div className="left-div">
                    <p className="font-dmSans text-xl font-bold">Track</p>
                    <h2 className="font-poppins text-4xl font-extrabold my-4">
                    Effortlessly <span className="italic underline text-green-500">Log Your Workouts</span> with Ease
                    </h2>
                    <p className="font-dmSans text-lg lg:text-2xl my-5 font-medium">
                    With FITrack, users can seamlessly log their workouts by entering details such as exercises, sets, reps, and weights. This feature ensures that you stay organized and motivated on your fitness journey.
                    </p>
                    
                    <ul className="font-dmSans text-lg lg:text-2xl space-y-2 mt-4">
                        <li className="list-style">
                            <svg className="green-tick" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Input exercises, sets, reps and weights effortlessly</span>
                        </li>
                        <li className="list-style">
                            <svg className="green-tick" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Stay on top of your fitness goals today</span>
                        </li>
                        <li className="list-style">
                            <svg className="green-tick" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Track your progress and celebrate your achievements</span>
                        </li>
                    </ul>
                </div>

                <div className="lg:max-w-2xl mt-16 lg:mt-0 md:max-w-xl">
                    <img src={TreadmillMobile} alt="Man on treadmill" className="block md:hidden mt-10 max-w-md" />
                    <img src={TreadmillDesktop} alt="Man on treadmill" className="hidden md:block" />         
                </div>
            </div>
        </div>

        {/* Discover Section */}
        <div className="section-style">
            <div className="flex-box">
                <div className="left-div mt-0">
                    <img src={Bike} alt="Man riding bike" />           
                </div>

                <div className="right-div">
                    <h2 className="text-center lg:text-start font-poppins text-4xl font-extrabold my-4 leading-snug">Discover Exercises with <span className="text-green-500 italic">WGER API</span> Integration</h2>
                    <p className="text-center lg:text-start text-normal lg:text-2xl">With our <span className="font-bold">Exercise Search</span> feature, you can effortlessly find a wide variety of exercises tailored to your fitness goals. The <span className="font-bold italic">WGER API</span> integration ensures you have access to detailed exercise descriptions and variations at your fingertips.</p>
                    <div>
                        <button className="btn-normal font-oswald my-0 lg:text-lg">Explore</button>
                    </div>
                </div>
            </div>
        </div>       
    </section>
  )
}

export default HeroSection