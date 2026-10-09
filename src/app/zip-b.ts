import { unzipSync, zipSync } from 'fflate';
export const zipB = () => unzipSync(zipSync({ 'b.txt': new Uint8Array([98]) }));
