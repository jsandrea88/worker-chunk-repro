import { zipSync } from 'fflate';
export const zipA = () => zipSync({ 'a.txt': new Uint8Array([97]) });
