"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFreightview = getSourceFreightview;
exports.getSourceFreightviewOutput = getSourceFreightviewOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceFreightview(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFreightview:getSourceFreightview", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceFreightviewOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFreightview:getSourceFreightview", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceFreightview.js.map