import React from 'react'; 

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  return (
    <button {...props} className="text-blue-500">
      Hello World
    </button>
  );
};

export default Button;
