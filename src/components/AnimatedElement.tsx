import React, { useEffect, useRef } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`opacity-0 translate-y-10 transition-all duration-1000 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;