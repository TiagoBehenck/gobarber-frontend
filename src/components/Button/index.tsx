import React, { ButtonHTMLAttributes } from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <ReactLoading
        width={16}
        height={16}
        color="#312e38"
        type="spinningBubbles"
        className="spinner"
      />
    ) : (
      children
    )}
  </Container>
);

export default Button;
