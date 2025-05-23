"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceGorgias = getSourceGorgias;
exports.getSourceGorgiasOutput = getSourceGorgiasOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceGorgias(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGorgias:getSourceGorgias", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceGorgiasOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGorgias:getSourceGorgias", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceGorgias.js.map