import { IIndividualReport } from './IIndividualReport';
import { IPackData } from './IPackData';

export interface IClientReport {
  packReports: IPackData[] ;
  individualReports: IIndividualReport[];
}
