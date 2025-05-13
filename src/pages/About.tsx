
import AnimatedElement from '../components/AnimatedElement';
import { Code, Cloud, Database, GitBranch, Download, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const expertise = [
    {
      title: 'Cloud Architecture',
      description: 'Expert in AWS, Azure, GCP, and Digital Ocean, specializing in scalable and cost-efficient infrastructure.',
      icon: <Cloud className="w-6 h-6 text-orange-400" />
    },
    {
      title: 'DevOps Practices',
      description: 'Implementing CI/CD pipelines, containerization, and infrastructure automation for enhanced deployment efficiency.',
      icon: <GitBranch className="w-6 h-6 text-orange-400" />
    },
    {
      title: 'Database Management',
      description: 'Proficient in PostgreSQL, MySQL, and NoSQL, with expertise in performance tuning and security.',
      icon: <Database className="w-6 h-6 text-orange-400" />
    },
    {
      title: 'Technical Leadership',
      description: 'Leading cross-functional teams and driving technological transformation in enterprise environments.',
      icon: <Code className="w-6 h-6 text-orange-400" />
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      {/* Bio Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <AnimatedElement className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As a results-driven DevOps Engineer with 10 years of comprehensive IT experience, I specialize in architecting, automating, and optimizing robust and scalable infrastructures across diverse cloud environments, including AWS, Azure, GCP, and Digital Ocean.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in technology has been driven by a vision to transform how businesses leverage cloud computing and automation. With expertise in CI/CD pipeline development, containerization, and configuration management, I've consistently delivered solutions that enhance deployment velocity and system reliability.
            </p>
          </div>
        </AnimatedElement>

        {/* Areas of Expertise */}
        <AnimatedElement delay={200} className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area) => (
              <div key={area.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 mb-4 mx-auto">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{area.title}</h3>
                <p className="text-gray-300 text-center">{area.description}</p>
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* My DevOps/Freelancing Approach */}
        <AnimatedElement delay={300} className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">My DevOps/Freelancing Approach</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Results-driven DevOps Engineer with 10 years of comprehensive IT expertise, specializing in architecting, automating, and optimizing scalable infrastructures across diverse cloud platforms such as AWS, Azure, GCP, and Digital Ocean. Skilled in developing efficient CI/CD pipelines using GitHub Actions and Azure DevOps, and proficient in containerization with Docker and Kubernetes to accelerate deployment cycles and enhance system reliability. Adept at bridging development and operations, with a strong background in business logic design, database optimization, and end-user web application planning. Experienced in leading large-scale IT projects, including network and infrastructure migrations, and service desk analysis, providing a solid foundation in end-to-end IT operations and user-centric solutions.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-6">The Hiking Mindset</h3>
              
              <div className="flex flex-col md:flex-row gap-8 mb-2 items-start">
                <div className="w-full md:w-1/3 flex items-start">
                  <img
                    src="/profile-hiking.jpg"
                    alt="Hiking Mindset"
                    className="w-full h-64 object-cover rounded-xl mt-0"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 mb-6">
                    Drawing parallels between hiking and DevOps practices helps illustrate my methodical 
                    approach to technical challenges and project management. Each trait represents a key 
                    aspect of how I navigate complex technical landscapes.
                  </p>
                </div>
              </div>

              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Strategic Planning</h4>
                    <p>Just as a hiker meticulously plans their route, assessing terrain and resources, I approach projects by carefully architecting solutions and defining strategic roadmaps to ensure efficient and predictable delivery.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <GitBranch className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Resilient Navigation</h4>
                    <p>Unexpected challenges are part of any journey. My mindset involves building resilient systems and applying methodical problem-solving skills to navigate obstacles effectively and maintain operational stability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <Cloud className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Adaptive Progression</h4>
                    <p>Successful journeys require adapting to changing conditions. I embrace new technologies and methodologies, continuously optimizing processes and adjusting strategies to achieve peak performance and reach project goals.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedElement>

        {/* Explore Further */}
        <AnimatedElement delay={400} className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Explore Further</h2>
          <p className="text-gray-300 text-center mb-8">
            Discover more about my work, experience, and how we can collaborate on your next project.
          </p>
          <div className="flex justify-center space-x-8 flex-wrap gap-4">
            <a 
              href="/assets/disc-assessment.pdf" 
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="w-5 h-5" />
              D.I.S.C.
            </a>
            <a 
              href="/files/Immanuel_Dhliso_DevOps_Resume.pdf" 
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <Link to="/contact" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold">
              <Mail className="w-5 h-5" />
              Contact Me
            </Link>
          </div>
        </AnimatedElement>
      </section>
    </div>
  );
};

export default About;