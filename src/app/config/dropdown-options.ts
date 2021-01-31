import { SelectItem } from 'primeng/api';

import { IDropdownOptions } from '../shared/interface/IDropdownOptions';

export const daysFromFilters__quickRefereces: IDropdownOptions = {
  fieldName: 'daysFrom',
  value: [
    { label: 'Last 6 months', value: '6M' },
    { label: 'Last 12 months', value: '12M' },
    { label: 'Last 24 months', value: '24M' },
  ],
  // currentValue: '',
};

export const targetWeightOptions: IDropdownOptions = {
  fieldName: 'targetWeight',
  label: '',
  value: [
    { label: 'Estimated gain/loss', value: 'Estimated gain/loss' },
    { label: 'By asset classdays', value: 'By asset class' },
    { label: 'No benchmarks selected', value: 'No benchmarks selected' },
  ],
  currentValue: '',
};
