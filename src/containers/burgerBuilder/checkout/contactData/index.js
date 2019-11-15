import React, {Component} from 'react'
import Buttom from '../../../../components/UI/myButton'
import axios from '../../../../axios--orders'
import Spinner from '../../../../components/UI/spinner'
import Input from '../../../../components/UI/input'

import './contactData.css'

class ContactData extends Component {
    state ={
        orderForm:{
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                rules: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your email'
                },
                value: '',
                rules: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                rules: {
                    required: true
                },
                valid: false,
                touched: false
            },
            flat: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your Flat'
                },
                value: '',
                rules: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: '',
                rules: {},
                valid: true
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = (event) => {
        const {ingredients, price} = this.props;
        event.preventDefault();
        const {orderForm} = this.state;
        const formData = {};
        for(let key in orderForm){
            formData[key] = orderForm[key].value; 
        }
        this.setState({loading: true})
        const order = {
            ingredients: ingredients,
            price: Number.parseFloat(price).toFixed(2),
            orderData: formData   
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({oading: false})
            this.props.history.push("/");
        })
        .catch(error => {
            this.setState({loading: false})
        })
    }

    checkValidity(value, rules) {
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength)
        {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength)
        {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChanged = (event, key) => {
        const newOrder = {...this.state.orderForm};
        const updateElements = {...newOrder[key]};
        updateElements.value = event.target.value;
        updateElements.valid = this.checkValidity(updateElements.value, updateElements.rules);
        updateElements.touched = true;
        newOrder[key] = updateElements;
        let formIsValid = true;
        for(let key in newOrder){
            formIsValid = newOrder[key].valid && formIsValid;
        }
        this.setState({ orderForm: newOrder, formIsValid: formIsValid })
    }

    render() {
        const {orderForm, formIsValid} = this.state;
        const formElements = [];
        for(let key in orderForm){
            formElements.push({
                id: key,
                config: orderForm[key]
            })
        }

        let form = (
        <form onSubmit={this.orderHandler}>
            {
                formElements.map(el => (
                    <Input 
                    key={el.id}
                    elementType={el.config.elementType}
                    elementConfig={el.config.elementConfig}
                    value={el.config.value}
                    changed={(event) => this.inputChanged(event, el.id)}
                    invalid={!el.config.valid}
                    shouldValidate={el.config.rules}
                    touched={el.config.touched}
                    />
                ))
            }
            <Buttom btnType="Success" disabled={!formIsValid}>Submit</Buttom>
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