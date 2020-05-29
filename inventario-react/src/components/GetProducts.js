import React, { Component } from 'react';
import { AppContext } from '../Context';
class GetProducts extends Component {
    static contextType = AppContext;

    componentDidMount() {
        this.context.get_products();
    }

    handleUpdate = (id) => {
        this.context.handleUpdate(id, this.nombreProducto.value,
            this.referencia.value,
            this.precio.value,
            this.peso.value,
            this.categoria.value,
            this.stock.value,
            this.fechaCreacion.value,
            this.fechaVentaUltima.value);
    }

    render() {
        let allProducts;
        let mainData;

        allProducts = this.context.all_products.map(({ id, nombreProducto, referencia, precio, peso, categoria, stock, fechaCreacion, fechaVentaUltima, isEditing }) => {
            return isEditing === true ? (
                <tr key={id}>
                    <td><input className="form-control" type="text" ref={(item) => this.nombreProducto = item} defaultValue={nombreProducto} /></td>
                    <td><input className="form-control" type="email" ref={(item) => this.referencia = item} defaultValue={referencia} /></td>
                    <td><input className="form-control" type="text" ref={(item) => this.precio = item} defaultValue={precio} /></td>
                    <td><input className="form-control" type="email" ref={(item) => this.peso = item} defaultValue={peso} /></td>
                    <td><input className="form-control" type="text" ref={(item) => this.categoria = item} defaultValue={categoria} /></td>
                    <td><input className="form-control" type="email" ref={(item) => this.stock = item} defaultValue={stock} /></td>
                    <td><input className="form-control" type="text" ref={(item) => this.fechaCreacion = item} defaultValue={fechaCreacion} /></td>
                    <td><input className="form-control" type="email" ref={(item) => this.fechaVentaUltima = item} defaultValue={fechaVentaUltima} /></td>
                    <td>
                        <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id)}>Guardar</button>
                        <button onClick={() => this.context.cancelEdit(id)} className="btn btn-light">Cancelar</button>
                    </td>
                </tr>
            ) : (
                    <tr key={id}>
                        <td>{nombreProducto}</td>
                        <td>{referencia}</td>
                        <td>{precio}</td>
                        <td>{peso}</td>
                        <td>{categoria}</td>
                        <td>{stock}</td>
                        <td>{fechaCreacion}</td>
                        <td>{fechaVentaUltima}</td>
                        <td>
                            <button className="btn btn-dark mr-2" onClick={() => this.context.editMode(id)}>Editar</button>
                            <button onClick={() => this.context.handleDelete(id)} className="btn btn-danger">Eliminnar</button>
                        </td>
                    </tr>
                );
        });

        if (this.context.all_users.length > 0) {
            mainData = (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>nombreProducto</th>
                            <th>referencia</th>
                            <th>precio</th>
                            <th>peso</th>
                            <th>categoria</th>
                            <th>stock</th>
                            <th>fechaCreacion</th>
                            <th>fechaVentaUltima</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts}
                    </tbody>
                </table>
            );
        }
        else {
            mainData = (
                <div className="alert alert-light" role="alert">
                    <h4 className="alert-heading">No User Found!</h4>
                    <hr />
                    <p>Profavor Ingrese un productos.</p>
                </div>
            );
        }
        return (
            <>
                {mainData}
            </>
        );
    }

}
export default GetUsers;