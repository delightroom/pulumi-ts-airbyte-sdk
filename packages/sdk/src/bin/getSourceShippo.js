"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceShippo = getSourceShippo;
exports.getSourceShippoOutput = getSourceShippoOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceShippo(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceShippo:getSourceShippo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceShippoOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceShippo:getSourceShippo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceShippo.js.map