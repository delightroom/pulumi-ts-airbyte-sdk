"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceSysteme = getSourceSysteme;
exports.getSourceSystemeOutput = getSourceSystemeOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceSysteme(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSysteme:getSourceSysteme", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceSystemeOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSysteme:getSourceSysteme", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceSysteme.js.map