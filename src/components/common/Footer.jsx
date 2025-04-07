import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1E2A39;
  color: #ffffff;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  margin-bottom: 1.5rem;
  
  img {
    height: 50px;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }
  
  p {
    color: #b0b0b0;
    line-height: 1.6;
  }
`;

const FooterTitle = styled.h4`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--primary);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.8rem;
  }
  
  a {
    color: #b0b0b0;
    transition: all 0.3s ease;
    display: inline-block;
    
    &:hover {
      color: white;
      transform: translateX(5px);
    }
  }
`;

const ContactInfo = styled.div`
  a {
    color: #b0b0b0;
    transition: color 0.3s ease;
    
    &:hover {
      color: white;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 10px;
    color: var(--primary);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 1.5rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 50%;
    margin-right: 1rem;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--primary);
      transform: translateY(-5px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: #b0b0b0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <img src="/assets/images/logo-white.png" alt="L'MAALAM SERVICES" />
            <h3>L'MAALAM SERVICES</h3>
            <p>Des solutions professionnelles pour tous vos besoins de services à domicile et d'entretien.</p>
          </FooterLogo>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialIcons>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Liens Rapides</FooterTitle>
          <FooterLinks>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À Propos</Link></li>
            <li><Link to="/services">Nos Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Nos Services</FooterTitle>
          <FooterLinks>
            <li><Link to="/services#plumbing">Plomberie</Link></li>
            <li><Link to="/services#electricity">Électricité</Link></li>
            <li><Link to="/services#painting">Peinture</Link></li>
            <li><Link to="/services#carpentry">Menuiserie</Link></li>
            <li><Link to="/services#cleaning">Nettoyage</Link></li>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>123 Rue du Commerce, Casablanca, Maroc</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <a href="tel:+212522123456">+212 522 123 456</a>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <a href="mailto:contact@lmaalam.ma">contact@lmaalam.ma</a>
            </ContactItem>
          </ContactInfo>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} L'MAALAM SERVICES. Tous droits réservés.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;