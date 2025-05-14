import AnimatedElement from '../components/AnimatedElement';
import { Link } from 'react-router-dom';
import {
  Code,
  Cloud,
  GitBranch,
  Database,
  Monitor,
  Briefcase,
  ChevronRight,
  Mail,
  Phone,
  Linkedin,
  Github
} from 'lucide-react';

const skills = [
  {
    category: 'Cloud Platforms',
    icon: <Cloud className="w-6 h-6" />,
    items: ['AWS (Lambda, EC2, S3, VPC)', 'Azure (DevOps, VMs, Blob Storage)', 'Google Cloud Platform', 'Digital Ocean']
  },
  {
    category: 'DevOps & CI/CD',
    icon: <GitBranch className="w-6 h-6" />,
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Azure DevOps', 'Terraform', 'Ansible']
  },
  {
    category: 'Programming',
    icon: <Code className="w-6 h-6" />,
    items: ['Python', 'Bash', 'PowerShell', 'Go', 'SQL', 'PL/pgSQL']
  },
  {
    category: 'Databases',
    icon: <Database className="w-6 h-6" />,
    items: ['PostgreSQL', 'MySQL', 'NoSQL', 'Database Schema Design', 'Performance Tuning']
  },
  {
    category: 'Operating Systems',
    icon: <Monitor className="w-6 h-6" />,
    items: ['Linux (Ubuntu, CentOS)', 'Windows Server']
  }
];

const experiences = [
  {
    title: 'DevOps Engineer',
    company: 'Africa Tennis',
    period: '2024 - Present',
    description: 'Leading DevOps initiatives, implementing CI/CD pipelines, and managing multi-cloud infrastructure'
  },
  {
    title: 'DevOps Engineer',
    company: 'Charted Art',
    period: '2024 - Present',
    description: 'Driving DevOps strategy and infrastructure optimization on Google Cloud Platform'
  },
  {
    title: 'IT Project Lead',
    company: 'Cotton On Midrand',
    period: '2019 - 2023',
    description: 'Led major IT infrastructure migrations and optimization projects'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div
  className="absolute inset-0 bg-center bg-cover opacity-20"
  style={{
    backgroundImage: `image-set(
      url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=70') 1x,
      url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1024&q=70') 1.5x,
      url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=70') 2x,
      url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2560&q=70') 3x
    )`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }}
></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <AnimatedElement className="relative">
                <div className="relative w-96 h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-300 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 rounded-full overflow-hidden z-10 shadow-xl border-4 border-white">
                    <picture>
  <source type="image/webp" srcSet="/profile.webp" />
  <img
    src="/profile.jpg"
    alt="Portrait of Immanuel N. Dhliso, DevOps Engineer"
    className="w-full h-full object-cover"
    style={{ clipPath: 'circle(50% at center)' }}
    loading="lazy"
    width="384"
    height="384"
  />
</picture>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-900/30 rounded-full"></div>
                </div>
              </AnimatedElement>
            </div>
            <div className="lg:w-1/2">
              <AnimatedElement className="text-center lg:text-left space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
                  Immanuel N. Dhliso
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Elite DevOps Engineer
                </p>
                <p className="text-gray-400">
                  A results-driven DevOps Engineer with 10 years of comprehensive IT experience, specializing in architecting, automating, and optimizing robust and scalable infrastructures across diverse cloud environments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:nkosinathi.dhliso@gmail.com"
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-400"
                  >
                    <Mail className="w-5 h-5" />
                    nkosinathi.dhliso@gmail.com
                  </a>
                  <a
                    href="tel:+27614509800"
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-400"
                  >
                    <Phone className="w-5 h-5" />
                    +27 61 450 9800
                  </a>
                  <a
                    href="https://www.linkedin.com/in/immanueldhliso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-400"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/nkosimano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-400"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition-colors duration-300 mt-8 text-lg"
                >
                  Get in Touch
                </Link>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <AnimatedElement className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <AnimatedElement
                key={skill.category}
                delay={index * 200}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2 text-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-black/20">
        <AnimatedElement className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Professional Journey
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedElement
                key={exp.title + '-' + exp.company}
                delay={index * 200}
                className="relative pl-8 border-l-2 border-orange-500"
              >
                <div className="absolute -left-2 top-0">
                  <Briefcase className="w-4 h-4 text-orange-500" />
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-orange-400">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <p className="mt-2 text-gray-300">{exp.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4">
        <AnimatedElement className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Azure Solutions Architect Expert (AZ-305)',
              'Azure DevOps Engineer Expert (AZ-400)',
              'Power BI Data Analyst Associate (PL-300)',
              'Azure Administrator Associate (AZ-104)',
              'Azure Fundamentals (AZ-900)',
              'Project Management Professional (PMP)'
            ].map((cert, index) => (
              <AnimatedElement
                key={cert}
                delay={index * 100}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <p className="text-white font-semibold">{cert}</p>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
      </section>
    </div>
  );
};

export default Home;