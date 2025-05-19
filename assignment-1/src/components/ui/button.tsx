import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const baseStyle = 'px-4 py-2 rounded focus:outline-none';
  const variantStyle = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black';

  return (
    <button className={`${baseStyle} ${variantStyle}`} {...props}>
      {children}
    </button>
  );
};

export default Button;