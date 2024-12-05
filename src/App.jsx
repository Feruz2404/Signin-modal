import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/Products";
import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Swiperr from "./components/Swiperr";

// Reusable Modal Component with enhanced design
const Modal = ({ isOpen, toggleAction, children }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="w-96 min-h-56 bg-gradient-to-r from-[#567a1b] to-[#611159] p-6 rounded-3xl shadow-lg transform transition-all duration-300 ease-out scale-110">
          {children}
          <button
            onClick={toggleAction}
            className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

function App() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const toggleActions = (action) => {
    if (action === "signIn") {
      setSignIn(true);
      setSignUp(false);
    } else if (action === "signUp") {
      setSignUp(true);
      setSignIn(false);
    }
  };

  // Shared button style with smooth hover effect
  const buttonStyle = "h-[45px] w-[150px] text-white font-semibold flex justify-center items-center px-4 py-2 border-2 border-transparent rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110";

  return (
    <>
      <Header />
      <Swiperr />
      <div className="flex justify-center space-x-6 p-6 bg-gradient-to-r from-[#0f172a] to-[#111827]">
        <button
          onClick={() => toggleActions("signIn")}
          className={`${buttonStyle} bg-[#567a1b] hover:border-[#567a1b] hover:bg-opacity-0`}
          aria-label="Sign In"
        >
          Sign In
        </button>
        <button
          onClick={() => toggleActions("signUp")}
          className={`${buttonStyle} bg-[#611159] hover:border-[#611159] hover:bg-opacity-0`}
          aria-label="Sign Up"
        >
          Sign Up
        </button>
      </div>

      {/* Reusable Modals */}
      <Modal isOpen={signIn} toggleAction={() => setSignIn(false)}>
        <SignIn toggle={toggleActions} />
      </Modal>
      <Modal isOpen={signUp} toggleAction={() => setSignUp(false)}>
        <SignUp toggle={toggleActions} />
      </Modal>

      <Products />
      <ToastContainer />
    </>
  );
}

export default App;
