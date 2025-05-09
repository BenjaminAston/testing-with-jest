const { Builder, By } = require('selenium-webdriver');
require('geckodriver');

test('Heading is correct (FAIL)', async () => {
  const driver = await new Builder().forBrowser('firefox').build();
  await driver.get('file://' + __dirname + '/../dist/index.html');
  const heading = await driver.findElement(By.tagName('h1')).getText();
  expect(heading).toBe('Rubrik');
  await driver.quit();
});