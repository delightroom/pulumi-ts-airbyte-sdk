"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceSlack = getSourceSlack;
exports.getSourceSlackOutput = getSourceSlackOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceSlack(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSlack:getSourceSlack", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceSlackOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSlack:getSourceSlack", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceSlack.js.map