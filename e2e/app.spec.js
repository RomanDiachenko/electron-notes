// full E2E with Playwright
const { test, expect, _electron: electron } = require('@playwright/test')

test('creates a note and types in it', async () => {
  const app = await electron.launch({ args: ['./out/main/index.js'] });
  const win = await app.firstWindow();

  await expect(win.getByTestId('new-note-btn')).toBeVisible();
  await win.getByTestId('new-note-btn').click();

  await expect(win.getByTestId('editor')).toBeVisible();
  await win.getByTestId('editor').fill('My first note');

  await expect(win.getByTestId('editor')).toHaveValue('My first note');

  await app.close();
});