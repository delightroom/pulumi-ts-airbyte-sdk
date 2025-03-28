"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceAuth0 = getSourceAuth0;
exports.getSourceAuth0Output = getSourceAuth0Output;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceAuth0(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAuth0:getSourceAuth0", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceAuth0Output(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceAuth0:getSourceAuth0", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceAuth0.js.map