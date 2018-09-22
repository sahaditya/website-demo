import React from 'react';
//import {withRouter} from 'react-router-dom'
export default class ProductDetail extends React.Component{
    

    componentDidMount(){
        console.log(this.props);
        this.props.history.push("/dashboard");
    }

    render(){
        return <div>This is product details</div>
    }
}
// export default withRouter(ProductDetail);