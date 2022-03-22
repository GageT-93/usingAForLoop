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
        await AddRemovePage.btnAddElement.click();
        for (let index = 0; index < 5; index++) {
            const AddRemovePage.btnAddElement.click();
            
        }
        }
    });
});
