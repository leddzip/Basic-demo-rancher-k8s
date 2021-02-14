import React, {Component} from 'react';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import "./button-call.component.scss"
import {ApiResponse, ApiResponseStatus} from '../../services/Common';
import {ProgressSpinner} from 'primereact/progressspinner';

interface IProps {
  buttonLabel: string,
  description: string,
  call: () => Promise<ApiResponse>
}

interface IState {
  responseValue: string,
  loading: boolean
}

export class ButtonCallComponent extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      responseValue: "",
      loading: false
    };
  }

  private onClick = async () => {
    this.setState({
      ... this.state,
      loading: true
    })
    let response = await this.props.call();
    if (response.status === ApiResponseStatus.OK) {
      this.setState({
        responseValue: response.randomValue,
        loading: false
      });

    }
  }

  render() {
    return <div className="mainContainer">
        <Button className="p-mr-2 p-d-inline button" disabled={this.state.loading} onClick={this.onClick}>
          {this.state.loading ? <ProgressSpinner/> : this.props.buttonLabel}
        </Button>
        <InputText className="p-d-inline response" disabled={true} value={this.state.responseValue}/>
        <label className="p-d-inline description">{this.props.description}</label>
      </div>
  }

}