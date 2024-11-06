// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Lock, Loader } from "lucide-react";
// import { Link } from "react-router-dom";
// import Input from "../components/Input";
// import { useAuthStore } from "../store/authStore";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { login, isLoading, error } = useAuthStore();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     await login(email, password);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-md w-full bg-blue-300 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
//     >
//       <div className="p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
//           Welcome Back
//         </h2>

//         <form onSubmit={handleLogin}>
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

//           <div className="flex items-center mb-6">
//             <Link
//               to="/forgot-password"
//               className="text-sm text-blue-700 hover:underline"
//             >
//               Forgot password?
//             </Link>
//           </div>
//           {error && <p className="text-red-500 font-semibold mb-2">{error}</p>}

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 "
//             type="submit"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <Loader className="w-6 h-6 animate-spin  mx-auto" />
//             ) : (
//               "Login"
//             )}
//           </motion.button>
//         </form>
//       </div>
//       <div className="px-8 py-4 bg-white  flex justify-center">
//         <p className="text-sm text-black">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-blue-700 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//       <div className="px-8 py-4 bg-white flex justify-center">
//           <p className="text-sm text-black">
//             <Link to={"/"} className="text-blue-700 hover:underline">
//               Back to Home Page
//             </Link>
//           </p>
//         </div>
//     </motion.div>
//   );
// };
// export default LoginPage;

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
import backgroundImage from "../assets/signup-bg.jpg"; // Assuming the same background image as SignUpPage

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
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
            <Link to="/signup">
              <li className="hover:text-gray-300 cursor-pointer">Register</li>
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
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
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

          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

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
              "Login"
            )}
          </motion.button>
        </form>

        <div className="flex justify-between mt-6 space-x-4">
          <Link to="/forgot-password" className="text-blue-700 hover:underline">
            Forgot password?
          </Link>
          <Link to="/signup" className="text-blue-700 hover:underline">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
