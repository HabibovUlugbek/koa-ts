import * as Interfaces from "../src/types/interfaces";

export const config: Interfaces.IConfig = {
	port: process.env.PORT || "3000",
	redis: {
		host: process.env.REDIS_HOST || "0.0.0.0",
		port: process.env.REDIS_PORT || "6432",
	},
};
