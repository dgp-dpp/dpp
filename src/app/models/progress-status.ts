export class ProgressStatus {
}
export interface IProgressStatus{
  status: ProgressStatusEnum;
  percentage?:number;
}
export enum ProgressStatusEnum{
  START, COMPLETE, IN_PROGRESS, ERROR
}
