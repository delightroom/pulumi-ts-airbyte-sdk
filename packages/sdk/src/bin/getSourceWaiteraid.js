"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceWaiteraid = getSourceWaiteraid;
exports.getSourceWaiteraidOutput = getSourceWaiteraidOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceWaiteraid(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceWaiteraid:getSourceWaiteraid", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceWaiteraidOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceWaiteraid:getSourceWaiteraid", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceWaiteraid.js.map