// Функция для расчета угла между часовой и минутной стрелкой

function getAngleValue(hours, minutes) {
  const oneMinuteAngle = 360 / 60;
  const oneHourAngle = 360 / 12;
  hours = hours > 12 ? hours - 12 : hours;
  const minutesAngle = minutes * oneMinuteAngle;
  const hoursAngle = hours * oneHourAngle + minutesAngle / 12;

  const result = Math.abs(minutesAngle - hoursAngle);

  return result > 180 ? 360 - result : result;
}

console.log('01:00', getAngleValue(1, 0));
console.log('02:30', getAngleValue(2, 30));
console.log('14:30', getAngleValue(14, 30));
console.log('10:00', getAngleValue(10, 0));
console.log('00:55', getAngleValue(0, 55));
