import 'dotenv/config';
import './util/module-alias';
import logger from './util/logger';
import app from './server';

// Host do servidor
const HOSTNAME = process.env.SERVER_HOST;
// Porta do servidor
const PORT = process.env.SERVER_PORT;

async function main() {
  try {
    await app.listen(PORT, () => {
      logger.info(`Server listening on ${HOSTNAME}:${PORT}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
