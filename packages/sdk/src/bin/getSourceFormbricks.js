"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFormbricks = getSourceFormbricks;
exports.getSourceFormbricksOutput = getSourceFormbricksOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceFormbricks(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFormbricks:getSourceFormbricks", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceFormbricksOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFormbricks:getSourceFormbricks", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceFormbricks.js.map