/**
 * Created by ManaliJain on 9/21/17.
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addItem} from "../action/index";

class Menu extends Component{
    render() {
        //const {menulist} = this.props.menu;

        return(

            <div className="row justify-content-md-center">
                <div className="alert alert-warning" role="alert">
                        <div className="col-md-6">
                        { this.props.menu.menuItem}
                        </div>
                        <div className="col-md-3">
                        { this.props.menu.price}
                        </div>
                        <div className="col-md-3">
                        <button className="btn btn-info"
                                onClick={() => {
                                    menu
                                    this.props.addItem(this.props.menu.menuItem,this.props.menu.price);
                                }}>
                            Add</button>
                        </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    "use strict";
    return {
        addItem : (data) => dispatch(addItem(data))
    };
}

export default connect(null, mapDispatchToProps)(Menu);

// export default Menu;