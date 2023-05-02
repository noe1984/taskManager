import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './routes/App';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />
);





// function App(props) {
//   return (
//     <h1>{props.name}, {props.greeting}</h1>
//   )
// }

// function WhitGreeting(LitleApp) {
//   return function GreetingFunction(greeting) {
//     return function RealComponent(props) {
//       return <>
//       <LitleApp {...props} greeting={greeting}/>
//       </>
//     }
//   }
// }

// const AppWithGreeting = WhitGreeting(App)('Heloooo')

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
//   <AppWithGreeting name='noe'/>
// );

