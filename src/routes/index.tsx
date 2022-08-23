import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from '@/App'
import { PrivateRoute } from './privateRoute'

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/private' element={<PrivateRoute roles={['ADMIN']} />}>
        <Route index element={<>Private page</>} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Router
