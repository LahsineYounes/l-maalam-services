import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { FaArrowRight, FaTools } from 'react-icons/fa';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('/assets/images/hero-bg.jpg') no-repeat center center/cover;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  margin-top: 2rem;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const HeroTagline = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: var(--primary);
  }
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  height: 450px;
  
  @media (max-width: 992px) {
    order: 1;
    height: 350px;
    margin-bottom: 2rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroGrid>
          <HeroText>
            <HeroTagline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaTools /> Services professionnels à domicile
            </HeroTagline>
            
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Des experts pour tous vos <span>besoins</span> quotidiens
            </HeroTitle>
            
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              L'MAALAM SERVICES vous propose des solutions professionnelles pour tous vos travaux de plomberie, électricité, peinture et rénovation. Nos artisans qualifiés sont à votre service pour garantir des prestations de qualité.
            </HeroDescription>
            
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                to="/services" 
                size="large"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Nos Services
              </Button>
              <Button 
                to="/contact" 
                variant="outline" 
                size="large"
              >
                Contactez-nous
              </Button>
            </ButtonGroup>
          </HeroText>
          
          <HeroImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HeroImage src="/assets/images/hero-worker.png" alt="L'MAALAM Services" />
          </HeroImageContainer>
        </HeroGrid>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;