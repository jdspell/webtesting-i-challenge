const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('enhancer', () => {

        const enhanceMax = 20;
        const enhanceIncrement = 1;
        const durabilityMax = 100;

        const testingItem = {
            name: "Jordan",
            durability: 50,
            enhancement: 16
        }

        describe('repair', () => {
            //item should be returned with 100 durability
            test('should return new item with 100 durability', () => {
                expect(repair(testingItem).durability).toBe(100);
            });

        });

        describe('succeed', () => {
            test('item should be enhanced by client specified increment unless maxed out', () => {
                //checks that enhancement was increased by 1
                if(testingItem.enhancement === enhanceMax) {
                    expect(succeed(testingItem).enhancement).toBe(enhanceMax);
                }

                const itemEnhanceLevel = testingItem.enhancement;

                expect(succeed(testingItem).enhancement)
                    .toBe(itemEnhanceLevel+enhanceIncrement);
            });

            test('durability should remain the same during successful enhancement', () => {
                //ensures durability stays the same
                expect(succeed(testingItem).durability).toBe(testingItem.durability);
            });

        });

        describe('fail', () => {
            test('enhancement less than 15, durability decreases by 5 and by 10 if greater than 15', () => {

                const testItemDurability = testingItem.durability;

                if(testingItem.enhancement < 15) {
                    expect(fail(testingItem).durability).toBe(testItemDurability-5);
                }

                expect(fail(testingItem).durability).toBe(testItemDurability-10);
            });

            test('item enhancement is decreased by 1 if it is greater than 16', () => {
                const testItemEnhancement = testingItem.enhancement;
                expect(fail(testingItem).enhancement).toBe(testItemEnhancement-1);
            });

        });

    });
});