import {Component} from 'react';
import {ApiErrorEmitter, IErrorEventPayload} from '../../event/ErrorEmitter';
import {Dialog} from 'primereact/dialog';

interface IState {
  visible: boolean
  error?: {
    code: number,
    url: string
  }
}

interface IProps {
  apiErrorEmitter: ApiErrorEmitter
}

export class ErrorModal extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {visible: false}
  }

  componentDidMount() {
    this.props.apiErrorEmitter.onError(this.show);
  }

  componentWillUnmount() {
    this.props.apiErrorEmitter.off();
  }

  private show = (errorPayload: IErrorEventPayload) => {
    this.setState({
      visible: true,
      error: {
        code: errorPayload.code,
        url: errorPayload.url
      }
    });
  }

  private hide = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return <Dialog onHide={this.hide} visible={this.state.visible} header="Oops... an error occurred">
      <div>code: <span className="error-code">{this.state.error?.code}</span></div>
      <div>url: <span className="error-url">{this.state.error?.url}</span></div>
    </Dialog>
  }

}