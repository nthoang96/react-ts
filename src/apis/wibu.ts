import axios from "axios";

interface Model<T> {
  id: string;
  type: "anime" | "manga" | "character";
  attributes: T;
}

interface AnimeAttribute {
  description: string;
  titles: {
    en: string;
    en_jp: string;
    ja_jp: string;
  };
  canonicalTitle: string;
  averageRating: string;
  startDate: Date;
  endDate?: Date;
  popularityRank: number;
  ratingRank: number;
  status: "current" | "finished" | "upcoming" | "unreleased" | "tba";
  posterImage: {
    original: string;
    small: string;
  };
  episodeCount: number;
  showType: "TV" | "OVA" | "movie" | "ONA";
}

export type Anime = Model<AnimeAttribute>;

const instance = axios.create({
  baseURL: "https://kitsu.io/api/edge/anime",
});

export const getWibu = (years: number[]): Promise<Anime[]> =>
  instance
    .get<{ data: Anime[] }>(`?filter[seasonYear]=${years.join(",")}`)
    .then((resp) => resp.data.data);
