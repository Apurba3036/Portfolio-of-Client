import { Mail, Phone, MapPin, Facebook, Linkedin, Github, Instagram } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's collaborate on biotechnology research or discuss opportunities in scientific innovation
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <p className="text-gray-900 font-semibold">ismatjerin@email.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone</p>
                    <p className="text-gray-900 font-semibold">+880 1234-567890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="text-gray-900 font-semibold">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-gray-600 mb-4">Follow me on social media</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">University</span>
                  <span className="text-gray-900 font-semibold">Jahangirnagar University</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Major</span>
                  <span className="text-gray-900 font-semibold">Biotechnology & Genetic Engineering</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Research Interest</span>
                  <span className="text-gray-900 font-semibold">3D Bioprinting</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Career Goal</span>
                  <span className="text-gray-900 font-semibold">PhD in Biotechnology</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-gray-700 text-sm font-medium mb-2">
                    First Name
                  </div>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <div className="block text-gray-700 text-sm font-medium mb-2">
                    Last Name
                  </div>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <div className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </div>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <div className="block text-gray-700 text-sm font-medium mb-2">
                  Subject
                </div>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <div className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </div>
                <textarea 
                  rows="5" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;