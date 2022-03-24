const AddRemovePage = require('../pageobjects/addremove.page');

describe('My Header Text Verification', () => {
    xit('should verify header text exists', async () => {
        await AddRemovePage.open();
        await expect(AddRemovePage.headerText).toBeExisting();
    });
});

describe ('Add Element button click', () => {
    it('should click the Add Element button 5 times', async () => {
        await AddRemovePage.open();
        await expect(AddRemovePage.btnAddElement).toBeExisting();
        for (let index = 0; index < 5; index++) {
            await AddRemovePage.btnAddElement.click();
            await browser.pause(500)
        }
    });
    it ('should have five "Delete" Elements', async () => {
        await expect(AddRemovePage.btnDeleteElement).toBeElementsArrayOfSize(5);
    });
    it ('should delete two "Delete" elements', async () => {
        for (let index = 0; index < 2; index++) {
            await AddRemovePage.btnDeleteClick.click();
            await browser.pause(500)
        }
    });
    it ('should have three "Delete" elements remaining', async () => {
        await expect(AddRemovePage.btnDeleteElement).toBeElementsArrayOfSize(3);
    });
});
