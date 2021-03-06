import React from 'react';

class BadgeForm extends React.Component {
   

    render() {
        return (
            <div>
                <h1 className="text-center">Nueva Solicitud</h1>

                <form onSubmit={this.props.onSubmit} action="">
                    <div className="form-group">
                        <label>Tipo de Solicitud</label>
                        <select onChange={this.props.onChange} className="form-control" type="text" 
                                name="requestType" value={this.props.formValues.requestType}>
                            <option value="null">Selecciona una opción</option>
                            <option value="Cadena de Oración">Cadena de Oración</option>
                            <option value="Consejo de Pterio">Consejo de Pterio</option>
                        </select>
                        
                        <label>Título de la Solicitud </label>
                        <input  onChange={this.props.onChange} className="form-control" type="text" 
                        name="requestTitle" value={this.props.formValues.requestTitle}/>
                        
                        <label>Descripción de la Solicitud </label>
                        <textarea onChange={this.props.onChange} className="form-control" rows="3" 
                        name="requestDescription" value={this.props.formValues.requestDescription}/>
                        
                        <label>Nombre del Solicitante </label>
                        <input onChange={this.props.onChange} className="form-control" type="text" 
                        name="requestAuthor" value={this.props.formValues.requestAuthor}/>
                        
                        <label>Etiqueta/Hashtag de la Solicitud</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" 
                        name="requestTag" value={this.props.formValues.requestTag}/>
                    </div>

                    <button className="btn btn-primary">Guardar</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;