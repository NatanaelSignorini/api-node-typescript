import pino from 'pino';
import 'dotenv/config';

const logger_enablead = process.env.LOGGER_ENABLED ==='true'
const logger_level = process.env.LOGGER_LEVEL

export default pino({
  enabled: logger_enablead,
  level: logger_level,
});