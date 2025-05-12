import React from 'react';
import AnimatedElement from '../components/AnimatedElement';
import { Award, BookOpen, Briefcase, Code, Star, Cloud, Database, GitBranch, Quote } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2024',
      title: 'DevOps Engineer at Africa Tennis',
      description: 'Leading enterprise-wide DevOps initiatives and implementing CI/CD pipelines, reducing deployment time by 93%.',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      year: '2024',
      title: 'Azure Solutions Architect Expert',
      description: 'Achieved Azure Solutions Architect Expert (AZ-305) certification.',
      icon: <Award className="w-6 h-6" />
    },
    {
      year: '2019',
      title: 'IT Project Leadership at Cotton On',
      description: 'Led major infrastructure migrations, including 105-store network modernization project.',
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

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

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, index) => (
      <Star key={index} className="w-5 h-5 fill-orange-400 text-orange-400" />
    ));
  };

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
            {expertise.map((area, index) => (
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

        {/* Professional Journey Timeline */}
        <div className="relative max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Professional Journey</h2>
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-orange-500/30"></div>
          {milestones.map((milestone, index) => (
            <AnimatedElement
              key={milestone.year}
              delay={index * 200}
              className="relative mb-12"
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} text-right`}>
                  <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <span className="text-orange-400 font-bold">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-white mt-2">{milestone.title}</h3>
                    <p className="text-gray-300 mt-2">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 border-4 border-slate-900">
                  {milestone.icon}
                </div>
                <div className="w-1/2"></div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="max-w-7xl mx-auto">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Proficiencies</h2>
          <p className="text-gray-300">Continuously expanding knowledge in emerging technologies</p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedElement className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Architecture</h3>
            <ul className="space-y-2 text-gray-300">
              <li>AWS (Lambda, EC2, S3, VPC)</li>
              <li>Azure (DevOps, VMs, Blob Storage)</li>
              <li>Google Cloud Platform</li>
              <li>Digital Ocean</li>
            </ul>
          </AnimatedElement>

          <AnimatedElement delay={200} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">DevOps Practices</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Docker & Kubernetes</li>
              <li>GitHub Actions & Azure DevOps</li>
              <li>Terraform & Ansible</li>
              <li>CI/CD Pipeline Development</li>
            </ul>
          </AnimatedElement>

          <AnimatedElement delay={400} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Database Management</h3>
            <ul className="space-y-2 text-gray-300">
              <li>PostgreSQL & MySQL</li>
              <li>Database Schema Design</li>
              <li>Performance Tuning</li>
              <li>Security Implementation</li>
            </ul>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default About;