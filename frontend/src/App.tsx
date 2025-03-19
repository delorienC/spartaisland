import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/index'
import '../il8n'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
