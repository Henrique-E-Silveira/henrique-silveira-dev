export const BIRTH_DATE = new Date(2007, 8, 29);
export const STUDY_START_YEAR = 2023;

export function getAge(today: Date = new Date()): number {
  let age = today.getFullYear() - BIRTH_DATE.getFullYear();
  const m = today.getMonth() - BIRTH_DATE.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < BIRTH_DATE.getDate())) age--;
  return age;
}

export function getYearsStudying(today: Date = new Date()): number {
  return today.getFullYear() - STUDY_START_YEAR;
}
