export interface BaseResponse<T> {
  get: string;
  parameters: Parameters;
  errors: string[];  // Assuming errors are an array of strings, modify as needed
  results: number;
  paging: Paging;
  response: T;
}

export interface Parameters {
  name: string;
  country: string;
  season: string;
}

export interface Paging {
  current: number;
  total: number;
}