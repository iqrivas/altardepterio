import React from 'react';

import avatar from '../images/pterio.png';
import logo from '../images/undraw_Container_ship_ok1c.png';

class Badge extends React.Component {
    render () {
        return <div>
            <div>
                <img src={logo} width="150" height="50" alt="Logo"/>
            </div>

            <div>
                <img src={avatar} width="50" height="50" alt="Avatar"/>
                <h1>Cadena de Oración</h1>
            </div>
            <div>
                <p>por Anónimo</p>
                <p>#oompaloompa</p>
            </div>
        </div>
    }
}

export default Badge;