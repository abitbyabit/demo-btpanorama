import { SelectItem } from "primeng/api"

export interface IDropdownOptions {
    fieldName?: string,
    label?: string,
    placeHolder?: string,
    value: SelectItem[
    ],
    currentValue?: string | number,
}