const os = require('os')

// info about curent user
const user = os.userInfo()

console.log(user)

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime} seconds
	    ${os.uptime/60} minutes
	    ${os.uptime/3600} hours`)

const currentOS = {
  name     : os.type(),
  release  : os.release(),
  totalMem : os.totalmem(),
  freeMem  : os.freemem()
}

console.log(currentOS)
