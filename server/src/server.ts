import express from "express";

const app = express();

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: "Asd 1 "},
    { id: 2, name: "Asd 2 "},
    { id: 3, name: "Asd 3 "},
    { id: 4, name: "Asd 4 "},
    { id: 5, name: "Asd 5 "},
  ]);
});

app.listen(3333);