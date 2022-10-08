export interface AdType {
  id: string;
  name: string;
  hourStart: string;
  hourEnd: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
}