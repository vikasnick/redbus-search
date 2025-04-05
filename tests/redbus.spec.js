import { test } from '../fixtures/redbus-fixture.js';
import testData from '../testdata.json';

function getDateTwoDaysFromNow() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);
  return targetDate.getDate().toString(); // Only day number (e.g. "6")
}

test
('RedBus search flow with fixture and dynamic date', async ({ redBus }) => {
  const dateToSelect = getDateTwoDaysFromNow();

  await redBus.navigate('https://www.redbus.in');
  await redBus.searchBus(testData.values, dateToSelect);
  await redBus.verify();
});
