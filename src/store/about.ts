// about.js -> about.ts
import { Store } from "../core/core";

interface State {
  photo: string
  name: string
  email: string
  github: string
  repository: string
}
export default new Store<State>({
  photo: 'https://avatars.githubusercontent.com/u/71330240?v=4',
  name: 'rhdmswls12 / Eunjin',
  email: 'a66613075@gmail.com',
  github: 'https://github.com/rhdmswls12',
  repository: 'https://github.com/rhdmswls12/vanillajs-movie-app'
})