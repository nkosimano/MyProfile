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
    // Capture the current ref value
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
            // Optional: Unobserve after animating to prevent re-triggering
            // if (currentElement) { // Check if currentElement is not null
            //   observer.unobserve(currentElement);
            // }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentElement) { // Use the captured value
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) { // Use the captured value in the cleanup
        observer.unobserve(currentElement);
      }
    };
  }, [delay]); // elementRef is stable and doesn't need to be in dependencies

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