"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPermission = getPermission;
exports.getPermissionOutput = getPermissionOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getPermission(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getPermission:getPermission", {
        "permissionId": args.permissionId,
    }, opts, utilities.getPackage());
}
function getPermissionOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getPermission:getPermission", {
        "permissionId": args.permissionId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getPermission.js.map