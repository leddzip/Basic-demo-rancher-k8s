import React from 'react';
import './App.scss';
import {ApiErrorEmitter} from './event/ErrorEmitter';
import {ErrorModal} from './components/error-modal/error-modal.component';
import {ButtonGroupComponent} from './components/button-group/button-group.component';
import {ApiServiceBasicJava} from './services/api-service-basic-java';
import {ApiServiceBasicPython} from './services/api-service-basic-python';
import {ApiServiceConnectedJava} from './services/api-service-connected-java';

class App extends React.Component {
  apiErrorEmitter: ApiErrorEmitter;
  apiServiceBasicJava: ApiServiceBasicJava;
  apiServiceBasicPython: ApiServiceBasicPython;
  apiServiceConnectedJava: ApiServiceConnectedJava;

  constructor(props: {}) {
    super(props);
    this.apiErrorEmitter = new ApiErrorEmitter();
    this.apiServiceBasicJava = new ApiServiceBasicJava(this.apiErrorEmitter);
    this.apiServiceBasicPython = new ApiServiceBasicPython(this.apiErrorEmitter);
    this.apiServiceConnectedJava = new ApiServiceConnectedJava(this.apiErrorEmitter);
  }

  render() {
    return (
        <div className="App">
          <ButtonGroupComponent apiErrorEmitter={this.apiErrorEmitter}
                                apiServiceBasicJava={this.apiServiceBasicJava}
                                apiServiceBasicPython={this.apiServiceBasicPython}
                                apiServiceConnectedJava={this.apiServiceConnectedJava}/>
          <ErrorModal apiErrorEmitter={this.apiErrorEmitter}/>
        </div>
    );
  }
}

export default App;
