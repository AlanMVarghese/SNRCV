// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="w-full h-screen flex flex-col overflow-hidden">
//       {/* Navbar */}
//       <header className="w-full p-4 bg-blue-700 text-white fixed top-0 left-0 flex justify-between items-center z-50">
//         <div className="text-xl font-bold"> <Link to="/">SNRCV</Link></div>
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

//       {/* Main Content */}
//       <main className="flex-grow mt-20 p-6 bg-gray-100 overflow-y-auto">
//         {" "}
//         {/* Ensure this has overflow-y-auto */}
//         {/* Hero Section */}
//         <section className="w-full h-auto bg-white p-12 text-center shadow-lg rounded-lg">
//           <h1 className="text-4xl font-bold mb-4">
//             Making a Difference Together
//           </h1>
//           <p className="text-lg text-gray-600 mb-8">
//             Together, we can brighten the lives of our seniors and build a
//             caring community.
//           </p>
//         </section>
//         {/* Features Section */}
//         <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="p-8 bg-white rounded-lg shadow-md text-center">
//             <h2 className="text-2xl font-bold mb-4">Start Volunteering</h2>
//             <p className="text-gray-600 mb-3">
//               "Make a difference today—start volunteering!"
//             </p>
//             <Link to="/login">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300">
//                 Start Volunteering
//               </button>
//             </Link>
//           </div>
//           <div className="p-8 bg-white rounded-lg shadow-md text-center">
//             <h2 className="text-2xl font-bold mb-4">Ask Help</h2>
//             <p className="text-gray-600 mb-3">
//               "Seeking help is a sign of strength!"
//             </p>
//             <Link to="/login">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300">
//                 Need Help
//               </button>
//             </Link>
//           </div>
//           <div className="p-8 bg-white rounded-lg shadow-md text-center">
//             <h2 className="text-2xl font-bold mb-4">Write Feedback</h2>
//             <p className="text-gray-600 mb-3">
//               "Give us you valuable feedback!"
//             </p>
//             <Link to="/feedback">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300">
//                 Feedback
//               </button>
//             </Link>
//           </div>
//         </section>
//         {/* Additional Space for Scrolling */}
//         <div className="h-96"></div>{" "}
//         {/* Added height to create space for scrolling */}
//       </main>

//       {/* Footer */}
//       <footer className="w-full p-4 bg-blue-700 text-white text-center">
//         <p>&copy; 2024 SNRCV. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

// import { Link } from "react-router-dom";
// import backgroundImage from "../assets/homepage_bg.jpg"; // Import your background image

// const HomePage = () => {
//   return (
//     <div
//       className="w-full h-screen flex flex-col overflow-hidden bg-cover bg-center relative"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-blue-900 opacity-80"></div>

//       {/* Navbar */}
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

//       {/* Main Content */}
//       <main className="flex-grow mt-20 p-6 text-white relative z-10 overflow-y-auto">
//         {/* Hero Section */}
//         <section className="w-full h-auto bg-opacity-80 bg-white p-12 text-center shadow-lg rounded-lg backdrop-blur-md bg-gradient-to-r from-blue-700 to-blue-500">
//           <h1 className="text-5xl font-bold mb-4 text-white">
//             Making a Difference Together
//           </h1>
//           <p className="text-lg text-gray-100 mb-8">
//             Together, we can brighten the lives of our seniors and build a
//             caring community.
//           </p>
//         </section>

//         {/* Features Section */}
//         <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-md text-center backdrop-blur-sm">
//             <h2 className="text-2xl font-bold mb-4 text-blue-700">
//               Start Volunteering
//             </h2>
//             <p className="text-gray-600 mb-3">
//               "Make a difference today—start volunteering!"
//             </p>
//             <Link to="/login">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
//                 Start Volunteering
//               </button>
//             </Link>
//           </div>
//           <div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-md text-center backdrop-blur-sm">
//             <h2 className="text-2xl font-bold mb-4 text-blue-700">Ask Help</h2>
//             <p className="text-gray-600 mb-3">
//               "Seeking help is a sign of strength!"
//             </p>
//             <Link to="/login">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
//                 Need Help
//               </button>
//             </Link>
//           </div>
//           <div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-md text-center backdrop-blur-sm">
//             <h2 className="text-2xl font-bold mb-4 text-blue-700">
//               Write Feedback
//             </h2>
//             <p className="text-gray-600 mb-3">
//               "Give us your valuable feedback!"
//             </p>
//             <Link to="/feedback">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
//                 Feedback
//               </button>
//             </Link>
//           </div>
//         </section>

//         {/* Additional Space for Scrolling */}
//         <div className="h-96"></div> {/* Added height to create space for scrolling */}
//       </main>

//       {/* Footer */}
//       <footer className="w-full p-4 bg-blue-700 bg-opacity-80 text-white text-center relative z-10">
//         <p>&copy; 2024 SNRCV. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

// import { Link } from "react-router-dom";
// import backgroundImage from "../assets/homepage_bg.jpg"; // Import your background image

// const HomePage = () => {
//   return (
//     <div
//       className="w-full h-screen flex flex-col overflow-hidden bg-cover bg-center relative"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-blue-900 opacity-80"></div>

//       {/* Navbar */}
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

//       {/* Main Content */}
//       <main className="flex-grow mt-20 p-6 text-white relative z-10 overflow-y-auto">
//         {/* Hero Section */}
//         <section className="w-full h-auto bg-opacity-80 bg-white p-12 text-center shadow-lg rounded-lg backdrop-blur-md bg-gradient-to-r from-blue-700 to-blue-500">
//           <h1 className="text-5xl font-bold mb-4 text-white">
//             Making a Difference Together
//           </h1>
//           <p className="text-lg text-gray-100 mb-8">
//             Together, we can brighten the lives of our seniors and build a
//             caring community.
//           </p>
//         </section>

//         {/* Features Section */}
//         <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="p-8 bg-white bg-opacity-30 rounded-lg shadow-md text-center backdrop-blur-lg">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               Start Volunteering
//             </h2>
//             <p className="text-gray-100 mb-3">
//               "Make a difference today—start volunteering!"
//             </p>
//             <Link to="/login">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
//                 Start Volunteering
//               </button>
//             </Link>
//           </div>
//           <div className="p-8 bg-white bg-opacity-30 rounded-lg shadow-md text-center backdrop-blur-lg">
//             <h2 className="text-2xl font-bold mb-4 text-white">Ask Help</h2>
//             <p className="text-gray-100 mb-3">
//               "Seeking help is a sign of strength!"
//             </p>
//             <Link to="/login">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
//                 Need Help
//               </button>
//             </Link>
//           </div>
//           <div className="p-8 bg-white bg-opacity-30 rounded-lg shadow-md text-center backdrop-blur-lg">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               Write Feedback
//             </h2>
//             <p className="text-gray-100 mb-3">
//               "Give us your valuable feedback!"
//             </p>
//             <Link to="/feedback">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
//                 Feedback
//               </button>
//             </Link>
//           </div>
//         </section>

//         {/* Additional Space for Scrolling */}
//         <div className="h-96"></div> {/* Added height to create space for scrolling */}
//       </main>

//       {/* Footer */}
//       <footer className="w-full p-4 bg-blue-700 bg-opacity-80 text-white text-center relative z-10">
//         <p>&copy; 2024 SNRCV. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

// import { Link } from "react-router-dom";
// import backgroundImage from "../assets/homepage_bg.jpg"; // Import your background image

// const HomePage = () => {
//   return (
//     <div
//       className="w-full h-screen flex flex-col overflow-hidden bg-cover bg-center relative"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-blue-900 opacity-80"></div>

//       {/* Navbar */}
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

//       {/* Main Content */}
//       <main className="flex-grow mt-20 p-6 text-white relative z-10 overflow-y-auto">
//         {/* Hero Section */}
//         <section className="w-full h-auto bg-blue-700 bg-opacity-30 p-12 text-center shadow-lg rounded-lg backdrop-blur-lg">
//           <h1 className="text-5xl font-bold mb-4 text-white">
//             Making a Difference Together
//           </h1>
//           <p className="text-lg text-gray-100 mb-8">
//             Together, we can brighten the lives of our seniors and build a
//             caring community.
//           </p>
//         </section>

//         {/* Features Section */}
//         <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="p-8 bg-white bg-opacity-30 rounded-lg shadow-md text-center backdrop-blur-lg">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               Start Volunteering
//             </h2>
//             <p className="text-gray-100 mb-3">
//               "Make a difference today—start volunteering!"
//             </p>
//             <Link to="/login">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
//                 Start Volunteering
//               </button>
//             </Link>
//           </div>
//           <div className="p-8 bg-white bg-opacity-30 rounded-lg shadow-md text-center backdrop-blur-lg">
//             <h2 className="text-2xl font-bold mb-4 text-white">Ask Help</h2>
//             <p className="text-gray-100 mb-3">
//               "Seeking help is a sign of strength!"
//             </p>
//             <Link to="/login">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
//                 Need Help
//               </button>
//             </Link>
//           </div>
//           <div className="p-8 bg-white bg-opacity-30 rounded-lg shadow-md text-center backdrop-blur-lg">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               Write Feedback
//             </h2>
//             <p className="text-gray-100 mb-3">
//               "Give us your valuable feedback!"
//             </p>
//             <Link to="/feedback">
//               <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
//                 Feedback
//               </button>
//             </Link>
//           </div>
//         </section>

//         {/* Additional Space for Scrolling */}
//         <div className="h-96"></div> Added height to create space for scrolling
//       </main>

//       {/* Footer */}
//       <footer className="w-full p-4 bg-blue-700 bg-opacity-80 text-white text-center relative z-10">
//         <p>&copy; 2024 SNRCV. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

import { Link } from "react-router-dom";
import backgroundImage from "../assets/homepage_bg.jpg"; // Import your background image

const HomePage = () => {
  return (
    <div
      className="w-full h-screen flex flex-col overflow-hidden bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-blue-900 opacity-80"></div>

      {/* Navbar */}
      <header className="w-full p-4 bg-blue-700 bg-opacity-70 text-white fixed top-0 left-0 flex justify-between items-center z-50 backdrop-blur-lg">
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
            <Link to="/signup">
              <li className="hover:text-gray-300 cursor-pointer">Register</li>
            </Link>
            <Link to="/feedback">
              <li className="hover:text-gray-300 cursor-pointer">Feedback</li>
            </Link>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-20 p-6 text-white relative z-10 overflow-y-auto">
        {/* Hero Section */}
        <section className="w-full h-auto p-12 text-center shadow-lg rounded-lg backdrop-blur-lg bg-transparent">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Making a Difference Together
          </h1>
          <p className="text-lg text-gray-100 mb-8">
            Together, we can brighten the lives of our seniors and build a
            caring community.
          </p>
        </section>

        {/* Features Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white bg-opacity-30 rounded-lg shadow-md text-center backdrop-blur-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Start Volunteering
            </h2>
            <p className="text-black mb-3">
              "Make a difference today—start volunteering!"
            </p>
            <Link to="/login">
              <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
                Start Volunteering
              </button>
            </Link>
          </div>
          <div className="p-8 bg-white bg-opacity-30 rounded-lg shadow-md text-center backdrop-blur-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Ask Help</h2>
            <p className="text-black mb-3">
              "Seeking help is a sign of strength!"
            </p>
            <Link to="/login">
              <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
                Need Help
              </button>
            </Link>
          </div>
          <div className="p-8 bg-white bg-opacity-30 rounded-lg shadow-md text-center backdrop-blur-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Write Feedback
            </h2>
            <p className="text-black mb-3">"Give us your valuable feedback!"</p>
            <Link to="/feedback">
              <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
                Feedback
              </button>
            </Link>
          </div>
        </section>

        {/* Additional Space for Scrolling */}
        {/* <div className="h-96"></div> Added height to create space for scrolling */}
      </main>

      {/* Footer */}
      <footer className="w-full p-4 bg-blue-700 bg-opacity-80 text-white text-center relative z-10">
        <p>&copy; 2024 SNRCV. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
