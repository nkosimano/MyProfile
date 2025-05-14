import AnimatedElement from '../components/AnimatedElement'; // Assuming this component exists - verify this path and component integrity
import { Github, Globe, Star, Quote } from 'lucide-react';

// Interface for a single project
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  outcomes: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

// Array of project data with updated images
const projects: Project[] = [
  {
    title: 'Africa Tennis Platform',
    description: 'Spearheaded DevOps initiatives for a high-traffic sports platform, focusing on building a scalable, secure, and automated cloud infrastructure. Led comprehensive database architecture refinement and optimization, implementing advanced security measures and performance tuning.',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80', // Original image
    technologies: ['AWS Lambda', 'Docker', 'Kubernetes', 'GitHub Actions', 'PostgreSQL'],
    outcomes: [
      'Reduced deployment cycle time by 93%',
      'Achieved 99.95% system uptime',
      'Decreased infrastructure costs by 25%'
    ],
    links: {
      live: 'https://africatennis.com'
    }
  },
  {
    title: 'Charted Art Platform',
    description: 'Drove the DevOps strategy for an innovative art analytics platform, emphasizing rapid iteration cycles, robust infrastructure on Google Cloud Platform (GCP), and efficient data processing pipelines for complex analytics.',
    // Updated image: Dashboards and charts, fitting for analytics
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2400',
    technologies: ['GCP Compute Resources', 'Docker', 'Kubernetes', 'Terraform', 'Azure DevOps', 'API Gateway'],
    outcomes: [
      'Improved data processing speeds by 20%',
      'Achieved 99.9% service uptime',
      'Reduced environment setup time by 60%'
    ],
    links: {
      live: 'https://chartedart.com'
    }
  },
  {
    title: 'Adv. Motsusi Professional Website',
    description: "Developed a professional website for Adv. Malebogo, a legal consultant. The site enhances online presence and client accessibility, featuring a clean design, user-friendly experience, and SEO optimization, aligning with Adv. Malebogo's testimonial.",
    // Updated image: Professional consultation in a modern office
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'SEO'],
    outcomes: [
      'Established a strong professional online identity for Adv. Motsusi.',
      'Improved accessibility for potential clients seeking legal services.',
      'Enhanced search engine visibility through targeted SEO strategies.'
    ],
    links: {
      live: 'https://www.advmotsusi.co.za'
    }
  },
  {
    title: 'RTDynamicBC Website',
    description: 'Developed a modern, professional website for RTDynamicBC, a chartered accountant consultancy firm. The website features a clean design, responsive layout, and intuitive navigation to showcase their services and expertise.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80', // Original image
    technologies: ['HTML', 'CSS', 'Java'],
    outcomes: [
      'Created a professional online presence',
      'Improved client engagement and accessibility',
      'Enhanced brand visibility'
    ],
    links: {
      live: 'https://rtdynamicbc.co.za'
    }
  }
];

// Array of testimonial data
const testimonials = [
  
  {
    name: "Keamogetsi Motsusi",
    role: "Digital Content creator & Events Manager",
    image: "/assets/keamogetsi.png", 
    quote: "Immanuel's ability to translate complex technical requirements into seamless user experiences for our event platforms was outstanding. His DevOps magic kept our digital campaigns running smoothly.",
    rating: 5,
    achievement: "Successfully launched three major virtual events with flawless technical execution, boosting audience engagement by 150%"
  },
  {
    name: "Adv. Malebogo",
    role: "Advocate & Legal Consultant",
    image: "/assets/malebogo.png", 
    quote: "Immanuel's expertise in setting up efficient file management systems for my legal cases and building a professional website with SEO optimization has been a game-changer for my practice. Highly recommended!",
    rating: 5,
    achievement: "Streamlined case file management, launched a professional legal website, and significantly improved online visibility through SEO."
  },
  {
    name: "Rabelani Neluheni",
    role: "Charted Accountant",
    image: "/assets/rabelani.png", 
    quote: "Immanuel's strategic approach to cloud cost optimization and financial system integration was invaluable. His solutions significantly improved our reporting accuracy and efficiency.",
    rating: 5,
    achievement: "Implemented a new cloud-based accounting system, reducing month-end closing time by 40%"
  },
  {
  name: "Jerome Strevens",
  role: "Tennis Fanatic",
  image: "/assets/jerome.png", 
  quote: "As a user of the Africa Tennis Platform, I'm amazed by its performance and reliability. Immanuel's work on the backend infrastructure ensures a fantastic experience for tennis enthusiasts like me.",
  rating: 5,
  achievement: "Contributed to a platform that now serves thousands of tennis players and fans daily with high availability and speed"
}
];

// Main Projects component
const Projects = () => {
  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, index) => (
      <Star key={index} className="w-5 h-5 fill-orange-400 text-orange-400" />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-20 px-4 font-sans"> {/* Added font-sans for better readability */}
      <div className="max-w-7xl mx-auto">
        <AnimatedElement className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg"> {/* Slightly increased text size */}
            Showcasing innovative solutions that demonstrate my expertise in cloud architecture,
            DevOps practices, and digital transformation.
          </p>
        </AnimatedElement>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24"> {/* Increased gap and bottom margin */}
          {projects.map((project, index) => (
            <AnimatedElement
              key={project.title}
              delay={index * 150} // Slightly adjusted delay
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-purple-500/30"> {/* Enhanced glassmorphism and shadow */}
                <div className="relative h-64 md:h-72 overflow-hidden"> {/* Responsive height for image container */}
                  <img
                    src={project.image.replace(/w=\d+/, 'w=400')} // Base image for smaller screens
                    srcSet={`
                      ${project.image.replace(/w=\d+/, 'w=400')} 400w,
                      ${project.image.replace(/w=\d+/, 'w=800')} 800w,
                      ${project.image.replace(/w=\d+/, 'w=1200')} 1200w
                    `} // Added more srcset options
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px" // More descriptive sizes
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" // Slightly reduced scale effect
                    loading="lazy"
                    width="800" // Intrinsic width
                    height="450" // Intrinsic height (assuming 16:9 aspect ratio for placeholder)
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = `https://placehold.co/800x450/334155/94a3b8?text=Image+Not+Found`; // Placeholder
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div> {/* Adjusted gradient */}
                  <div className="absolute bottom-4 left-4 p-2"> {/* Added padding */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white shadow-sm">{project.title}</h3> {/* Text shadow for better readability */}
                  </div>
                </div>
                <div className="p-6 md:p-8"> {/* Responsive padding */}
                  <p className="text-gray-300 mb-6 text-base leading-relaxed">{project.description}</p> {/* Improved leading */}
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-lg">Technologies Used:</h4> {/* Increased margin and text size */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium" // Adjusted padding and font weight
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-lg">Key Outcomes:</h4> {/* Increased margin and text size */}
                    <ul className="list-disc list-inside text-gray-300 space-y-1.5 pl-1"> {/* Adjusted spacing and padding */}
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="leading-relaxed">{outcome}</li> 
                      ))}
                    </ul>
                  </div>

                  {project.links && (
                    <div className="flex gap-4 mt-8"> {/* Increased top margin */}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg" // Added button-like styling
                        >
                          <Globe size={20} />
                          <span>Live Site</span>
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg" // Added button-like styling
                        >
                          <Github size={20} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <AnimatedElement className="mt-24"> {/* Increased top margin */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Client Testimonials</h2> {/* Increased bottom margin */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"> {/* Responsive gap */}
            {testimonials.map((testimonial, index) => (
              <AnimatedElement
                key={testimonial.name}
                delay={index * 150} // Adjusted delay
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/30" // Enhanced glassmorphism and shadow
              >
                <div className="flex items-start gap-4 mb-5"> {/* Increased bottom margin */}
                  <picture>
                    <source type="image/webp" srcSet={testimonial.image.replace(/\.(png|jpg|jpeg)$/, '.webp')} />
                    <img
                      src={testimonial.image}
                      alt={`Testimonial from ${testimonial.name}, ${testimonial.role}`}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-orange-400/50" // Added border and responsive size
                      loading="lazy"
                      width="80" // Intrinsic width
                      height="80" // Intrinsic height
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        // Try original extension if webp fails or if it's already the original
                        if (target.src.endsWith('.webp')) {
                            target.src = testimonial.image; // Fallback to original (png/jpg)
                        } else {
                            // Fallback to a placeholder if the original also fails
                            // MODIFIED LINE: Added encodeURIComponent
                            target.src = `https://placehold.co/80x80/475569/e2e8f0?text=${encodeURIComponent(testimonial.name.substring(0,1))}`;
                        }
                      }}
                    />
                  </picture>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{testimonial.name}</h3> {/* Responsive text size */}
                    <p className="text-orange-400">{testimonial.role}</p>
                    <div className="flex mt-1.5"> {/* Adjusted top margin */}
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="relative mb-4"> {/* Added bottom margin */}
                  <Quote className="w-10 h-10 text-orange-400/30 absolute -top-5 -left-3 md:-top-6 md:-left-4" /> {/* Adjusted size and position */}
                  <p className="text-gray-300 italic relative z-10 pl-6 text-base leading-relaxed">{testimonial.quote}</p> {/* Improved leading */}
                </div>
                <div className="mt-5 pt-5 border-t border-white/20"> {/* Adjusted margin and border opacity */}
                  <p className="text-orange-300 font-semibold text-sm mb-1">Key Achievement:</p> {/* Adjusted color and margin */}
                  <p className="text-gray-300 text-sm leading-relaxed">{testimonial.achievement}</p> {/* Improved leading */}
                </div>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default Projects;
