import React, { Component } from 'react';


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        )
    }
}

export default Layout;



