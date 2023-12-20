import { seasons } from "./src/scripts/geron";
import { TSeason } from "./src/scripts/types";

let maxIncome: TSeason | null = null;
let maxSeasonName: string | null = null;
Object.entries(seasons).forEach(([season, seasonInfo]) => {
  if (!maxIncome || maxIncome.income < seasonInfo.income) {
    maxIncome = seasonInfo;
    maxSeasonName = season;
  }
});

console.log(maxSeasonName, maxIncome);

let minIncome: TSeason | null = null;
let minSeasonName: string | null = null;
Object.entries(seasons).forEach(([season, seasonInfo]) => {
  if (!minIncome || minIncome.income > seasonInfo.income) {
    minIncome = seasonInfo;
    minSeasonName = season;
  }
});
console.log(minSeasonName, minIncome);
