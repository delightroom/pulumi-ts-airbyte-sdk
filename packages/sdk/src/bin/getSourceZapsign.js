"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceZapsign = getSourceZapsign;
exports.getSourceZapsignOutput = getSourceZapsignOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceZapsign(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceZapsign:getSourceZapsign", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceZapsignOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceZapsign:getSourceZapsign", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceZapsign.js.map