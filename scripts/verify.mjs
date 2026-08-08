import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

async function check(viewport, name) {
  await page.setViewportSize(viewport);
  await page.goto('http://localhost:8420/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(4500); // let boot animation + fonts settle
  const overflow = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const winWidth = window.innerWidth;
    const offenders = [];
    if (docWidth > winWidth + 1) {
      document.querySelectorAll('*').forEach((el) => {
        if (el.scrollWidth > winWidth + 1) {
          offenders.push({ tag: el.tagName, cls: el.className, scrollWidth: el.scrollWidth });
        }
      });
    }
    return { docWidth, winWidth, hasOverflow: docWidth > winWidth + 1, offenders: offenders.slice(0, 10) };
  });
  console.log(name, JSON.stringify(overflow));
  await page.screenshot({ path: `reference-dom/verify-${name}.png`, fullPage: true });
}

await check({ width: 1440, height: 900 }, 'desktop');
await check({ width: 390, height: 844 }, 'mobile');

await browser.close();
