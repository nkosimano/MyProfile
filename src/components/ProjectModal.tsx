import React, { useEffect, useRef } from 'react';
import { Github, Globe } from 'lucide-react';

// Interface for a single project
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  outcomes: string[];
  links?: {
    live?: string;
    github?: string;
    [key: string]: string | undefined;
  };
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the modal when it opens
    if (modalRef.current) {
      modalRef.current.focus();
    }

    // Handle escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Trap focus within modal
    const handleTab = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);

    // Cleanup: restore scroll on unmount
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="bg-slate-800 text-white rounded-xl overflow-auto max-w-3xl w-full max-h-[90vh] shadow-2xl shadow-purple-500/20"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="relative p-6 md:p-8">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close project details"
          >
            &times;
          </button>
          <h2 id="modal-title" className="text-3xl font-bold mb-4 text-orange-400">{project.title}</h2>
          <img src={project.image} alt={`Screenshot of ${project.title}`} className="w-full rounded-lg mb-6" />
          <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-orange-500/20 text-orange-300 rounded-full px-3 py-1 text-sm font-medium">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Key Outcomes:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
          
          {project.links && (
            <div className="flex flex-wrap gap-4 mt-8 border-t border-white/20 pt-6">
              {Object.entries(project.links).map(([key, value]) => (
                value && (
                  <a 
                    key={key} 
                    href={value} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg"
                  >
                    {key === 'github' ? <Github size={20} /> : <Globe size={20} />}
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  </a>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;