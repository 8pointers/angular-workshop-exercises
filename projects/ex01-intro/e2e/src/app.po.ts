import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo = () => browser.get(browser.baseUrl);

  getGreetingText = () => element(by.css('app-root h2')).getText();
}
