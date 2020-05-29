import React from 'react';
import Axios from 'axios';
class Actions extends React.Component{
    state = {
        products:[]
    }
    // Obtener producto de la DB
    fetchUsers = () => {
        Axios.get('http://localhost/InventarioPhp/allProducts.php')
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    products:data.products.reverse()
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
     // Editar
     editMode = (id) => {
        let products = this.state.products.map(product => {
            if(product.id === id){
                product.isEditing = true;
                return product;
            }
            product.isEditing = false;
            return product;
        });

        this.setState({
            products
        });
    }
    //Cancelar edición
    cancelEdit = (id) => {
        let products = this.state.products.map(product => {
            if(product.id === id){
                product.isEditing = false;
                return product;
            }
            return product
            
        });
        this.setState({
            products
        });
    }
    // Actualizar producto
    handleUpdate = (id, nombreProducto, referencia, precio, peso, categoria, stock, fechaCreacion, fechaVentaUltima) => {
        Axios.post('http://localhost/InventarioPhp/upProducts.php',
        {
            id:id,
            nombreProducto: nombreProducto,
            referencia: referencia,
            precio: precio,
            peso: peso,
            categoria: categoria,
            stock: stock,
            fechaCreacion: fechaCreacion,
            fechaVentaUltima: fechaVentaUltima
        })
        .then(({data}) => {
            if(data.success === 1){
                let products = this.state.products.map(user => {
                    if(product.id === id){
                        product.nombreProducto= nombreProducto;
                        product.referencia= referencia;
                        product.precio= precio;
                        product.peso= peso;
                        product.categoria= categoria;
                        product.stock= stock;
                        product.fechaCreacion= fechaCreacion;
                        product.fechaVentaUltima= fechaVentaUltima;
                        product.isEditing = false;
                        return product;
                    }
                    return product; 
                });
                this.setState({
                    products
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }


    // Eliminar producto
    handleDelete = (id) => {
        let deleteProduct = this.state.users.filter(user => {
            return user.id !== id;
        });
        
        Axios.post('http://localhost/InventarioPhp/deProduct.php',{
            id:id
        })
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:deleteProduct
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    // Insertar producto
    insertUser = (event,nombreProducto, referencia, precio, peso, categoria, stock, fechaCreacion, fechaVentaUltima) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-react/add-user.php',{
            nombreProducto: nombreProducto,
            referencia: referencia,
            precio: precio,
            peso: peso,
            categoria: categoria,
            stock: stock,
            fechaCreacion: fechaCreacion,
            fechaVentaUltima: fechaVentaUltima
        })
        .then(function ({data}) {
            if(data.success === 1){
                this.setState({
                    products:[
                        {
                            "id":data.id,
                            "nombreProducto": nombreProducto,
                            "referencia": referencia,
                            "precio": precio,
                            "peso": peso,
                            "categoria": categoria,
                            "stock": stock,
                            "fechaCreacion": fechaCreacion,
                            "fechaVentaUltima": fechaVentaUltima
                        },
                        ...this.state.products
                    ]
                });
                event.target.reset();
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default Actions;