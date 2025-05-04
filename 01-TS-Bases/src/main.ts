import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'


//import de bases
//import  './Base/02-object';
//import  './Base/03-arrays'
//import './Base/04-functions';
//import './Base/05-deses-obj';
//import './Base/06-deses-arrays';
import './Base/07-imp-exp';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
`


