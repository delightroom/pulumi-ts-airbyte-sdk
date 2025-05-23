"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceWorkable = getSourceWorkable;
exports.getSourceWorkableOutput = getSourceWorkableOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceWorkable(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceWorkable:getSourceWorkable", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceWorkableOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceWorkable:getSourceWorkable", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceWorkable.js.map