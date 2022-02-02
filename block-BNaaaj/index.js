/*console.log('Welcome to Nodejs')

let os = require(`os`);
const cpuCount=os.cpus().length;
const freeMemory=os.freemem();
const version=os.platform();
const upTime=os.uptime();

console.log(cpuCount,freeMemory,version,upTime);

*/

let buff1=Buffer.alloc(12);

let buff2=Buffer.allocUnsafe(12);

buff1.write("How are you doing");

console.log(buff1.toString());