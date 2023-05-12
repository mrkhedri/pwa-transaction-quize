import { createBrowserRouter } from 'react-router-dom';

import Root from 'src/routes/root';
import Transactions from 'src/routes/transactions';
import Home from 'src/routes/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
    ],
  },
]);

export default router;
