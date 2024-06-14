import { NavLink } from "react-router-dom";


const Navbar = () => {
     return (
          <div >
               <nav className=" ">
                    <ul className="flex items-center justify-between  lg:mx-20 md:mx-10 mx-4 my-5   ">

                         <img className="lg:w-36 md:w-30 w-28  lg:h-14 md:h-12 h-8" src={'/Resources/Logo.png'} alt="" />


                         <div className="lg:gap-4 md:gap-4 gap-2  flex">
                              <NavLink
                                   to="/"
                                   className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? 'underline text-red-500' : ""
                                   }
                              >
                                   <span className="font-semibold">   Home</span>
                              </NavLink>
                              <NavLink
                                   to="/donation"
                                   className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? 'underline text-red-500' : ""
                                   }
                              >
                                   <span className="font-semibold">Donation</span>
                              </NavLink>
                              <NavLink
                                   to="/statistics"
                                   className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? 'underline text-red-500' : ""
                                   }
                              >
                                   <span className="font-semibold">Statistics</span>
                              </NavLink>

                         </div>
                    </ul>
               </nav>
          </div>
     );
};

export default Navbar;