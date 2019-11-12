import tl = require('azure-pipelines-task-lib/task');
import fs from 'fs'

async function run() {
    try {
        const inputDescription: string | undefined = tl.getInput('description', true);
        if (inputDescription == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        console.log('Description \n', inputDescription);
        fs.writeFile('props.txt', inputDescription + "\n", (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log('Description saved!');
        });
//////////////////////////////////
        const inputSourcePathTests: string | undefined = tl.getInput('sourcePathTests', true);
        if (inputSourcePathTests == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        console.log('Source Path \n', inputSourcePathTests);

        fs.appendFile('props.txt', inputSourcePathTests + "\n", (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log('inputSourcePathTests saved!');
        });
/////////////////////////


        const inputResultPathTests: string | undefined = tl.getInput('resultPathTests', true);
        if (inputResultPathTests == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        
        console.log('Result Path \n', inputResultPathTests);

        fs.appendFile('props.txt', inputResultPathTests + "\n", (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log('inputResultPathTests saved!');
        });

////////////////
        const inputControllerPollingInterval: string | undefined = tl.getInput('controllerPollingInterval', true);
        if (inputControllerPollingInterval == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        console.log('Controller Polling Interval \n', inputControllerPollingInterval);

        fs.appendFile('props.txt', inputControllerPollingInterval + "\n", (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log('inputControllerPollingInterval saved!');
        });

//////////////

        const inputScenarioExecutionTimeout: string | undefined = tl.getInput('scenarioExecutionTimeout', true);
        if (inputScenarioExecutionTimeout == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        console.log('Scenario Execution Timeout \n', inputScenarioExecutionTimeout);

        fs.appendFile('props.txt', inputScenarioExecutionTimeout + "\n", (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log('inputScenarioExecutionTimeout saved!');
        });
///////
        const inputPollingInterval: string | undefined = tl.getInput('pollingInterval', true);
        if (inputPollingInterval == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        console.log('Polling Interval \n', inputPollingInterval);

        fs.appendFile('props.txt', inputPollingInterval + "\n", (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log('inputPollingInterval saved!');
        });

//////
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();