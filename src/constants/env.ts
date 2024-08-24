import dotenv from "dotenv";

dotenv.config();

export const serviceHost = process.env.HOST || "localhost";

export const getServiceHost = (host: string) =>
  process.env.NODE_ENV === "production" ? host : serviceHost;
