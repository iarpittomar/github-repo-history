const monthNames = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const formateDate = (dateData: string) => {
  const date = new Date(dateData);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const newformat = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;

  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}, ${hours ? hours : 12}:${
    minutes < 10 ? '0' + minutes : minutes
  } ${newformat}`;
};
