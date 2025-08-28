import { BookOpen, Microscope, Heart, Leaf } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to advancing scientific knowledge through molecular genetics research and biotechnological innovation
          </p>
        </div>

        {/* Introduction Section */}
        <div className="mb-16 bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-justify text-gray-700 leading-relaxed max-w-4xl mx-auto">
            I am a second-year undergraduate student in the Department of Biotechnology and Genetic Engineering at Jahangirnagar University. My academic interests lie in molecular genetics and its applications in healthcare and agriculture. Driven by a passion for innovation, inquiry, and evidence-based discovery, I aim to contribute meaningfully to science and society through my research and academic pursuits. As a dedicated student of biotechnology, I am committed to advancing scientific knowledge and innovation. My immediate goal is to pursue higher education abroad to enhance my research experience in molecular biology, genetic research, and the application of biotechnology in medicine and agriculture. In the long term, I aspire to become an academician and researcher, contributing to the global scientific community through impactful teaching, research, and by addressing real-world challenges through biotechnological solutions.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-300/20 to-indigo-200/20 rounded-full -translate-x-12 translate-y-12"></div>
            <div className="relative z-10">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl w-fit mb-4 shadow-sm">
                <BookOpen className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-700 mb-4 font-medium">BSc in Biotechnology and Genetic Engineering at Jahangirnagar University</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 shadow-sm"></div>
                  Session: 2021–2022 (Ongoing)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 shadow-sm"></div>
                  HSC: BAF Shaheen College, Dhaka
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 shadow-sm"></div>
                  SSC: Durgapur High School, Chandpur
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-emerald-100/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-300/20 to-emerald-200/20 rounded-full -translate-x-12 translate-y-12"></div>
            <div className="relative z-10">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl w-fit mb-4 shadow-sm">
                <Microscope className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research Focus</h3>
              <p className="text-gray-700 mb-4 font-medium">Molecular biology and genetic engineering applications</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-3 shadow-sm"></div>
                  DNA extraction & PCR
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-3 shadow-sm"></div>
                  Gel electrophoresis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-3 shadow-sm"></div>
                  Bioinformatics (BLAST, NCBI)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-3 shadow-sm"></div>
                  Laboratory microscopy
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-violet-100/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-200/30 to-fuchsia-300/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-300/20 to-violet-200/20 rounded-full -translate-x-12 translate-y-12"></div>
            <div className="relative z-10">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl w-fit mb-4 shadow-sm">
                <Heart className="w-12 h-12 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Goals</h3>
              <p className="text-gray-700 mb-4 font-medium">Contributing to global scientific advancement</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-full mr-3 shadow-sm"></div>
                  Pursue higher education abroad
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-full mr-3 shadow-sm"></div>
                  Academic research career
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-full mr-3 shadow-sm"></div>
                  Healthcare & agriculture solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-full mr-3 shadow-sm"></div>
                  Evidence-based discovery
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hobbies and Interests Section */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 rounded-3xl shadow-xl p-8 border border-slate-200/50">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-8 text-center">Hobbies and Interests</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: BookOpen, 
                text: 'Reading books, scientific journals, articles, and publications',
                bg: 'from-amber-50 via-orange-50 to-amber-100',
                iconBg: 'bg-amber-500',
                dot: 'from-amber-500 to-orange-500'
              },
              { 
                icon: Microscope, 
                text: 'Science communication and writing for awareness',
                bg: 'from-cyan-50 via-blue-50 to-cyan-100',
                iconBg: 'bg-cyan-500',
                dot: 'from-cyan-500 to-blue-500'
              },
              { 
                icon: Leaf, 
                text: 'Gardening and promoting environmental conservation',
                bg: 'from-lime-50 via-green-50 to-emerald-100',
                iconBg: 'bg-green-500',
                dot: 'from-lime-500 to-green-500'
              },
              { 
                icon: Heart, 
                text: 'Community service and educational outreach',
                bg: 'from-rose-50 via-pink-50 to-rose-100',
                iconBg: 'bg-rose-500',
                dot: 'from-rose-500 to-pink-500'
              }
            ].map((hobby, index) => (
              <div key={index} className={`relative bg-gradient-to-br ${hobby.bg} p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className={`${hobby.iconBg} bg-opacity-20 backdrop-blur-sm p-3 rounded-xl w-fit mb-4 shadow-sm`}>
                    <hobby.icon className={`w-8 h-8 ${hobby.iconBg.replace('bg-', 'text-')}`} />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{hobby.text}</p>
                  <div className={`w-full h-1 bg-gradient-to-r ${hobby.dot} rounded-full mt-4 opacity-60`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;