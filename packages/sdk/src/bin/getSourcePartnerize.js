"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourcePartnerize = getSourcePartnerize;
exports.getSourcePartnerizeOutput = getSourcePartnerizeOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourcePartnerize(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePartnerize:getSourcePartnerize", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourcePartnerizeOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourcePartnerize:getSourcePartnerize", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourcePartnerize.js.map