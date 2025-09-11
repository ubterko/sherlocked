// perseus-init.ts
import { registerAllWidgetsForTesting } from "../src/util/register-all-widgets-for-testing";
import { setDependencies } from "../src/dependencies";
import {testDependencies} from "./test-dependencies";

registerAllWidgetsForTesting();
// Initialize Perseus
registerAllWidgetsForTesting();
setDependencies(testDependencies);