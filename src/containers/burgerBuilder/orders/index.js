import React, {Component} from 'react'
import axios from '../../../axios--orders'
import withError from '../../../hoc/withError'

import Order from '../../../components/order'

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    
    componentDidMount() {
        axios.get('/orders.json')
        .then(response => {
            const orders = [];
            for(let key in response.data){
                orders.push({
                    ...response.data[key],
                id: key
            });
            }
            this.setState({loading: false, orders: orders})
        })
        .catch(err => {
            this.setState({loading: false})
        })
    }

    render() {
        return(
            <div>
                {
                this.state.orders.map(el => (
                <Order key={el.id}
                 ingredients={el.ingredients}
                 price={el.price}/>
                ))
                }
            </div>
        );
    }
}

export default withError(Orders, axios);