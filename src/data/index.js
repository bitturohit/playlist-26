import faker from "faker";

export const createRandomMovie = () => {
   return `${faker.hacker.adjective()} ${faker.hacker.noun()}`;
};

export const createRandomSong = () => {
   return faker.music.genre();
};
