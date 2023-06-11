const express = require("express");
const cors = require("cors");
const os = require("os");
const cron = require("node-cron");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8000;

cron.schedule("21-23 * * * *", () => {
    console.log("running every minute to 1 from 5");
});

// Schedule cron job to run every 5 minutes
cron.schedule("* * * * *", () => {
    const cpuUsage = os.loadavg()[0];
    const freeMemory = os.freemem() / 1024 / 1024; // Convert to MB
    const totalMemory = os.totalmem() / 1024 / 1024; // Convert to MB
    const usedMemory = totalMemory - freeMemory;
    const memoryUsagePercentage = (usedMemory / totalMemory) * 100;

    console.log("CPU Usage:", cpuUsage);
    console.log("Free Memory:", freeMemory, "MB");
    console.log("Total Memory:", totalMemory, "MB");
    console.log("Memory Usage:", memoryUsagePercentage.toFixed(2), "%");
});

// Schedule cron job to run every day at 10:00 AM
cron.schedule("0 10 * * *", () => {
    console.log("Running cron job");
});

// Schedule cron job to run every day at 10:00 PM
cron.schedule("0 22 * * *", () => {
    console.log("Running cron job at 10 PM");
});

// Schedule cron job for July 22, 2023, at 9:00 PM
cron.schedule("0 21 22 7 *", () => {
    console.log("Running cron job on July 22, 2023, at 9 PM");
});

//cron job for every mondays
cron.schedule("0 10 * * 1", () => {
    console.log("Running cron job on every mondays");
});

//cron job for every 3 days
cron.schedule("0 8 */3 * *", () => {
    console.log("Running cron job on every 3 days");
});

//cron job for every 3 8am
cron.schedule("0 8 * * *", () => {
    console.log("Running cron job on every 8Am");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
