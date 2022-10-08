import { PrismaClient } from '@prisma/client';
import cors from "cors";
import express from "express";

import { convertHourString } from "./database/utils/convertHourString";
import { convertMinuteString } from "./database/utils/convertMinuteString";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
    orderBy: {
      title: 'asc',
    },
  });

  return response.json(games);
});

app.get('/games/:id/ads', async (request, response) => {
  const gameId: string = request.params.id;
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      useVoiceChannel: true,
      createdAt: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const adsFormatted = ads.map((ad: any) => ({
    ...ad,
    weekDays: ad.weekDays.split(','),
    hourStart: convertMinuteString(ad.hourStart),
    hourEnd: convertMinuteString(ad.hourEnd),
  }));

  return response.json(adsFormatted);
});

app.get('/ads/:id/discord', async (request, response) => {
  const adsId = request.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discordId: true,
    },
    where: {
      id: adsId,
    },
  });

  return response.json({
    discord: ad.discordId,
  });
});

app.post('/games/:id/ads', async (request, response) => {
  const gameId: string = request.params.id;
  const body: any = request.body;

  const ad: any = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourString(body.hourStart),
      hourEnd: convertHourString(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
      discordId: body.discordId,
    },
  });

  return response.status(201).json(ad);
});

app.listen(3333);