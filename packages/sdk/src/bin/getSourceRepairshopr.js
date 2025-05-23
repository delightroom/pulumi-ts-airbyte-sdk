"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceRepairshopr = getSourceRepairshopr;
exports.getSourceRepairshoprOutput = getSourceRepairshoprOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceRepairshopr(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceRepairshopr:getSourceRepairshopr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceRepairshoprOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceRepairshopr:getSourceRepairshopr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceRepairshopr.js.map