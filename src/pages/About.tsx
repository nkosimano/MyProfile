import AnimatedElement from '../components/AnimatedElement'; // Assuming this component exists and works
import { Code, Cloud, Database, GitBranch, Download, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation

const About = () => {
  // Data for the expertise section
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

  // Updated path for the tranquil sky blue view image.
  // Assumes 'sky.png' is in the 'public/assets/' directory of your project.
  const skyBlueImageUrl = '/assets/sky.png'; 

  return (
    // Main container for the About page
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-20 px-4 font-sans">
      
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

        {/* Areas of Expertise Section */}
        <AnimatedElement delay={200} className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area) => (
              <div 
                key={area.title} 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 mb-4 mx-auto">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{area.title}</h3>
                <p className="text-gray-300 text-center text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* My DevOps/Freelancing Approach Section */}
        <AnimatedElement delay={300} className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">My DevOps/Freelancing Approach</h2>
          
          {/* Main container for this section, enabling the layered background effect */}
          {/* Original: bg-white/5. The backdrop-blur-sm here blurs the main page gradient behind this whole card. */}
          <div className="bg-slate-900/10 backdrop-blur-sm rounded-xl relative overflow-hidden shadow-xl"> 
            
            {/* Layer 1: Sky blue background image */}
            <div
              style={{ backgroundImage: `url(${skyBlueImageUrl})` }}
              // Changed opacity from opacity-50 to opacity-60. You can try opacity-40 or opacity-70 as well.
              // The blur-sm blurs the sky image itself.
              className="absolute inset-0 bg-cover bg-center blur-sm opacity-60" 
              aria-hidden="true"
            ></div>

            {/* Layer 2: Content, positioned above the background image. */}
            {/* Added bg-slate-900/30 to provide a subtle, dark, consistent backdrop for text, on top of the sky image. */}
            {/* This also has rounded-xl to match parent, though it might not be visible if parent also has overflow-hidden and same rounding. */}
            <div className="relative z-10 p-8 md:p-12 bg-slate-900/30 rounded-xl"> 
              
              <p className="text-gray-200 text-lg leading-relaxed mb-8"> 
                Just as every successful hike requires careful preparation, adaptability, and resilience, my approach to DevOps and freelancing is rooted in strategic planning and continuous improvement. I map out each project like a trail, identifying potential challenges and plotting efficient routes to the summit. When obstacles arise, I adjust my strategy, leveraging new tools and techniques to keep moving forward. By embracing a hiker's mindset—methodical, resourceful, and persistent—I ensure that every solution I deliver is robust, scalable, and tailored to help clients reach their goals, no matter how rugged the terrain.
              </p>

              <div className="mt-10"> 
                <h3 className="text-2xl font-semibold text-white mb-8">The Hiking Mindset</h3> 
                
                <div className="flex flex-col md:flex-row gap-1 md:gap-0 mb-6 items-center md:items-start">
                  
                  <div className="w-full md:w-1/4 flex items-start mb-4 md:mb-0 md:mr-6"> 
                    <picture>
                      <source 
                        type="image/webp" 
                        srcSet="/profile-hiking-320w.webp 320w,
                                /profile-hiking-640w.webp 640w,
                                /profile-hiking-960w.webp 960w,
                                /profile-hiking-1280w.webp 1280w"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <img
                        src="/profile-hiking-640w.jpg"
                        srcSet="/profile-hiking-320w.jpg 320w,
                                /profile-hiking-640w.jpg 640w,
                                /profile-hiking-960w.jpg 960w,
                                /profile-hiking-1280w.jpg 1280w"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        alt="Immanuel hiking in nature, symbolizing a strategic and resilient mindset"
                        className="w-full h-80 object-cover rounded-xl shadow-lg transition-opacity duration-300"
                        loading="lazy"
                        width="640" 
                        height="480"
                        style={{
                          backgroundImage: 'url(/profile-hiking-placeholder.jpg)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                        onLoad={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.backgroundImage = 'none';
                        }}
                      />
                    </picture>
                  </div>
                  
                  <div className="w-full md:w-3/4 flex items-center"> 
                    {/* Increased opacity from bg-white/10 to bg-slate-800/30 for better text contrast */}
                    <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md"> 
                      <p className="text-gray-100 mb-0 text-base md:text-lg leading-relaxed"> 
                        Drawing parallels between hiking and DevOps practices helps illustrate my methodical approach to technical challenges and project management. Each trait represents a key aspect of how I navigate complex technical landscapes.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-8 text-gray-200 mt-10"> 
                  {[
                    { icon: <Code className="w-6 h-6 text-orange-400" />, title: "Strategic Planning", text: "Just as a hiker meticulously plans their route, assessing terrain and resources, I approach projects by carefully architecting solutions and defining strategic roadmaps to ensure efficient and predictable delivery." },
                    { icon: <GitBranch className="w-6 h-6 text-orange-400" />, title: "Resilient Navigation", text: "Unexpected challenges are part of any journey. My mindset involves building resilient systems and applying methodical problem-solving skills to navigate obstacles effectively and maintain operational stability." },
                    { icon: <Cloud className="w-6 h-6 text-orange-400" />, title: "Adaptive Progression", text: "Successful journeys require adapting to changing conditions. I embrace new technologies and methodologies, continuously optimizing processes and adjusting strategies to achieve peak performance and reach project goals." }
                  ].map(item => (
                    <li key={item.title} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4 shadow"> 
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="leading-relaxed text-sm text-gray-300">{item.text}</p> {/* Ensured list item text is also slightly less bright */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Explore Further Section */}
        <AnimatedElement delay={400} className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Explore Further</h2>
          <p className="text-gray-300 text-center mb-10 max-w-xl mx-auto"> 
            Discover more about my work, experience, and how we can collaborate on your next project.
          </p>
          <div className="flex justify-center items-center space-x-6 md:space-x-8 flex-wrap gap-y-4"> 
            <a 
              href="/assets/disc-assessment.pdf" 
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="w-5 h-5" />
              D.I.S.C.
            </a>
            <a 
              href="/assets/Resume.pdf" 
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <Link 
              to="/contact" 
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
            >
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
