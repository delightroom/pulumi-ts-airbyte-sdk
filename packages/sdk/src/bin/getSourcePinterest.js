"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourcePinterest = getSourcePinterest;
exports.getSourcePinterestOutput = getSourcePinterestOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourcePinterest(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePinterest:getSourcePinterest", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourcePinterestOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourcePinterest:getSourcePinterest", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourcePinterest.js.map