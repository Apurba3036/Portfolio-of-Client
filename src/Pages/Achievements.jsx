import { Award, Users } from 'lucide-react';

function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Achievements & Activities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600">Recognition for academic excellence and community involvement</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Academic Awards</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-2">2nd Place, University Biology Olympiad</h4>
                <p className="text-gray-600 text-sm">Outstanding performance in competitive biology assessment</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-2">Best Presentation Award</h4>
                <p className="text-gray-600 text-sm">Research Poster Session recognition</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-2">Dean's List Recognition</h4>
                <p className="text-gray-600 text-sm">Academic excellence in biotechnology studies</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Activities & Involvement</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-2">Biotechnology Club Member</h4>
                <p className="text-gray-600 text-sm">Active participant in university biotechnology initiatives</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-2">Science Fest Volunteer</h4>
                <p className="text-gray-600 text-sm">Contributed to University Science Fest 2024</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-2">Community Service</h4>
                <p className="text-gray-600 text-sm">Blood donation drives and peer tutoring</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Development</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Recent Advances in Genetic Engineering', date: '2024' },
              { title: 'Poster Presentation Workshop', date: '2024' },
              { title: 'ELSA International Conference', date: '2023' },
              { title: 'CRISPR & Genome Editing Workshop', date: '2024' },
              { title: 'Biotechnology in Agriculture and Medicine', date: '2023' },
              { title: 'Scientific Research Methods and Ethics', date: '2024' }
            ].map((workshop, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 text-sm">{workshop.title}</h4>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{workshop.date}</span>
                </div>
                <p className="text-gray-600 text-xs">Professional development and skill enhancement</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;