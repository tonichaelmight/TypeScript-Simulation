type TStringKeyNumberValueObject = {
  [key: string]: number
}

export type TLevelingMatrix = TStringKeyNumberValueObject & {
  health: number,
  mana: number,
  physicalAttack: number,
  physicalDefense: number,
  magicAttack: number,
  magicDefense: number,
  speed: number,
  luck: number
}

export type TStats = TStringKeyNumberValueObject & {
  level: number,
  health: number,
  mana: number,
  physicalAttack: number,
  physicalDefense: number,
  magicAttack: number,
  magicDefense: number,
  speed: number,
  luck: number
}

export interface IStats {
  stats: TStats,
  levelingMatrix: TLevelingMatrix,
  levelUp(): void,
  levelStat(stat: string): void
}



