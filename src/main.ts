import './style.css'
import { navEl } from './nav.ts'
import { setupMenu } from './menu';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${navEl}
`

setupMenu();
