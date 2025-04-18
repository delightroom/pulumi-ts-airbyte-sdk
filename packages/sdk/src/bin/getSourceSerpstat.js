"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceSerpstat = getSourceSerpstat;
exports.getSourceSerpstatOutput = getSourceSerpstatOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceSerpstat(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSerpstat:getSourceSerpstat", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceSerpstatOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSerpstat:getSourceSerpstat", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceSerpstat.js.map