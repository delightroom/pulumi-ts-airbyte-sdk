"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceGologin = getSourceGologin;
exports.getSourceGologinOutput = getSourceGologinOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceGologin(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGologin:getSourceGologin", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceGologinOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGologin:getSourceGologin", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceGologin.js.map