const mockFn = (success, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(success) {
            resolve();
        } else {
            reject({message: 'Error'});
        }
        }, timeout);
    });
}


module.exports = (options) => {
    const mm = {
        options
    }

    mm.pre = async (args) => {
        await mockFn(true, 2600)
        console.log(`Before ${args} handler: `, options)
    }

    mm.post = async (args) => {
        await mockFn(true, 3700)
        console.log(`After ${args} handler: `, options)
    }

    return mm
}