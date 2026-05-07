import { useState } from "react";
import ContactPopup from "./ContactPopup";

function Navbar() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      {/* Minimal Top Navbar */}
      <nav className="w-full absolute top-0 left-0 z-50 px-6 md:px-16 py-8">
        <div className="w-full flex justify-end">
          {/* Only One Button */}
          <button
            onClick={() => setShowContact(true)}
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition shadow-lg"
          >
            Contact Me
          </button>
        </div>
      </nav>

      {/* Contact Popup */}
      <ContactPopup
        showContact={showContact}
        setShowContact={setShowContact}
      />
    </>
  );
}

export default Navbar;