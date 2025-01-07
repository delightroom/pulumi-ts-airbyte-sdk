#!/bin/bash
set -e

rm -rf ../sdk/src/*

pulumi package add terraform-provider airbytehq/airbyte

mv ./sdks/airbyte/* ../sdk/src/

echo "SDK generation complete"
