import { motion } from "framer-motion";
import Input from "../components/Input";
import {
  HeartPulse,
  HelpCircleIcon,
  HelpingHandIcon,
  Loader,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

      toast.success("Help req send");
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
          How can we help you?
        </h2>

        <form onSubmit={handleHelpReq}>
          <Input
            icon={HelpCircleIcon}
            type="text"
            placeholder="Title"
            value={helptitle}
            onChange={(e) => setHelptitle(e.target.value)}
          />
          <Input
            icon={HelpingHandIcon}
            type="text"
            placeholder="helpdescription"
            value={helpdescription}
            onChange={(e) => setHelpdescription(e.target.value)}
          />
          <Input
            icon={HeartPulse}
            type="text"
            placeholder="additional"
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
  );
};
export default CitizenPage;
