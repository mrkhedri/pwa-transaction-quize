import { useNavigate } from 'react-router-dom';

import useStore from 'src/store/useStore';
import backLight from 'src/assets/icons/light/back-th2.svg'
import backDark from 'src/assets/icons/dark/back-th2.svg'
import { StyledWrapper } from './styles'

export interface Props {
  title: string
  back?: boolean
}

function PageTitle(props: Props) {
  const { title, back } = props;
  const mode = useStore(state => state.mode);
  const navigate = useNavigate();

  const handleBack = (): void => navigate(-1);

  return (
    <StyledWrapper>
      {back && (
        <button className="back-btn" onClick={handleBack}>
          <img
            src={mode === 'light' ? backLight : backDark}
            alt="back-icon"
          />
        </button>
      )}
      <h1>{title}</h1>
    </StyledWrapper>
  )
}

export default PageTitle;
