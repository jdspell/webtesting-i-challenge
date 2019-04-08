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
            enhancement: 0
        }

        describe('repair', () => {
            //item should be returned with 100 durability
            test('should return new item with 100 durability', () => {
                expect(repair(testingItem).durability).toBe(100);
            });

        });

        describe('success', () => {
            //item should be modified according to client specifications
            test('enhancement should increase by enhance increment unless it equals enhancement max', () => {
                //checks that enhancement was increased by 1
                if(testingItem.enhancement === enhanceMax) {
                    expect(succeed(testingItem).enhancement).toBe(enhanceMax);
                } else {
                    const itemEnhanceLevel = testingItem.enhancement;

                    expect(succeed(testingItem).enhancement)
                        .toBe(itemEnhanceLevel+enhanceIncrement);
                }
                //ensures durability stays the same
                expect(succeed(testingItem).durability).toBe(testingItem.durability);

            });

        });

    });
});