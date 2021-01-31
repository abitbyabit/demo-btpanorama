export interface IPackData {
  packId: number;
  isPackSelected: boolean;
  isPackSelectedPrevious?: boolean;
  packName: string;
  packDescription: string;
  reports?: IpackReport[];
}

export interface IpackReport {
  reportId: number;
  reportName: string;
  atDate: string;
  toDate?: string;
  targetWeightPercent?: string;
}
