import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Terms from './pages/Terms.jsx'
import Shipping from './pages/Shipping.jsx'
import RootLayout from './component/RootLayout.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.jsx'
import FavoritePage from './pages/FavoritePage.jsx'
import AddtocartPage from './pages/AddtocartPage.jsx'
import SingleCardPage from './pages/SingleCardPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/about',
        element: <About />
      }, {
        path: '/terms',
        element: <Terms />

      }, {
        path: '/shipping',
        element: <Shipping />
      }, {
        path: '/privacy',
        element: <Privacy />
      },
      {
        path: "/singlecard/:id",
        element: <SingleCardPage />
      },
    ]
  },
  {
    path: "/favorite",
    element: <FavoritePage />
  },
  {
    path: "/addtocart",
    element: <AddtocartPage />

  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
  ,
  {
    path: "*",
    element: (
      <div className='w-full h-screen flex justify-center items-center text-white'>
        <h1 className='text-6xl'>Page Not Found 404</h1>
      </div>
    )
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </StrictMode>
)
