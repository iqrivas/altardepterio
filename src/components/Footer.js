import React from 'react';
import './styles/Footer.css';

class Footer extends React.Component {
    render () {
        return (
          <div className="Footer">
            <span className="Footer__created">
              Creado por{" "}  
              <a className="Footer__created" href="https://github.com/iqrivas" target="_blank" rel="noopener">
                Denisse Rivas
              </a>
            </span>
          </div>
        );
    }
}

export default Footer;