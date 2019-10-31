const express = require('express');

const app = express();
app.use(express.static('public'));
const customers = [
  {id: 1, firstName: 'John', lastName: 'Doe'},
  {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  {id: 3, firstName: 'Mary', lastName: 'Swanson'},
];


app.get('/api/customers', (req, res) => {
  res.json(customers);
});
app.use(function (req,res) {
  res.status(404)
  res.send('not found');
})
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);