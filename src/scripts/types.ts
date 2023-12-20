export type TSeason = {
  closeProjects: number;
  income: number;
  hired: number;
  dismissed: number;
  newProjects: number;
};
export type TSeasons = {
  winter: TSeasons;
  summer: TSeasons;
  autumn: TSeasons;
  spring: TSeasons;
};
