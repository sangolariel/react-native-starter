export interface IInterface {
  id?: string;
}

export interface IBaseReq {
  offset: string;
  limit: string;
}

export interface IBaseRes<T> {
  success: boolean;
  paging: IPaging;
  result: T[];
}

export interface IPaging {
  offset: string;
  limit: string;
  count: number;
  total: number;
}
