"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceTinyemail = getSourceTinyemail;
exports.getSourceTinyemailOutput = getSourceTinyemailOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceTinyemail(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceTinyemail:getSourceTinyemail", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceTinyemailOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceTinyemail:getSourceTinyemail", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceTinyemail.js.map