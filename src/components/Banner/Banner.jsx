

const Banner = () => {
     return (
          <div className="flex flex-col gap-10 justify-center items-center h-96 text-center px-4   ">
               <div>
                    <h1 className=" lg:text-5xl md:text-5xl text-3xl font-bold">I Grow By Helping People In Need</h1>
               </div>
               <div>
                    <input className="w-80 p-2 mb-4 bg-sky-50 " type="text" name="" placeholder="Search here...." id="" />
                    <button className="text-xs text-white font-semibold bg-red-500 px-7 py-3 ">Search</button>
               </div>
          </div>
     );
};

export default Banner;