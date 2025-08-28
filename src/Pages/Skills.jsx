function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Skills and Qualities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to advancing scientific knowledge through molecular genetics research and biotechnological innovation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Proficient in DNA extraction, PCR, gel electrophoresis, and microscopy',
            'Skilled in using bioinformatics tools such as BLAST and NCBI databases',
            'Strong academic writing abilities in reports, reviews, and research papers',
            'Effective event host and coordinator for academic programs',
            'Highly organized, detail-oriented, and an excellent team collaborator',
            'Enthusiastic about learning new scientific techniques and applying them to practical challenges'
          ].map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <span className="text-gray-800 font-semibold text-sm">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;