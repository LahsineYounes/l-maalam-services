import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? '14px 28px' : props.size === 'small' ? '8px 16px' : '12px 24px'};
  font-size: ${props => props.size === 'large' ? '18px' : props.size === 'small' ? '14px' : '16px'};
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background-color: ${props => {
    if (props.variant === 'outline') return 'transparent';
    if (props.variant === 'secondary') return 'var(--secondary)';
    return 'var(--primary)';
  }};
  color: ${props => {
    if (props.variant === 'outline') return 'var(--primary)';
    return 'white';
  }};
  border-color: ${props => {
    if (props.variant === 'outline') return 'var(--primary)';
    if (props.variant === 'secondary') return 'var(--secondary)';
    return 'var(--primary)';
  }};
  opacity: ${props => props.disabled ? '0.6' : '1'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:hover {
    background-color: ${props => {
      if (props.variant === 'outline') return 'var(--primary)';
      if (props.variant === 'secondary') return 'var(--secondary-dark)';
      return 'var(--primary-dark)';
    }};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
  
  svg {
    margin-right: ${props => props.iconPosition === 'right' ? '0' : '8px'};
    margin-left: ${props => props.iconPosition === 'right' ? '8px' : '0'};
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? '14px 28px' : props.size === 'small' ? '8px 16px' : '12px 24px'};
  font-size: ${props => props.size === 'large' ? '18px' : props.size === 'small' ? '14px' : '16px'};
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  text-decoration: none;
  background-color: ${props => {
    if (props.variant === 'outline') return 'transparent';
    if (props.variant === 'secondary') return 'var(--secondary)';
    return 'var(--primary)';
  }};
  color: ${props => {
    if (props.variant === 'outline') return 'var(--primary)';
    return 'white';
  }};
  border-color: ${props => {
    if (props.variant === 'outline') return 'var(--primary)';
    if (props.variant === 'secondary') return 'var(--secondary)';
    return 'var(--primary)';
  }};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:hover {
    background-color: ${props => {
      if (props.variant === 'outline') return 'var(--primary)';
      if (props.variant === 'secondary') return 'var(--secondary-dark)';
      return 'var(--primary-dark)';
    }};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
  
  svg {
    margin-right: ${props => props.iconPosition === 'right' ? '0' : '8px'};
    margin-left: ${props => props.iconPosition === 'right' ? '8px' : '0'};
  }
`;

/**
 * Button component that can be rendered as a button or link
 * @param {string} variant - 'primary', 'secondary', or 'outline'
 * @param {string} size - 'small', 'medium', or 'large'
 * @param {boolean} fullWidth - Whether the button should take the full width
 * @param {string} to - If provided, button will be rendered as Link component
 * @param {ReactNode} icon - Icon to display
 * @param {string} iconPosition - 'left' or 'right'
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  to,
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  ...props
}) => {
  const buttonProps = {
    variant,
    size,
    fullWidth,
    disabled,
    iconPosition,
    ...props
  };

  if (to) {
    return (
      <StyledLink to={to} {...buttonProps}>
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </StyledLink>
    );
  }

  return (
    <StyledButton 
      type={type} 
      onClick={onClick} 
      {...buttonProps}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </StyledButton>
  );
};

export default Button;