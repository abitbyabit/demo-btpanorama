/**
 * fake  in memory api setup
 *
 * TODO: replace API with real backend api
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IClientReport } from 'src/app/shared/interface/IClientReports';

export class ClientData implements InMemoryDbService {
  createDb() {
    const clients: IClientReport[] = [
      {
        packReports: [
          {
            packId: 1,
            isPackSelected: false,
            packName: 'Summary pack',
            reports: [
              {
                reportId: 1,
                reportName: 'Portfolio valuation',
                atDate: '29 Aug 2017',
                toDate: '',
                targetWeightPercent: 'Estimated gain/loss',
              },
              {
                reportId: 2,
                reportName: 'Asset allocation',
                atDate: '29 Aug 2017',
                toDate: '',
                targetWeightPercent: 'By asset class ',
              },
              {
                reportId: 3,
                reportName: 'Account performance',
                atDate: '29 Aug 2017',
                toDate: '29 Aug 2017',
                targetWeightPercent: 'No benchmarks select ',
              },
              {
                reportId: 4,
                reportName: 'Portfolio performance',
                atDate: '29 Aug 2017',
                toDate: '29 Aug 2017',
                targetWeightPercent: '',
              },
              {
                reportId: 5,
                reportName: 'Transaction history cash statement',
                atDate: '29 Aug 2017',
                toDate: '29 Aug 2017',
                targetWeightPercent: '',
              },
            ],
            packDescription:
              'Portfolio valuation, Asset allocation, Account performance and Portfolio performance',
          },
          {
            packId: 2,
            isPackSelected: false,
            packName: 'Tax pack',
            reports: [],
            packDescription:
              'Portfolio valuation, Asset allocation, Account performance and Portfolio performance',
          },
          {
            packId: 3,
            isPackSelected: false,
            packName:
              'really long long long long long long long long long pack',
            reports: [],
            packDescription:
              'Portfolio valuation, Asset allocation, Account performance and Portfolio performance',
          },
          {
            packId: 4,
            isPackSelected: false,
            packName:
              'extremly extremly extremly extremly extremly extremly extremly extremly extremly extremly  long  extremly  long  extremly  long  extremly  long  extremly  long Summary pack',
            reports: [],
            packDescription:
              'Portfolio valuation, Asset allocation, Account performance and Portfolio performance',
          },
          {
            packId: 5,
            isPackSelected: false,
            packName:
              'extremly extremly extremly extremly extremly extremly extremly extremly extremly extremly  long  extremly  long  extremly  long  extremly  long  extremly  long Summary pack',
            reports: [],
            packDescription:
              'Portfolio valuation, Asset allocation, Account performance and Portfolio performance',
          },
          {
            packId: 6,
            isPackSelected: false,
            packName:
              'extremly extremly extremly extremly extremly extremly extremly extremly extremly extremly  long  extremly  long  extremly  long  extremly  long  extremly  long Summary pack',
            reports: [],
            packDescription:
              'Portfolio valuation, Asset allocation, Account performance and Portfolio performance',
          },
          {
            packId: 7,
            isPackSelected: false,
            packName:
              'extremly extremly extremly extremly extremly extremly extremly extremly extremly extremly  long  extremly  long  extremly  long  extremly  long  extremly  long Summary pack',
            reports: [],
            packDescription:
              'Portfolio valuation, Asset allocation, Account performance and Portfolio performance',
          },
          {
            packId: 8,
            isPackSelected: false,
            packName: 'it may have lots of packs',
            reports: [],
            packDescription:
              'Portfolio valuation, Asset allocation, Account performance and Portfolio performance',
          },
        ],
        individualReports: [
          {
            isExpanded: false,
            reportName: 'Portfolio reports',
            reportBrief:
              'Portfolio valuation, Asset allocation, Account performance, Portfolio performance, Portfolio, Portfolio movement & Transaction history cash statement',
            reportContent:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo iusto dolor sequi quisquam assumenda ducimus in architecto illo eveniet porro culpa id, tempora ea at, amet ipsam? Quo, blanditiis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sunt, autem vel aspernatur suscipit animi cupiditate excepturi! Praesentium modi non delectus exercitationem cum fugiat. Tempora aspernatur qui corrupti obcaecati odit?Portfolio valuation, Asset allocation, Account performance, Portfolio performance, Portfolio, Portfolio movement & Transaction history cash statement',
          },
          {
            isExpanded: false,
            reportName: 'Income reports',
            reportBrief:
              'Income received, Income accrued, Realised capital gains tax & Unrealised capital gains tax',
            reportContent:
              'Lorem ipsum dolor sit amet Income received, Income accrued, Realised capital gains tax & Unrealised capital gains taxconsectetur adipisicing elit. Labore quo iusto dolor sequi quisquam assumenda ducimus in architecto illo eveniet porro culpa id, tempora ea at, amet ipsam? Quo, blanditiis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sunt, autem vel aspernatur suscipit animi cupiditate excepturi! Praesentium modi non delectus exercitationem cum fugiat. Tempora aspernatur qui corrupti obcaecati odit?Portfolio valuation, Asset allocation, Account performance, Portfolio performance, Portfolio, Portfolio movement & Transaction history cash statement',
          },
        ],
      },
    ];
    return { clients };
  }
}
