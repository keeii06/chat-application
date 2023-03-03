const moment = require("moment");

function formatmsg(username, message) {
  return {
    username,
    message,
    time: moment(stillUtc).local().format("h:mm a"),
  };
}

module.exports = formatmsg;
