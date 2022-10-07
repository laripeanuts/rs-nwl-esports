// 12:00 -> ["12", "00"] -> [12, 00] -> 12 * 60 + 00 = 720

export const convertHourString = (hourString: string) => {
  const [hour, minutes] = hourString.split(':').map(Number);

  return (hour * 60) + minutes;
};
