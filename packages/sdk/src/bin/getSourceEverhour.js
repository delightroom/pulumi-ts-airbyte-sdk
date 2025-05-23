"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceEverhour = getSourceEverhour;
exports.getSourceEverhourOutput = getSourceEverhourOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceEverhour(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceEverhour:getSourceEverhour", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceEverhourOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceEverhour:getSourceEverhour", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceEverhour.js.map