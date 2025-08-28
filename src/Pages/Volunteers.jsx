import { Users, Calendar, Heart, BookOpen, Award, Droplets, Leaf, UserCheck } from 'lucide-react';

function ClubsAndVolunteer() {
  return (
    <section id="clubs-volunteer" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Clubs & Volunteer Activities
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Committed to community service, scientific collaboration, and making a positive impact through active participation
          </p>
        </div>

        {/* Main Activities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Biotechnology Club Card */}
          <div className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-indigo-100/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-300/20 to-indigo-200/20 rounded-full -translate-x-16 translate-y-16"></div>
            <div className="relative z-10">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl w-fit mb-6 shadow-sm">
                <Users className="w-16 h-16 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Biotechnology Club</h3>
              <p className="text-lg text-indigo-700 font-semibold mb-4">Member • Jahangirnagar University</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Active member contributing to scientific discussions, research presentations, and collaborative projects within the biotechnology community at the university.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">Scientific Collaboration</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Research Presentations</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">Academic Networking</span>
              </div>
            </div>
          </div>

          {/* Science Fest Card */}
          <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-emerald-100/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-200/30 to-cyan-300/30 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-300/20 to-emerald-200/20 rounded-full -translate-x-16 translate-y-16"></div>
            <div className="relative z-10">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl w-fit mb-6 shadow-sm">
                <Calendar className="w-16 h-16 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">University Science Fest 2024</h3>
              <p className="text-lg text-emerald-700 font-semibold mb-4">Volunteer</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Volunteered in organizing and coordinating the annual science festival, facilitating workshops, managing events, and promoting scientific awareness among students.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">Event Organization</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full">Workshop Coordination</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full">Science Promotion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Community Service Activities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-10">Community Service</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blood Donation Card */}
            <div className="relative bg-gradient-to-br from-rose-50 via-red-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl w-fit mb-4 shadow-sm">
                  <Droplets className="w-12 h-12 text-rose-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Blood Donation Drives</h4>
                <p className="text-gray-700 leading-relaxed">
                  Actively participated in campus blood donation campaigns, contributing to community health initiatives and emergency blood supply for local hospitals.
                </p>
                <div className="mt-4 flex items-center text-rose-600">
                  <Heart className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Saving Lives Through Donation</span>
                </div>
              </div>
            </div>

            {/* Campus Clean-up Card */}
            <div className="relative bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl w-fit mb-4 shadow-sm">
                  <Leaf className="w-12 h-12 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Campus Clean-up Drives</h4>
                <p className="text-gray-700 leading-relaxed">
                  Participated in environmental conservation efforts through campus cleaning initiatives, promoting sustainability and environmental awareness among students.
                </p>
                <div className="mt-4 flex items-center text-green-600">
                  <Leaf className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Environmental Stewardship</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Support Section */}
        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 rounded-3xl shadow-xl p-8 border border-amber-200/50">
          <div className="text-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl w-fit mx-auto mb-6 shadow-sm">
              <BookOpen className="w-16 h-16 text-amber-600 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-4">Academic Support & Mentoring</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
              Dedicated to helping fellow students succeed through peer tutoring and academic assistance programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: UserCheck,
                title: 'Peer Tutoring',
                description: 'Providing one-on-one academic support to fellow students in biotechnology and molecular biology subjects',
                color: 'amber'
              },
              {
                icon: BookOpen,
                title: 'Study Groups',
                description: 'Organizing and leading collaborative study sessions for complex scientific concepts and laboratory techniques',
                color: 'orange'
              },
              {
                icon: Award,
                title: 'Academic Mentoring',
                description: 'Guiding junior students in course selection, research opportunities, and academic goal setting',
                color: 'yellow'
              }
            ].map((activity, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-white/50">
                <div className={`bg-${activity.color}-100 p-3 rounded-xl w-fit mb-4 shadow-sm`}>
                  <activity.icon className={`w-10 h-10 text-${activity.color}-600`} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{activity.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{activity.description}</p>
                <div className={`w-full h-1 bg-gradient-to-r from-${activity.color}-400 to-${activity.color}-600 rounded-full mt-4 opacity-60`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Making a Difference</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through active participation in clubs, volunteer work, and community service, I strive to contribute positively to both the academic community and society at large. These experiences have strengthened my leadership skills, expanded my network, and deepened my commitment to using science for the betterment of humanity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClubsAndVolunteer;