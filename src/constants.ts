import type { LANGUAGES } from './i18n/ui';
import { useTranslations } from './i18n/utils';


export function WORKING_TIME (lang: keyof typeof LANGUAGES): string {
  const startDate = new Date('2023-10-03');
  const currentDate = new Date();
  
  const t = useTranslations(lang);

  let yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
  let monthsDifference = currentDate.getMonth() - startDate.getMonth();

  if (monthsDifference < 0) {
    yearsDifference--;
    monthsDifference += 12;
  }

  if (yearsDifference === 0) return `${monthsDifference} ${t('hero').workingTime2}`;

  return `${yearsDifference} ${t('hero').workingTime1} ${monthsDifference} ${t('hero').workingTime2}`;
}