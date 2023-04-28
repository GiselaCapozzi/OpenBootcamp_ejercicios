const logger = require('./logger/logger');

const funcionError = () => {
  try {
    logger.info('Este es un mensaje de exito')
  } catch (error) {
    logger.error('Este es un mensaje de error');
  }
};

funcionError();