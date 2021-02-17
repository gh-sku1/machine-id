const si = require('systeminformation');

async function systemData() {
  try {
    let data = await si.system()
    return {
      manufacturer: data.manufacturer,
      model: data.model,
      version: data.version,
      serial: data.serial
    }
  } catch (err) {
    console.log(`${err}`)
  }
}

function machineId() {
  return (async () => {
    let sd = await systemData()
    return sd
  })()
}


machineId().then(sd => {console.log(sd)})
