const express = require('express');
const app = express();
const port = 3000;

let clients =[
    {
    id: 1,
    name: "laura",
    apellido: "chavarriaga"
    }
]

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`);
});

//Endpoints

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello Cuties' });
});

app.get('/clients', (req, res) => {
    return res.status(200).json(clients);
});

app.post('/clients', (req, res) => {
   const newClient = {...req.body, id: clients.length + 1}
    clients.push(newClient);
    return res.status(201).json({message: "cliente agregado", client: newClient})
});
