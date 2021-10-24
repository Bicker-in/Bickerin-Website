const MONTHS = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface TranslateDateResType {
  month: string;
  day: number;
  year: number;
}

const translateDate = (date: string): TranslateDateResType => {
  const dateObject = new Date(date);
  return {
    month: MONTHS[dateObject.getMonth()],
    day: dateObject.getDate(),
    year: dateObject.getFullYear(),
  };
};

export default translateDate;
