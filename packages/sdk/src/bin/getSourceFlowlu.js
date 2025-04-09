"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFlowlu = getSourceFlowlu;
exports.getSourceFlowluOutput = getSourceFlowluOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceFlowlu(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFlowlu:getSourceFlowlu", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceFlowluOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFlowlu:getSourceFlowlu", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceFlowlu.js.map