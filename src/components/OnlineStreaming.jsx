import { FaPlay } from "react-icons/fa6";
import { MdGroup, MdHd } from "react-icons/md";


const OnlineStreaming = () => {
    return (
        <div className="py-14"> 
            
            <div className="bg-white rounded-lg dark:bg-slate-700 shadow-xl py-10 px-6">
                <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">

                    {/* Left Side Content */}
                    <div className="text-white max-w-lg">
                        <div className='mb-5 border-l-8 border-pink-700 pl-4'>
                            <h1 className='text-pink-600 text-3xl font-bold'>ONLINE STREAMING</h1>
                        </div>      
                        <p className="text-gray-400 dark:text-white text-lg mb-6">
                            Enjoy your favorite movies and shows in HD and 4K resolution. Join our active community of movie lovers today!
                        </p>
                        <ul className="mb-6 space-y-3">
                            <li className="flex items-center">
                                <span className="bg-pink-500 p-2 rounded-full text-white mr-3">
                                    <MdHd size={24} />
                                </span>
                                <span className="text-lg text-secondary dark:text-white">HD & 4K Streaming</span>
                            </li>
                            <li className="flex items-center">
                                <span className="bg-pink-500 p-2 rounded-full text-white mr-3">
                                    <MdGroup size={24} />
                                </span>
                                <span className="text-lg text-secondary dark:text-white">5M+ Active Members</span>
                            </li>
                        </ul>

                        
                        <button className="flex items-center gap-3 px-5 py-3 bg-pink-500 hover:bg-pink-600 text-lg rounded-lg">
                            <FaPlay size={20} />
                            Watch Now
                        </button>
                    </div>

                    {/* Right Side Image */}
                    <div className="mt-10 lg:mt-0 lg:ml-10">
                        <img
                            src="https://i.ibb.co/JnyRT2c/image.png"
                            alt="Streaming Movie"
                            className="rounded-lg shadow-lg w-full lg:w-[500px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OnlineStreaming;