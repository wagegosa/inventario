import React,{Component} from 'react';
import {AppContext} from '../Context';

class AddProduct extends Component {
    static contextType = AppContext;

    insertUser = (event) => {
        this.context.insertProduct(event,
            this.nombreProducto.value,
            this.referencia.value,
            this.precio.value,
            this.peso.value,
            this.categoria.value,
            this.stock.value,
            this.fechaCreacion.value,
            this.fechaVentaUltima.value
            );
    }

    render(){
        return (
            <form onSubmit={this.insertProduct}>
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Nombre Producto</label>
                    <input type="text" name="nombreProducto" ref={(val) => this.nombreProducto = val} className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Referencia</label>
                    <input type="text" name="referencia" ref={(val) => this.referencia = val} className="form-control" placeholder="Referencia"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Precio</label>
                    <input type="text" name="precio" ref={(val) => this.precio = val} className="form-control" placeholder="Precio"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Peso</label>
                    <input type="text" name="peso" ref={(val) => this.peso = val} className="form-control" placeholder="peso"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Categoria</label>
                    <input type="text" name="categoria" ref={(val) => this.categoria = val} className="form-control" placeholder="categoria"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Stock</label>
                    <input type="text" name="stock" ref={(val) => this.stock = val} className="form-control" placeholder="stock"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Fecha de Creacion</label>
                    <input type="date" name="fechaCreacion" ref={(val) => this.fechaCreacion = val} className="form-control" placeholder="fechaCreacion"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Fecha Ultima Venta</label>
                    <input type="datedatetime-local" name="fechaVentaUltima" ref={(val) => this.fechaVentaUltima = val} className="form-control" placeholder="fechaVentaUltima"/>
                </div>

                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary">Add user</button>
                </div>
            </div>
        </form>  
        );
    }
}
export default AddUser;