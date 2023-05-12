import { useNavigate } from 'react-router-dom';

import useStore from 'src/store/useStore';
import { StyledWrapper } from './styles'

export interface Props {
  title: string
  back?: boolean
}

function PageTitle(props: Props) {
  const { title, back } = props;
  const mode = useStore(state => state.mode);
  const navigate = useNavigate();

  const handleBack = (): void => {
    navigate(-1)
  };

  return (
    <StyledWrapper>
      {back && (
        <button className="back-btn" onClick={handleBack}>
          <img src={`/src/assets/icons/${mode}/back-th2.svg`} alt="back-icon" />
        </button>
      )}
      <h1>{title}</h1>
    </StyledWrapper>
  )
}

export default PageTitle;
