import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - 70px);
    flex-direction: column;
    background-color: white;
    transition: all 0.3s ease;
    padding: 2rem 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  font-weight: 500;
  color: ${({ active }) => (active ? 'var(--primary)' : 'var(--text-primary)')};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: var(--primary);
    transition: all 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
`;

const ContactButton = styled(Link)`
  background-color: var(--primary);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  margin-left: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    color: white;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    padding: 1rem 2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer style={{ 
      background: scrolled ? 'white' : 'rgba(255,255,255,0.9)',
      boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
    }}>
      <NavContent>
        <Logo to="/">
          <img src="/assets/images/logo.png" alt="L'MAALAM SERVICES" />
          L'MAALAM
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        
        <NavLinks isOpen={isOpen}>
          <NavLink 
            to="/" 
            active={location.pathname === '/' ? 1 : 0} 
            onClick={closeMenu}
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/services" 
            active={location.pathname === '/services' ? 1 : 0} 
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            active={location.pathname === '/about' ? 1 : 0} 
            onClick={closeMenu}
          >
            À Propos
          </NavLink>
          <ContactButton to="/contact" onClick={closeMenu}>
            Contactez-nous
          </ContactButton>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;