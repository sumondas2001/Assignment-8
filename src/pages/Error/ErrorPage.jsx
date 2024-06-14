import { Link } from "react-router-dom";


const ErrorPage = () => {
     return (
          <div>
               <div
                    className="h-screen mx-auto grid place-items-center text-center px-8"
               >
                    <div>
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              className="w-20 h-20 mx-auto"
                         >

                         </svg>
                         <h1
                              className="block  font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mt-10 md:!text-4xl"
                         >
                              Error 404 <br />
                              It looks like something went wrong.
                         </h1>
                         <p
                              className="block antialiased font-sans text-[18px]  leading-relaxed text-inherit mt-8 mb-14 font-normal text-gray-500 mx-auto md:max-w-sm"
                         >
                              Don't worry, our team is already on it.Please try refreshing the page or
                              come back later.
                         </p>
                         <Link to={'/'}>
                              <button
                                   className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 w-full px-4 md:w-[8rem]"
                                   type="button"
                                   data-ripple-light="true"
                              >
                                   Back Home
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default ErrorPage;