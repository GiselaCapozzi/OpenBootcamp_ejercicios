import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Persona } from '../models/persona.class';

const ComponenteB = ({ persona }) => {
  return (
    <div>
      <h2>Nombre: {persona.nombre}</h2>
      <h2>Apellido: {persona.apellido}</h2>
      <h3>Email: {persona.email}</h3>
      <div style={{ display:'flex', justifyContent: 'center' }}>
        {persona.conectado ? (
        <div>
          <FontAwesomeIcon icon={faUser} style={{ color: 'green' }} />
          <p>En Linea</p>
        </div>
      )
        : (
          <div>
            <FontAwesomeIcon icon={faUser} style={{ color: 'red' }} />
            <p>No Disponible</p>
          </div>
        )}

      </div>
    </div>
  )
}

ComponenteB.propTypes = {
  persona: PropTypes.instanceOf(Persona)
}

export default ComponenteB