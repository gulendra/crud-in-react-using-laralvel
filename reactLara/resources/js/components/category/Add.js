import React, { Component } from 'react';
import axios from 'axios'

export default class Add extends Component {
    constructor(){
        super();
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            employee_name:''
        }
    }

onChangeEmployeeName(e){
    this.setState({
        employee_name:e.target.value
    });
}
onSubmit(e){
    e.preventDefault();
    const employee ={
        employee_name : this.state.employee_name
    }
    axios.post('http://localhost:8000/employee/store', employee)
    .then(res=>console.log(res.data));
}

    render() {

        return (
            <div>
            <form onSubmit={this.onSubmit}>
           
  <div className="form-group">
    <label htmlFor="employee_name">Category</label>
    <input type="text"
     className="form-control"
      id="employee_name"
       value={this.employee_name}
       onChange= {this.onChangeEmployeeName}
       placeholder="Enter name" />
     </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>  
            </div>
          
        );
    }
}

