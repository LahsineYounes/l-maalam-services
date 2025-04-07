import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWrench, FaBolt, FaPaintRoller, FaHammer, FaSprayCan, FaTools } from 'react-icons/fa';
import Button from '../common/Button';

const ServicesSection = styled.section`
  padding: 100px 0;
  background-color: var(--bg-secondary);
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

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: var(--bg-primary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.12);
  }
`;

const ServiceIcon = styled.div`
  background-color: var(--primary);
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
`;

const ServiceContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-heading);
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ServiceLink = styled(Link)`
  color: var(--primary);
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-top: auto;
  
  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const serviceItems = [
  {
    id: 'plumbing',
    icon: <FaWrench />,
    title: 'Plomberie',
    description: 'Installation et réparation de tous systèmes de plomberie, débouchage, détection de fuites et maintenance.',
  },
  {
    id: 'electricity',
    icon: <FaBolt />,
    title: 'Électricité',
    description: 'Installation électrique, dépannage, mise aux normes, tableaux électriques et éclairage.',
  },
  {
    id: 'painting',
    icon: <FaPaintRoller />,
    title: 'Peinture',
    description: 'Travaux de peinture intérieure et extérieure, revêtements muraux et traitement des façades.',
  },
  {
    id: 'carpentry',
    icon: <FaHammer />,
    title: 'Menuiserie',
    description: 'Fabrication, installation et réparation de meubles, portes, fenêtres et autres éléments en bois.',
  },
  {
    id: 'cleaning',
    icon: <FaSprayCan />,
    title: 'Nettoyage',
    description: 'Services professionnels de nettoyage pour particuliers et entreprises, incluant les nettoyages en profondeur.',
  },
  {
    id: 'handyman',
    icon: <FaTools />,
    title: 'Bricolage',
    description: 'Petits travaux de bricolage, assemblage de meubles, réparations diverses et montage d\'équipements.',
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const Services = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader>
          <SectionTitle>Nos Services</SectionTitle>
          <SectionDescription>
            L'MAALAM SERVICES propose une large gamme de services professionnels pour répondre à tous vos besoins d'entretien, de réparation et d'aménagement de votre domicile ou local professionnel.
          </SectionDescription>
        </SectionHeader>
        
        <ServiceGrid>
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <ServiceContent>
                <ServiceIcon>
                  {service.icon}
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceLink to={`/services#${service.id}`}>
                  En savoir plus <FaArrowRight />
                </ServiceLink>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServiceGrid>
        
        <ButtonContainer>
          <Button 
            to="/services" 
            size="large"
            variant="secondary"
          >
            Tous nos services
          </Button>
        </ButtonContainer>
      </Container>
    </ServicesSection>
  );
};

export default Services;