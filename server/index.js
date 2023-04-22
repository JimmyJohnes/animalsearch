import express from "express";
import cors from "cors";
import Chance from "chance";

const chance = new Chance();
const app = express();
app.use(cors());
app.use(express.json());

let animals = [...Array(250).keys()].map(i => {
    return {
        i,
        name: chance.name(),
        age: chance.age(),
        type: chance.animal(),
    }
});

app.get('/animals', (req, res) => {
    const query = req.query.q?.toLowerCase() || '';
    const result = animals.filter(animal => animal.type.toLowerCase().includes(query));
    res.send(result);
});

app.listen(8080,() => {console.log("listening on port 8080")})
