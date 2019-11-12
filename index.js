"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("azure-pipelines-task-lib/task");
const fs_1 = __importDefault(require("fs"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const inputDescription = tl.getInput('description', true);
            if (inputDescription == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
                return;
            }
            console.log('Description \n', inputDescription);
            fs_1.default.writeFile('props.txt', inputDescription + "\n", (err) => {
                // throws an error, you could also catch it here
                if (err)
                    throw err;
                // success case, the file was saved
                console.log('Description saved!');
            });
            //////////////////////////////////
            const inputSourcePathTests = tl.getInput('sourcePathTests', true);
            if (inputSourcePathTests == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
                return;
            }
            console.log('Source Path \n', inputSourcePathTests);
            fs_1.default.appendFile('props.txt', inputSourcePathTests + "\n", (err) => {
                // throws an error, you could also catch it here
                if (err)
                    throw err;
                // success case, the file was saved
                console.log('inputSourcePathTests saved!');
            });
            /////////////////////////
            const inputResultPathTests = tl.getInput('resultPathTests', true);
            if (inputResultPathTests == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
                return;
            }
            console.log('Result Path \n', inputResultPathTests);
            fs_1.default.appendFile('props.txt', inputResultPathTests + "\n", (err) => {
                // throws an error, you could also catch it here
                if (err)
                    throw err;
                // success case, the file was saved
                console.log('inputResultPathTests saved!');
            });
            ////////////////
            const inputControllerPollingInterval = tl.getInput('controllerPollingInterval', true);
            if (inputControllerPollingInterval == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
                return;
            }
            console.log('Controller Polling Interval \n', inputControllerPollingInterval);
            fs_1.default.appendFile('props.txt', inputControllerPollingInterval + "\n", (err) => {
                // throws an error, you could also catch it here
                if (err)
                    throw err;
                // success case, the file was saved
                console.log('inputControllerPollingInterval saved!');
            });
            //////////////
            const inputScenarioExecutionTimeout = tl.getInput('scenarioExecutionTimeout', true);
            if (inputScenarioExecutionTimeout == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
                return;
            }
            console.log('Scenario Execution Timeout \n', inputScenarioExecutionTimeout);
            fs_1.default.appendFile('props.txt', inputScenarioExecutionTimeout + "\n", (err) => {
                // throws an error, you could also catch it here
                if (err)
                    throw err;
                // success case, the file was saved
                console.log('inputScenarioExecutionTimeout saved!');
            });
            ///////
            const inputPollingInterval = tl.getInput('pollingInterval', true);
            if (inputPollingInterval == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
                return;
            }
            console.log('Polling Interval \n', inputPollingInterval);
            fs_1.default.appendFile('props.txt', inputPollingInterval + "\n", (err) => {
                // throws an error, you could also catch it here
                if (err)
                    throw err;
                // success case, the file was saved
                console.log('inputPollingInterval saved!');
            });
            //////
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    });
}
run();
