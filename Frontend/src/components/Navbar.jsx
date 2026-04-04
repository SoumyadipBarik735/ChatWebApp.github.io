// import { Link, useNavigate } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore";
// import { LogOut, MessageSquare, Settings, User } from "lucide-react";

// const Navbar = () => {
//   const { logout, authUser } = useAuthStore();
//   const navigate = useNavigate();

//   //under code is for last header(white)
//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <header
//       className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40
//     backdrop-blur-lg bg-base-100/80"
//     >
//       <div className="container mx-auto px-4 h-16">
//         <div className="flex items-center justify-between h-full">
//           <div className="flex items-center gap-8">
//             <Link
//               to="/"
//               className="flex items-center gap-2.5 hover:opacity-80 transition-all"
//             >
//               <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <MessageSquare className="w-5 h-5 text-primary" />
//               </div>
//               <h1 className="text-lg font-bold">Chatty</h1>
//             </Link>
//           </div>

//           <div className="flex items-center gap-2">
//             <Link
//               to={"/settings"}
//               className={`
//               btn btn-sm gap-2 transition-colors

//               `}
//             >
//               <Settings className="w-4 h-4" />
//               <span className="hidden sm:inline">Settings</span>
//             </Link>
//             {/* Under authUser code is correct */}
//             {authUser && (
//               <>
//                 <Link to={"/profile"} className={`btn btn-sm gap-2`}>
//                   <User className="w-5 h-5" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button className="flex gap-2 items-center" onClick={logout}>
//                   <LogOut className="w-5 h-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             )}

//             {/* Under authUser code is correct */}
//             {/* {authUser && (
//               <>
//                 <Link to="/profile" className="btn btn-sm gap-2">
//                   <User className="w-4 h-4" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button
//                   onClick={handleLogout}
//                   className="btn btn-sm gap-2 bg-red-500 hover:bg-red-600 text-white"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             )} */}
//           </div>
//         </div>
//       </div>
//     </header>

//     //   <header className="bg-white shadow-md p-4 flex justify-between items-center">
//     //     <Link to="/" className="text-xl font-bold text-blue-600">
//     //       MyApp
//     //     </Link>

//     //     {authUser && (
//     //       <div className="flex items-center gap-4">
//     //         <Link
//     //           to="/settings"
//     //           className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
//     //         >
//     //           <Settings size={20} />
//     //           <span className="hidden sm:inline">Settings</span>
//     //         </Link>

//     //         <Link
//     //           to="/profile"
//     //           className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
//     //         >
//     //           <User size={20} />
//     //           <span className="hidden sm:inline">Profile</span>
//     //         </Link>

//     //         <button
//     //           onClick={handleLogout}
//     //           className="flex items-center gap-1 text-gray-700 hover:text-red-600"
//     //         >
//     //           <LogOut size={20} />
//     //           <span className="hidden sm:inline">Logout</span>
//     //         </button>
//     //       </div>
//     //     )}
//     //   </header>
//   );
// };
// export default Navbar;



import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chatty</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
