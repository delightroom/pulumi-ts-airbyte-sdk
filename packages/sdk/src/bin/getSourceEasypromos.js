"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceEasypromos = getSourceEasypromos;
exports.getSourceEasypromosOutput = getSourceEasypromosOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceEasypromos(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceEasypromos:getSourceEasypromos", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceEasypromosOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceEasypromos:getSourceEasypromos", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceEasypromos.js.map