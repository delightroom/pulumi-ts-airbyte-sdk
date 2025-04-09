"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceHoorayhr = getSourceHoorayhr;
exports.getSourceHoorayhrOutput = getSourceHoorayhrOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceHoorayhr(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceHoorayhr:getSourceHoorayhr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceHoorayhrOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceHoorayhr:getSourceHoorayhr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceHoorayhr.js.map