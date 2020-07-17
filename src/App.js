import React, {Component} from 'react';
import './App.css';
import Posts from './components/post';
import PostForm from './components/postform';
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  render(){
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <PostForm/>
            <hr/>
            <Posts/>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
