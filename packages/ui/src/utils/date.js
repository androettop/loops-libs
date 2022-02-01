export const ONE_DAY = 24 * 60 * 60 * 1000;

export const sameDay = (a, b) => {
  if ((a && !b) || (b && !a)) {
    return false;
  }
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

export const isBetwen = (date, a, b) => {
  if (!date || !a || !b) {
    return false;
  }
  return date.getTime() > a.getTime() && date.getTime() < b.getTime();
};

export const monthList = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
