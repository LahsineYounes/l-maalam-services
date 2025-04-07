import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 100px 0;
  background-color: var(--bg-primary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-heading);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary);
  }
`;

const SectionDescription = styled.p`
  max-width: 700px;
  margin: 2rem auto 0;
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const TestimonialsContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const TestimonialSlider = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  height: 400px;
  
  @media (max-width: 768px) {
    height: 500px;
  }
`;

const TestimonialCard = styled(motion.div)`
  background-color: white;
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 900px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  transition: all 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
`;

const QuoteIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 20px;
  opacity: 0.3;
`;

const TestimonialContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 30px;
  font-style: italic;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
  svg {
    color: #FFD700;
    font-size: 1.2rem;
    margin: 0 2px;
  }
`;

const ClientInfo = styled.div`
  margin-top: auto;
`;

const ClientName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--text-heading);
`;

const ClientTitle = styled.p`
  color: var(--primary);
  font-weight: 500;
`;

const ClientImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 4px solid white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 10px;
`;

const ControlDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--primary)' : '#D1D1D1'};
  border: none;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary)' : '#ABABAB'};
  }
`;

const testimonials = [
  {
    id: 1,
    name: 'Mohammed Alami',
    title: 'Propriétaire d\'appartement',
    image: '/assets/images/client1.jpg',
    rating: 5,
    content: 'Un service exceptionnel ! Les plombiers de L\'MAALAM sont arrivés rapidement et ont résolu notre problème de fuite en moins d\'une heure. Professionnels, ponctuels et propres. Je recommande vivement leurs services.'
  },
  {
    id: 2,
    name: 'Nadia Benmoussa',
    title: 'Gérante de restaurant',
    image: '/assets/images/client2.jpg',
    rating: 5,
    content: 'Nous avons fait appel à L\'MAALAM SERVICES pour la rénovation complète de notre restaurant. Le résultat est impressionnant ! L\'équipe a respecté les délais et le budget. Un travail de qualité et un suivi irréprochable.'
  },
  {
    id: 3,
    name: 'Karim Tazi',
    title: 'Promoteur immobilier',
    image: '/assets/images/client3.jpg',
    rating: 4,
    content: 'Collaboration efficace avec L\'MAALAM pour l\'installation électrique de nos nouveaux appartements. Équipe réactive et à l\'écoute, travail soigné et conforme aux normes. Partenaire fiable pour nos projets.'
  }
];

const slideVariants = {
  hidden: (direction) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    };
  },
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <SectionHeader>
          <SectionTitle>Ce que nos clients disent</SectionTitle>
          <SectionDescription>
            Découvrez les témoignages de nos clients satisfaits qui ont fait appel à nos services pour leurs projets.
          </SectionDescription>
        </SectionHeader>
        
        <TestimonialsContainer>
          <TestimonialSlider>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                initial="hidden"
                animate={index === currentIndex ? "visible" : "hidden"}
                variants={slideVariants}
                custom={direction}
                style={{ display: index === currentIndex ? 'flex' : 'none' }}
              >
                <ClientImage>
                  <img src={testimonial.image} alt={testimonial.name} />
                </ClientImage>
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                <TestimonialContent>
                  {testimonial.content}
                </TestimonialContent>
                <Rating>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < testimonial.rating ? '#FFD700' : '#E0E0E0'} />
                  ))}
                </Rating>
                <ClientInfo>
                  <ClientName>{testimonial.name}</ClientName>
                  <ClientTitle>{testimonial.title}</ClientTitle>
                </ClientInfo>
              </TestimonialCard>
            ))}
          </TestimonialSlider>
          
          <SliderControls>
            {testimonials.map((_, index) => (
              <ControlDot
                key={index}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </SliderControls>
        </TestimonialsContainer>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;