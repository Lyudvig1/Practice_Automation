const allure = require('allure-commandline')
exports.config = {
     specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
    
        
        maxInstances: 5,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true
        
    }],
    
    logLevel: 'info',
    
    bail: 0,
    
    baseUrl: 'http://localhost',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    services: ['chromedriver'],
    
   
    framework: 'mocha',
    
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],


    
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    beforeSession: function () {
        require('dotenv').config()
        global.env = process.env
    },

    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    
//    // afterTest: async function(test, context, { error, result, duration, passed, retries }) {
//         if (!passed) {
//             await browser.takeScreenshot();
//         }
    },


    
    
    
}
