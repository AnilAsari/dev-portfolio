import { useState, type ChangeEvent, type FormEvent } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  message: string;
  company?: string; // Honeypot field
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success"); // or "error"

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    company: "", // Honeypot field
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🛡️ Block bots using honeypot
    if (formData.company && formData.company.trim() !== "") {
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/e8bf35d4d630f540b576d594c87c7b55",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "New message from Portfolio Contact Form",
            _template: "box", // Optional: improve email layout
            _captcha: true, // Optional: FormSubmit CAPTCHA
          }),
        }
      );

      if (res.ok) {
        setFormData({ name: "", email: "", message: "", company: "" });
        snackBar('Thanks! I’ll get back to you soon.', 'success');
        sleepFormSubmit();
      } else {
        snackBar("Something went wrong. Please try again.", 'error');
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }

    setIsSubmitting(false);
  };

  const snackBar = (message: string, type: "success" | "error") => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbar(true);
    setTimeout(() => setSnackbar(false), 3000); // Auto-hide after 3 seconds
  };

  const sleepFormSubmit = () => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      },30000); // Reset after 30 seconds
    }

  return (
    <section
      id="contact"
      className="py-20 bg-black"
      data-name="contact"
      data-file="components/Contact.tsx"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can work together to build amazing applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities,
                collaborating on exciting projects, or sharing insights about
                enterprise application development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  {FiMail({ className: "text-xl text-black" })}
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:anil.asari666@gmail.com"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    anil.asari666@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  {FiLinkedin({ className: "text-xl text-black" })}
                </div>
                <div>
                  <p className="text-gray-400">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/anilaasari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    linkedin.com/in/anilaasari
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  {FiGithub({ className: "text-xl text-black" })}
                </div>
                <div>
                  <p className="text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/AnilAsari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    github.com/anilaasari
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-dark">
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              <div>
                {/* Honeypot (Hidden from users) */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="off"
                  style={{ display: "none" }}
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-400 focus:outline-none text-white"
                  placeholder="Your name"
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-400 focus:outline-none text-white"
                  placeholder="your.email@example.com"
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-400 focus:outline-none text-white resize-none"
                  autoComplete="off"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-primary glow-effect disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2 font-bold">
                    Send Message
                    {FiSend({ className: "text-lg font-bold" })}
                  </span>
                )}
              </button>
            </form>
            {snackbar && (
              <div
                className={`fixed bottom-6 right-10 px-4 py-2 rounded-lg shadow-lg animate-slide-in z-50 ${
                  snackbarType === "success" ? "bg-green-600" : "bg-red-600"
                } text-white`}
              >
                {snackbarMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

}
