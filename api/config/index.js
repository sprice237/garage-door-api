module.exports = {
    logDir: process.env.LOG_DIR || "/var/log/garage-door",
    logLevel: process.env.LOG_LEVEL || "debug",
    jwtKey: "7536FFCC2CBE3A79B067770C07841E3FF6E402A6FB38943784A271A3189FC72B4A9AE25A57B09C7DC6654C943A13E22F123AE4B3DB4FE43CF0BD4FC2BD60D0C7",
    jwtValidTimespan: 86400 // one day
};