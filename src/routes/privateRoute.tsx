import { Outlet, useNavigate } from 'react-router-dom'

interface PrivateRouteInterface {
  roles?: Array<'ADMIN' | 'USER'>
}

export const PrivateRoute: React.FC<PrivateRouteInterface> = ({ roles }) => {
  const navigate = useNavigate()

  // TODO: Check user's role from Authentication provider
  const userRole = 'ADMIN'
  if (roles !== undefined && !roles?.includes(userRole)) {
    return (
      <>
        <h1>Not found page!</h1>
        <button onClick={() => navigate(-1)}>come back</button>
      </>
    )
  }

  return (
    <Outlet />
  )
}

export default PrivateRoute
