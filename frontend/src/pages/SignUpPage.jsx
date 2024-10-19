import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, PhoneCall, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactno, setContactno] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, name, contactno, category);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-blue-300  bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
          Create Account
        </h2>

        <form onSubmit={handleSignUp}>
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
            type="contactno"
            placeholder="Contact No"
            value={contactno}
            onChange={(e) => setContactno(e.target.value)}
          />
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="size-5 text-blue-700" />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-white rounded-lg border transition duration-200 text-black"
              required
              // Set the "invalid" placeholder color
            >
              {/* Placeholder option */}
              <option value="" disabled hidden className="text-gray-300">
                Category
              </option>
              <option value="Senior Citizen">Senior Citizen</option>
              <option value="Volunteer">Volunteer</option>
            </select>
            <style jsx>{`
              select:invalid {
                color: #9ca3af; /* Equivalent to text-gray-300 */
              }
              select:not(:invalid) {
                color: black; /* Change to black when valid option is selected */
              }
            `}</style>
          </div>

          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <PasswordStrengthMeter password={password} />

          <motion.button
            className="mt-5 w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 
						 "
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className=" animate-spin mx-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-white  flex justify-center">
        <p className="text-sm text-black">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
export default SignUpPage;
