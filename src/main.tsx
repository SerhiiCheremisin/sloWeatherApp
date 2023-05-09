import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/stylesReset.css'

//components
import App from './App.tsx'
import AppWrapper from './components/AppWrapper.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>,
)
