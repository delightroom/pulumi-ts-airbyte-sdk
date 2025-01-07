"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceTypeform = getSourceTypeform;
exports.getSourceTypeformOutput = getSourceTypeformOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceTypeform(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceTypeform:getSourceTypeform", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceTypeformOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceTypeform:getSourceTypeform", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceTypeform.js.map