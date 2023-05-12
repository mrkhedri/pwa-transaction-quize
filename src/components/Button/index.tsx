import { StyledButton } from './styles'

export type Props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  color?: 'primary' | 'secondary';
  size?: 'medium' | 'small';
  variant?: 'contained' | 'outlined';
  disabled?: boolean;
}

function Button(props: Props) {
  const {
    children,
    className,
    color = 'primary',
    size = 'medium',
    variant = 'contained',
    disabled = false,
    ...rest
  }
  = props;

  return (
    <StyledButton
      className={`btn ${className}`}
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

export default Button;
