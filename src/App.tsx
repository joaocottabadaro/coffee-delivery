import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaults'
import { GlobalStyle } from './styles/global'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { History } from './pages/History/index.tsx'
import DefaultLayout from './layouts/DefaultLayouts/index.tsx'
import { Home } from './pages/Home/index.tsx'
import { CyclesContextProvider } from './contexts/CyclesContextProvider.tsx'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/', // Esta rota representa a página inicial
        element: <Home />,
      },
      {
        path: 'history',
        element: <History />,
      },
    ],
  },
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <RouterProvider router={router} />
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
