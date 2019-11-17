import React, {Component} from 'react'
import axios from '../../../axios--orders'
import withError from '../../../hoc/withError'
import {connect} from 'react-redux'
import { setOrders } from '../../../logicRedux/actions'
import Spinner from '../../../components/UI/spinner'
import Order from '../../../components/order'

class Orders extends Component {
    
    componentDidMount() {
        this.props.onSetOrders();
    }

    render() {
        const {orders, loading} = this.props;
        let comp = <Spinner/>;
        if(!loading){
            comp = orders.map(el => (
                <Order key={el.id}
                 ingredients={el.ingredients}
                 price={el.price}/>
                ))
        }
        return(
            <div>
                {comp}
            </div>
        );
    }
}

export default connect(
    state => ({
        orders: state.order.orders,
        loading: state.order.loading
    }),
    dispatch => ({
        onSetOrders: () => dispatch(setOrders())
    })
)(withError(Orders, axios));