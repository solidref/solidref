export const normalizeLanguageName = (language: string): string => language.replace('#', '-sharp');

export const denormalizeLanguageName = (language: string): string => language.replace('-sharp', '#');
