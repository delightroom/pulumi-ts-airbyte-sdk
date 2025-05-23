"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceSendpulse = getSourceSendpulse;
exports.getSourceSendpulseOutput = getSourceSendpulseOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceSendpulse(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSendpulse:getSourceSendpulse", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceSendpulseOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSendpulse:getSourceSendpulse", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceSendpulse.js.map