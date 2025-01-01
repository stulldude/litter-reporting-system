import fs from 'fs';
import path from 'path';

/**
 * Helper function to log data to a file with a timestamp.
 * 
 * @param data - The data to be logged.
 * @param fileName - The name of the file to log to.
 */
function logToFile(data: string, fileName: string): void {
  const timestamp = new Date().toISOString(); // Generate ISO timestamp
  const filePath = path.resolve(fileName); // Resolve file path
  const logEntry = `[${timestamp}] ${data}\n`; // Format log entry

  // Append the log entry to the file
  fs.appendFile(filePath, logEntry, (err) => {
    if (err) {
      console.error(`Failed to write to file: ${filePath}`, err);
    } else {
      console.log(`Logged to file: ${filePath}`);
    }
  });
}

export default logToFile;
