export const logger = {
  log: (message: string) => {
    console.log("[LOG]", message);
  },
  error: (message: string) => {
    console.error("[ERROR]", message);
  },
};
