import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Actions {
  render(){
    const contextValue = {
        all_products:this.state.products,
        get_products:this.fetchProducts,
        editMode:this.editMode,
        cancelEdit:this.cancelEdit,
        handleUpdate:this.handleUpdate,
        handleDelete:this.handleDelete,
        insertProduct:this.insertProduct
    }
    return (
      <Provider value={contextValue}>
        <div className="container-fluid bg-light">
              <div className="container p-5">
                  <div className="card shadow-sm">
                      <h1 className="card-header text-center text-uppercase text-muted">React PHP CRUD Application</h1>
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-4">
                                  <AddProduct/>
                              </div>
                              <div className="col-md-8">
                                <AllProducts/>
                              </div>
                          </div>
                      </div>
                  </div>
      
              </div>
              </div>
      </Provider>
    );
  }
}

export default App;
