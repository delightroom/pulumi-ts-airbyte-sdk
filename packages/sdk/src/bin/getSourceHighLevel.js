"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceHighLevel = getSourceHighLevel;
exports.getSourceHighLevelOutput = getSourceHighLevelOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceHighLevel(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceHighLevel:getSourceHighLevel", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceHighLevelOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceHighLevel:getSourceHighLevel", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceHighLevel.js.map