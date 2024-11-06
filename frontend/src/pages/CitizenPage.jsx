// import { motion } from "framer-motion";
// import Input from "../components/Input";
// import {
//   HeartPulse,
//   HelpCircleIcon,
//   HelpingHandIcon,
//   Loader,
// } from "lucide-react";
// import { formatDate } from "../utils/date";
// import { useState } from "react";
// import { useAuthStore } from "../store/authStore";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom"; // Import Link

// const CitizenPage = () => {
//   const [helptitle, setHelptitle] = useState("");
//   const [helpdescription, setHelpdescription] = useState("");
//   const [additional, setAdditional] = useState("");
//   const { user, help, error, isLoading } = useAuthStore();

//   const handleHelpReq = async (e) => {
//     e.preventDefault();

//     try {
//       await help(user.email, helptitle, helpdescription, additional);
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
//       <nav className="bg-blue-600 w-full p-4 flex justify-start fixed top-0">
//         <Link
//           to="/" // Use Link to navigate back to home
//           className="text-white font-bold px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 shadow-lg"
//         >
//           SNRCV
//         </Link>
//       </nav>
//       {user.helpstatus ? (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-md w-full bg-blue-300  bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl
//               overflow-hidden"
//         >
//           <div className="p-8">
//             <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
//               How can we help you?
//             </h2>

//             <form onSubmit={handleHelpReq}>
//               <Input
//                 icon={HelpCircleIcon}
//                 type="text"
//                 placeholder="Subject"
//                 value={helptitle}
//                 onChange={(e) => setHelptitle(e.target.value)}
//               />
//               <Input
//                 icon={HelpingHandIcon}
//                 type="text"
//                 placeholder="description..."
//                 value={helpdescription}
//                 onChange={(e) => setHelpdescription(e.target.value)}
//               />
//               <Input
//                 icon={HeartPulse}
//                 type="text"
//                 placeholder="time, additional information..."
//                 value={additional}
//                 onChange={(e) => setAdditional(e.target.value)}
//               />

//               <motion.button
//                 className="mt-5 w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800
// 						 "
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <Loader className=" animate-spin mx-auto" size={24} />
//                 ) : (
//                   "Request Help"
//                 )}
//               </motion.button>
//             </form>
//           </div>
//         </motion.div>
//       ) : (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-md w-full mx-auto mt-10 p-8 bg-blue-300 bg-opacity-50  rounded-xl shadow-2xl border"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-center text-blue-700  bg-clip-text">
//             Help Status
//           </h2>

//           <div className="space-y-6">
//             <motion.div
//               className="p-4 bg-white  rounded-lg border "
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <h3 className="text-xl font-semibold text-blue-700 mb-3">
//                 Senior Citizen Details
//               </h3>
//               <p className="text-black">Name: {user.name}</p>
//               <p className="text-black">Contact No: {user.contactno}</p>
//             </motion.div>
//             <motion.div
//               className="p-4 bg-white rounded-lg border "
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               <h3 className="text-xl font-semibold text-blue-700 mb-3">
//                 Current Status
//               </h3>
//               <p className="text-black">
//                 <span className="font-bold">Joined: </span>
//                 {new Date(user.createdAt).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </p>
//               <p className="text-black">
//                 <span className="font-bold">Last Login: </span>

//                 {formatDate(user.lastLogin)}
//               </p>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="mt-4"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleHelpReq}
//               className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 "
//             >
//               Cancel Request
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       )}
//     </>
//   );
// };
// export default CitizenPage;

// import { motion } from "framer-motion";
// import Input from "../components/Input";
// import {
//   HeartPulse,
//   HelpCircleIcon,
//   HelpingHandIcon,
//   Loader,
// } from "lucide-react";
// import { formatDate } from "../utils/date";
// import { useState } from "react";
// import { useAuthStore } from "../store/authStore";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom"; // Import Link

// const CitizenPage = () => {
//   const [helptitle, setHelptitle] = useState("driving"); // Default value
//   const [helpdescription, setHelpdescription] = useState("");
//   const [additional, setAdditional] = useState("");
//   const { user, help, error, isLoading, signout} = useAuthStore();

//   const handleHelpReq = async (e) => {
//     e.preventDefault();

//     try {
//       await help(user.email, helptitle, helpdescription, additional);
//       if (user.helpstatus) {
//         toast.success("Help request sent");
//       } else {
//         toast.success("Help request cancelled");
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

//       {user.helpstatus ? (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-md w-full bg-blue-300  bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl
//               overflow-hidden"
//         >
//           <div className="p-8">
//             <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
//               How can we help you?
//             </h2>

//             <form onSubmit={handleHelpReq}>
//               <div className="mb-4">
//                 <label htmlFor="subject" className="block text-blue-700 mb-2">
//                   Subject
//                 </label>
//                 <select
//                   id="subject"
//                   value={helptitle}
//                   onChange={(e) => setHelptitle(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="Driving">Driving</option>
//                   <option value="Cooking">Cooking</option>
//                   <option value="Housekeeping">Housekeeping</option>
//                   <option value="Gardening">Gardening</option>
//                   <option value="Companionship">Companionship</option>
//                   <option value="Reading">Reading</option>
//                   <option value="Shopping">Shopping</option>
//                   <option value="Medical Assistance">Medical Assistance</option>
//                 </select>
//               </div>
//               <Input
//                 icon={HelpingHandIcon}
//                 type="text"
//                 placeholder="Description..."
//                 value={helpdescription}
//                 onChange={(e) => setHelpdescription(e.target.value)}
//               />
//               <Input
//                 icon={HeartPulse}
//                 type="text"
//                 placeholder="Time, additional information..."
//                 value={additional}
//                 onChange={(e) => setAdditional(e.target.value)}
//               />

//               <motion.button
//                 className="mt-5 w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800
// 						 "
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <Loader className=" animate-spin mx-auto" size={24} />
//                 ) : (
//                   "Request Help"
//                 )}
//               </motion.button>
//             </form>
//           </div>
//         </motion.div>
//       ) : (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-md w-full mx-auto mt-10 p-8 bg-blue-300 bg-opacity-50  rounded-xl shadow-2xl border"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-center text-blue-700  bg-clip-text">
//             Help Status
//           </h2>

//           <div className="space-y-6">
//             <motion.div
//               className="p-4 bg-white  rounded-lg border "
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <h3 className="text-xl font-semibold text-blue-700 mb-3">
//                 Senior Citizen Details
//               </h3>
//               <p className="text-black">Name: {user.name}</p>
//               <p className="text-black">Contact No: {user.contactno}</p>
//             </motion.div>
//             <motion.div
//               className="p-4 bg-white rounded-lg border "
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               <h3 className="text-xl font-semibold text-blue-700 mb-3">
//                 Current Status
//               </h3>
//               <p className="text-black">
//                 <span className="font-bold">Joined: </span>
//                 {new Date(user.createdAt).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </p>
//               <p className="text-black">
//                 <span className="font-bold">Last Login: </span>
//                 {formatDate(user.lastLogin)}
//               </p>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="mt-4"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleHelpReq}
//               className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 "
//             >
//               Cancel Request
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       )}
//     </>
//   );
// };
// export default CitizenPage;

import { motion } from "framer-motion";
import Input from "../components/Input";
import {
  HeartPulse,
  HelpCircleIcon,
  HelpingHandIcon,
  Loader,
} from "lucide-react";
import { formatDate } from "../utils/date";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom"; // Import Link

const CitizenPage = () => {
  const [helptitle, setHelptitle] = useState("driving"); // Default value
  const [helpdescription, setHelpdescription] = useState("");
  const [additional, setAdditional] = useState("");
  const [location, setLocation] = useState(""); // Added location state
  const { user, help, error, isLoading, signout } = useAuthStore();

  const handleHelpReq = async (e) => {
    e.preventDefault();

    try {
      await help(user.email, helptitle, helpdescription, additional, location); // Include location in help request
      if (user.helpstatus) {
        toast.success("Help request sent");
      } else {
        toast.success("Help request cancelled");
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
      // navigate("/login"); // Redirect to login after signout
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

      {user.helpstatus ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-blue-300 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
              overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
              How can we help you?
            </h2>

            <form onSubmit={handleHelpReq}>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-blue-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  value={helptitle}
                  onChange={(e) => setHelptitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Driving">Driving</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Housekeeping">Housekeeping</option>
                  <option value="Gardening">Gardening</option>
                  <option value="Companionship">Companionship</option>
                  <option value="Reading">Reading</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Medical Assistance">Medical Assistance</option>
                </select>
              </div>

              <Input
                icon={HelpingHandIcon}
                type="text"
                placeholder="Description..."
                value={helpdescription}
                onChange={(e) => setHelpdescription(e.target.value)}
              />

              <Input
                icon={HeartPulse}
                type="text"
                placeholder="Time, additional information..."
                value={additional}
                onChange={(e) => setAdditional(e.target.value)}
              />

              {/* Location Field */}
              <div className="mb-4">
                {/* <label htmlFor="location" className="block text-blue-700 mb-2">
                  Location
                </label> */}
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your location</option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Kollam">Kollam</option>
                  <option value="Alappuzha">Alappuzha</option>
                  <option value="Pathanamthitta">Pathanamthitta</option>
                  <option value="Kottayam">Kottayam</option>
                  <option value="Idukki">Idukki</option>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Palakkad">Palakkad</option>
                  <option value="Malappuram">Malappuram</option>
                  <option value="Kozhikode">Kozhikode</option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Kannur">Kannur</option>
                  <option value="Kasaragod">Kasaragod</option>
                </select>
              </div>

              <motion.button
                className="mt-5 w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="animate-spin mx-auto" size={24} />
                ) : (
                  "Request Help"
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full mx-auto mt-10 p-8 bg-blue-300 bg-opacity-50 rounded-xl shadow-2xl border"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
            Help Status
          </h2>

          <div className="space-y-6">
            <motion.div
              className="p-4 bg-white rounded-lg border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Senior Citizen Details
              </h3>
              <p className="text-black">Name: {user.name}</p>
              <p className="text-black">Contact No: {user.contactno}</p>
            </motion.div>
            <motion.div
              className="p-4 bg-white rounded-lg border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Current Status
              </h3>
              <p className="text-black">
                <span className="font-bold">Joined: </span>
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-black">
                <span className="font-bold">Last Login: </span>
                {formatDate(user.lastLogin)}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHelpReq}
              className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg"
            >
              Cancel Help
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CitizenPage;
