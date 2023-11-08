import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaults'
import { GlobalStyle } from './styles/global'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Checkout } from './pages/Checkout/index.tsx'
import DefaultLayout from './layouts/DefaultLayouts/index.tsx'
import { Home } from './pages/Home/index.tsx'
import CoffeesContextProvider from './contexts/OrderContextProvider.tsx'
import { OrderDetails } from './pages/OrderDetails/index.tsx'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/', // Esta rota representa a página inicial
        element: <Home />,
      },
      {
        path: 'Checkout',
        element: <Checkout />,
      },
      {
        path: 'OrderDetails',
        element: <OrderDetails />,
      },
    ],
  },
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesContextProvider>
        <RouterProvider router={router} />
      </CoffeesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
