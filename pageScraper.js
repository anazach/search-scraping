const scraperObject = {
  url: 'https://whc.unesco.org/en/list/154/',
  async scraper(browser) {
    let searchText = 'ecosystem'
    let page = await browser.newPage()
    console.log(`Navigating to ${this.url}...`)
    await page.goto(this.url)
    await page.waitForTimeout(2000)

    await page.click('#bodyEl')
    await page.waitForTimeout(1000)
    await page.type(
      '#sites_search > div.searchbox-big.searchbox > div > input',
      searchText
    )

    await page.click(
      '#sites_search > div.searchbox - big.searchbox > div > span > button'
    )
    await page.waitForTimeout(1000)
    // await browser.close()
    console.log('Program completed')
  }
}

module.exports = scraperObject
