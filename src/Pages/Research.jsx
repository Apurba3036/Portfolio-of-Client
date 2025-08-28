import { useState } from 'react';
import { Brain, Dna, Leaf, Heart, Calendar, Globe, ExternalLink, ChevronRight, FlaskConical } from 'lucide-react';

function Research() {
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);

  const toggleResearchModal = () => setIsResearchModalOpen(!isResearchModalOpen);

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600">Exploring the frontiers of biotechnology and genetic engineering</p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100"></div>
          </div>
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Brain className="w-8 h-8 text-blue-600 mr-3" />
                  <span className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Featured Research
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Organoids and 3D Bioprinting
                  </span>
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Comprehensive research on organoids as 3D cellular structures derived from stem cells, 
                  mimicking human organs' structure and functionality. Exploring applications in disease research, 
                  drug testing, and personalized medicine.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Published in Biotech Social Club, Jahangirnagar University</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={toggleResearchModal}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    <Globe className="w-4 h-4 mr-2" />
                    Read Full Article (Bangla)
                  </button>
                  <a href="https://www.facebook.com/share/16giuQ9g6w/?mibextid=wwXIfr" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium border border-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300">
                    View Publication <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 rounded-3xl p-10 h-96 relative overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/8/83/Advs2797-fig-0001-m.jpg)` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
                  <div className="relative z-10 text-center h-full flex flex-col justify-center items-center">
                    <div className="w-64 h-64 bg-white/95 rounded-2xl flex items-center justify-center shadow-2xl mb-8 mx-auto backdrop-blur-md overflow-hidden transform hover:rotate-3 transition-transform duration-300">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/83/Advs2797-fig-0001-m.jpg"
                        alt="3D Bioprinting Illustration"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <h4 className="font-extrabold text-gray-900 text-2xl mb-3 tracking-tight drop-shadow-md">
                      3D Bioprinting Technology
                    </h4>
                    <p className="text-gray-700 text-lg font-medium leading-relaxed">
                      Pioneering Advanced Organoid Research
                    </p>
                    <div className="mt-8 flex justify-center space-x-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse shadow-lg"></div>
                      <div className="w-4 h-4 bg-teal-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-4 h-4 bg-purple-600 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Dna className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Molecular Biology</h3>
            <p className="text-gray-600 text-center">Advanced studies in genetic engineering and molecular mechanisms</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Agricultural Biotech</h3>
            <p className="text-gray-600 text-center">Applications of biotechnology in sustainable agriculture</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Medical Applications</h3>
            <p className="text-gray-600 text-center">Biotechnology solutions for healthcare and medicine</p>
          </div>
        </div>
      </div>
      {isResearchModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">অর্গানয়েডস এবং থ্রিডি বায়োপ্রিন্টিং</h3>
                <button 
                  onClick={toggleResearchModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="prose max-w-none">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">জীববিজ্ঞানের অভূতপূর্ব সাফল্য</h4>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    অর্গানয়েডস হলো ল্যাবরেটরিতে স্টেম সেল থেকে উৎপন্ন ত্রিমাত্রিক বা থ্রিডি(3D) কোষীয় গঠন যার গঠন,কার্যকারিতা ও জটিল বৈশিষ্ট্যগুলো মানুষের আসল অঙ্গের অনুরূপ হয়।...
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Brain className="w-5 h-5 text-blue-600 mr-2" />
                      Key Applications
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        Disease research and modeling
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        Drug testing and development
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        Personalized medicine approaches
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        Tissue engineering solutions
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <FlaskConical className="w-5 h-5 text-green-600 mr-2" />
                      Research Methods
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Stem cell cultivation techniques
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        3D bioprinting technologies
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Microscopic analysis
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Molecular characterization
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Globe className="w-5 h-5 text-yellow-600 mr-2" />
                    Publication Details
                  </h5>
                  <p className="text-sm text-gray-700 mb-3">
                    This research was published in Bengali for the Biotech Social Club at Jahangirnagar University, 
                    making cutting-edge scientific concepts accessible to the local academic community.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <strong>Platform:</strong> Biotech Social Club, Jahangirnagar University<br />
                      <strong>Language:</strong> Bengali<br />
                      <strong>Focus:</strong> Educational outreach and awareness
                    </div>
                    <a 
                      href="https://www.facebook.com/share/16giuQ9g6w/?mibextid=wwXIfr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Publication
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-sm">
                    For collaboration opportunities or questions about this research, feel free to reach out through the contact section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Research;