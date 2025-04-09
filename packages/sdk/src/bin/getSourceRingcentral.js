"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceRingcentral = getSourceRingcentral;
exports.getSourceRingcentralOutput = getSourceRingcentralOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceRingcentral(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceRingcentral:getSourceRingcentral", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceRingcentralOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceRingcentral:getSourceRingcentral", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceRingcentral.js.map