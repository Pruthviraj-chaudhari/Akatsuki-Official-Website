import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  loading: boolean;
  error: string;
  success: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus({
        loading: false,
        error: "",
        success: "Your message has been sent. Thank you!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        loading: false,
        error: "There was an error sending your message. Please try again.",
        success: "",
      });
    }
  };

  const contactCards = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Our Address",
      content: "R. C. Patel Institute of Technology, Near Nimzari Naka, Shahada Road, Shirpur, Maharashtra - 425405",
      link: null,
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      content: "akatsuki@rcpit.ac.in",
      link: "mailto:akatsuki@rcpit.ac.in",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      content: "+91 8080511069",
      link: "tel:+918080511069",
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Follow Us",
      content: "@akatsuki_codingclub",
      link: "https://instagram.com/akatsuki_codingclub",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get in touch with <span className="text-red-600">Akatsuki</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Contact us for any queries, help or guidance from experts. We're always ready to assist you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                {card.link ? (
                  <a
                    href={card.link}
                    className="flex flex-col items-center text-center space-y-4 hover:text-red-600 transition-colors"
                  >
                    <div className="text-red-600 transform group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-gray-600">{card.content}</p>
                  </a>
                ) : (
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-red-600 transform group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-gray-600">{card.content}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.7130973147446!2d74.87659731488918!3d21.36180898581892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf3203969b41c7%3A0xb4050432d04ef5b8!2sR.%20C.%20Patel%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1641411494541!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              {formStatus.loading && (
                <div className="text-center text-gray-600">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
                </div>
              )}
              {formStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {formStatus.error}
                </div>
              )}
              {formStatus.success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                  {formStatus.success}
                </div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;