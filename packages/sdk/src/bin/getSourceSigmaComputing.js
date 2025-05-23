"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceSigmaComputing = getSourceSigmaComputing;
exports.getSourceSigmaComputingOutput = getSourceSigmaComputingOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceSigmaComputing(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSigmaComputing:getSourceSigmaComputing", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceSigmaComputingOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSigmaComputing:getSourceSigmaComputing", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceSigmaComputing.js.map