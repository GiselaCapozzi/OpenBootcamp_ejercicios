import React from 'react';

import ComponenteB from './ComponenteB';

import { Persona } from '../models/persona.class';

const ComponenteA = () => {
  const defaultPersona = new Persona('Gisela', 'Capozzi', 'gisecapozzi@gmail.com', false);
  return (
    <div>
      <div>
      <h1>Usuario:</h1>
      </div>
      <ComponenteB persona={defaultPersona}></ComponenteB>
    </div>
  )
}

ComponenteA.propTypes = {}

export default ComponenteA