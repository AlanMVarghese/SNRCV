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
const CitizenPage = () => {
  const [helptitle, setHelptitle] = useState("");
  const [helpdescription, setHelpdescription] = useState("");
  const [additional, setAdditional] = useState("");
  const { user, help, error, isLoading } = useAuthStore();

  const handleHelpReq = async (e) => {
    e.preventDefault();

    try {
      await help(user.email, helptitle, helpdescription, additional);
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
  return (
    <>
      {user.helpstatus ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-blue-300  bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
              overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 bg-clip-text">
              How can we help you?
            </h2>

            <form onSubmit={handleHelpReq}>
              <Input
                icon={HelpCircleIcon}
                type="text"
                placeholder="Subject"
                value={helptitle}
                onChange={(e) => setHelptitle(e.target.value)}
              />
              <Input
                icon={HelpingHandIcon}
                type="text"
                placeholder="description..."
                value={helpdescription}
                onChange={(e) => setHelpdescription(e.target.value)}
              />
              <Input
                icon={HeartPulse}
                type="text"
                placeholder="time, additional information..."
                value={additional}
                onChange={(e) => setAdditional(e.target.value)}
              />

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
          className="max-w-md w-full mx-auto mt-10 p-8 bg-blue-300 bg-opacity-50  rounded-xl shadow-2xl border"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700  bg-clip-text">
            Help Status
          </h2>

          <div className="space-y-6">
            <motion.div
              className="p-4 bg-white  rounded-lg border "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Volunteer Details
              </h3>
              <p className="text-black">Name: {user.name}</p>
              <p className="text-black">Contact No: {user.contactno}</p>
            </motion.div>
            <motion.div
              className="p-4 bg-white rounded-lg border "
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
              className="w-full py-3 px-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 "
            >
              Cancel Request
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
export default CitizenPage;
