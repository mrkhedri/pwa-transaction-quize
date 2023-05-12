import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background: ${props => props.theme.palette.background.paper};
  border-radius: 30px 30px 0px 0px;
  padding: 8px 24px 60px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;

  img {
    margin-bottom: 8px;
  }

  span {
    margin-bottom: 10px;
  }

  .btn {
    padding-right: 12px;
    padding-left: 12px;
  }
`;

export const StyledCard = styled.div`
  border-radius: 16px;
  padding: 12px 16px;
  margin-top: 12px;
  margin-bottom: 12px;
  border: 1px solid ${props => props.theme.palette.border.main};
  position: relative;
  
  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid ${props => props.theme.palette.border.main};

    .title {
      font-weight: 500;
    }

    .number {
      font-weight: 300;
      font-size: 13px;
    }

    .red-lable {
      padding: 2px 8px;
      font-size: 13px;
      color: ${props => props.theme.palette.error.main};
      border: 1px solid ${props => props.theme.palette.error.main};
      border-radius: 5px;
      line-height: 18px;
    }
  }

  .status {
    position: absolute;
    top: 48.5%;
    right: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    border-radius: 5px 0px 0px 5px;

    &.success {
      background: ${props => props.theme.palette.success.main};
    }

    &.error {
      background: ${props => props.theme.palette.error.main};
    }
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;

    > span {
      display: flex;
      align-items: center;
    }

    .price {
      font-weight: 500;
      line-height: 24px;
    }

    .currency, .time, .date {
      font-weight: 300;
      font-size: 13px;
      line-height: 20px;
    }

    .time {
      margin-left: 8px;
    }

    .date {
      margin-left: 12px;
    }
  }
`;

export const StyledFooter = styled.div`
  border-radius: 30px 30px 0px 0px;
  padding: 16px;
  margin-top: 8px;
  background-color: ${props => props.theme.palette.background.main};
  position: fixed;
  bottom: 0;
  right: calc(50% + 0.5px);
  max-width: ${props => props.theme.sizes.mobileLarge};
  width: 100%;
  transform: translateX(50%);
  user-select: none;

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
  }
  
  .inner > button {
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    color: ${props => props.theme.palette.text.main};
  }

  img {
    margin-left: 8px;
  }

  .divider {
    height: 100%;
    width: 1px;
    border: 1px solid ${props => props.theme.palette.border.main};
    position: absolute;
  }
`;

export const StyledSortDrawer = styled.div`
  margin-bottom: 32px;
  max-width: ${props => props.theme.sizes.mobileLarge};
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;

  .title {
    text-align: center;
    margin-bottom: 8px;
  }

  form > div {
    display: flex;
    align-items: center;
  }

  label {
    margin-right: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    padding: 8px 0;
    width: 100%;
  }
`;

export const StyledFilterDrawer = styled.div`
  margin-bottom: 24px;
  max-width: ${props => props.theme.sizes.mobileLarge};
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;

  .title {
    text-align: center;
    margin-bottom: 8px;
  }

  .filter {
    margin-bottom: 20px;
  }

  .filter-type {
    margin-bottom: 12px;
    line-height: 24px;
    display: flex;
  }

  .select-filter {
    margin-right: -8px;
    margin-left: -8px;
  }

  .select-filter button {
    display: inline-flex;
    align-items: center;
    font-size: 13px;
    line-height: 20px;
    padding: 10px 28px;
    border: 1px solid ${props => props.theme.palette.border.main};
    border-radius: 10px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: transparent;
    color: ${props => props.theme.palette.text.main};

    &.active {
      border: 2px solid ${props => props.theme.palette.primary.main};
    }
  }

  .text {
    margin-right: 6px;
  }

  .action-buttons {
    margin-top: 100px;
    margin-right: -8px;
    margin-left: -8px;
    display: flex;

    > div {
      width: 50%;
      padding-right: 8px;
      padding-left: 8px;
    }

    .btn {
      padding-right: 16px;
      padding-left: 16px;
      width: 100%;
    }
  }
`;

export const StyledTransactionDetailsDrawer = styled.div`
  margin-bottom: 40px;
  max-width: ${props => props.theme.sizes.mobileLarge};
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;

  .title {
    margin-bottom: 14px;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 6px;
    }
  }

  .receipt {
    margin-bottom: 36px;
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    background-color: ${props => props.theme.isLight ? '#F4F4FA' : '#303030'};

    &.success .inner {
      background-color: ${props => props.theme.isLight ? '#DEF1F6' : '#334647'};
    }

    &.failure .inner {
      background-color: ${props => props.theme.isLight ? '#F6DEE5' : '#4B3337'};
    }

    .inner {
      border-radius: 16px;
      padding: 14px 16px;
    }

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      font-weight: 700;
    }

  }

  > button {
    width: 100%;
    padding: 9px 24px;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    border-radius: 16px;
  }
`;
