// @ts-ignore: CSS module declarations not present in this project
import './style.css'
import { navEl } from './nav.ts'
import { footerEl } from './footer.ts';
import { setupMenu } from './menu';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${navEl}
  ${footerEl}
`

setupMenu();
