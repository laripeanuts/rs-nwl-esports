// 1080 -> 18:00
export const convertMinuteString = (minuteString: number) => {
  const hour = Math.floor(Number(minuteString) / 60);
  const minutes = Number(minuteString) % 60;

  return `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};
