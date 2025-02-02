"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceConvex = getSourceConvex;
exports.getSourceConvexOutput = getSourceConvexOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceConvex(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceConvex:getSourceConvex", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceConvexOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceConvex:getSourceConvex", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceConvex.js.map