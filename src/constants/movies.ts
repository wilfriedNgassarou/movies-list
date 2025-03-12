export type Movie = typeof movies[number]

export const movies = [
  {
    id: 'breaking-bad',
    title: 'Breaking Bad',
    platform: 'AMC, Netflix',
    seasonsCount: 5,
    releaseYear: 2008,
    cover: '/covers/breaking-bad.webp'
  },
  {
    id: 'the-innocents',
    title: 'The Innocents',
    platform: 'Netflix',
    seasonsCount: 1,
    releaseYear: 2018,
    cover: '/covers/innocents.jpg'
  },
  {
    id: 'captain-marvel',
    title: 'Captain Marvel',
    platform: 'Theatrical Release',
    durationInSeconds: 7380,
    releaseYear: 2019,
    cover: '/covers/marvel.jpg'
  },
];
