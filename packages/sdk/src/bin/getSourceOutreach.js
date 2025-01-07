"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceOutreach = getSourceOutreach;
exports.getSourceOutreachOutput = getSourceOutreachOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceOutreach(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceOutreach:getSourceOutreach", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceOutreachOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceOutreach:getSourceOutreach", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceOutreach.js.map