// main.js
import App from "./App";
import router from './routes'; //index.js 가져오기

const root = document.querySelector('#root')
root?.append(new App().el)

router()