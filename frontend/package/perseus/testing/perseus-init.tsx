// perseus-init.ts
import { registerAllWidgetsForTesting } from "../src/util/register-all-widgets-for-testing";
import { setDependencies } from "../src/dependencies";

registerAllWidgetsForTesting();
import {testDependencies} from "./test-dependencies";

// Initialize Perseus
registerAllWidgetsForTesting();
setDependencies(testDependencies);

// You might also need to set up dependencies
// testDependencies.getBaseUrl = () => "https://example.com";
// testDependencies.JQuery = $;