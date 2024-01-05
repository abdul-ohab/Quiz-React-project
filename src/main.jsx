import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import Analysis from './components/Analysis/Analysis.jsx'
import Content from './components/Content/Content.jsx'
import './index.css'
import QuizTest from './components/QuizTest/QuizTest.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: async() =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        }
      },
      {
        path: 'home/:homeId',
        element: <QuizTest></QuizTest>,
        loader: async({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.homeId}`)
        }
      },
      {
        path: '/analysis',
        element: <Analysis></Analysis>
      },
      {
        path: '/content',
        element: <Content></Content>
      }

    ]
  },
  {
    path: '/*',
    element: <h1>Error 404 page no found</h1>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}><App /></RouterProvider>
  </React.StrictMode>,
)
