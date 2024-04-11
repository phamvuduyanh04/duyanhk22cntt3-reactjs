import React, { Component } from 'react';

class Class_PhamVuDuyAnh extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"Pham Vu Duy Anh",
            class:"K22CNT3"
        }
    }
    users = {
        name:"Pham Vu Duy Anh",
        age:20
    }

    // Hamf xuw ly sk
    handleChange = (event)=>{
        this.setState({
            fullName:"Pham Vu Duy Anh",
        })
    }
    render() {
        return (
            <div>
                <h2>Class component Demo</h2>
                {this.users.name} - {this.users.age}

                <hr/>
                <h3>info: {this.props.info}</h3>
                <h3>Tine:{this.props.time}</h3>
                <hr/>
                <h3>State:
                    FullName: {this.state.fullName} - 
                    Class: {this.state.class}

                </h3>
                <button onClick={this.handleChange}>Change Name</button>
            </div>
        );
    }
}

export default Class_PhamVuDuyAnh;