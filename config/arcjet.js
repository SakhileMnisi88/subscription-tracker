import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from './env.js'

const aj = arcjet({
    key: ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        // Shield protects against common web attacks e.g. SQL injection
        shield({ mode: "LIVE" }),
        // Block all automated clients — bots inflate AI costs
        detectBot({
            mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
            allow: ["CATEGORY:SEARCH_ENGINE"], // Block all bots. See https://arcjet.com/bot-list
        }),
        // Enforce budgets to control AI costs. Adjust rates and limits as needed.
        tokenBucket({
            mode: "LIVE",
            refillRate: 5, // Refill 5 tokens per hour
            interval: 10, //Refill every 10 seconds
            capacity: 10, // Maximum 10 tokens in the bucket
        }),

    ],
});

export default aj;