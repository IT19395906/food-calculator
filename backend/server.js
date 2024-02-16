const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate-cost', (req, res) => {
    const { people, pieces } = req.body;

    if (people > 0 && pieces > 0) {
        const sizes = [
            { size: '5 inch', price: 3, pieces: 4 },
            { size: '7 inch', price: 5, pieces: 6 },
            { size: '10 inch', price: 8, pieces: 10 },
            { size: '15 inch', price: 12, pieces: 15 },
            { size: '24 inch', price: 18, pieces: 24 },
        ];

        let minCost = Number.MAX_VALUE;
        let bestSize = null;

        sizes.forEach((pizzaSize) => {
            const totalPieces = people * pieces;
            const totalCost = (totalPieces / pizzaSize.pieces) * pizzaSize.price;

            if (totalCost < minCost) {
                minCost = totalCost;
                bestSize = pizzaSize.size;
            }
        });

        const result = {
            sizes: sizes.map((pizzaSize) => ({
                ...pizzaSize,
                cost: (people * pieces / pizzaSize.pieces) * pizzaSize.price,
            })),
            bestSize,
        };

        res.json(result);
    }
    else {
        res.status(400).json({ error: 'Invalid input' });
    }
}
)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})