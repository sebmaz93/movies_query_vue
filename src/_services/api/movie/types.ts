export interface Movie {
  id: number;
  title: string;
  img: string;
  genre: { id: number; title: string }[];
  actors: { id: number; name: string }[];
  release_date: number;
  is_series: boolean;
}

export interface MoviesRes {
  page: number;
  total_pages: number;
  has_next_page: boolean;
  results: Movie[];
  total_results: number;
}

export interface MovieReqParams {
  page?: number;
  per_page?: number;
  filters?: {
    searchTerm?: string;
    genre?: number;
    year?: number;
    isSeries?: boolean;
  };
}
