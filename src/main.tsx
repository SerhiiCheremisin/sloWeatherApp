import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/stylesReset.css'
import { Provider } from 'react-redux';
import store from './redux/store.ts';

//components
import App from './App.tsx'
import AppWrapper from './components/AppWrapper.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
     <Provider store={store}>
     <AppWrapper>
       <App />
     </AppWrapper>
     </Provider>
   </React.StrictMode>
 ,
)
