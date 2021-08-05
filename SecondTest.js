describe('Bayut Site Popular', () => {
    it('should scroll to Popular and click To Rent', async() => {
        await browser.url('https://www.bayut.com/');
        const elemToScroll = await $('div.fa2044b7');

        await elemToScroll.scrollIntoView();

        const rentC = await $('div.d8530318:nth-of-type(2)');
        await rentC.click();

        await expect(rentC).toBeEnabled();

        const viewMoreBtn = await $('div.fc910dcd div:nth-of-type(1) div:first-of-type div._2f838ff4._5b112776._29dd7f18');
        await viewMoreBtn.click();
        //await browser.pause(3000);
    });
    it('should make sure links are clickable', async() => {
        const elemsLink = await $$('div.fc910dcd div:first-of-type div:first-of-type div:first-of-type div:first-of-type div:first-of-type div:first-of-type ul._22762832 li._76ddbf32.af2d23c9'); //there has to be a better way for this, right?
        await expect(elemsLink).toBeClickable();
    });
});