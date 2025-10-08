import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...rest }) => {
  const base = 'px-4 py-2 rounded font-medium';
  const styles = variant === 'primary' ? `${base} bg-blue-600 text-white` : `${base} bg-gray-200 text-gray-800`;
  return (
    <button className={`${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;