console.log('starting to test>>1');
var webdriver = require('selenium-webdriver');
console.log('starting to test>>2');
var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

var Eyes = require('eyes.selenium').Eyes;
var eyes = new Eyes();
// This is your api key, make sure you use it in all your tests.
eyes.setApiKey('pf991yE4J9106dZ96FlYXzyzk4bOZXq6Nok6yEcKeAEXWU110');
eyes.setForceFullPageScreenshot(true);
console.log('APPLITOOLS_BATCH_ID='+APPLITOOLS_BATCH_ID)
eyes.setBatch(process.env.JOB_NAME, process.env.APPLITOOLS_BATCH_ID);

eyes.open(driver, 'Applitools', 'Taltz Homepage'/*a little annoying */)
    .then(function(driver) {
        driver.get('https://www.taltz.com/index.html');
        eyes.checkWindow('taltz jenkins');
        driver.quit();
        eyes.close();
    });
