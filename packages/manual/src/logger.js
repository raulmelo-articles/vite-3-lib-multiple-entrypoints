export const logger = {
  log: (message) => {
    console.log("[LOG]", message);
  },
  error: (message) => {
    console.error("[ERROR]", message);
  },
};
