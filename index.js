const browserObject = require('./browser')
const scraperController = require('./pageController')

//Start browser, create browser instance
let browserInstance = browserObject.startBrowser()

//Pass to scraper controller
scraperController(browserInstance)
