const AddRemovePage = require('../pageobjects/addremove.page');

describe('My Header Text Verification', () => {
    it('should verify header text exists', async () => {
        await AddRemovePage.open();
        await expect(AddRemovePage.headerText).toBeExisting();
    });
});


