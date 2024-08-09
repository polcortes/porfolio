import { UI } from './i18n/ui';

export type Translation = keyof typeof UI;

export type Experience = {
  company: string;
  time: string;
  description: string[];
}

export type ProjectType = {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
  github: string | null;
  githubTitle: string | null;
  img: string;
  imgAlt: string;
  imgTitle: string;
  techs: string[];
}