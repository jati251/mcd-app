module.exports = {
  apps : [{
    name   : "server_mcd",
    script : "./app.js",
    watch  : true,
    env: {
    "PORT":80,
    "NODE_ENV":"production",
    "DATABASE_URL":"postgresql://postgres:wiDMkVMeR3Sm4Snt@db.phwolqrsozgtwvplwium.supabase.co:5432/postgres"
   }
  }]
}
