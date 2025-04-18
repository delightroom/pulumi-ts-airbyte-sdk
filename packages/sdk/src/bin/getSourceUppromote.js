"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceUppromote = getSourceUppromote;
exports.getSourceUppromoteOutput = getSourceUppromoteOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceUppromote(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceUppromote:getSourceUppromote", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceUppromoteOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceUppromote:getSourceUppromote", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceUppromote.js.map