import React from 'react';
import './App.scss';
import {ApiErrorEmitter} from './event/ErrorEmitter';
import {ErrorModal} from './components/error-modal/error-modal.component';
import {ButtonGroupComponent} from './components/button-group/button-group.component';
import {ApiServiceBasicJava} from './services/api-service-basic-java';

class App extends React.Component {
  apiErrorEmitter: ApiErrorEmitter;
  apiServiceBasicJava: ApiServiceBasicJava;

  constructor(props: {}) {
    super(props);
    this.apiErrorEmitter = new ApiErrorEmitter();
    this.apiServiceBasicJava = new ApiServiceBasicJava(this.apiErrorEmitter);
  }

  render() {
    return (
        <div className="App">
          <ButtonGroupComponent apiErrorEmitter={this.apiErrorEmitter}
                                apiServiceBasicJava={this.apiServiceBasicJava}/>
          <ErrorModal apiErrorEmitter={this.apiErrorEmitter}/>
        </div>
    );
  }
}

export default App;
