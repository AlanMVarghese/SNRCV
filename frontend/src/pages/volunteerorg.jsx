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

// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { useAuthStore } from "../store/authStore";
// import { Link } from "react-router-dom"; // Import Link for navigation

// const VolunteerPage = () => {
//   const { user, vhelp, fetchProducts, products, signout } = useAuthStore();

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

//   const handleSignout = async () => {
//     try {
//       await signout(); // Call the signout function from backend
//       toast.success("Signed out successfully");
//       //navigate("/login"); // Redirect to login after signout
//     } catch (error) {
//       toast.error("Error during signout");
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <nav className="bg-blue-600 w-full p-4 flex justify-between items-center fixed top-0">
//         <Link
//           to="/"
//           className="text-white font-bold px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 shadow-lg"
//         >
//           SNRCV
//         </Link>

//         {/* Signout button aligned to the right */}
//         <button
//           onClick={handleSignout}
//           className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 shadow-lg ml-auto" // ml-auto to push it to the right
//         >
//           <Link to="/login">Sign Out</Link>
//         </button>
//       </nav>

//       {/* Main Content */}
//       <div className="pt-20">
//         {" "}
//         {/* Added padding to adjust content below navbar */}
//         {!user.helpstatus ? (
//           <h1>No Help Status Set</h1>
//         ) : (
//           <div className="flex flex-row items-center justify-center space-x-6">
//             {Array.isArray(products) && products.length > 0 ? (
//               products.map((user) => (
//                 <motion.div
//                   key={user._id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5 }}
//                   className="p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border"
//                 >
//                   <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
//                     Need Help
//                   </h2>
//                   <form onSubmit={handlevhelp}>
//                     <motion.div
//                       className="p-4 bg-white rounded-lg border "
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 }}
//                     >
//                       <h3 className="text-xl font-semibold text-blue-700 mb-3">
//                         Senior Citizen Details
//                       </h3>
//                       <div className="mb-2">
//                         <p className="text-black">Name: {user.name}</p>
//                         <p className="text-black">
//                           Contact No: {user.contactno}
//                         </p>
//                         <p className="text-black">Help: {user.helptitle}</p>
//                         <p className="text-black">
//                           Description: {user.helpdescription}
//                         </p>
//                         <p className="text-black">
//                           Location: {user.location}
//                         </p>
//                         <p className="text-black">
//                           Additional Details: {user.additional}
//                         </p>
//                       </div>
//                     </motion.div>

//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.6 }}
//                       className="mt-4"
//                     >
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={handlevhelp}
//                         className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800"
//                       >
//                         Help
//                       </motion.button>
//                     </motion.div>
//                   </form>
//                 </motion.div>
//               ))
//             ) : (
//               <p className="text-black">No products available.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default VolunteerPage;

// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { useAuthStore } from "../store/authStore";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// const VolunteerPage = () => {
//   const { user, vhelp, fetchProducts, products, signout } = useAuthStore();

//   // Fetch relevant help requests when the component mounts
//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   // Handle volunteer help response
//   const handlevhelp = async (helpEmail) => {
//     try {
//       await vhelp(helpEmail);
//       toast.success("Help request acknowledged");
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//       toast.error("Error processing help request");
//     }
//   };

//   const handleSignout = async () => {
//     try {
//       await signout();
//       toast.success("Signed out successfully");
//     } catch (error) {
//       console.log(error);
//       toast.error("Error during signout");
//     }
//   };

//   return (
//     <>
//       <nav
//         className="bg-blue-600 bg-opacity-80 w-full p-4 flex justify-between items-center fixed top-0 z-50 backdrop-blur-lg"
//         style={{ backdropFilter: "blur(10px)" }}
//       >
//         <Link
//           to="/"
//           className="text-white font-bold px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 shadow-lg"
//         >
//           SNRCV
//         </Link>
//         <button
//           onClick={handleSignout}
//           className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 shadow-lg ml-auto"
//         >
//           Sign Out
//         </button>
//       </nav>

//       <div className="pt-24 flex flex-col items-center">
//         {products && products.length > 0 ? (
//           <div className="flex flex-row items-center justify-center space-x-6 flex-wrap">
//             {products.map((request) => (
//               <motion.div
//                 key={request._id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.5 }}
//                 className="p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border m-4"
//               >
//                 <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
//                   Need Help
//                 </h2>
//                 <div className="p-4 bg-white rounded-lg border mb-4">
//                   <h3 className="text-xl font-semibold text-blue-700 mb-3">
//                     Senior Citizen Details
//                   </h3>
//                   <p className="text-black">Name: {request.name}</p>
//                   <p className="text-black">Contact No: {request.contactno}</p>
//                   <p className="text-black">Help: {request.helptitle}</p>
//                   <p className="text-black">Description: {request.helpdescription}</p>
//                   <p className="text-black">Location: {request.location}</p>
//                   <p className="text-black">Additional Details: {request.additional}</p>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handlevhelp(request.email)}
//                   className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800"
//                 >
//                   Help
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-black">No relevant help requests available.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default VolunteerPage;

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useAuthStore } from "../store/authStore";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// const VolunteerPage = () => {
//   const { user, vhelp, fetchProducts, products, signout } = useAuthStore();

//   // Fetch relevant help requests when the component mounts
//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const handlevhelp = async (helpEmail) => {
//   try {
//     await vhelp({
//       email: helpEmail,
//       volunteerName: user.name,
//       volunteerContact: user.contactno,
//     });
//     toast.success("Help request acknowledged");
//     window.location.reload();
//   } catch (error) {
//     console.log(error);
//     toast.error("Error processing help request");
//   }
// };

//   const handleSignout = async () => {
//     try {
//       await signout();
//       toast.success("Signed out successfully");
//     } catch (error) {
//       console.log(error);
//       toast.error("Error during signout");
//     }
//   };

//   return (
//     <>
//       <nav className="bg-blue-600 bg-opacity-80 w-full p-4 flex justify-between items-center fixed top-0 z-50 backdrop-blur-lg">
//         <Link to="/" className="text-white font-bold px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 shadow-lg">
//           SNRCV
//         </Link>
//         <button onClick={handleSignout} className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 shadow-lg ml-auto">
//           Sign Out
//         </button>
//       </nav>

//       <div className="pt-24 flex flex-col items-center">
//         {acceptedRequest ? (
//           // Show accepted request
//           <div className="p-8 bg-green-300 bg-opacity-50 rounded-xl shadow-2xl border m-4">
//             <h2 className="text-3xl font-bold mb-6 text-center text-green-700 bg-clip-text">Accepted Help Request</h2>
//             <div className="p-4 bg-white rounded-lg border mb-4">
//               <h3 className="text-xl font-semibold text-green-700 mb-3">Citizen Details</h3>
//               <p className="text-black">Name: {acceptedRequest.name}</p>
//               <p className="text-black">Help Needed: {acceptedRequest.helptitle}</p>
//               <p className="text-black">Contact No: {acceptedRequest.contactno}</p>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-row items-center justify-center space-x-6 flex-wrap">
//             {products && products.length > 0 ? (
//               products.map((request) => (
//                 <motion.div
//                   key={request._id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5 }}
//                   className="p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border m-4"
//                 >
//                   <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">Need Help</h2>
//                   <div className="p-4 bg-white rounded-lg border mb-4">
//                     <h3 className="text-xl font-semibold text-blue-700 mb-3">Senior Citizen Details</h3>
//                     <p className="text-black">Name: {request.name}</p>
//                     <p className="text-black">Help: {request.helptitle}</p>
//                     <p className="text-black">Contact No: {request.contactno}</p>
//                     <p className="text-black">Description: {request.helpdescription}</p>
//                     <p className="text-black">Location: {request.location}</p>
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => handlevhelp(request.email, request)}
//                     className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800"
//                   >
//                     Help
//                   </motion.button>
//                 </motion.div>
//               ))
//             ) : (
//               <p className="text-black">No relevant help requests available.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default VolunteerPage;

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useAuthStore } from "../store/authStore";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// const VolunteerPage = () => {
//   const { user, vhelp, fetchProducts, products, signout } = useAuthStore();
//   const [acceptedRequest, setAcceptedRequest] = useState(null); // State for accepted request

//   // Fetch relevant help requests when the component mounts
//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const handlevhelp = async (helpEmail, request) => {
//     try {
//       await vhelp({
//         email: helpEmail,
//         volunteerName: user.name,
//         volunteerContact: user.contactno,
//       });
//       toast.success("Help request acknowledged");

//       // Set the accepted request details in the state
//       setAcceptedRequest(request);
//     } catch (error) {
//       console.log(error);
//       toast.error("Error processing help request");
//     }
//   };

//   const handleSignout = async () => {
//     try {
//       await signout();
//       toast.success("Signed out successfully");
//     } catch (error) {
//       console.log(error);
//       toast.error("Error during signout");
//     }
//   };

//   return (
//     <>
//       <nav className="bg-blue-600 bg-opacity-80 w-full p-4 flex justify-between items-center fixed top-0 z-50 backdrop-blur-lg">
//         <Link to="/" className="text-white font-bold px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 shadow-lg">
//           SNRCV
//         </Link>
//         <button onClick={handleSignout} className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 shadow-lg ml-auto">
//           Sign Out
//         </button>
//       </nav>

//       <div className="pt-24 flex flex-col items-center">
//         {acceptedRequest ? (
//           // Show only the accepted request details
//           <div className="p-8 bg-green-300 bg-opacity-50 rounded-xl shadow-2xl border m-4">
//             <h2 className="text-3xl font-bold mb-6 text-center text-green-700 bg-clip-text">Accepted Help Request</h2>
//             <div className="p-4 bg-white rounded-lg border mb-4">
//               <h3 className="text-xl font-semibold text-green-700 mb-3">Senior Citizen Details</h3>
//               <p className="text-black">Name: {acceptedRequest.name}</p>
//               <p className="text-black">Help Needed: {acceptedRequest.helptitle}</p>
//               <p className="text-black">Contact No: {acceptedRequest.contactno}</p>
//               <p className="text-black">Description: {acceptedRequest.helpdescription}</p>
//               <p className="text-black">Location: {acceptedRequest.location}</p>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-row items-center justify-center space-x-6 flex-wrap">
//             {products && products.length > 0 ? (
//               products.map((request) => (
//                 <motion.div
//                   key={request._id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5 }}
//                   className="p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border m-4"
//                 >
//                   <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">Need Help</h2>
//                   <div className="p-4 bg-white rounded-lg border mb-4">
//                     <h3 className="text-xl font-semibold text-blue-700 mb-3">Senior Citizen Details</h3>
//                     <p className="text-black">Name: {request.name}</p>
//                     <p className="text-black">Help: {request.helptitle}</p>
//                     <p className="text-black">Contact No: {request.contactno}</p>
//                     <p className="text-black">Description: {request.helpdescription}</p>
//                     <p className="text-black">Location: {request.location}</p>
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => handlevhelp(request.email, request)}
//                     className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800"
//                   >
//                     Help
//                   </motion.button>
//                 </motion.div>
//               ))
//             ) : (
//               <p className="text-black">No relevant help requests available.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default VolunteerPage;

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useAuthStore } from "../store/authStore";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// const VolunteerPage = () => {
//   const { user, vhelp, fetchProducts, products, signout } = useAuthStore();
//   const [acceptedRequest, setAcceptedRequest] = useState(null);

//   // Fetch relevant help requests and check for an accepted request
//   useEffect(() => {
//     fetchProducts();

//     // Check if there is an accepted request already associated with the volunteer
//     const checkAcceptedRequest = async () => {
//       const response = await fetchProducts();
//       const accepted = response.find(
//         (req) => req.volunteerDetails && req.volunteerDetails.name === user.name
//       );
//       if (accepted) setAcceptedRequest(accepted);
//     };

//     checkAcceptedRequest();
//   }, [fetchProducts, user.name]);

//   const handlevhelp = async (helpEmail, request) => {
//     try {
//       await vhelp({
//         email: helpEmail,
//         volunteerName: user.name,
//         volunteerContact: user.contactno,
//       });
//       toast.success("Help request acknowledged");
//       setAcceptedRequest(request); // Set the accepted request in state
//     } catch (error) {
//       console.log(error);
//       toast.error("Error processing help request");
//     }
//   };

//   const handleSignout = async () => {
//     try {
//       await signout();
//       toast.success("Signed out successfully");
//     } catch (error) {
//       console.log(error);
//       toast.error("Error during signout");
//     }
//   };

//   return (
//     <>
//       <nav className="bg-blue-600 bg-opacity-80 w-full p-4 flex justify-between items-center fixed top-0 z-50 backdrop-blur-lg">
//         <Link to="/" className="text-white font-bold px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 shadow-lg">
//           SNRCV
//         </Link>
//         <button onClick={handleSignout} className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 shadow-lg ml-auto">
//           Sign Out
//         </button>
//       </nav>

//       <div className="pt-24 flex flex-col items-center">
//         {acceptedRequest ? (
//           <div className="p-8 bg-green-300 bg-opacity-50 rounded-xl shadow-2xl border m-4">
//             <h2 className="text-3xl font-bold mb-6 text-center text-green-700 bg-clip-text">Accepted Help Request</h2>
//             <div className="p-4 bg-white rounded-lg border mb-4">
//               <h3 className="text-xl font-semibold text-green-700 mb-3">Citizen Details</h3>
//               <p className="text-black">Name: {acceptedRequest.name}</p>
//               <p className="text-black">Help Needed: {acceptedRequest.helptitle}</p>
//               <p className="text-black">Contact No: {acceptedRequest.contactno}</p>
//               <p className="text-black">Description: {acceptedRequest.helpdescription}</p>
//               <p className="text-black">Location: {acceptedRequest.location}</p>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-row items-center justify-center space-x-6 flex-wrap">
//             {products && products.length > 0 ? (
//               products.map((request) => (
//                 <motion.div
//                   key={request._id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5 }}
//                   className="p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border m-4"
//                 >
//                   <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">Need Help</h2>
//                   <div className="p-4 bg-white rounded-lg border mb-4">
//                     <h3 className="text-xl font-semibold text-blue-700 mb-3">Senior Citizen Details</h3>
//                     <p className="text-black">Name: {request.name}</p>
//                     <p className="text-black">Help: {request.helptitle}</p>
//                     <p className="text-black">Contact No: {request.contactno}</p>
//                     <p className="text-black">Description: {request.helpdescription}</p>
//                     <p className="text-black">Location: {request.location}</p>
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => handlevhelp(request.email, request)}
//                     className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800"
//                   >
//                     Help
//                   </motion.button>
//                 </motion.div>
//               ))
//             ) : (
//               <p className="text-black">No relevant help requests available.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default VolunteerPage;

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useAuthStore } from "../store/authStore";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// const VolunteerPage = () => {
//   const { user, vhelp, fetchProducts, products, signout } = useAuthStore();
//   const [acceptedRequest, setAcceptedRequest] = useState(null);

//   // Fetch help requests and check for an accepted request
//   useEffect(() => {
//     const loadRequests = async () => {
//       await fetchProducts();

//       // Look for accepted requests in products
//       const existingAcceptedRequest = products.find(
//         (request) =>
//           request.volunteerDetails?.isAccepted &&
//           request.volunteerDetails.name === user.name
//       );

//       if (existingAcceptedRequest) {
//         setAcceptedRequest(existingAcceptedRequest);
//       }
//     };

//     loadRequests();
//   }, [fetchProducts, user.name, products]);

//   // const handlevhelp = async (helpEmail, request) => {
//   //   try {
//   //     await vhelp({
//   //       email: helpEmail,
//   //       volunteerName: user.name,
//   //       volunteerContact: user.contactno,
//   //     });
//   //     toast.success("Help request acknowledged");

//   //     // Set the accepted request to display the details
//   //     setAcceptedRequest(request);
//   //   } catch (error) {
//   //     console.log(error);
//   //     toast.error("Error processing help request");
//   //   }
//   // };

//   const handlevhelp = async (helpEmail, request) => {
//     try {
//       await vhelp({
//         email: helpEmail,
//         volunteerName: user.name,
//         volunteerContact: user.contactno,
//       });
//       setAcceptedRequest(request); // Show the accepted request
//       toast.success("Help request acknowledged");
//     } catch (error) {
//       console.log(error);
//       toast.error("Error processing help request");
//     }
//   };

//   const handleMarkHelpCompleted = async () => {
//     try {
//       await markHelpCompleted(acceptedRequest.email); // Mark the help as completed
//       setAcceptedRequest(null); // Clear accepted request to allow new ones
//       fetchProducts(); // Refresh available help requests
//       toast.success("Help marked as completed");
//     } catch (error) {
//       console.log(error);
//       toast.error("Error marking help as completed");
//     }
//   };

//   const handleSignout = async () => {
//     try {
//       await signout();
//       toast.success("Signed out successfully");
//     } catch (error) {
//       console.log(error);
//       toast.error("Error during signout");
//     }
//   };

//   return (
//     <>
//       <nav className="bg-blue-600 bg-opacity-80 w-full p-4 flex justify-between items-center fixed top-0 z-50 backdrop-blur-lg">
//         <Link to="/" className="text-white font-bold px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 shadow-lg">
//           SNRCV
//         </Link>
//         <button onClick={handleSignout} className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 shadow-lg ml-auto">
//           Sign Out
//         </button>
//       </nav>

//       <div className="pt-24 flex flex-col items-center">
//         {acceptedRequest ? (
//           // Show accepted request details
//           <div className="p-8 bg-green-300 bg-opacity-50 rounded-xl shadow-2xl border m-4">
//             <h2 className="text-3xl font-bold mb-6 text-center text-green-700 bg-clip-text">Accepted Help Request</h2>
//             <div className="p-4 bg-white rounded-lg border mb-4">
//               {/* <h3 className="text-xl font-semibold text-green-700 mb-3">Citizen Details</h3>
//               <p className="text-black">Name: {acceptedRequest.name}</p>
//               <p className="text-black">Help Needed: {acceptedRequest.helptitle}</p>
//               <p className="text-black">Contact No: {acceptedRequest.contactno}</p> */}
//               <h2>Accepted Help Request</h2>
//               <p>Name: {acceptedRequest.name}</p>
//               <p>Help Needed: {acceptedRequest.helptitle}</p>
//               <p>Contact No: {acceptedRequest.contactno}</p>
//               <button onClick={handleMarkHelpCompleted}>Mark Help as Completed</button>
//             </div>
//           </div>
//         ) : (
//           // <div className="flex flex-row items-center justify-center space-x-6 flex-wrap">
//           //   {products && products.length > 0 ? (
//           //     products.map((request) => (
//           //       <motion.div
//           //         key={request._id}
//           //         initial={{ opacity: 0, scale: 0.9 }}
//           //         animate={{ opacity: 1, scale: 1 }}
//           //         exit={{ opacity: 0, scale: 0.9 }}
//           //         transition={{ duration: 0.5 }}
//           //         className="p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border m-4"
//           //       >
//           //         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">Need Help</h2>
//           //         <div className="p-4 bg-white rounded-lg border mb-4">
//           //           <h3 className="text-xl font-semibold text-blue-700 mb-3">Senior Citizen Details</h3>
//           //           <p className="text-black">Name: {request.name}</p>
//           //           <p className="text-black">Help: {request.helptitle}</p>
//           //           <p className="text-black">Contact No: {request.contactno}</p>
//           //           <p className="text-black">Description: {request.helpdescription}</p>
//           //           <p className="text-black">Location: {request.location}</p>
//           //         </div>
//           //         <motion.button
//           //           whileHover={{ scale: 1.05 }}
//           //           whileTap={{ scale: 0.95 }}
//           //           onClick={() => handlevhelp(request.email, request)}
//           //           className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800"
//           //         >
//           //           Help
//           //         </motion.button>
//           //       </motion.div>
//           //     ))
//           //   ) : (
//           //     <p className="text-black">No relevant help requests available.</p>
//           //   )}
//           // </div>
//           <div className="flex flex-row items-center justify-center space-x-6 flex-wrap">
//             {products && products.length > 0 ? (
//               products.map((request) => (
//                 <motion.div
//                   key={request._id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5 }}
//                   className="p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border m-4"
//                 >
//                   {request.helptitle && (
//                     <div>
//                       <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
//                         Need Help
//                       </h2>
//                       <form onSubmit={handlevhelp}>
//                         <motion.div
//                           className="p-4 bg-white rounded-lg border "
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.2 }}
//                         >
//                           <h3 className="text-xl font-semibold text-blue-700 mb-3">
//                             Senior Citizen Details
//                           </h3>
//                           <div className="mb-2">
//                             <p className="text-black">Name: {request.name}</p>
//                             <p className="text-black">
//                               Contact No: {request.contactno}
//                             </p>
//                             <p className="text-black">
//                               Help: {request.helptitle}
//                             </p>
//                             <p className="text-black">
//                               Description: {request.helpdescription}
//                             </p>
//                             <p className="text-black">
//                               Additional Details: {request.additional}
//                             </p>
//                           </div>
//                         </motion.div>

//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.6 }}
//                           className="mt-4"
//                         >
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={handlevhelp}
//                             className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800"
//                           >
//                             Help
//                           </motion.button>
//                         </motion.div>
//                       </form>{" "}
//                     </div>
//                   ) }
//                 </motion.div>
//               ))
//             ) : (
//               <p className="text-black">No requests</p>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default VolunteerPage;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const VolunteerPage = () => {
  const { user, vhelp, fetchProducts, products, signout } = useAuthStore();
  const [acceptedRequest, setAcceptedRequest] = useState(null);

  // Fetch relevant help requests and check if there's already an accepted request
  useEffect(() => {
    const initializePage = async () => {
      await fetchProducts();

      // Check for any previously accepted request associated with this volunteer
      const response = await fetchProducts();
      const alreadyAccepted = response.find(
        (req) => req.volunteerDetails && req.volunteerDetails.name === user.name
      );

      if (alreadyAccepted) {
        setAcceptedRequest(alreadyAccepted);
      }
    };

    initializePage();
  }, [fetchProducts, user.name]);

  const handlevhelp = async (helpEmail, request) => {
    try {
      await vhelp({
        email: helpEmail,
        volunteerName: user.name,
        volunteerContact: user.contactno,
      });
      toast.success("Help request acknowledged");
      setAcceptedRequest(request); // Set the accepted request in state
    } catch (error) {
      console.log(error);
      toast.error("Error processing help request");
    }
  };

  const handleSignout = async () => {
    try {
      await signout();
      toast.success("Signed out successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error during signout");
    }
  };

  return (
    <>
      <nav className="bg-blue-600 bg-opacity-80 w-full p-4 flex justify-between items-center fixed top-0 z-50 backdrop-blur-lg">
        <Link
          to="/"
          className="text-white font-bold px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 shadow-lg"
        >
          SNRCV
        </Link>
        <button
          onClick={handleSignout}
          className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 shadow-lg ml-auto"
        >
          Sign Out
        </button>
      </nav>

      <div className="pt-24 flex flex-col items-center">
        {acceptedRequest ? (
          <div className="p-8 bg-green-300 bg-opacity-50 rounded-xl shadow-2xl border m-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-green-700 bg-clip-text">
              Accepted Help Request
            </h2>
            <div className="p-4 bg-white rounded-lg border mb-4">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Citizen Details
              </h3>
              <p className="text-black">Name: {acceptedRequest.name}</p>
              <p className="text-black">
                Help Needed: {acceptedRequest.helptitle}
              </p>
              <p className="text-black">
                Contact No: {acceptedRequest.contactno}
              </p>
              <p className="text-black">
                Description: {acceptedRequest.helpdescription}
              </p>
              <p className="text-black">Location: {acceptedRequest.location}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center space-x-6 flex-wrap">
            {products && products.length > 0 ? (
              products.map((request) => (
                <motion.div
                  key={request._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border m-4"
                >
                  {request.helptitle ? (
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
                        Need Help
                      </h2>
                      <div className="p-4 bg-white rounded-lg border mb-4">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">
                          Senior Citizen Details
                        </h3>
                        <p className="text-black">Name: {request.name}</p>
                        <p className="text-black">Help: {request.helptitle}</p>
                        <p className="text-black">
                          Contact No: {request.contactno}
                        </p>
                        <p className="text-black">
                          Description: {request.helpdescription}
                        </p>
                        <p className="text-black">
                          Location: {request.location}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handlevhelp(request.email, request)}
                        className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800"
                      >
                        Help
                      </motion.button>
                    </div>
                  ) : null}
                </motion.div>
              ))
            ) : (
              <p className="text-black">No relevant help requests available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default VolunteerPage;
