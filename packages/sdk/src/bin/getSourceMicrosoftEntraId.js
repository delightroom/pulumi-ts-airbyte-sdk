"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceMicrosoftEntraId = getSourceMicrosoftEntraId;
exports.getSourceMicrosoftEntraIdOutput = getSourceMicrosoftEntraIdOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceMicrosoftEntraId(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceMicrosoftEntraId:getSourceMicrosoftEntraId", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceMicrosoftEntraIdOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceMicrosoftEntraId:getSourceMicrosoftEntraId", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceMicrosoftEntraId.js.map