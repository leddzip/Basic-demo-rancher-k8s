import React, {Component} from 'react';
import {ApiErrorEmitter} from '../../event/ErrorEmitter';
import {ButtonCallComponent} from '../button-call/button-call.component';
import {ApiServiceBasicJava} from '../../services/api-service-basic-java';
import {ApiServiceBasicPython} from '../../services/api-service-basic-python';
import {ApiServiceConnectedJava} from '../../services/api-service-connected-java';

interface IProps {
  apiErrorEmitter: ApiErrorEmitter,
  apiServiceBasicJava: ApiServiceBasicJava,
  apiServiceBasicPython: ApiServiceBasicPython,
  apiServiceConnectedJava: ApiServiceConnectedJava
}

export class ButtonGroupComponent extends Component<IProps> {

  render() {
    return <>
      <ButtonCallComponent buttonLabel="basic java"
                           description="Return uuid"
                           call={this.props.apiServiceBasicJava.getRandom}/>
      <ButtonCallComponent buttonLabel="basic python"
                           description="Return uuid"
                           call={this.props.apiServiceBasicPython.getRandom}/>
      <ButtonCallComponent buttonLabel="connected java"
                           description="Return uuid"
                           call={this.props.apiServiceConnectedJava.getRandom}/>
    </>
  }

}