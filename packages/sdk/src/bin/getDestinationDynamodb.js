"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDestinationDynamodb = getDestinationDynamodb;
exports.getDestinationDynamodbOutput = getDestinationDynamodbOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getDestinationDynamodb(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationDynamodb:getDestinationDynamodb", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
function getDestinationDynamodbOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationDynamodb:getDestinationDynamodb", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getDestinationDynamodb.js.map