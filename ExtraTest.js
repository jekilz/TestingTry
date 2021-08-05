describe('Bayut Site Extra', () => {
    it('should select marina', async() => {
        await browser.url('https://www.bayut.com/');

        const guideBtn = await $('div.dropdown._2637d080 button._1ff354cf');
        await guideBtn.click();

        const areaGuide = await $('ul.abbecdbc._71c81ca7 li:first-of-type');
        await areaGuide.click();

        await expect(browser).toHaveUrl('https://www.bayut.com/area-guides/');

    });

    it('should scroll to Ajman and click AL RAWDA', async() => {
        const ajDiv = await $('.entry-content.blog_page_text.blog_page_description div:nth-of-type(8) a:first-of-type');
        await ajDiv.scrollIntoView();

        const rawdaRef = await $('div.entry-content.blog_page_text.blog_page_description ul:nth-of-type(4)  li:nth-of-type(5) a:first-of-type');
        await rawdaRef.click();

        await expect(browser).toHaveUrl('https://www.bayut.com/area-guides/al-rawda/');
    });

});