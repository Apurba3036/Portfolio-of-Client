import { useState, useEffect } from 'react';
import { Microscope, Dna, FlaskConical, Leaf, Facebook, Linkedin, Github, Instagram, Download, X, Brain, ChevronRight, Globe, ExternalLink } from 'lucide-react';

function Home() {
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);

  const toggleResearchModal = () => setIsResearchModalOpen(!isResearchModalOpen);

  return (
    <section id="home" className="pt-24 pb-32 px-4 min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-10">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-blue-200 to-green-200 text-blue-800 px-5 py-2 rounded-full text-sm font-medium shadow-md">
                🧬 Welcome to my Portfolio
              </span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              Advancing Science Through
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block mt-3 mb-8">
                Biotechnology
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Second-year undergraduate student at Jahangirnagar University, passionate about molecular genetics,
              3D bioprinting, and biotechnological applications in healthcare and agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={toggleResearchModal}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Microscope className="w-5 h-5 mr-2" />
                View Research
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#" className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <Facebook className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-blue-700" />
              </a>
              <a href="#" className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <Github className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://undergradcareers.nd.edu/assets/392241/1200x/pharmabiotech2.jpg"
                alt="Biotechnology Research"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Dna className="w-6 h-6 text-green-600" />
              </div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <FlaskConical className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-spin" style={{ animationDuration: '3s' }}>
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
            </div>
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
                    অর্গানয়েডস হলো ল্যাবরেটরিতে স্টেম সেল থেকে উৎপন্ন ত্রিমাত্রিক বা থ্রিডি(3D) কোষীয় গঠন যার গঠন,কার্যকারিতা ও জটিল বৈশিষ্ট্যগুলো মানুষের আসল অঙ্গের অনুরূপ হয়।
এটি মস্তিষ্ক,কিডনি,যকৃৎ,অন্ত্রসহ নানা অঙ্গের অনুকরণে গঠিত হতে পারে।
এতে সাধারণত 2D কোষ কালচারের তুলনায় অধিক গ্রহণযোগ্য 3D ইন ভিট্রো মডেল পাওয়া যায়।
অর্গানয়েডস নানা ধরনের হতে পারে।
যেমন:সেরিব্রাল অর্গানয়েড (মস্তিস্কের মত কৃত্রিম গঠন),লিঙ্গুয়াল অর্গানয়েড (জিহ্বার অংশগুলোর পুনর্গঠন),অন্ত্রের অর্গানয়েড (অন্ত্রের টিস্যু বা প্লুরিপোটেন্ট স্টেম সেল থেকে সরাসরি উৎপন্ন অন্ত্রের গঠন),হেপাটিক অর্গানয়েড (হেপাটিক অংশের অনুরূপ গঠন),গ্যাস্ট্রোইনটেস্টাইনাল অর্গানয়েড (গ্যাস্ট্রোইনটেস্টাইনাল ট্র্যাক্টের কৃত্রিমভাবে উৎপন্ন গঠন) ইত্যাদি।
অর্গানয়েডস রোগ গবেষণা বিশেষ করে ক্যান্সার,জিনগত রোগ এবং ভাইরাসজনিত রোগের উপর গবেষণায় অত্যন্ত কার্যকরী।
এর মাধ্যমে নতুন ওষুধের কার্যকারীতা বা পার্শ্বপ্রতিক্রিয়ার সম্ভাবনা আছে কিনা তা জানা যায়।
এছাড়াও এর মাধ্যমে ব্যক্তির রোগের ধরনভেদে personalized medicine ও প্রদান করা সম্ভব।
২০১৯ সালে বিশ্বব্যাপী ছড়িয়ে পড়া করোনা ভাইরাসে শ্বাসপ্রশ্বাসজনিত সমস্যার দরুন ফুসফুস ব্যাপক ক্ষতিগ্রস্ত হওয়ায় বিজ্ঞানীরা স্টেম সেল থেকে ফুসফুস অর্গানয়েড তৈরি করেন এবং করোনা ভাইরাস কিভাবে ফুসফুসে আক্রমণ করে তা নির্ণয় করার এবং সম্ভাব্য ওষুধ শনাক্ত করার চেষ্টা চালান।
2010 এর দশকের গোড়ার দিক থেকে অর্গানয়েড বৃদ্ধির কৌশল দ্রুত উন্নত হয়েছে এবং বর্তমানে সবচেয়ে সম্ভাবনাময় বৈজ্ঞানিক গবেষণার একটি ক্ষেত্র হিসেবে এটি সমাদৃত।
                                                                        
থ্রিডি বায়োপ্রিন্টিং একটি উন্নত প্রযুক্তি যা বায়োইঙ্ক (জৈব কাঁচামাল) ব্যবহার করে কোষ, জৈব টিস্যু বা অঙ্গপ্রত্যঙ্গ প্রিন্ট করার জন্য ব্যবহৃত হয়। এটি একটি বৈজ্ঞানিক 3D প্রিন্টার,তবে এখানে কালি হিসেবে জীবন্ত কোষ ব্যবহৃত হয়।এটি একটি অ্যাডিটিভ ম্যানুফ্যাকচারিং (Additive Manufacturing) কৌশল, যার মাধ্যমে "বায়োইঙ্ক" (কোষ সম্বলিত জৈব উপাদান) ব্যবহার করে থ্রিডি জীববৈজ্ঞানিক গঠন পাওয়া যায়।
থ্রিডি বায়োপ্রিন্টিং কোষের বণ্টন,বিন্যাস ও পরিবেশের সঙ্গে পারস্পরিক ক্রিয়ার ওপর সূক্ষ্ম নিয়ন্ত্রণ সম্পর্কে ধারণা দেয়।ফলে নির্দিষ্ট গঠন ও কার্যকারিতার সঙ্গে জটিল অর্গানয়েড তৈরি করা সম্ভব হয়।আর তৈরিকৃত এই অর্গানয়েডের গঠন আরও জটিল ও বাস্তবসম্মত হয়,ফলে দেহের আসল পরিবেশের সাথে আরো ভালো খাপ খাওয়াতে পারে।
এর মাধ্যমে ত্বকের জখম বা পুড়ে যাওয়া স্থানে বায়োপ্রিন্টেড টিস্যু লাগিয়ে চিকিৎসা ও করা সম্ভব।
এই পদ্ধতিতে কৃত্রিম টিস্যু ও অঙ্গ তৈরি করা যায়।আমরা আশা করতে পারি এর হাত ধরে বিজ্ঞানের অগ্রগতির সাথে সাথে ভবিষ্যতে কৃত্রিম হৃদয়,কিডনি বা লিভার তৈরি করে রোগীদের দেহে প্রতিস্থাপন করা যাবে।
যেমন: নিউইয়র্কের বিজ্ঞান গবেষকগণ দেহ থেকে পৃথকীকৃত জীবন্ত কোষের সাহায্যে মানুষের কৃত্রিম কান প্রিন্ট করেছেন যা জন্মগতভাবে কানবিহীন বা দূর্ঘটনাজনিত কারণে কান হারানো ব্যক্তিদের দেহে পুনঃস্থাপন করা সম্ভব।

অর্গানয়েড এবং থ্রিডি বায়োপ্রিন্টিং এই দুটি প্রযুক্তি একসাথে কাজে লাগিয়ে ভবিষ্যতে সম্পূর্ণ কার্যকর কৃত্রিম অঙ্গ তৈরি করা সম্ভব।অর্গানয়েডের মাধ্যমে প্রস্তুত করা সম্ভব একটি সুচিন্তিত এবং সুনিপুণ মডেল,অতঃপর থ্রিডি বায়োপ্রিন্টিংয়ের মাধ্যমে তাকে দেওয়া সম্ভব একটি জটিল সম্পূর্ণ রূপ।

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

export default Home;