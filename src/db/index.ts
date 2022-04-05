import { logDanger, logPrimary } from '../utils';

export async function initDB(): Promise<void> {
  try {
    logPrimary('DB connected...');
  } catch (err) {
    logDanger(err.message);
    // exit process
    process.exit(1);
  }
}
