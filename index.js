const path = require('path')
const fs = require('fs')

const orgId = 80110
const actionName = 'send-response'
const customHooksDir = path.join(__dirname, 'custom-hooks', actionName, orgId.toString())
const files = fs.readdirSync(customHooksDir)
                .filter(f => (f.indexOf('.') !== 0 && f.slice('-3') === '.js'))
const customHooks = files.map(f => {
    const fm = require(path.join(customHooksDir, f))
    const hook = fm({ foo: 'bar' })
    return hook
})

const run = async () => {
    console.log('Run')
    for(const hook of customHooks) {
        await hook.pre('Baz')
        await hook.post('Zap')
    }
    console.log('Done')
}

run()