export type TJoke = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

export type TJokesData = {
  result: TJoke[];
  total: number;
};