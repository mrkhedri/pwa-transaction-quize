import { useNavigate } from 'react-router-dom';

import PageTitle from 'src/components/PageTitle';
import Button from 'src/components/Button';
import useStore from 'src/store/useStore';

function Home() {
  const mode = useStore(state => state.mode);
  const setMode = useStore(state => state.setMode);
  const navigate = useNavigate();

  return (
    <>
      <PageTitle title="خانه" />

      <div>
        <Button variant="outlined" onClick={(): void => navigate('/transactions')}>
          صفحه تراکنش‌ها
        </Button>

        <br /><br />

        <Button variant="outlined" onClick={(): void => setMode()}>
          حالت {mode === 'light' ? 'تاریک' : 'تاریک'}
        </Button>
      </div>
    </>
  )
}

export default Home;
