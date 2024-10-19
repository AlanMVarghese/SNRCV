import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const VolunteerPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-blue-300 bg-opacity-50  rounded-xl shadow-2xl border"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700  bg-clip-text">
        Volunteer
      </h2>

      <div className="space-y-6">
        <motion.div
          className="p-4 bg-white  rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Profile Information
          </h3>
          <p className="text-black">Name: {user.name}</p>
          <p className="text-black">Email: {user.email}</p>
          <p className="text-black">Contact No: {user.contactno}</p>
          <p className="text-black">Category: {user.category}</p>
        </motion.div>
        <motion.div
          className="p-4 bg-white rounded-lg border "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Account Activity
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
          onClick={handleLogout}
          className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 "
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
export default VolunteerPage;
