const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 2000 } });
  await page.goto('https://arena.ai/leaderboard', { waitUntil: 'networkidle' });

  await page.waitForTimeout(3000);
  const heading = page.getByText('Text Arena Overview').first();
  await heading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'arena.png', fullPage: false });

  await browser.close();
  console.log('Screenshot saved.');
})();
