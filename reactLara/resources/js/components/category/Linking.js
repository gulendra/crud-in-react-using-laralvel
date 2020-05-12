import React, { Component } from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";


export default class Linking extends Component {
  constructor(){
    super();
    this.state={
      employees:[],
      //activePage:0,
      itemsCountPerPage:1,
     totalItemsCount:1
    }
    this.handlePageChange=this.handlePageChange.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:8000/employee')
    .then(response=>{
      this.setState({employees:response.data.data});
    });
  }
   handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    axios.get('http://localhost:8000/employee?page'+pageNumber)
    .then(response=>{
      this.setState({
        employees:response.data.data,
itemsCountPerPage:response.data.per_page,
totalItemsCount:response.data.total,
activePage:response.data.current_page
    });
 });
  }
  onDelete(employee_id){
    axios.delete('http://localhost:8000/employee/delete/'+employee_id)
    .then(response=>{
     
    });
  }
    render() {
        return (
            <div>
           <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">name</th>
      <th scope="col">Email</th>
      <th scope="col">Created_at</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   
     {this.state.employees.map(employees => (
                        <tr key={employees.id}>
                        <td>{employees.id}</td>
                        <td>{employees.name}</td>
                        <td>{employees.email}</td>
                        <td>{employees.created_at}</td>
                         <td><a href='' />Delete</td>
                        </tr>
                    ) )}
  </tbody>
</table>
          <div className="d-flex justify-content-center">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)} 
                    itemClass="page-item"
                    linkClass='page-link'
                    />
                </div>
            </div>
            
          
        );
    }
}

