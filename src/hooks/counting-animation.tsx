// components/dashboard/hooks/useAnimatedValue.ts
import { useEffect, useState, useRef } from 'react';
import { useAnimationStore } from '../states/AnimationState';

export const useAnimatedValue = (
  value: string,
  cardId: string,
  duration = 1500
) => {
  const [displayValue, setDisplayValue] = useState("0");
  const { animatedCards, markAsAnimated } = useAnimationStore();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animatedCards[cardId]) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateValue();
          markAsAnimated(cardId);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [animatedCards, cardId, markAsAnimated]);

  const animateValue = () => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const suffix = value.replace(numericValue.toString(), '');
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentValue = Math.floor(easedProgress * numericValue);
      
      setDisplayValue(currentValue + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  };

  const easeOutQuad = (t: number) => t * (2 - t);

  return { displayValue, cardRef };
};