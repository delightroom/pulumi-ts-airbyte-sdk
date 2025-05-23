"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFirehydrant = getSourceFirehydrant;
exports.getSourceFirehydrantOutput = getSourceFirehydrantOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceFirehydrant(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFirehydrant:getSourceFirehydrant", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceFirehydrantOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFirehydrant:getSourceFirehydrant", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceFirehydrant.js.map