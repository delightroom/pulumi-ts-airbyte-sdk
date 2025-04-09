"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceJustcall = getSourceJustcall;
exports.getSourceJustcallOutput = getSourceJustcallOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceJustcall(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceJustcall:getSourceJustcall", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceJustcallOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceJustcall:getSourceJustcall", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceJustcall.js.map