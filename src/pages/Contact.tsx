import React from 'react';
import AnimatedElement from '../components/AnimatedElement';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedElement className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and challenges in the DevOps and cloud architecture space.
          </p>
        </AnimatedElement>

        <div className="max-w-4xl mx-auto">
          <AnimatedElement className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <Mail className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  <a
                    href="mailto:immanuel.dhliso@example.com"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    immanuel.dhliso@example.com
                  </a>
                </div>
              </div>
              <p className="text-gray-400">
                Feel free to email me for any inquiries or collaboration opportunities.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <Phone className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                  <a
                    href="tel:+27123456789"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    +27 12 345 6789
                  </a>
                </div>
              </div>
              <p className="text-gray-400">
                Available during business hours for urgent matters.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <MapPin className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Johannesburg, South Africa</p>
                </div>
              </div>
              <p className="text-gray-400">
                Based in Johannesburg, available for remote collaboration worldwide.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <Linkedin className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/immanuel-dhliso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              <p className="text-gray-400">
                Let's connect professionally and expand our network.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={200} className="mt-12 text-center">
            <a
              href="https://github.com/immanuel-dhliso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg text-white font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View My GitHub Projects
            </a>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default Contact;