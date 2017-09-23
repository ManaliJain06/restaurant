/**
 * Created by ManaliJain on 9/21/17.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Menu from './menu';
import Order from './order';
class Restaurant extends Component{
    render() {
        return(
        <div className="container">
            <form action="" method="post" className="restaurant">
                <div id="RestaurantPanel">
                    <div className="SplitPane">
                        <div className="SplitPane-left">
                            {
                                this.props.menuArray.map((prop,index) => {
                                    return(
                                      <Menu
                                            menu ={prop}
                                            key={index}
                                      />
                                    );
                                })
                            }
                        </div>
                        <div className="SplitPane-right">
                            <Order/>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        );
    }
}

function mapStateToProps(state) {
    "use strict";
    const menuArray = Object.keys(state).map((item) => (
        {
            'menuItem' : item,
            'price': state[item]
        }
    ));
    return {menuArray};
}

// function mapDispatchToProps(dispatch) {
//     "use strict";
//     return (
//
//     );
// }
export default connect(mapStateToProps, null)(Restaurant);