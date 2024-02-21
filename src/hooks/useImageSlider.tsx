import { useState, useEffect, useRef } from 'react';
import { ISilderProps } from '../components/Slider/Slider';


const useImageSlider = ({ images, transitionType = 'ease-in' }: ISilderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            container.style.transition = `transform 0.5s ${transitionType}`;
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex, transitionType]);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return {
        containerRef,
        currentIndex,
        goToNextSlide,
        goToPrevSlide,
    };
};

export default useImageSlider;
