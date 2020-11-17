import { createClient } from 'pexels';

export default class PexelsService {
  static getPexels(theme) {
    return new Promise(function(resolve, reject) {
      const client = createClient(`${process.env.API_KEY}`);
      const query = `${inputTheme}`;
  }
}