
import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened.$/, async function () {
  await browser.url(`https://www.google.com/`);
  await browser.pause(1000);
  console.log(`After Opening browser...`);
});

When(/^Search with(.*)$/, async function (SearchItem) {
  console.log(`>> SearchItem: ${SearchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(SearchItem);
  await browser.keys("Enter");
});

Then(/^Click on first test result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/^URL should match (.*)$/,async function (ExpectedURL) {
  console.log(`>> ExpectedURL: ${ExpectedURL}`);
  let url = await browser.getUrl()
  chai.expect(url).to.equal(ExpectedURL)
})