import type {PageContextServer} from 'vike/types';
import {useConfig} from 'vike-react/useConfig';

export type Movie = {
  id: string;
  title: string;
  release_date: string;
};

export type MovieDetails = Movie & {
  director: string;
  producer: string;
};

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContextServer) {
  const config = useConfig();

  const response = await fetch(`https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`);
  let movie = (await response.json()) as MovieDetails;

  config({
    // Set <title>
    title: `Mingleup | 익명보장 즉석만남`,
  });

  movie = minimize(movie);

  return {movie};
}

function minimize(movie: MovieDetails): MovieDetails {
  const {id, title, release_date, director, producer} = movie;
  return {id, title, release_date, director, producer};
}
