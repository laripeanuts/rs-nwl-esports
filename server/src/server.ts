import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/games', (request, response) => {
  return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
  const gameId = request.params.id;

  return response.json([
    { id: 1, name: "Asd 1 "},
    { id: 2, name: "Asd 2 "},
    { id: 3, name: "Asd 3 "},
    { id: 4, name: "Asd 4 "},
    { id: 5, name: "Asd 5 "},
  ]);
});

app.get('/ads/:id/discord', (request, response) => {
  const adsId = request.params.id;

  return response.json([]);
});

app.listen(3333);