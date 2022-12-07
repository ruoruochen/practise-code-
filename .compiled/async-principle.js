async function myAsyncTest() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2000');
            resolve('2000');
        }, 2000);
    });

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('5000');
            resolve('5000');
        }, 5000);
    });
}

myAsyncTest();

/**  async 是generator函数的语法糖，即generator函数自执行
 * 
 *  等同于以下代码
 *  spawn(myAsyncTest);
 * 
 *  function * myAsyncTest(){
 *      yield new...
 *      yield new...
 *      
 * }
 * 
 * // 自执行函数
 * return spawn(myAsyncTest){
 *          
 * }
 */

// async函数实现原理
function spawn(GeneratorFn) {
    return new Promise((resolve, reject) => {
        const gen = GeneratorFn();
        console.log(gen, typeof gen);
        const step = nextFn => {
            let next;
            try {
                next = nextFn();
            } catch (error) {
                return reject(error);
            }

            if (next.done) {
                return resolve(next.value);
            }

            Promise.resolve(next.value).then(res => {
                step(() => {
                    return gen.next(res);
                });
            }).catch(e => {
                step(() => {
                    return gen.throw(e);
                });
            });
        };

        // 开始执行
        step(() => {
            return gen.next(undefined);
        });
    });
}

function* myAsyncTest2() {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2000');
            resolve('2000');
        }, 2000);
    });

    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('5000');
            resolve('5000');
        }, 5000);
    });
}

spawn(myAsyncTest2);
//# sourceMappingURL=async-principle.js.map