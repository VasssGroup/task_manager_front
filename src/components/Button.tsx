import { ReactNode } from 'react';

type ButtonProps = {
    className?: string;
    children?: string | ReactNode;
    handleClick?: () => void;
};

export const Button = ({ children, className, handleClick, ...otherProps }: ButtonProps) => <button className={className} onClick={handleClick} {...otherProps}>{children}</button>;