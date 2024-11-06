// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { useAuthStore } from "../store/authStore";

// const VolunteerPage = () => {
//   const { user, vhelp, fetchProducts, products } = useAuthStore();

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const handlevhelp = async (e) => {
//     e.preventDefault();

//     try {
//       await vhelp(user.email);
//       if (user.helpstatus) {
//         toast.success("Help req send");
//       } else {
//         toast.success("Help req cancelled");
//       }
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>

//       {!user.helpstatus ? (
//         <h1>No Help Status Set</h1>
//       ) : (
//         <div className="flex flex-row items-center justify-center space-x-6">
//           {Array.isArray(products) && products.length > 0 ? (
//             products.map((user) => (
//               <motion.div
//                 key={user._id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.5 }}
//                 className="  p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border" // Fixed height here
//               >
//                 <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
//                   Need Help
//                 </h2>
//                 <form onSubmit={handlevhelp}>
//                   <motion.div
//                     className="p-4 bg-white rounded-lg border " // Ensures full height usage
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     <h3 className="text-xl font-semibold text-blue-700 mb-3">
//                       Senior Citizen Details
//                     </h3>
//                     <div className="mb-2">
//                       <p className="text-black">Name: {user.name}</p>
//                       <p className="text-black">Contact No: {user.contactno}</p>
//                       <p className="text-black">Help: {user.helptitle}</p>
//                       <p className="text-black">
//                         Description: {user.helpdescription}
//                       </p>
//                       <p className="text-black">
//                         Additional Details: {user.additional}
//                       </p>
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6 }}
//                     className="mt-4"
//                   >
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={handlevhelp}
//                       className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800"
//                     >
//                       Help
//                     </motion.button>
//                   </motion.div>
//                 </form>
//               </motion.div>
//             ))
//           ) : (
//             <p className="text-black">No products available.</p>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default VolunteerPage;

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { Link } from "react-router-dom"; // Import Link for navigation

const VolunteerPage = () => {
  const { user, vhelp, fetchProducts, products, signout } = useAuthStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handlevhelp = async (e) => {
    e.preventDefault();

    try {
      await vhelp(user.email);
      if (user.helpstatus) {
        toast.success("Help req send");
      } else {
        toast.success("Help req cancelled");
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignout = async () => {
    try {
      await signout(); // Call the signout function from backend
      toast.success("Signed out successfully");
      //navigate("/login"); // Redirect to login after signout
    } catch (error) {
      toast.error("Error during signout");
      console.log(error);
    }
  };

  return (
    <>
      <nav className="bg-blue-600 w-full p-4 flex justify-between items-center fixed top-0">
        <Link
          to="/"
          className="text-white font-bold px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 shadow-lg"
        >
          SNRCV
        </Link>

        {/* Signout button aligned to the right */}
        <button
          onClick={handleSignout}
          className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 shadow-lg ml-auto" // ml-auto to push it to the right
        >
          <Link to="/login">Sign Out</Link>
        </button>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {" "}
        {/* Added padding to adjust content below navbar */}
        {!user.helpstatus ? (
          <h1>No Help Status Set</h1>
        ) : (
          <div className="flex flex-row items-center justify-center space-x-6">
            {Array.isArray(products) && products.length > 0 ? (
              products.map((user) => (
                <motion.div
                  key={user._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border"
                >
                  <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
                    Need Help
                  </h2>
                  <form onSubmit={handlevhelp}>
                    <motion.div
                      className="p-4 bg-white rounded-lg border "
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-xl font-semibold text-blue-700 mb-3">
                        Senior Citizen Details
                      </h3>
                      <div className="mb-2">
                        <p className="text-black">Name: {user.name}</p>
                        <p className="text-black">
                          Contact No: {user.contactno}
                        </p>
                        <p className="text-black">Help: {user.helptitle}</p>
                        <p className="text-black">
                          Description: {user.helpdescription}
                        </p>
                        <p className="text-black">
                          Additional Details: {user.additional}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlevhelp}
                        className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800"
                      >
                        Help
                      </motion.button>
                    </motion.div>
                  </form>
                </motion.div>
              ))
            ) : (
              <p className="text-black">No products available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default VolunteerPage;
