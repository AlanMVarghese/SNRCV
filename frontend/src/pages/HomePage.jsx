import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <header className="w-full p-4 bg-blue-700 text-white fixed top-0 left-0 flex justify-between items-center z-50">
        <div className="text-xl font-bold">SNRCV</div>
        <nav>
          <ul className="flex space-x-8">
            <Link to="/">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
            </Link>
            <Link to="/stories">
              <li className="hover:text-gray-300 cursor-pointer">Stories</li>
            </Link>
            <Link to="/login">
              <li className="hover:text-gray-300 cursor-pointer">Login</li>
            </Link>
            <Link to="/signup">
              <li className="hover:text-gray-300 cursor-pointer">Register</li>
            </Link>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-20 p-6 bg-gray-100 overflow-y-auto">
        {" "}
        {/* Ensure this has overflow-y-auto */}
        {/* Hero Section */}
        <section className="w-full h-auto bg-white p-12 text-center shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-4">
            Making a Difference Together
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Together, we can brighten the lives of our seniors and build a
            caring community.
          </p>
        </section>
        {/* Features Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">
              Hundreds of stories to tell
            </h2>
            <p className="text-gray-600 mb-3">
              "Hundreds of stories to tell, filled with joy and gratitude!"
            </p>
            <Link to="/stories">
              <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300">
                Write a story
              </button>
            </Link>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Start Volunteering</h2>
            <p className="text-gray-600 mb-3">
              "Make a difference today—start volunteering!"
            </p>
            <Link to="/login">
              <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300">
                Start Volunteering
              </button>
            </Link>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Ask Help</h2>
            <p className="text-gray-600 mb-3">
              "Seeking help is a sign of strength."
            </p>
            <Link to="/login">
              <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300">
                Need Help
              </button>
            </Link>
          </div>
        </section>
        {/* Additional Space for Scrolling */}
        <div className="h-96"></div>{" "}
        {/* Added height to create space for scrolling */}
      </main>

      {/* Footer */}
      <footer className="w-full p-4 bg-blue-700 text-white text-center">
        <p>&copy; 2024 SNRCV. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
