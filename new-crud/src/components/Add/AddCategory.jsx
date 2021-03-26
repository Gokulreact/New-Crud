import React, { Component } from 'react';

class AddCategory extends Component {


    render(){
        return(
            <div className="ui main container">
            <h2 className="ui center aligned container">Add Datas</h2>
               <form className="ui form">
                 <div className="field">
                    <label>Category Name</label>
                    <input type="text" name="name" placeholder="Enter Category Name"/>
                 </div>

                 <button className="ui button blue">Add</button>
               
               </form>
            
            </div>


        );
    }

}
export default AddCategory