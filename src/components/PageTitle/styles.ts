import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
  padding: 0 20px;
  width: 100%;
  position: relative;
  user-select: none;

  .back-btn {
    transform: rotate(180deg);
    border: 0;
    background-color: transparent;
    cursor: pointer;

    img {
      display: flex;
    }
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: ${props => props.theme.isLight
      ? props.theme.palette.primary.main
      : props.theme.palette.common.white
    };
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;