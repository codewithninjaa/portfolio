import { X, Mail,  Phone, ExternalLink } from "lucide-react";
function ContactPopup({ showContact, setShowContact }) {
  if (!showContact) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      {/* Modal */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 md:p-10 relative">
        
        {/* Close Button */}
        <button
          onClick={() => setShowContact(false)}
          className="absolute top-5 right-5 text-gray-400 hover:text-black transition"
        >
          <X size={26} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-yellow-500 font-semibold uppercase tracking-[0.3em] mb-2">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-black mb-3">
            Contact Me
          </h2>

          <p className="text-gray-500 leading-relaxed">
            Open to internships, frontend opportunities, collaborations,
            and networking.
          </p>
        </div>

        {/* Gmail Card */}
        <div
          onClick={() => (window.location.href = "mailto:yourmail@example.com")}
          className="cursor-pointer flex items-center justify-between border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:border-yellow-400 transition mb-4 group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-xl group-hover:scale-110 transition">
              <Mail className="text-yellow-600" size={22} />
            </div>

            <div>
              <p className="font-semibold text-black">Email</p>
              <p className="text-gray-600 text-sm">
                nikitasankrit@gmail.com
              </p>
            </div>
          </div>

          <ExternalLink
            className="text-gray-400 group-hover:text-black transition"
            size={20}
          />
        </div>

        {/* LinkedIn Card */}
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/nikita-kumari-a92871322/",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="cursor-pointer flex items-center justify-between border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:border-blue-400 transition mb-4 group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl group-hover:scale-110 transition">
              {/* <Linkedin className="text-blue-600" size={22} /> */}
            </div>

            <div>
              <p className="font-semibold text-black">LinkedIn</p>
              <p className="text-gray-600 text-sm">
                https://www.linkedin.com/in/nikita-kumari-a92871322/
              </p>
            </div>
          </div>

          <ExternalLink
            className="text-gray-400 group-hover:text-black transition"
            size={20}
          />
        </div>

        {/* Phone Card */}
        <div
          onClick={() => (window.location.href = "tel:+919876543210")}
          className="cursor-pointer flex items-center justify-between border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:border-green-400 transition group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl group-hover:scale-110 transition">
              <Phone className="text-green-600" size={22} />
            </div>

            <div>
              <p className="font-semibold text-black">Phone</p>
              <p className="text-gray-600 text-sm">
                +91 6299687204
              </p>
            </div>
          </div>

          <ExternalLink
            className="text-gray-400 group-hover:text-black transition"
            size={20}
          />
        </div>

        {/* Footer Button */}
        <button
          onClick={() =>
            (window.location.href = "mailto:yourmail@example.com")
          }
          className="w-full mt-8 bg-black hover:bg-gray-900 text-white py-4 rounded-2xl font-semibold text-lg transition"
        >
          Let’s Work Together
        </button>
      </div>
    </div>
  );
}

export default ContactPopup;