export interface SeasonsResponse {
  MRData: Mrdata
}

export interface Mrdata {
  xmlns: string
  series: string
  url: string
  limit: string
  offset: string
  total: string
  SeasonTable: SeasonTable
}

export interface SeasonTable {
  Seasons: Season[]
}

export interface Season {
  season: string
  url: string
}
