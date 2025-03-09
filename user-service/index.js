//user-service
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.get('/api/users', (req, res) => {
    res.json({ users: [{ id: 1, name: 'John Doe' }] });
  });
  
  app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
  });