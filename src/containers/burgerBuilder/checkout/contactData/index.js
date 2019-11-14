import React, {Component} from 'react'
import Buttom from '../../../../components/UI/myButton'
import axios from '../../../../axios--orders'
import Spinner from '../../../../components/UI/spinner'

import './contactData.css'

class ContactData extends Component {
    state ={
        name: '',
        email: '',
        address: {
            street: '',
            flat: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        const {ingredients, price} = this.props.ingredients;
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients,
            price,
            customer: {
                name: 'timofey',
                email: 'timofey.zarenok@gmail.com',
                address: {
                    street: 'Meln',
                    flat: 48
                },
            },
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false})
            this.props.history.push("/");
        })
        .catch(error => {
            this.setState({loading: false})
        })
    }

    render() {
        let form = (
        <form>
            <input className="Input" type='text' name='name'placeholder='ur name'/>
            <input className="Input" type='text' name='email'placeholder='ur email'/>                
            <input className="Input" type='text' name='street'placeholder='ur street'/>
            <input className="Input" type='number' name='flat'placeholder='ur flat'/>
            <Buttom btnType="Success" clicked={this.orderHandler}>Submit</Buttom>
        </form>
        );
        if(this.state.loading){
            form = <Spinner/>
        }
        return(
            <div className="ContactData">
                <h4>Enter ur contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;