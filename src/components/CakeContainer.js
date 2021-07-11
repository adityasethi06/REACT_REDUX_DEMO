import React from 'react'
import {connect} from "react-redux"
import { buyCake } from '../redux/cake/cakeActions'

const CakeContainer = ({numOfCakes, dispatch}) => {
    console.log(numOfCakes);
    return (
        <div>
            <h1>Cakes: {numOfCakes}</h1>
            <button
                onClick={() => dispatch(buyCake())}>Buy</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
