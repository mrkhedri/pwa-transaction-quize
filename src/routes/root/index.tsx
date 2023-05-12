import { Outlet } from "react-router-dom";

// we can specify Header and Footer and other layout components here
function Root() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default Root;
