import express from "express";
import cors from "cors";
import Chance from "chance";

const chance = new Chance();
const app = express();
app.use(cors());
app.use(express.json());

animals = [...Array(250).keys()].map(i => {
    return {
        id,
        name: chance.name(),
        age: chance.age(),
        type: chance.animal(),
    }
});
