const moment = require("moment");

function formatmsg(username, message) {
  return {
    username,
    message,
    time: moment().format("h:mm a"),
  };
}

module.exports = formatmsg;
