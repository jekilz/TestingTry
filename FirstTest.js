//Website looks different now than in the pdf, I adapted the tests for it
describe('Bayut Site', () => {
    it('should select marina', async() => {
        await browser.url('https://www.bayut.com/');
        const searchInput = await $('input.a41c4dcc');
        const searchBtn = await $('a.c3901770');

        await searchInput.addValue('Dubai Marina');
        const optionC = await $('ul._3eb9be10._9a03d150 li:first-of-type button._0e756b14');
        await optionC.click();

        const dropBtn = await $('div.ad62c515._325092f0._4a6228f4 div.e7c6503c');
        await dropBtn.click();
        const buyBtn = await $('div._3f35dbb9 span:first-of-type button._933a9a61');
        await buyBtn.click();

        await searchBtn.click();

        await expect(browser).toHaveUrl('https://www.bayut.com/for-sale/property/dubai/dubai-marina/');

    });


    it('should contain Marina Bay', async() => {
        const divU = await $$('ul._357a9937 > li div.d6e81fd0 div._4b74b8bb div._7afabd84');
        //await expect(divU).toHaveTextContaining('Attessa');
        await expect(divU).toHaveTextContaining('Dubai Marina');
    });

});