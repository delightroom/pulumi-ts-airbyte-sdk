"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceCastorEdc = getSourceCastorEdc;
exports.getSourceCastorEdcOutput = getSourceCastorEdcOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceCastorEdc(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceCastorEdc:getSourceCastorEdc", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceCastorEdcOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceCastorEdc:getSourceCastorEdc", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceCastorEdc.js.map