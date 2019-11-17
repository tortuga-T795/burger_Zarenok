import React, {Component} from 'react'
import Modal from '../../components/UI/modal'

const WithError = (WrappedComp, axios) => {
    return class extends Component  {

        state = {
            error: null
        };


        componentDidMount() {
            this.reqInterceptor = axios.interceptors.response.use(req => {
                this.setState({error: null})
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(null, error => {
                this.setState({error: error})
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorClicked = () => {
            this.setState({error: null})
        };

        render() {
            const {error} = this.state;
            return(
                <>
                    <Modal 
                    show={error}
                    modalClosed={this.errorClicked}
                    >
                        {error ? error.message : null}
                    </Modal>
                    <WrappedComp {...this.props}/>
                </>
            )
        }
    }
}

export default WithError;