"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceEventzilla = getSourceEventzilla;
exports.getSourceEventzillaOutput = getSourceEventzillaOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceEventzilla(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceEventzilla:getSourceEventzilla", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceEventzillaOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceEventzilla:getSourceEventzilla", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceEventzilla.js.map