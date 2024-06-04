import { type TJokesData } from "@/types";

class JokesService {
  URL = 'https://api.chucknorris.io/jokes';

  async getJokes(joke: string) {
    const response = await fetch(this.URL + `/search?query=${joke}`);

    if (!response.ok) throw new Error('Network response error');
    
		return await response.json() as TJokesData;
  }
}
export default new JokesService();
