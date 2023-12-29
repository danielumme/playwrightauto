import {test, expect} from '@playwright/test'


test('Multiple', async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    
    // const links = await page.$$('a')

    // for(const link of links){
    //     const linktext = await link.textContent()
    //     console.log("This is link text", linktext)
    // }

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const prods = await page.$$("//div[@id='tbodyid']//div//h4/a")
    console.log("size ", prods.length)

    for(const prod of prods){
        const prodtext = await prod.textContent()
        console.log("Item is ", prodtext)
    }

    await page.waitForTimeout(3000)
})