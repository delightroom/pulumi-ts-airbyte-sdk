"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceToggl = getSourceToggl;
exports.getSourceTogglOutput = getSourceTogglOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceToggl(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceToggl:getSourceToggl", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceTogglOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceToggl:getSourceToggl", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceToggl.js.map