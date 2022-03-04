export const convertDate = (premiere) => {
  const date = new Date(premiere);
  const months = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
  ];

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}