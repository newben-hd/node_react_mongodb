// console.log("From configuration file");

const env = process.env;
// console.log(env.PORT);

export default {
    port: env.PORT || 8080
};

export const nodeEnv = env.NODE_ENV || "development";

export const logStars = (message)=>{
    console.info("***********");
    console.info(message);
    console.info("***********");
};