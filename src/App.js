import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import {
  HashRouter,
  Route,
} from 'react-router-dom'

import Home from  './components/Home'

// class App extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <div>
//           <Route exact path="/" component={Home}/>
//         </div>
//       </HashRouter>
//     )
//   }
// }

const App = (appState) => (
  <HashRouter>
    <div>
      childrens goes here:
      <Route exact path="/" component={Home}/>
    </div>
  </HashRouter>
)
App.render = R.curry((node, props) => ReactDOM.render(<App {...props}/>, node))

export default App
