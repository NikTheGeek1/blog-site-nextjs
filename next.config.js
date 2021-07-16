const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "ntheodoropoulos",
        mongodb_password: 12345,
        mongodb_cluster: "cluster0",
        mongodb_db_key: "nextjs-blog",
      },
    };
  }

  return {
    env: {
      mongodb_username: "ntheodoropoulos",
      mongodb_password: 12345,
      mongodb_cluster: "cluster0",
      mongodb_db_key: "nextjs-blog",
    },
  };
};
