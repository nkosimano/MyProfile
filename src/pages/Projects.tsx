
import AnimatedElement from '../components/AnimatedElement';
import { Github, Globe, Star, Quote } from 'lucide-react';

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

const projects: Project[] = [
  {
    title: 'RTDynamicBC Website',
    description: 'Developed a modern, professional website for RTDynamicBC, a chartered accountant consultancy firm. The website features a clean design, responsive layout, and intuitive navigation to showcase their services and expertise.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80',
    technologies: ['HTML', 'CSS', 'Java'],
    outcomes: [
      'Created a professional online presence',
      'Improved client engagement and accessibility',
      'Enhanced brand visibility'
    ],
    links: {
      live: 'https://rtdynamicbc.com'
    }
  },
  {
    title: 'Africa Tennis Platform',
    description: 'Spearheaded DevOps initiatives for a high-traffic sports platform, focusing on building a scalable, secure, and automated cloud infrastructure. Led comprehensive database architecture refinement and optimization, implementing advanced security measures and performance tuning.',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80',
    technologies: ['AWS Lambda', 'Docker', 'Kubernetes', 'GitHub Actions', 'Azure DevOps', 'PostgreSQL'],
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
    image: 'https://images.unsplash.com/photo-1594972701688-69e9b0ad3f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80',
    technologies: ['GCP', 'Docker', 'Kubernetes', 'Terraform', 'API Gateway'],
    outcomes: [
      'Improved data processing speeds by 20%',
      'Achieved 99.9% service uptime',
      'Reduced environment setup time by 60%'
    ],
    links: {
      live: 'https://chartedart.com'
    }
  }
];

const testimonials = [
  {
    name: "Michael R.",
    role: "CTO, FinTech Startup",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "Immanuel transformed our deployment pipeline, reducing our deployment time from hours to minutes. His expertise in Azure and DevOps practices was invaluable.",
    rating: 5,
    achievement: "Reduced deployment time by 85%"
  },
  {
    name: "Sarah J.",
    role: "Head of Engineering, E-commerce Platform",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "The infrastructure automation solutions implemented by Immanuel helped us scale our operations efficiently. Our cloud costs decreased by 40% while performance improved.",
    rating: 5,
    achievement: "40% reduction in cloud costs"
  },
  {
    name: "David L.",
    role: "DevOps Manager, Healthcare Tech",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "His implementation of Kubernetes and microservices architecture revolutionized our deployment strategy. The monitoring solutions he put in place have been crucial for our operations.",
    rating: 5,
    achievement: "99.99% system uptime achieved"
  }
];

const Projects = () => {
  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, index) => (
      <Star key={index} className="w-5 h-5 fill-orange-400 text-orange-400" />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedElement className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate my expertise in cloud architecture,
            DevOps practices, and digital transformation.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <AnimatedElement
              key={project.title}
              delay={index * 200}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Outcomes:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>

                  {project.links && (
                    <div className="flex gap-4 mt-6">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-orange-400 hover:text-orange-300"
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
                          className="flex items-center gap-2 text-orange-400 hover:text-orange-300"
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

        {/* Client Testimonials */}
        <AnimatedElement className="mt-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedElement
                key={testimonial.name}
                delay={index * 200}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-orange-400">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-orange-400/20 absolute -top-4 -left-2" />
                  <p className="text-gray-300 italic relative z-10 pl-6">{testimonial.quote}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-orange-400 font-semibold">Achievement:</p>
                  <p className="text-gray-300">{testimonial.achievement}</p>
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