const { test, expect } = require("@playwright/test");
const {chromium} = require("playwright");
const {
  email,
  password,
  invalidEmail,
  invalidPassword,
} = require("../user.js");

test("Authorization of a registered user", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();
  await expect(
    page.locator("text=Моё обучение")).toBeVisible();
});

test("Authorization of a dont registered user", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(invalidEmail);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(invalidPassword);
  await page.getByTestId("login-submit-btn").click();
  await expect(
    page.locator("text=Вы ввели неправильно логин или пароль")
  ).toBeVisible();
});
