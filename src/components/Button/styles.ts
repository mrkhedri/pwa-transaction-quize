import styled, { css } from 'styled-components';

import { Props } from '.';

const COLOR = {
  primary: css`
    background: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.common.white};
  `,
  secondary: css`
    background: ${props => props.theme.palette.secondary.main};
    color: ${props => props.theme.palette.common.white};
  `,
};

const VARIANT_OUTLINED = {
  primary: css`
    border-color: ${props => props.theme.palette.primary.main};
    background: transparent;
    color: ${props => props.theme.palette.primary.main};
  `,
  secondary: css`
    border-color: ${props => props.theme.palette.secondary.main};
    background: transparent;
    color: ${props => props.theme.palette.secondary.main};
  `,
};

const SIZE = {
  medium: css`
    font-size: 16px;
    line-height: 26px;
    padding: 6px 42px;
  `,
  small: css`
    font-size: 14px;
    line-height: 24px;
    padding: 2px 30px;
  `,
};

export const StyledButton = styled.button<Props>`
  border-radius: 24px;
  font-weight: 400;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.palette.primary.main};

  ${props => props.size && SIZE[props.size]}

  ${props => props.color && COLOR[props.color]}

  ${props => (props.variant === 'outlined' && props.color) && VARIANT_OUTLINED[props.color]}
`;