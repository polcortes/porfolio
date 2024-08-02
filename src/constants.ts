export const WORKING_TIME = () => {
  const startDate = new Date('2023-10-03');
  const currentDate = new Date();

  let yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
  let monthsDifference = currentDate.getMonth() - startDate.getMonth();

  if (monthsDifference < 0) {
    yearsDifference--;
    monthsDifference += 12;
  }

  if (yearsDifference === 0) return `${monthsDifference} meses de experiencia`;

  return `${yearsDifference} años y ${monthsDifference} meses de experiencia`;
}