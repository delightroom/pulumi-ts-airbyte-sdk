"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceDatascope = getSourceDatascope;
exports.getSourceDatascopeOutput = getSourceDatascopeOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceDatascope(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceDatascope:getSourceDatascope", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceDatascopeOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceDatascope:getSourceDatascope", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceDatascope.js.map