"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourcePhyllo = getSourcePhyllo;
exports.getSourcePhylloOutput = getSourcePhylloOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourcePhyllo(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePhyllo:getSourcePhyllo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourcePhylloOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourcePhyllo:getSourcePhyllo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourcePhyllo.js.map