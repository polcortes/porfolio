import { UI } from './i18n/ui';

export type Translation = keyof typeof UI;

export type Experience = {
  company: string;
  time: string;
  description: string[];
}