import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <p className="text-center text-gray-500 mb-4">
            We'd love to hear from you! Please fill out the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                name="message"
                placeholder="Type your message here..."
                className="textarea textarea-bordered w-full"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button className="btn btn-primary w-full">Send Message</button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="divider">OR</div>
          <div className="text-center">
            <p className="text-sm">📍 Bangalore, India</p>
            <p className="text-sm">📧 support@example.com</p>
            <p className="text-sm">📞 +91 9876543210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
