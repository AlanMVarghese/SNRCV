// import { motion } from "framer-motion";
// import Input from "../components/Input";
// import { Loader, Lock, Mail, PhoneCall, User } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
// import { useAuthStore } from "../store/authStore";

// const SignUpPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [contactno, setContactno] = useState("");
//   const [category, setCategory] = useState("");

//   const navigate = useNavigate();

//   const { signup, error, isLoading } = useAuthStore();

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     try {
//       await signup(email, password, name, contactno, category);
//       navigate("/verify-email");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (

//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-md w-full bg-blue-300  bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl
// 			overflow-hidden"
//     >

//       <div className="p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
//           Create Account
//         </h2>

//         <form onSubmit={handleSignUp}>
//           <Input
//             icon={User}
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <Input
//             icon={Mail}
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             icon={Lock}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Input
//             icon={PhoneCall}
//             type="contactno"
//             placeholder="Contact No"
//             value={contactno}
//             onChange={(e) => setContactno(e.target.value)}
//           />
//           <div className="relative mb-6">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <User className="size-5 text-blue-700" />
//             </div>
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full pl-10 pr-3 py-2 bg-white rounded-lg border transition duration-200 text-black"
//               required
//               // Set the "invalid" placeholder color
//             >
//               {/* Placeholder option */}
//               <option value="" disabled hidden className="text-gray-300">
//                 Category
//               </option>
//               <option value="Senior Citizen">Senior Citizen</option>
//               <option value="Volunteer">Volunteer</option>
//             </select>
//             <style jsx>{`
//               select:invalid {
//                 color: #9ca3af; /* Equivalent to text-gray-300 */
//               }
//               select:not(:invalid) {
//                 color: black; /* Change to black when valid option is selected */
//               }
//             `}</style>
//           </div>

//           {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
//           <PasswordStrengthMeter password={password} />

//           <motion.button
//             className="mt-5 w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800
// 						 "
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <Loader className=" animate-spin mx-auto" size={24} />
//             ) : (
//               "Sign Up"
//             )}
//           </motion.button>
//         </form>
//       </div>
//       <div className="px-8 py-4 bg-white  flex justify-center">
//         <p className="text-sm text-black">
//           Already have an account?{" "}
//           <Link to={"/login"} className="text-blue-700 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </motion.div>
//   );
// };
// export default SignUpPage;

// import { motion } from "framer-motion";
// import Input from "../components/Input";
// import { Loader, Lock, Mail, PhoneCall, User } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
// import { useAuthStore } from "../store/authStore";

// const SignUpPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [contactno, setContactno] = useState("");
//   const [category, setCategory] = useState("");
//   const [skills, setSkills] = useState([]);

//   const navigate = useNavigate();
//   const { signup, error, isLoading } = useAuthStore();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     const skillsToSubmit = category === "Volunteer" ? skills : null;

//     try {
//       await signup(email, password, name, contactno, category, skillsToSubmit);
//       navigate("/verify-email");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }} // Set your background image here
//     >
//       <div className="max-w-md w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
//           Create Account
//         </h2>

//         <form onSubmit={handleSignUp}>
//           <Input
//             icon={User}
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <Input
//             icon={Mail}
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             icon={Lock}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Input
//             icon={PhoneCall}
//             type="text"
//             placeholder="Contact No"
//             value={contactno}
//             onChange={(e) => setContactno(e.target.value)}
//           />
//           <div className="relative mb-6">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <User className="size-5 text-blue-700" />
//             </div>
//             <select
//               value={category}
//               onChange={(e) => {
//                 setCategory(e.target.value);
//                 if (e.target.value !== "Volunteer") {
//                   setSkills([]); // Reset skills if not a volunteer
//                 }
//               }}
//               className="w-full pl-10 pr-3 py-2 bg-white rounded-lg border transition duration-200 text-black"
//               required
//             >
//               <option value="" disabled hidden>
//                 Category
//               </option>
//               <option value="Senior Citizen">Senior Citizen</option>
//               <option value="Volunteer">Volunteer</option>
//             </select>
//           </div>

//           {category === "Volunteer" && (
//             <div className="relative mb-6">
//               <select
//                 multiple
//                 value={skills}
//                 onChange={(e) =>
//                   setSkills([...e.target.selectedOptions].map((option) => option.value))
//                 }
//                 className="w-full pl-3 pr-3 py-2 bg-white rounded-lg border transition duration-200 text-black"
//               >
//                 <option value="Driving">Driving</option>
//                 <option value="Cooking">Cooking</option>
//                 <option value="Housekeeping">Housekeeping</option>
//                 <option value="Gardening">Gardening</option>
//                 <option value="Companionship">Companionship</option>
//                 <option value="Reading">Reading</option>
//                 <option value="Shopping">Shopping</option>
//                 <option value="Medical Assistance">Medical Assistance</option>
//               </select>
//             </div>
//           )}

//           {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
//           <PasswordStrengthMeter password={password} />

//           <motion.button
//             className="mt-5 w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 transition duration-200"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <Loader className="animate-spin mx-auto" size={24} />
//             ) : (
//               "Sign Up"
//             )}
//           </motion.button>
//         </form>

//         <div className="px-8 py-4 bg-white flex justify-center">
//           <p className="text-sm text-black">
//             Already have an account?{" "}
//             <Link to={"/login"} className="text-blue-700 hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SignUpPage;

// import { motion } from "framer-motion";
// import Input from "../components/Input";
// import { Loader, Lock, Mail, PhoneCall, User, MapPin } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
// import { useAuthStore } from "../store/authStore";

// const SignUpPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [contactno, setContactno] = useState("");
//   const [category, setCategory] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [location, setLocation] = useState("");

//   const navigate = useNavigate();
//   const { signup, error, isLoading } = useAuthStore();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     const skillsToSubmit = category === "Volunteer" ? skills : null;

//     try {
//       await signup(email, password, name, contactno, category, skillsToSubmit, location);
//       navigate("/verify-email");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }} // Set your background image here
//     >
//       <div className="max-w-md w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
//           Create Account
//         </h2>

//         <form onSubmit={handleSignUp}>
//           <Input
//             icon={User}
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <Input
//             icon={Mail}
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             icon={Lock}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Input
//             icon={PhoneCall}
//             type="text"
//             placeholder="Contact No"
//             value={contactno}
//             onChange={(e) => setContactno(e.target.value)}
//           />
//           <div className="relative mb-6">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <User className="size-5 text-blue-700" />
//             </div>
//             <select
//               value={category}
//               onChange={(e) => {
//                 setCategory(e.target.value);
//                 setSkills([]); // Reset skills when changing category
//                 setLocation(""); // Reset location when changing category
//               }}
//               className="w-full pl-10 pr-3 py-2 bg-white rounded-lg border transition duration-200 text-black"
//               required
//             >
//               <option value="" disabled hidden>
//                 Category
//               </option>
//               <option value="Senior Citizen">Senior Citizen</option>
//               <option value="Volunteer">Volunteer</option>
//             </select>
//           </div>

//           {category === "Volunteer" && (
//             <>
//               <h3 className="text-lg font-semibold mb-2 text-blue-700">Skills</h3>
//               <select
//                 multiple
//                 value={skills}
//                 onChange={(e) =>
//                   setSkills([...e.target.selectedOptions].map((option) => option.value))
//                 }
//                 className="w-full pl-3 pr-3 py-2 bg-white rounded-lg border transition duration-200 text-black mb-6"
//               >
//                 <option value="Driving">Driving</option>
//                 <option value="Cooking">Cooking</option>
//                 <option value="Housekeeping">Housekeeping</option>
//                 <option value="Gardening">Gardening</option>
//                 <option value="Companionship">Companionship</option>
//                 <option value="Reading">Reading</option>
//                 <option value="Shopping">Shopping</option>
//                 <option value="Medical Assistance">Medical Assistance</option>
//               </select>

//               <Input
//                 icon={MapPin}
//                 type="text"
//                 placeholder="Location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             </>
//           )}

//           {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
//           <PasswordStrengthMeter password={password} />

//           <motion.button
//             className="mt-5 w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 transition duration-200"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <Loader className="animate-spin mx-auto" size={24} />
//             ) : (
//               "Sign Up"
//             )}
//           </motion.button>
//         </form>

//         <div className="px-8 py-4 bg-white flex justify-center">
//           <p className="text-sm text-black">
//             Already have an account?{" "}
//             <Link to={"/login"} className="text-blue-700 hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SignUpPage;

// import { motion } from "framer-motion";
// import Input from "../components/Input";
// import { Loader, Lock, Mail, PhoneCall, User, MapPin } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
// import { useAuthStore } from "../store/authStore";

// const SignUpPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [contactno, setContactno] = useState("");
//   const [category, setCategory] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [location, setLocation] = useState("");

//   const navigate = useNavigate();
//   const { signup, error, isLoading } = useAuthStore();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     const skillsToSubmit = category === "Volunteer" ? skills : null;

//     try {
//       await signup(email, password, name, contactno, category, skillsToSubmit, location);
//       navigate("/verify-email");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSkillChange = (e) => {
//     const value = e.target.value;
//     setSkills((prev) =>
//       prev.includes(value) ? prev.filter((skill) => skill !== value) : [...prev, value]
//     );
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }} // Set your background image here
//     >
//       <div className="max-w-md w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
//           Create Account
//         </h2>

//         <form onSubmit={handleSignUp}>
//           <Input
//             icon={User}
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <Input
//             icon={Mail}
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             icon={Lock}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Input
//             icon={PhoneCall}
//             type="text"
//             placeholder="Contact No"
//             value={contactno}
//             onChange={(e) => setContactno(e.target.value)}
//           />
//           <div className="relative mb-6">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <User className="size-5 text-blue-700" />
//             </div>
//             <select
//               value={category}
//               onChange={(e) => {
//                 setCategory(e.target.value);
//                 setSkills([]); // Reset skills when changing category
//                 setLocation(""); // Reset location when changing category
//               }}
//               className="w-full pl-10 pr-3 py-2 bg-white rounded-lg border transition duration-200 text-black"
//               required
//             >
//               <option value="" disabled hidden>
//                 Category
//               </option>
//               <option value="Senior Citizen">Senior Citizen</option>
//               <option value="Volunteer">Volunteer</option>
//             </select>
//           </div>

//           {category === "Volunteer" && (
//             <>
//               <h3 className="text-lg font-semibold mb-2 text-blue-700">Skills</h3>
//               <div className="flex flex-col mb-6">
//                 {[
//                   "Driving",
//                   "Cooking",
//                   "Housekeeping",
//                   "Gardening",
//                   "Companionship",
//                   "Reading",
//                   "Shopping",
//                   "Medical Assistance",
//                 ].map((skill) => (
//                   <label key={skill} className="flex items-center mb-1">
//                     <input
//                       type="checkbox"
//                       value={skill}
//                       checked={skills.includes(skill)}
//                       onChange={handleSkillChange}
//                       className="mr-2"
//                     />
//                     {skill}
//                   </label>
//                 ))}
//               </div>

//               {/* <Input
//                 icon={MapPin}
//                 type="text"
//                 placeholder="Location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               /> */}

//               <div className="relative mb-6">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <MapPin className="size-5 text-blue-700" />
//               </div>
//               <select
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 className="w-full pl-10 pr-3 py-2 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-black"
//                 required
//               >
//                 <option value="" disabled hidden>
//                   Select Location
//                 </option>
//                 <option value="Thiruvananthapuram">Thiruvananthapuram</option>
//                 <option value="Kollam">Kollam</option>
//                 <option value="Alappuzha">Alappuzha</option>
//                 <option value="Pathanamthitta">Pathanamthitta</option>
//                 <option value="Kottayam">Kottayam</option>
//                 <option value="Idukki">Idukki</option>
//                 <option value="Ernakulam">Ernakulam</option>
//                 <option value="Thrissur">Thrissur</option>
//                 <option value="Palakkad">Palakkad</option>
//                 <option value="Malappuram">Malappuram</option>
//                 <option value="Kozhikode">Kozhikode</option>
//                 <option value="Wayanad">Wayanad</option>
//                 <option value="Kannur">Kannur</option>
//                 <option value="Kasaragod">Kasaragod</option>
//               </select>
//             </div>

//             </>
//           )}

//           {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
//           <PasswordStrengthMeter password={password} />

//           <motion.button
//             className="mt-5 w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 transition duration-200"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <Loader className="animate-spin mx-auto" size={24} />
//             ) : (
//               "Sign Up"
//             )}
//           </motion.button>
//         </form>

//         <div className="px-8 py-4 bg-white flex justify-center">
//           <p className="text-sm text-black">
//             Already have an account?{" "}
//             <Link to={"/login"} className="text-blue-700 hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>

//         <div className="px-8 py-4 bg-white flex justify-center">
//           <p className="text-sm text-black">
//             <Link to={"/"} className="text-blue-700 hover:underline">
//               Back to Home Page
//             </Link>
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SignUpPage;

// import { motion } from "framer-motion";
// import Input from "../components/Input";
// import { Loader, Lock, Mail, PhoneCall, User, MapPin } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
// import { useAuthStore } from "../store/authStore";
// import backgroundImage from "../assets/signup-bg.jpg"; // Use the correct path to your image

// const SignUpPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [contactno, setContactno] = useState("");
//   const [category, setCategory] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [location, setLocation] = useState("");

//   const navigate = useNavigate();
//   const { signup, error, isLoading } = useAuthStore();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     const skillsToSubmit = category === "Volunteer" ? skills : null;

//     try {
//       await signup(email, password, name, contactno, category, skillsToSubmit, location);
//       navigate("/verify-email");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSkillChange = (e) => {
//     const value = e.target.value;
//     setSkills((prev) =>
//       prev.includes(value) ? prev.filter((skill) => skill !== value) : [...prev, value]
//     );
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//         width: "100vw",
//         padding: "1px 0",
//       }}
//     >
//       <div className="w-full max-w-lg p-8 bg-white bg-opacity-90 rounded-xl shadow-lg mx-4">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">
//           Create Your Account
//         </h2>
//         <form onSubmit={handleSignUp} className="space-y-4">
//           <Input
//             icon={User}
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <Input
//             icon={Mail}
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             icon={Lock}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Input
//             icon={PhoneCall}
//             type="text"
//             placeholder="Contact No"
//             value={contactno}
//             onChange={(e) => setContactno(e.target.value)}
//           />

//           <div className="relative mb-4">
//             <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700" />
//             <select
//               value={category}
//               onChange={(e) => {
//                 setCategory(e.target.value);
//                 setSkills([]);
//                 setLocation("");
//               }}
//               className="w-full pl-10 pr-3 py-2 rounded-lg border text-gray-700"
//               required
//             >
//               <option value="" disabled hidden>
//                 Category
//               </option>
//               <option value="Senior Citizen">Senior Citizen</option>
//               <option value="Volunteer">Volunteer</option>
//             </select>
//           </div>

//           {category === "Volunteer" && (
//             <>
//               <h3 className="text-lg font-semibold mb-2 text-blue-700">Skills</h3>
//               <div className="grid grid-cols-2 gap-2 mb-4">
//                 {[
//                   "Driving",
//                   "Cooking",
//                   "Housekeeping",
//                   "Gardening",
//                   "Companionship",
//                   "Reading",
//                   "Shopping",
//                   "Medical Assistance",
//                 ].map((skill) => (
//                   <label key={skill} className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       value={skill}
//                       checked={skills.includes(skill)}
//                       onChange={handleSkillChange}
//                       className="h-4 w-4"
//                     />
//                     <span>{skill}</span>
//                   </label>
//                 ))}
//               </div>

//               <div className="relative mb-4">
//                 <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700" />
//                 <select
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   className="w-full pl-10 pr-3 py-2 rounded-lg border text-gray-700"
//                   required
//                 >
//                   <option value="" disabled hidden>
//                     Select Location
//                   </option>
//                   <option value="Thiruvananthapuram">Thiruvananthapuram</option>
//                   <option value="Kollam">Kollam</option>
//                   <option value="Alappuzha">Alappuzha</option>
//                   <option value="Pathanamthitta">Pathanamthitta</option>
//                   <option value="Kottayam">Kottayam</option>
//                   <option value="Idukki">Idukki</option>
//                   <option value="Ernakulam">Ernakulam</option>
//                   <option value="Thrissur">Thrissur</option>
//                   <option value="Palakkad">Palakkad</option>
//                   <option value="Malappuram">Malappuram</option>
//                   <option value="Kozhikode">Kozhikode</option>
//                   <option value="Wayanad">Wayanad</option>
//                   <option value="Kannur">Kannur</option>
//                   <option value="Kasaragod">Kasaragod</option>
//                 </select>
//               </div>
//             </>
//           )}

//           {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
//           <PasswordStrengthMeter password={password} />

//           <motion.button
//             className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition duration-200"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <Loader className="animate-spin mx-auto" size={24} />
//             ) : (
//               "Sign Up"
//             )}
//           </motion.button>
//         </form>

//         <div className="flex justify-center mt-6 space-x-4">
//           <Link to={"/login"} className="text-blue-700 hover:underline">
//             Already have an account? Login
//           </Link>
//           <Link to={"/"} className="text-blue-700 hover:underline">
//             Back to Home Page
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SignUpPage;

// import { motion } from "framer-motion";
// import Input from "../components/Input";
// import { Loader, Lock, Mail, PhoneCall, User, MapPin } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
// import { useAuthStore } from "../store/authStore";
// import backgroundImage from "../assets/signup-bg.jpg"; // Use the correct path to your image

// const SignUpPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [contactno, setContactno] = useState("");
//   const [category, setCategory] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [location, setLocation] = useState("");

//   const navigate = useNavigate();
//   const { signup, error, isLoading } = useAuthStore();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     const skillsToSubmit = category === "Volunteer" ? skills : null;

//     try {
//       await signup(email, password, name, contactno, category, skillsToSubmit, location);
//       navigate("/verify-email");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSkillChange = (e) => {
//     const value = e.target.value;
//     setSkills((prev) =>
//       prev.includes(value) ? prev.filter((skill) => skill !== value) : [...prev, value]
//     );
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundAttachment: "fixed",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <header className="w-full p-4 bg-blue-700 bg-opacity-70 text-white fixed top-0 left-0 flex justify-between items-center z-50 backdrop-blur-lg">
//         <div className="text-xl font-bold">
//           <Link to="/">SNRCV</Link>
//         </div>
//         <nav>
//           <ul className="flex space-x-8">
//             <Link to="/">
//               <li className="hover:text-gray-300 cursor-pointer">Home</li>
//             </Link>
//             <Link to="/login">
//               <li className="hover:text-gray-300 cursor-pointer">Login</li>
//             </Link>
//             <Link to="/signup">
//               <li className="hover:text-gray-300 cursor-pointer">Register</li>
//             </Link>
//             <Link to="/feedback">
//               <li className="hover:text-gray-300 cursor-pointer">Feedback</li>
//             </Link>
//           </ul>
//         </nav>
//       </header>
//       <div className="w-full max-w-lg p-8 bg-white bg-opacity-90 rounded-xl shadow-lg mx-4 overflow-y-auto" style={{ maxHeight: "80vh" }}>
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">
//           Create Your Account
//         </h2>
//         <form onSubmit={handleSignUp} className="space-y-4">
//           <Input
//             icon={User}
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <Input
//             icon={Mail}
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             icon={Lock}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Input
//             icon={PhoneCall}
//             type="text"
//             placeholder="Contact No"
//             value={contactno}
//             onChange={(e) => setContactno(e.target.value)}
//           />

//           <div className="relative mb-4">
//             <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700" />
//             <select
//               value={category}
//               onChange={(e) => {
//                 setCategory(e.target.value);
//                 setSkills([]);
//                 setLocation("");
//               }}
//               className="w-full pl-10 pr-3 py-2 rounded-lg border text-gray-700"
//               required
//             >
//               <option value="" disabled hidden>
//                 Category
//               </option>
//               <option value="Senior Citizen">Senior Citizen</option>
//               <option value="Volunteer">Volunteer</option>
//             </select>
//           </div>

//           {category === "Volunteer" && (
//             <>
//               <h3 className="text-lg font-semibold mb-2 text-blue-700">Skills</h3>
//               <div className="grid grid-cols-2 gap-2 mb-4">
//                 {[
//                   "Driving",
//                   "Cooking",
//                   "Housekeeping",
//                   "Gardening",
//                   "Companionship",
//                   "Reading",
//                   "Shopping",
//                   "Medical Assistance",
//                 ].map((skill) => (
//                   <label key={skill} className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       value={skill}
//                       checked={skills.includes(skill)}
//                       onChange={handleSkillChange}
//                       className="h-4 w-4"
//                     />
//                     <span>{skill}</span>
//                   </label>
//                 ))}
//               </div>

//               <div className="relative mb-4">
//                 <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700" />
//                 <select
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   className="w-full pl-10 pr-3 py-2 rounded-lg border text-gray-700"
//                   required
//                 >
//                   <option value="" disabled hidden>
//                     Select Location
//                   </option>
//                   <option value="Thiruvananthapuram">Thiruvananthapuram</option>
//                   <option value="Kollam">Kollam</option>
//                   <option value="Alappuzha">Alappuzha</option>
//                   <option value="Pathanamthitta">Pathanamthitta</option>
//                   <option value="Kottayam">Kottayam</option>
//                   <option value="Idukki">Idukki</option>
//                   <option value="Ernakulam">Ernakulam</option>
//                   <option value="Thrissur">Thrissur</option>
//                   <option value="Palakkad">Palakkad</option>
//                   <option value="Malappuram">Malappuram</option>
//                   <option value="Kozhikode">Kozhikode</option>
//                   <option value="Wayanad">Wayanad</option>
//                   <option value="Kannur">Kannur</option>
//                   <option value="Kasaragod">Kasaragod</option>
//                 </select>
//               </div>
//             </>
//           )}

//           {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
//           <PasswordStrengthMeter password={password} />

//           <motion.button
//             className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition duration-200"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <Loader className="animate-spin mx-auto" size={24} />
//             ) : (
//               "Sign Up"
//             )}
//           </motion.button>
//         </form>

//         <div className="flex justify-center mt-6 space-x-4">
//           <Link to={"/login"} className="text-blue-700 hover:underline">
//             Already have an account? Login
//           </Link>
//           <Link to={"/"} className="text-blue-700 hover:underline">
//             Back to Home Page
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SignUpPage;

import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, PhoneCall, User, MapPin } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";
import backgroundImage from "../assets/signup-bg.jpg";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactno, setContactno] = useState("");
  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState([]);
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const skillsToSubmit = category === "Volunteer" ? skills : null;

    try {
      await signup(
        email,
        password,
        name,
        contactno,
        category,
        skillsToSubmit,
        location
      );
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSkillChange = (e) => {
    const value = e.target.value;
    setSkills((prev) =>
      prev.includes(value)
        ? prev.filter((skill) => skill !== value)
        : [...prev, value]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
      }}
    >
      <header
        className="w-full p-4 text-white fixed top-0 left-0 flex justify-between items-center z-50 backdrop-blur-lg"
        style={{
          background:
            "linear-gradient(90deg, rgba(30, 64, 175, 0.4) 0%, rgba(59, 130, 246, 0.8) 100%)",
        }}
      >
        <div className="text-xl font-bold">
          <Link to="/">SNRCV</Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <Link to="/">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
            </Link>
            <Link to="/login">
              <li className="hover:text-gray-300 cursor-pointer">Login</li>
            </Link>
            <Link to="/feedback">
              <li className="hover:text-gray-300 cursor-pointer">Feedback</li>
            </Link>
          </ul>
        </nav>
      </header>

      <div
        className="w-full max-w-lg p-8 bg-white bg-opacity-90 rounded-xl shadow-lg mx-4 overflow-y-auto mt-16"
        style={{ maxHeight: "80vh" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">
          Create Your Account
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            icon={PhoneCall}
            type="text"
            placeholder="Contact No"
            value={contactno}
            onChange={(e) => setContactno(e.target.value)}
          />

          <div className="relative mb-4">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700" />
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSkills([]);
                setLocation("");
              }}
              className="w-full pl-10 pr-3 py-2 rounded-lg border text-gray-700"
              required
            >
              <option value="" disabled hidden>
                Category
              </option>
              <option value="Senior Citizen">Senior Citizen</option>
              <option value="Volunteer">Volunteer</option>
            </select>
          </div>

          {category === "Volunteer" && (
            <>
              <h3 className="text-lg font-semibold mb-2 text-blue-700">
                Skills
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  "Driving",
                  "Cooking",
                  "Housekeeping",
                  "Gardening",
                  "Companionship",
                  "Reading",
                  "Shopping",
                  "Medical Assistance",
                ].map((skill) => (
                  <label key={skill} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={skill}
                      checked={skills.includes(skill)}
                      onChange={handleSkillChange}
                      className="h-4 w-4"
                    />
                    <span>{skill}</span>
                  </label>
                ))}
              </div>

              {/* <div className="relative mb-4">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg border text-gray-700"
                  required
                >
                  <option value="" disabled hidden>
                    Select Location
                  </option>
                  Add your location options here
                </select>
              </div> */}
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
            </>
          )}

          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <PasswordStrengthMeter password={password} />

          <motion.button
            className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="animate-spin mx-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>

        <div className="flex justify-center mt-6 space-x-4">
          <Link to={"/login"} className="text-blue-700 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
