"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDestinationMongodb = getDestinationMongodb;
exports.getDestinationMongodbOutput = getDestinationMongodbOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getDestinationMongodb(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationMongodb:getDestinationMongodb", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
function getDestinationMongodbOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationMongodb:getDestinationMongodb", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getDestinationMongodb.js.map