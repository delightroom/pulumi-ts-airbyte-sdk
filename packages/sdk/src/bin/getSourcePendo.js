"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourcePendo = getSourcePendo;
exports.getSourcePendoOutput = getSourcePendoOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourcePendo(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePendo:getSourcePendo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourcePendoOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourcePendo:getSourcePendo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourcePendo.js.map