import * as outputs from "../types/output";
export interface ConnectionConfigurations {
    streams: outputs.ConnectionConfigurationsStream[];
}
export interface ConnectionConfigurationsStream {
    /**
     * Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if `sync_mode` is `incremental` unless there is a default.
     */
    cursorFields: string[];
    /**
     * Not Null
     */
    name: string;
    /**
     * Paths to the fields that will be used as primary key. This field is REQUIRED if `destination_sync_mode` is `*_dedup` unless it is already supplied by the source schema.
     */
    primaryKeys: string[][];
    /**
     * Paths to the fields that will be included in the configured catalog.
     */
    selectedFields: outputs.ConnectionConfigurationsStreamSelectedField[];
    /**
     * must be one of ["full_refresh_overwrite", "full_refresh_append", "incremental_append", "incremental_deduped_history"]
     */
    syncMode: string;
}
export interface ConnectionConfigurationsStreamSelectedField {
    fieldPaths: string[];
}
export interface ConnectionSchedule {
    basicTiming: string;
    cronExpression: string;
    /**
     * Not Null; must be one of ["manual", "cron"]
     */
    scheduleType: string;
}
export interface DestinationAstraConfiguration {
    /**
     * Embedding configuration
     */
    embedding: outputs.DestinationAstraConfigurationEmbedding;
    /**
     * Astra DB gives developers the APIs, real-time data and ecosystem integrations to put accurate RAG and Gen AI apps with fewer hallucinations in production.
     */
    indexing: outputs.DestinationAstraConfigurationIndexing;
    /**
     * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
     */
    omitRawText: boolean;
    processing: outputs.DestinationAstraConfigurationProcessing;
}
export interface DestinationAstraConfigurationEmbedding {
    /**
     * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    azureOpenAi?: outputs.DestinationAstraConfigurationEmbeddingAzureOpenAi;
    /**
     * Use the Cohere API to embed text.
     */
    cohere?: outputs.DestinationAstraConfigurationEmbeddingCohere;
    /**
     * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
     */
    fake?: outputs.DestinationAstraConfigurationEmbeddingFake;
    /**
     * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    openAi?: outputs.DestinationAstraConfigurationEmbeddingOpenAi;
    /**
     * Use a service that's compatible with the OpenAI API to embed text.
     */
    openAiCompatible?: outputs.DestinationAstraConfigurationEmbeddingOpenAiCompatible;
}
export interface DestinationAstraConfigurationEmbeddingAzureOpenAi {
    /**
     * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    apiBase: string;
    /**
     * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    deployment: string;
    /**
     * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    openaiKey: string;
}
export interface DestinationAstraConfigurationEmbeddingCohere {
    cohereKey: string;
}
export interface DestinationAstraConfigurationEmbeddingFake {
}
export interface DestinationAstraConfigurationEmbeddingOpenAi {
    openaiKey: string;
}
export interface DestinationAstraConfigurationEmbeddingOpenAiCompatible {
    /**
     * Default: ""
     */
    apiKey: string;
    /**
     * The base URL for your OpenAI-compatible service
     */
    baseUrl: string;
    /**
     * The number of dimensions the embedding model is generating
     */
    dimensions: number;
    /**
     * The name of the model to use for embedding. Default: "text-embedding-ada-002"
     */
    modelName: string;
}
export interface DestinationAstraConfigurationIndexing {
    /**
     * The application token authorizes a user to connect to a specific Astra DB database. It is created when the user clicks the Generate Token button on the Overview tab of the Database page in the Astra UI.
     */
    astraDbAppToken: string;
    /**
     * The endpoint specifies which Astra DB database queries are sent to. It can be copied from the Database Details section of the Overview tab of the Database page in the Astra UI.
     */
    astraDbEndpoint: string;
    /**
     * Keyspaces (or Namespaces) serve as containers for organizing data within a database. You can create a new keyspace uisng the Data Explorer tab in the Astra UI. The keyspace default_keyspace is created for you when you create a Vector Database in Astra DB.
     */
    astraDbKeyspace: string;
    /**
     * Collections hold data. They are analagous to tables in traditional Cassandra terminology. This tool will create the collection with the provided name automatically if it does not already exist. Alternatively, you can create one thorugh the Data Explorer tab in the Astra UI.
     */
    collection: string;
}
export interface DestinationAstraConfigurationProcessing {
    /**
     * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
     */
    chunkOverlap: number;
    /**
     * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
     */
    chunkSize: number;
    /**
     * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
     */
    fieldNameMappings?: outputs.DestinationAstraConfigurationProcessingFieldNameMapping[];
    /**
     * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
     */
    metadataFields?: string[];
    /**
     * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
     */
    textFields?: string[];
    /**
     * Split text fields into chunks based on the specified method.
     */
    textSplitter?: outputs.DestinationAstraConfigurationProcessingTextSplitter;
}
export interface DestinationAstraConfigurationProcessingFieldNameMapping {
    /**
     * The field name in the source
     */
    fromField: string;
    /**
     * The field name to use in the destination
     */
    toField: string;
}
export interface DestinationAstraConfigurationProcessingTextSplitter {
    /**
     * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
     */
    byMarkdownHeader?: outputs.DestinationAstraConfigurationProcessingTextSplitterByMarkdownHeader;
    /**
     * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
     */
    byProgrammingLanguage?: outputs.DestinationAstraConfigurationProcessingTextSplitterByProgrammingLanguage;
    /**
     * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
     */
    bySeparator?: outputs.DestinationAstraConfigurationProcessingTextSplitterBySeparator;
}
export interface DestinationAstraConfigurationProcessingTextSplitterByMarkdownHeader {
    /**
     * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
     */
    splitLevel: number;
}
export interface DestinationAstraConfigurationProcessingTextSplitterByProgrammingLanguage {
    /**
     * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
     */
    language: string;
}
export interface DestinationAstraConfigurationProcessingTextSplitterBySeparator {
    /**
     * Whether to keep the separator in the resulting chunks. Default: false
     */
    keepSeparator: boolean;
    /**
     * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
     */
    separators?: string[];
}
export interface DestinationAwsDatalakeConfiguration {
    /**
     * target aws account id
     */
    awsAccountId?: string;
    /**
     * The name of the S3 bucket. Read more <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html">here</a>.
     */
    bucketName: string;
    /**
     * S3 prefix
     */
    bucketPrefix?: string;
    /**
     * Choose How to Authenticate to AWS.
     */
    credentials: outputs.DestinationAwsDatalakeConfigurationCredentials;
    /**
     * Format of the data output.
     */
    format?: outputs.DestinationAwsDatalakeConfigurationFormat;
    /**
     * Cast float/double as decimal(38,18). This can help achieve higher accuracy and represent numbers correctly as received from the source. Default: false
     */
    glueCatalogFloatAsDecimal: boolean;
    /**
     * Add a default tag key to databases created by this destination
     */
    lakeformationDatabaseDefaultTagKey?: string;
    /**
     * Add default values for the `Tag Key` to databases created by this destination. Comma separate for multiple values.
     */
    lakeformationDatabaseDefaultTagValues?: string;
    /**
     * The default database this destination will use to create tables in per stream. Can be changed per connection by customizing the namespace.
     */
    lakeformationDatabaseName: string;
    /**
     * Whether to create tables as LF governed tables. Default: false
     */
    lakeformationGovernedTables: boolean;
    /**
     * Partition data by cursor fields when a cursor field is a date. must be one of ["NO PARTITIONING", "DATE", "YEAR", "MONTH", "DAY", "YEAR/MONTH", "YEAR/MONTH/DAY"]; Default: "NO PARTITIONING"
     */
    partitioning: string;
    /**
     * The region of the S3 bucket. See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions">here</a> for all region codes. must be one of ["", "af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1", "us-west-2"]; Default: ""
     */
    region: string;
}
export interface DestinationAwsDatalakeConfigurationCredentials {
    iamRole?: outputs.DestinationAwsDatalakeConfigurationCredentialsIamRole;
    iamUser?: outputs.DestinationAwsDatalakeConfigurationCredentialsIamUser;
}
export interface DestinationAwsDatalakeConfigurationCredentialsIamRole {
    /**
     * Will assume this role to write data to s3
     */
    roleArn: string;
}
export interface DestinationAwsDatalakeConfigurationCredentialsIamUser {
    /**
     * AWS User Access Key Id
     */
    awsAccessKeyId: string;
    /**
     * Secret Access Key
     */
    awsSecretAccessKey: string;
}
export interface DestinationAwsDatalakeConfigurationFormat {
    jsonLinesNewlineDelimitedJson?: outputs.DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJson;
    parquetColumnarStorage?: outputs.DestinationAwsDatalakeConfigurationFormatParquetColumnarStorage;
}
export interface DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJson {
    /**
     * The compression algorithm used to compress data. must be one of ["UNCOMPRESSED", "GZIP"]; Default: "UNCOMPRESSED"
     */
    compressionCodec: string;
    /**
     * must be one of ["JSONL"]; Default: "JSONL"
     */
    formatType: string;
}
export interface DestinationAwsDatalakeConfigurationFormatParquetColumnarStorage {
    /**
     * The compression algorithm used to compress data. must be one of ["UNCOMPRESSED", "SNAPPY", "GZIP", "ZSTD"]; Default: "SNAPPY"
     */
    compressionCodec: string;
    /**
     * must be one of ["Parquet"]; Default: "Parquet"
     */
    formatType: string;
}
export interface DestinationAzureBlobStorageConfiguration {
    /**
     * The Azure blob storage account key.
     */
    azureBlobStorageAccountKey: string;
    /**
     * The account's name of the Azure Blob Storage.
     */
    azureBlobStorageAccountName: string;
    /**
     * The name of the Azure blob storage container. If not exists - will be created automatically. May be empty, then will be created automatically airbytecontainer+timestamp
     */
    azureBlobStorageContainerName?: string;
    /**
     * This is Azure Blob Storage endpoint domain name. Leave default value (or leave it empty if run container from command line) to use Microsoft native from example. Default: "blob.core.windows.net"
     */
    azureBlobStorageEndpointDomainName: string;
    /**
     * The amount of megabytes to buffer for the output stream to Azure. This will impact memory footprint on workers, but may need adjustment for performance and appropriate block size in Azure. Default: 5
     */
    azureBlobStorageOutputBufferSize: number;
    /**
     * The amount of megabytes after which the connector should spill the records in a new blob object. Make sure to configure size greater than individual records. Enter 0 if not applicable. Default: 500
     */
    azureBlobStorageSpillSize: number;
    /**
     * Output data format
     */
    format: outputs.DestinationAzureBlobStorageConfigurationFormat;
}
export interface DestinationAzureBlobStorageConfigurationFormat {
    csvCommaSeparatedValues?: outputs.DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValues;
    jsonLinesNewlineDelimitedJson?: outputs.DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJson;
}
export interface DestinationAzureBlobStorageConfigurationFormatCsvCommaSeparatedValues {
    /**
     * Add file extensions to the output file. Default: false
     */
    fileExtension: boolean;
    /**
     * Whether the input json data should be normalized (flattened) in the output CSV. Please refer to docs for details. must be one of ["No flattening", "Root level flattening"]; Default: "No flattening"
     */
    flattening: string;
}
export interface DestinationAzureBlobStorageConfigurationFormatJsonLinesNewlineDelimitedJson {
    /**
     * Add file extensions to the output file. Default: false
     */
    fileExtension: boolean;
}
export interface DestinationBigqueryConfiguration {
    /**
     * Google BigQuery client's chunk (buffer) size (MIN=1, MAX = 15) for each table. The size that will be written by a single RPC. Written data will be buffered and only flushed upon reaching this size or closing the channel. The default 15MB value is used if not set explicitly. Read more <a href="https://googleapis.dev/python/bigquery/latest/generated/google.cloud.bigquery.client.Client.html">here</a>. Default: 15
     */
    bigQueryClientBufferSizeMb: number;
    /**
     * The contents of the JSON service account key. Check out the <a href="https://docs.airbyte.com/integrations/destinations/bigquery#service-account-key">docs</a> if you need help generating this key. Default credentials will be used if this field is left empty.
     */
    credentialsJson?: string;
    /**
     * The default BigQuery Dataset ID that tables are replicated to if the source does not specify a namespace. Read more <a href="https://cloud.google.com/bigquery/docs/datasets#create-dataset">here</a>.
     */
    datasetId: string;
    /**
     * The location of the dataset. Warning: Changes made after creation will not be applied. Read more <a href="https://cloud.google.com/bigquery/docs/locations">here</a>. must be one of ["US", "EU", "asia-east1", "asia-east2", "asia-northeast1", "asia-northeast2", "asia-northeast3", "asia-south1", "asia-south2", "asia-southeast1", "asia-southeast2", "australia-southeast1", "australia-southeast2", "europe-central1", "europe-central2", "europe-north1", "europe-southwest1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west6", "europe-west7", "europe-west8", "europe-west9", "europe-west12", "me-central1", "me-central2", "me-west1", "northamerica-northeast1", "northamerica-northeast2", "southamerica-east1", "southamerica-west1", "us-central1", "us-east1", "us-east2", "us-east3", "us-east4", "us-east5", "us-south1", "us-west1", "us-west2", "us-west3", "us-west4"]
     */
    datasetLocation: string;
    /**
     * Disable Writing Final Tables. WARNING! The data format in _airbyte_data is likely stable but there are no guarantees that other metadata columns will remain the same in future versions. Default: false
     */
    disableTypeDedupe: boolean;
    /**
     * The way data will be uploaded to BigQuery.
     */
    loadingMethod?: outputs.DestinationBigqueryConfigurationLoadingMethod;
    /**
     * The GCP project ID for the project containing the target BigQuery dataset. Read more <a href="https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects">here</a>.
     */
    projectId: string;
    /**
     * The dataset to write raw tables into (default: airbyte_internal)
     */
    rawDataDataset?: string;
    /**
     * Interactive run type means that the query is executed as soon as possible, and these queries count towards concurrent rate limit and daily limit. Read more about interactive run type <a href="https://cloud.google.com/bigquery/docs/running-queries#queries">here</a>. Batch queries are queued and started as soon as idle resources are available in the BigQuery shared resource pool, which usually occurs within a few minutes. Batch queries don’t count towards your concurrent rate limit. Read more about batch queries <a href="https://cloud.google.com/bigquery/docs/running-queries#batch">here</a>. The default "interactive" value is used if not set explicitly. must be one of ["interactive", "batch"]; Default: "interactive"
     */
    transformationPriority: string;
}
export interface DestinationBigqueryConfigurationLoadingMethod {
    /**
     * Direct loading using batched SQL INSERT statements. This method uses the BigQuery driver to convert large INSERT statements into file uploads automatically.
     */
    batchedStandardInserts?: outputs.DestinationBigqueryConfigurationLoadingMethodBatchedStandardInserts;
    /**
     * Writes large batches of records to a file, uploads the file to GCS, then uses COPY INTO to load your data into BigQuery.
     */
    gcsStaging?: outputs.DestinationBigqueryConfigurationLoadingMethodGcsStaging;
}
export interface DestinationBigqueryConfigurationLoadingMethodBatchedStandardInserts {
}
export interface DestinationBigqueryConfigurationLoadingMethodGcsStaging {
    /**
     * An HMAC key is a type of credential and can be associated with a service account or a user account in Cloud Storage. Read more <a href="https://cloud.google.com/storage/docs/authentication/hmackeys">here</a>.
     */
    credential: outputs.DestinationBigqueryConfigurationLoadingMethodGcsStagingCredential;
    /**
     * The name of the GCS bucket. Read more <a href="https://cloud.google.com/storage/docs/naming-buckets">here</a>.
     */
    gcsBucketName: string;
    /**
     * Directory under the GCS bucket where data will be written.
     */
    gcsBucketPath: string;
    /**
     * This upload method is supposed to temporary store records in GCS bucket. By this select you can chose if these records should be removed from GCS when migration has finished. The default "Delete all tmp files from GCS" value is used if not set explicitly. must be one of ["Delete all tmp files from GCS", "Keep all tmp files in GCS"]; Default: "Delete all tmp files from GCS"
     */
    keepFilesInGcsBucket: string;
}
export interface DestinationBigqueryConfigurationLoadingMethodGcsStagingCredential {
    hmacKey?: outputs.DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKey;
}
export interface DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKey {
    /**
     * HMAC key access ID. When linked to a service account, this ID is 61 characters long; when linked to a user account, it is 24 characters long.
     */
    hmacKeyAccessId: string;
    /**
     * The corresponding secret for the access ID. It is a 40-character base-64 encoded string.
     */
    hmacKeySecret: string;
}
export interface DestinationClickhouseConfiguration {
    /**
     * Name of the database.
     */
    database: string;
    /**
     * Hostname of the database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * Password associated with the username.
     */
    password?: string;
    /**
     * HTTP port of the database. Default: 8123
     */
    port: number;
    /**
     * The schema to write raw tables into (default: airbyte_internal)
     */
    rawDataSchema?: string;
    /**
     * Encrypt data using SSL. Default: false
     */
    ssl: boolean;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.DestinationClickhouseConfigurationTunnelMethod;
    /**
     * Username to use to access the database.
     */
    username: string;
}
export interface DestinationClickhouseConfigurationTunnelMethod {
    noTunnel?: outputs.DestinationClickhouseConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.DestinationClickhouseConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.DestinationClickhouseConfigurationTunnelMethodSshKeyAuthentication;
}
export interface DestinationClickhouseConfigurationTunnelMethodNoTunnel {
}
export interface DestinationClickhouseConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface DestinationClickhouseConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface DestinationConvexConfiguration {
    /**
     * API access key used to send data to a Convex deployment.
     */
    accessKey: string;
    /**
     * URL of the Convex deployment that is the destination
     */
    deploymentUrl: string;
}
export interface DestinationDatabricksConfiguration {
    /**
     * You must agree to the Databricks JDBC Driver <a href="https://databricks.com/jdbc-odbc-driver-license">Terms & Conditions</a> to use this connector. Default: false
     */
    acceptTerms: boolean;
    /**
     * Authentication mechanism for Staging files and running queries
     */
    authentication: outputs.DestinationDatabricksConfigurationAuthentication;
    /**
     * The name of the unity catalog for the database
     */
    database: string;
    /**
     * Databricks Cluster Server Hostname.
     */
    hostname: string;
    /**
     * Databricks Cluster HTTP Path.
     */
    httpPath: string;
    /**
     * Databricks Cluster Port. Default: "443"
     */
    port: string;
    /**
     * Default to 'true'. Switch it to 'false' for debugging purpose. Default: true
     */
    purgeStagingData: boolean;
    /**
     * The schema to write raw tables into (default: airbyte_internal). Default: "airbyte_internal"
     */
    rawSchemaOverride: string;
    /**
     * The default schema tables are written. If not specified otherwise, the "default" will be used. Default: "default"
     */
    schema: string;
}
export interface DestinationDatabricksConfigurationAuthentication {
    oAuth2Recommended?: outputs.DestinationDatabricksConfigurationAuthenticationOAuth2Recommended;
    personalAccessToken?: outputs.DestinationDatabricksConfigurationAuthenticationPersonalAccessToken;
}
export interface DestinationDatabricksConfigurationAuthenticationOAuth2Recommended {
    clientId: string;
    secret: string;
}
export interface DestinationDatabricksConfigurationAuthenticationPersonalAccessToken {
    personalAccessToken: string;
}
export interface DestinationDuckdbConfiguration {
    /**
     * Path to the .duckdb file, or the text 'md:' to connect to MotherDuck. The file will be placed inside that local mount. For more information check out our <a href="https://docs.airbyte.io/integrations/destinations/duckdb">docs</a>
     */
    destinationPath: string;
    /**
     * API key to use for authentication to a MotherDuck database.
     */
    motherduckApiKey?: string;
    /**
     * Database schema name, default for duckdb is 'main'.
     */
    schema?: string;
}
export interface DestinationDynamodbConfiguration {
    /**
     * The access key id to access the DynamoDB. Airbyte requires Read and Write permissions to the DynamoDB.
     */
    accessKeyId: string;
    /**
     * This is your DynamoDB endpoint url.(if you are working with AWS DynamoDB, just leave empty). Default: ""
     */
    dynamodbEndpoint: string;
    /**
     * The region of the DynamoDB. must be one of ["", "af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1", "us-west-2"]; Default: ""
     */
    dynamodbRegion: string;
    /**
     * The prefix to use when naming DynamoDB tables.
     */
    dynamodbTableNamePrefix: string;
    /**
     * The corresponding secret to the access key id.
     */
    secretAccessKey: string;
}
export interface DestinationElasticsearchConfiguration {
    /**
     * The type of authentication to be used
     */
    authenticationMethod?: outputs.DestinationElasticsearchConfigurationAuthenticationMethod;
    /**
     * CA certificate
     */
    caCertificate?: string;
    /**
     * The full url of the Elasticsearch server
     */
    endpoint: string;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.DestinationElasticsearchConfigurationTunnelMethod;
    /**
     * If a primary key identifier is defined in the source, an upsert will be performed using the primary key value as the elasticsearch doc id. Does not support composite primary keys. Default: true
     */
    upsert: boolean;
}
export interface DestinationElasticsearchConfigurationAuthenticationMethod {
    /**
     * Use a api key and secret combination to authenticate
     */
    apiKeySecret?: outputs.DestinationElasticsearchConfigurationAuthenticationMethodApiKeySecret;
    /**
     * No authentication will be used
     */
    none?: outputs.DestinationElasticsearchConfigurationAuthenticationMethodNone;
    /**
     * Basic auth header with a username and password
     */
    usernamePassword?: outputs.DestinationElasticsearchConfigurationAuthenticationMethodUsernamePassword;
}
export interface DestinationElasticsearchConfigurationAuthenticationMethodApiKeySecret {
    /**
     * The Key ID to used when accessing an enterprise Elasticsearch instance.
     */
    apiKeyId: string;
    /**
     * The secret associated with the API Key ID.
     */
    apiKeySecret: string;
}
export interface DestinationElasticsearchConfigurationAuthenticationMethodNone {
}
export interface DestinationElasticsearchConfigurationAuthenticationMethodUsernamePassword {
    /**
     * Basic auth password to access a secure Elasticsearch server
     */
    password: string;
    /**
     * Basic auth username to access a secure Elasticsearch server
     */
    username: string;
}
export interface DestinationElasticsearchConfigurationTunnelMethod {
    noTunnel?: outputs.DestinationElasticsearchConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.DestinationElasticsearchConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.DestinationElasticsearchConfigurationTunnelMethodSshKeyAuthentication;
}
export interface DestinationElasticsearchConfigurationTunnelMethodNoTunnel {
}
export interface DestinationElasticsearchConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface DestinationElasticsearchConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface DestinationFireboltConfiguration {
    /**
     * Firebolt account to login.
     */
    account: string;
    /**
     * Firebolt service account ID.
     */
    clientId: string;
    /**
     * Firebolt secret, corresponding to the service account ID.
     */
    clientSecret: string;
    /**
     * The database to connect to.
     */
    database: string;
    /**
     * Engine name to connect to.
     */
    engine: string;
    /**
     * The host name of your Firebolt database.
     */
    host?: string;
    /**
     * Loading method used to select the way data will be uploaded to Firebolt
     */
    loadingMethod?: outputs.DestinationFireboltConfigurationLoadingMethod;
}
export interface DestinationFireboltConfigurationLoadingMethod {
    externalTableViaS3?: outputs.DestinationFireboltConfigurationLoadingMethodExternalTableViaS3;
    sqlInserts?: outputs.DestinationFireboltConfigurationLoadingMethodSqlInserts;
}
export interface DestinationFireboltConfigurationLoadingMethodExternalTableViaS3 {
    /**
     * AWS access key granting read and write access to S3.
     */
    awsKeyId: string;
    /**
     * Corresponding secret part of the AWS Key
     */
    awsKeySecret: string;
    /**
     * The name of the S3 bucket.
     */
    s3Bucket: string;
    /**
     * Region name of the S3 bucket.
     */
    s3Region: string;
}
export interface DestinationFireboltConfigurationLoadingMethodSqlInserts {
}
export interface DestinationFirestoreConfiguration {
    /**
     * The contents of the JSON service account key. Check out the <a href="https://docs.airbyte.com/integrations/destinations/firestore">docs</a> if you need help generating this key. Default credentials will be used if this field is left empty.
     */
    credentialsJson?: string;
    /**
     * The GCP project ID for the project containing the target BigQuery dataset.
     */
    projectId: string;
}
export interface DestinationGcsConfiguration {
    /**
     * An HMAC key is a type of credential and can be associated with a service account or a user account in Cloud Storage. Read more <a href="https://cloud.google.com/storage/docs/authentication/hmackeys">here</a>.
     */
    credential: outputs.DestinationGcsConfigurationCredential;
    /**
     * Output data format. One of the following formats must be selected - <a href="https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-avro#advantages_of_avro">AVRO</a> format, <a href="https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-parquet#parquet_schemas">PARQUET</a> format, <a href="https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv#loading_csv_data_into_a_table">CSV</a> format, or <a href="https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-json#loading_json_data_into_a_new_table">JSONL</a> format.
     */
    format: outputs.DestinationGcsConfigurationFormat;
    /**
     * You can find the bucket name in the App Engine Admin console Application Settings page, under the label Google Cloud Storage Bucket. Read more <a href="https://cloud.google.com/storage/docs/naming-buckets">here</a>.
     */
    gcsBucketName: string;
    /**
     * GCS Bucket Path string Subdirectory under the above bucket to sync the data into.
     */
    gcsBucketPath: string;
    /**
     * Select a Region of the GCS Bucket. Read more <a href="https://cloud.google.com/storage/docs/locations">here</a>. must be one of ["northamerica-northeast1", "northamerica-northeast2", "us-central1", "us-east1", "us-east4", "us-west1", "us-west2", "us-west3", "us-west4", "southamerica-east1", "southamerica-west1", "europe-central2", "europe-north1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west6", "asia-east1", "asia-east2", "asia-northeast1", "asia-northeast2", "asia-northeast3", "asia-south1", "asia-south2", "asia-southeast1", "asia-southeast2", "australia-southeast1", "australia-southeast2", "asia", "eu", "us", "asia1", "eur4", "nam4"]; Default: "us"
     */
    gcsBucketRegion: string;
}
export interface DestinationGcsConfigurationCredential {
    hmacKey?: outputs.DestinationGcsConfigurationCredentialHmacKey;
}
export interface DestinationGcsConfigurationCredentialHmacKey {
    /**
     * must be one of ["HMAC_KEY"]; Default: "HMAC_KEY"
     */
    credentialType: string;
    /**
     * When linked to a service account, this ID is 61 characters long; when linked to a user account, it is 24 characters long. Read more <a href="https://cloud.google.com/storage/docs/authentication/hmackeys#overview">here</a>.
     */
    hmacKeyAccessId: string;
    /**
     * The corresponding secret for the access ID. It is a 40-character base-64 encoded string.  Read more <a href="https://cloud.google.com/storage/docs/authentication/hmackeys#secrets">here</a>.
     */
    hmacKeySecret: string;
}
export interface DestinationGcsConfigurationFormat {
    avroApacheAvro?: outputs.DestinationGcsConfigurationFormatAvroApacheAvro;
    csvCommaSeparatedValues?: outputs.DestinationGcsConfigurationFormatCsvCommaSeparatedValues;
    jsonLinesNewlineDelimitedJson?: outputs.DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJson;
    parquetColumnarStorage?: outputs.DestinationGcsConfigurationFormatParquetColumnarStorage;
}
export interface DestinationGcsConfigurationFormatAvroApacheAvro {
    /**
     * The compression algorithm used to compress data. Default to no compression.
     */
    compressionCodec: outputs.DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodec;
    /**
     * must be one of ["Avro"]; Default: "Avro"
     */
    formatType: string;
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodec {
    bzip2?: outputs.DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2;
    deflate?: outputs.DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflate;
    noCompression?: outputs.DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompression;
    snappy?: outputs.DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappy;
    xz?: outputs.DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXz;
    zstandard?: outputs.DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandard;
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2 {
    /**
     * must be one of ["bzip2"]; Default: "bzip2"
     */
    codec: string;
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflate {
    /**
     * must be one of ["Deflate"]; Default: "Deflate"
     */
    codec: string;
    /**
     * 0: no compression & fastest, 9: best compression & slowest. Default: 0
     */
    compressionLevel: number;
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompression {
    /**
     * must be one of ["no compression"]; Default: "no compression"
     */
    codec: string;
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappy {
    /**
     * must be one of ["snappy"]; Default: "snappy"
     */
    codec: string;
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXz {
    /**
     * must be one of ["xz"]; Default: "xz"
     */
    codec: string;
    /**
     * The presets 0-3 are fast presets with medium compression. The presets 4-6 are fairly slow presets with high compression. The default preset is 6. The presets 7-9 are like the preset 6 but use bigger dictionaries and have higher compressor and decompressor memory requirements. Unless the uncompressed size of the file exceeds 8 MiB, 16 MiB, or 32 MiB, it is waste of memory to use the presets 7, 8, or 9, respectively. Read more <a href="https://commons.apache.org/proper/commons-compress/apidocs/org/apache/commons/compress/compressors/xz/XZCompressorOutputStream.html#XZCompressorOutputStream-java.io.OutputStream-int-">here</a> for details. Default: 6
     */
    compressionLevel: number;
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandard {
    /**
     * must be one of ["zstandard"]; Default: "zstandard"
     */
    codec: string;
    /**
     * Negative levels are 'fast' modes akin to lz4 or snappy, levels above 9 are generally for archival purposes, and levels above 18 use a lot of memory. Default: 3
     */
    compressionLevel: number;
    /**
     * If true, include a checksum with each data block. Default: false
     */
    includeChecksum: boolean;
}
export interface DestinationGcsConfigurationFormatCsvCommaSeparatedValues {
    /**
     * Whether the output files should be compressed. If compression is selected, the output filename will have an extra extension (GZIP: ".csv.gz").
     */
    compression?: outputs.DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompression;
    /**
     * Whether the input JSON data should be normalized (flattened) in the output CSV. Please refer to docs for details. must be one of ["No flattening", "Root level flattening"]; Default: "No flattening"
     */
    flattening: string;
    /**
     * must be one of ["CSV"]; Default: "CSV"
     */
    formatType: string;
}
export interface DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompression {
    gzip?: outputs.DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzip;
    noCompression?: outputs.DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression;
}
export interface DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzip {
    /**
     * must be one of ["GZIP"]; Default: "GZIP"
     */
    compressionType: string;
}
export interface DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression {
    /**
     * must be one of ["No Compression"]; Default: "No Compression"
     */
    compressionType: string;
}
export interface DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJson {
    /**
     * Whether the output files should be compressed. If compression is selected, the output filename will have an extra extension (GZIP: ".jsonl.gz").
     */
    compression?: outputs.DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompression;
    /**
     * must be one of ["JSONL"]; Default: "JSONL"
     */
    formatType: string;
}
export interface DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompression {
    gzip?: outputs.DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip;
    noCompression?: outputs.DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression;
}
export interface DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip {
    /**
     * must be one of ["GZIP"]; Default: "GZIP"
     */
    compressionType: string;
}
export interface DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression {
    /**
     * must be one of ["No Compression"]; Default: "No Compression"
     */
    compressionType: string;
}
export interface DestinationGcsConfigurationFormatParquetColumnarStorage {
    /**
     * This is the size of a row group being buffered in memory. It limits the memory usage when writing. Larger values will improve the IO when reading, but consume more memory when writing. Default: 128 MB. Default: 128
     */
    blockSizeMb: number;
    /**
     * The compression algorithm used to compress data pages. must be one of ["UNCOMPRESSED", "SNAPPY", "GZIP", "LZO", "BROTLI", "LZ4", "ZSTD"]; Default: "UNCOMPRESSED"
     */
    compressionCodec: string;
    /**
     * Default: true. Default: true
     */
    dictionaryEncoding: boolean;
    /**
     * There is one dictionary page per column per row group when dictionary encoding is used. The dictionary page size works like the page size but for dictionary. Default: 1024 KB. Default: 1024
     */
    dictionaryPageSizeKb: number;
    /**
     * must be one of ["Parquet"]; Default: "Parquet"
     */
    formatType: string;
    /**
     * Maximum size allowed as padding to align row groups. This is also the minimum size of a row group. Default: 8 MB. Default: 8
     */
    maxPaddingSizeMb: number;
    /**
     * The page size is for compression. A block is composed of pages. A page is the smallest unit that must be read fully to access a single record. If this value is too small, the compression will deteriorate. Default: 1024 KB. Default: 1024
     */
    pageSizeKb: number;
}
export interface DestinationGoogleSheetsConfiguration {
    /**
     * Google API Credentials for connecting to Google Sheets and Google Drive APIs
     */
    credentials: outputs.DestinationGoogleSheetsConfigurationCredentials;
    /**
     * The link to your spreadsheet. See <a href='https://docs.airbyte.com/integrations/destinations/google-sheets#sheetlink'>this guide</a> for more details.
     */
    spreadsheetId: string;
}
export interface DestinationGoogleSheetsConfigurationCredentials {
    /**
     * The Client ID of your Google Sheets developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Google Sheets developer application.
     */
    clientSecret: string;
    /**
     * The token for obtaining new access token.
     */
    refreshToken: string;
}
export interface DestinationMilvusConfiguration {
    /**
     * Embedding configuration
     */
    embedding: outputs.DestinationMilvusConfigurationEmbedding;
    /**
     * Indexing configuration
     */
    indexing: outputs.DestinationMilvusConfigurationIndexing;
    /**
     * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
     */
    omitRawText: boolean;
    processing: outputs.DestinationMilvusConfigurationProcessing;
}
export interface DestinationMilvusConfigurationEmbedding {
    /**
     * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    azureOpenAi?: outputs.DestinationMilvusConfigurationEmbeddingAzureOpenAi;
    /**
     * Use the Cohere API to embed text.
     */
    cohere?: outputs.DestinationMilvusConfigurationEmbeddingCohere;
    /**
     * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
     */
    fake?: outputs.DestinationMilvusConfigurationEmbeddingFake;
    /**
     * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    openAi?: outputs.DestinationMilvusConfigurationEmbeddingOpenAi;
    /**
     * Use a service that's compatible with the OpenAI API to embed text.
     */
    openAiCompatible?: outputs.DestinationMilvusConfigurationEmbeddingOpenAiCompatible;
}
export interface DestinationMilvusConfigurationEmbeddingAzureOpenAi {
    /**
     * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    apiBase: string;
    /**
     * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    deployment: string;
    /**
     * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    openaiKey: string;
}
export interface DestinationMilvusConfigurationEmbeddingCohere {
    cohereKey: string;
}
export interface DestinationMilvusConfigurationEmbeddingFake {
}
export interface DestinationMilvusConfigurationEmbeddingOpenAi {
    openaiKey: string;
}
export interface DestinationMilvusConfigurationEmbeddingOpenAiCompatible {
    /**
     * Default: ""
     */
    apiKey: string;
    /**
     * The base URL for your OpenAI-compatible service
     */
    baseUrl: string;
    /**
     * The number of dimensions the embedding model is generating
     */
    dimensions: number;
    /**
     * The name of the model to use for embedding. Default: "text-embedding-ada-002"
     */
    modelName: string;
}
export interface DestinationMilvusConfigurationIndexing {
    /**
     * Authentication method
     */
    auth: outputs.DestinationMilvusConfigurationIndexingAuth;
    /**
     * The collection to load data into
     */
    collection: string;
    /**
     * The database to connect to. Default: ""
     */
    db: string;
    /**
     * The public endpoint of the Milvus instance.
     */
    host: string;
    /**
     * The field in the entity that contains the embedded text. Default: "text"
     */
    textField: string;
    /**
     * The field in the entity that contains the vector. Default: "vector"
     */
    vectorField: string;
}
export interface DestinationMilvusConfigurationIndexingAuth {
    /**
     * Authenticate using an API token (suitable for Zilliz Cloud)
     */
    apiToken?: outputs.DestinationMilvusConfigurationIndexingAuthApiToken;
    /**
     * Do not authenticate (suitable for locally running test clusters, do not use for clusters with public IP addresses)
     */
    noAuth?: outputs.DestinationMilvusConfigurationIndexingAuthNoAuth;
    /**
     * Authenticate using username and password (suitable for self-managed Milvus clusters)
     */
    usernamePassword?: outputs.DestinationMilvusConfigurationIndexingAuthUsernamePassword;
}
export interface DestinationMilvusConfigurationIndexingAuthApiToken {
    /**
     * API Token for the Milvus instance
     */
    token: string;
}
export interface DestinationMilvusConfigurationIndexingAuthNoAuth {
}
export interface DestinationMilvusConfigurationIndexingAuthUsernamePassword {
    /**
     * Password for the Milvus instance
     */
    password: string;
    /**
     * Username for the Milvus instance
     */
    username: string;
}
export interface DestinationMilvusConfigurationProcessing {
    /**
     * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
     */
    chunkOverlap: number;
    /**
     * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
     */
    chunkSize: number;
    /**
     * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
     */
    fieldNameMappings?: outputs.DestinationMilvusConfigurationProcessingFieldNameMapping[];
    /**
     * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
     */
    metadataFields?: string[];
    /**
     * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
     */
    textFields?: string[];
    /**
     * Split text fields into chunks based on the specified method.
     */
    textSplitter?: outputs.DestinationMilvusConfigurationProcessingTextSplitter;
}
export interface DestinationMilvusConfigurationProcessingFieldNameMapping {
    /**
     * The field name in the source
     */
    fromField: string;
    /**
     * The field name to use in the destination
     */
    toField: string;
}
export interface DestinationMilvusConfigurationProcessingTextSplitter {
    /**
     * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
     */
    byMarkdownHeader?: outputs.DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeader;
    /**
     * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
     */
    byProgrammingLanguage?: outputs.DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguage;
    /**
     * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
     */
    bySeparator?: outputs.DestinationMilvusConfigurationProcessingTextSplitterBySeparator;
}
export interface DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeader {
    /**
     * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
     */
    splitLevel: number;
}
export interface DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguage {
    /**
     * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
     */
    language: string;
}
export interface DestinationMilvusConfigurationProcessingTextSplitterBySeparator {
    /**
     * Whether to keep the separator in the resulting chunks. Default: false
     */
    keepSeparator: boolean;
    /**
     * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
     */
    separators?: string[];
}
export interface DestinationMongodbConfiguration {
    /**
     * Authorization type.
     */
    authType: outputs.DestinationMongodbConfigurationAuthType;
    /**
     * Name of the database.
     */
    database: string;
    /**
     * MongoDb instance to connect to. For MongoDB Atlas and Replica Set TLS connection is used by default.
     */
    instanceType?: outputs.DestinationMongodbConfigurationInstanceType;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.DestinationMongodbConfigurationTunnelMethod;
}
export interface DestinationMongodbConfigurationAuthType {
    /**
     * Login/Password.
     */
    loginPassword?: outputs.DestinationMongodbConfigurationAuthTypeLoginPassword;
    /**
     * None.
     */
    none?: outputs.DestinationMongodbConfigurationAuthTypeNone;
}
export interface DestinationMongodbConfigurationAuthTypeLoginPassword {
    /**
     * Password associated with the username.
     */
    password: string;
    /**
     * Username to use to access the database.
     */
    username: string;
}
export interface DestinationMongodbConfigurationAuthTypeNone {
}
export interface DestinationMongodbConfigurationInstanceType {
    mongoDbAtlas?: outputs.DestinationMongodbConfigurationInstanceTypeMongoDbAtlas;
    replicaSet?: outputs.DestinationMongodbConfigurationInstanceTypeReplicaSet;
    standaloneMongoDbInstance?: outputs.DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstance;
}
export interface DestinationMongodbConfigurationInstanceTypeMongoDbAtlas {
    /**
     * URL of a cluster to connect to.
     */
    clusterUrl: string;
    /**
     * must be one of ["atlas"]; Default: "atlas"
     */
    instance: string;
}
export interface DestinationMongodbConfigurationInstanceTypeReplicaSet {
    /**
     * must be one of ["replica"]; Default: "replica"
     */
    instance: string;
    /**
     * A replica set name.
     */
    replicaSet?: string;
    /**
     * The members of a replica set. Please specify `host`:`port` of each member seperated by comma.
     */
    serverAddresses: string;
}
export interface DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstance {
    /**
     * The Host of a Mongo database to be replicated.
     */
    host: string;
    /**
     * must be one of ["standalone"]; Default: "standalone"
     */
    instance: string;
    /**
     * The Port of a Mongo database to be replicated. Default: 27017
     */
    port: number;
    /**
     * Indicates whether TLS encryption protocol will be used to connect to MongoDB. It is recommended to use TLS connection if possible. For more information see <a href="https://docs.airbyte.com/integrations/sources/mongodb-v2">documentation</a>. Default: false
     */
    tls: boolean;
}
export interface DestinationMongodbConfigurationTunnelMethod {
    noTunnel?: outputs.DestinationMongodbConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.DestinationMongodbConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.DestinationMongodbConfigurationTunnelMethodSshKeyAuthentication;
}
export interface DestinationMongodbConfigurationTunnelMethodNoTunnel {
}
export interface DestinationMongodbConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface DestinationMongodbConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface DestinationMssqlConfiguration {
    /**
     * The name of the MSSQL database.
     */
    database: string;
    /**
     * The host name of the MSSQL database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * The password associated with this username.
     */
    password?: string;
    /**
     * The port of the MSSQL database. Default: 1433
     */
    port: number;
    /**
     * The schema to write raw tables into (default: airbyte_internal)
     */
    rawDataSchema?: string;
    /**
     * The default schema tables are written to if the source does not specify a namespace. The usual value for this field is "public". Default: "public"
     */
    schema: string;
    /**
     * The encryption method which is used to communicate with the database.
     */
    sslMethod?: outputs.DestinationMssqlConfigurationSslMethod;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.DestinationMssqlConfigurationTunnelMethod;
    /**
     * The username which is used to access the database.
     */
    username: string;
}
export interface DestinationMssqlConfigurationSslMethod {
    /**
     * Use the certificate provided by the server without verification. (For testing purposes only!)
     */
    encryptedTrustServerCertificate?: outputs.DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificate;
    /**
     * Verify and use the certificate provided by the server.
     */
    encryptedVerifyCertificate?: outputs.DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificate;
    /**
     * The data transfer will not be encrypted.
     */
    unencrypted?: outputs.DestinationMssqlConfigurationSslMethodUnencrypted;
}
export interface DestinationMssqlConfigurationSslMethodEncryptedTrustServerCertificate {
}
export interface DestinationMssqlConfigurationSslMethodEncryptedVerifyCertificate {
    /**
     * Specifies the host name of the server. The value of this property must match the subject property of the certificate.
     */
    hostNameInCertificate?: string;
}
export interface DestinationMssqlConfigurationSslMethodUnencrypted {
}
export interface DestinationMssqlConfigurationTunnelMethod {
    noTunnel?: outputs.DestinationMssqlConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.DestinationMssqlConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.DestinationMssqlConfigurationTunnelMethodSshKeyAuthentication;
}
export interface DestinationMssqlConfigurationTunnelMethodNoTunnel {
}
export interface DestinationMssqlConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface DestinationMssqlConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface DestinationMysqlConfiguration {
    /**
     * Name of the database.
     */
    database: string;
    /**
     * Disable Writing Final Tables. WARNING! The data format in _airbyte_data is likely stable but there are no guarantees that other metadata columns will remain the same in future versions. Default: false
     */
    disableTypeDedupe: boolean;
    /**
     * Hostname of the database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * Password associated with the username.
     */
    password?: string;
    /**
     * Port of the database. Default: 3306
     */
    port: number;
    /**
     * The database to write raw tables into
     */
    rawDataSchema?: string;
    /**
     * Encrypt data using SSL. Default: true
     */
    ssl: boolean;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.DestinationMysqlConfigurationTunnelMethod;
    /**
     * Username to use to access the database.
     */
    username: string;
}
export interface DestinationMysqlConfigurationTunnelMethod {
    noTunnel?: outputs.DestinationMysqlConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.DestinationMysqlConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.DestinationMysqlConfigurationTunnelMethodSshKeyAuthentication;
}
export interface DestinationMysqlConfigurationTunnelMethodNoTunnel {
}
export interface DestinationMysqlConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface DestinationMysqlConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface DestinationOracleConfiguration {
    /**
     * The encryption method which is used when communicating with the database.
     */
    encryption?: outputs.DestinationOracleConfigurationEncryption;
    /**
     * The hostname of the database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * The password associated with the username.
     */
    password?: string;
    /**
     * The port of the database. Default: 1521
     */
    port: number;
    /**
     * The schema to write raw tables into (default: airbyte_internal)
     */
    rawDataSchema?: string;
    /**
     * The default schema is used as the target schema for all statements issued from the connection that do not explicitly specify a schema name. The usual value for this field is "airbyte".  In Oracle, schemas and users are the same thing, so the "user" parameter is used as the login credentials and this is used for the default Airbyte message schema. Default: "airbyte"
     */
    schema: string;
    /**
     * The System Identifier uniquely distinguishes the instance from any other instance on the same computer.
     */
    sid: string;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.DestinationOracleConfigurationTunnelMethod;
    /**
     * The username to access the database. This user must have CREATE USER privileges in the database.
     */
    username: string;
}
export interface DestinationOracleConfigurationEncryption {
    /**
     * The native network encryption gives you the ability to encrypt database connections, without the configuration overhead of TCP/IP and SSL/TLS and without the need to open and listen on different ports.
     */
    nativeNetworkEncryptionNne?: outputs.DestinationOracleConfigurationEncryptionNativeNetworkEncryptionNne;
    /**
     * Verify and use the certificate provided by the server.
     */
    tlsEncryptedVerifyCertificate?: outputs.DestinationOracleConfigurationEncryptionTlsEncryptedVerifyCertificate;
    /**
     * Data transfer will not be encrypted.
     */
    unencrypted?: outputs.DestinationOracleConfigurationEncryptionUnencrypted;
}
export interface DestinationOracleConfigurationEncryptionNativeNetworkEncryptionNne {
    /**
     * This parameter defines the database encryption algorithm. must be one of ["AES256", "RC4_56", "3DES168"]; Default: "AES256"
     */
    encryptionAlgorithm: string;
}
export interface DestinationOracleConfigurationEncryptionTlsEncryptedVerifyCertificate {
    /**
     * Privacy Enhanced Mail (PEM) files are concatenated certificate containers frequently used in certificate installations.
     */
    sslCertificate: string;
}
export interface DestinationOracleConfigurationEncryptionUnencrypted {
}
export interface DestinationOracleConfigurationTunnelMethod {
    noTunnel?: outputs.DestinationOracleConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.DestinationOracleConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.DestinationOracleConfigurationTunnelMethodSshKeyAuthentication;
}
export interface DestinationOracleConfigurationTunnelMethodNoTunnel {
}
export interface DestinationOracleConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface DestinationOracleConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface DestinationPgvectorConfiguration {
    /**
     * Embedding configuration
     */
    embedding: outputs.DestinationPgvectorConfigurationEmbedding;
    /**
     * Postgres can be used to store vector data and retrieve embeddings.
     */
    indexing: outputs.DestinationPgvectorConfigurationIndexing;
    /**
     * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
     */
    omitRawText: boolean;
    processing: outputs.DestinationPgvectorConfigurationProcessing;
}
export interface DestinationPgvectorConfigurationEmbedding {
    /**
     * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    azureOpenAi?: outputs.DestinationPgvectorConfigurationEmbeddingAzureOpenAi;
    /**
     * Use the Cohere API to embed text.
     */
    cohere?: outputs.DestinationPgvectorConfigurationEmbeddingCohere;
    /**
     * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
     */
    fake?: outputs.DestinationPgvectorConfigurationEmbeddingFake;
    /**
     * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    openAi?: outputs.DestinationPgvectorConfigurationEmbeddingOpenAi;
    /**
     * Use a service that's compatible with the OpenAI API to embed text.
     */
    openAiCompatible?: outputs.DestinationPgvectorConfigurationEmbeddingOpenAiCompatible;
}
export interface DestinationPgvectorConfigurationEmbeddingAzureOpenAi {
    /**
     * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    apiBase: string;
    /**
     * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    deployment: string;
    /**
     * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    openaiKey: string;
}
export interface DestinationPgvectorConfigurationEmbeddingCohere {
    cohereKey: string;
}
export interface DestinationPgvectorConfigurationEmbeddingFake {
}
export interface DestinationPgvectorConfigurationEmbeddingOpenAi {
    openaiKey: string;
}
export interface DestinationPgvectorConfigurationEmbeddingOpenAiCompatible {
    /**
     * Default: ""
     */
    apiKey: string;
    /**
     * The base URL for your OpenAI-compatible service
     */
    baseUrl: string;
    /**
     * The number of dimensions the embedding model is generating
     */
    dimensions: number;
    /**
     * The name of the model to use for embedding. Default: "text-embedding-ada-002"
     */
    modelName: string;
}
export interface DestinationPgvectorConfigurationIndexing {
    credentials: outputs.DestinationPgvectorConfigurationIndexingCredentials;
    /**
     * Enter the name of the database that you want to sync data into
     */
    database: string;
    /**
     * Enter the name of the default schema
     */
    defaultSchema: string;
    /**
     * Enter the account name you want to use to access the database.
     */
    host: string;
    /**
     * Enter the port you want to use to access the database
     */
    port: number;
    /**
     * Enter the name of the user you want to use to access the database
     */
    username: string;
}
export interface DestinationPgvectorConfigurationIndexingCredentials {
    /**
     * Enter the password you want to use to access the database
     */
    password: string;
}
export interface DestinationPgvectorConfigurationProcessing {
    /**
     * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
     */
    chunkOverlap: number;
    /**
     * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
     */
    chunkSize: number;
    /**
     * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
     */
    fieldNameMappings?: outputs.DestinationPgvectorConfigurationProcessingFieldNameMapping[];
    /**
     * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
     */
    metadataFields?: string[];
    /**
     * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
     */
    textFields?: string[];
    /**
     * Split text fields into chunks based on the specified method.
     */
    textSplitter?: outputs.DestinationPgvectorConfigurationProcessingTextSplitter;
}
export interface DestinationPgvectorConfigurationProcessingFieldNameMapping {
    /**
     * The field name in the source
     */
    fromField: string;
    /**
     * The field name to use in the destination
     */
    toField: string;
}
export interface DestinationPgvectorConfigurationProcessingTextSplitter {
    /**
     * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
     */
    byMarkdownHeader?: outputs.DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeader;
    /**
     * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
     */
    byProgrammingLanguage?: outputs.DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguage;
    /**
     * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
     */
    bySeparator?: outputs.DestinationPgvectorConfigurationProcessingTextSplitterBySeparator;
}
export interface DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeader {
    /**
     * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
     */
    splitLevel: number;
}
export interface DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguage {
    /**
     * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
     */
    language: string;
}
export interface DestinationPgvectorConfigurationProcessingTextSplitterBySeparator {
    /**
     * Whether to keep the separator in the resulting chunks. Default: false
     */
    keepSeparator: boolean;
    /**
     * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
     */
    separators?: string[];
}
export interface DestinationPineconeConfiguration {
    /**
     * Embedding configuration
     */
    embedding: outputs.DestinationPineconeConfigurationEmbedding;
    /**
     * Pinecone is a popular vector store that can be used to store and retrieve embeddings.
     */
    indexing: outputs.DestinationPineconeConfigurationIndexing;
    /**
     * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
     */
    omitRawText: boolean;
    processing: outputs.DestinationPineconeConfigurationProcessing;
}
export interface DestinationPineconeConfigurationEmbedding {
    /**
     * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    azureOpenAi?: outputs.DestinationPineconeConfigurationEmbeddingAzureOpenAi;
    /**
     * Use the Cohere API to embed text.
     */
    cohere?: outputs.DestinationPineconeConfigurationEmbeddingCohere;
    /**
     * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
     */
    fake?: outputs.DestinationPineconeConfigurationEmbeddingFake;
    /**
     * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    openAi?: outputs.DestinationPineconeConfigurationEmbeddingOpenAi;
    /**
     * Use a service that's compatible with the OpenAI API to embed text.
     */
    openAiCompatible?: outputs.DestinationPineconeConfigurationEmbeddingOpenAiCompatible;
}
export interface DestinationPineconeConfigurationEmbeddingAzureOpenAi {
    /**
     * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    apiBase: string;
    /**
     * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    deployment: string;
    /**
     * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    openaiKey: string;
}
export interface DestinationPineconeConfigurationEmbeddingCohere {
    cohereKey: string;
}
export interface DestinationPineconeConfigurationEmbeddingFake {
}
export interface DestinationPineconeConfigurationEmbeddingOpenAi {
    openaiKey: string;
}
export interface DestinationPineconeConfigurationEmbeddingOpenAiCompatible {
    /**
     * Default: ""
     */
    apiKey: string;
    /**
     * The base URL for your OpenAI-compatible service
     */
    baseUrl: string;
    /**
     * The number of dimensions the embedding model is generating
     */
    dimensions: number;
    /**
     * The name of the model to use for embedding. Default: "text-embedding-ada-002"
     */
    modelName: string;
}
export interface DestinationPineconeConfigurationIndexing {
    /**
     * Pinecone index in your project to load data into
     */
    index: string;
    /**
     * Pinecone Cloud environment to use
     */
    pineconeEnvironment: string;
    /**
     * The Pinecone API key to use matching the environment (copy from Pinecone console)
     */
    pineconeKey: string;
}
export interface DestinationPineconeConfigurationProcessing {
    /**
     * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
     */
    chunkOverlap: number;
    /**
     * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
     */
    chunkSize: number;
    /**
     * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
     */
    fieldNameMappings?: outputs.DestinationPineconeConfigurationProcessingFieldNameMapping[];
    /**
     * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
     */
    metadataFields?: string[];
    /**
     * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
     */
    textFields?: string[];
    /**
     * Split text fields into chunks based on the specified method.
     */
    textSplitter?: outputs.DestinationPineconeConfigurationProcessingTextSplitter;
}
export interface DestinationPineconeConfigurationProcessingFieldNameMapping {
    /**
     * The field name in the source
     */
    fromField: string;
    /**
     * The field name to use in the destination
     */
    toField: string;
}
export interface DestinationPineconeConfigurationProcessingTextSplitter {
    /**
     * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
     */
    byMarkdownHeader?: outputs.DestinationPineconeConfigurationProcessingTextSplitterByMarkdownHeader;
    /**
     * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
     */
    byProgrammingLanguage?: outputs.DestinationPineconeConfigurationProcessingTextSplitterByProgrammingLanguage;
    /**
     * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
     */
    bySeparator?: outputs.DestinationPineconeConfigurationProcessingTextSplitterBySeparator;
}
export interface DestinationPineconeConfigurationProcessingTextSplitterByMarkdownHeader {
    /**
     * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
     */
    splitLevel: number;
}
export interface DestinationPineconeConfigurationProcessingTextSplitterByProgrammingLanguage {
    /**
     * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
     */
    language: string;
}
export interface DestinationPineconeConfigurationProcessingTextSplitterBySeparator {
    /**
     * Whether to keep the separator in the resulting chunks. Default: false
     */
    keepSeparator: boolean;
    /**
     * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
     */
    separators?: string[];
}
export interface DestinationPostgresConfiguration {
    /**
     * Name of the database.
     */
    database: string;
    /**
     * Disable Writing Final Tables. WARNING! The data format in _airbyte_data is likely stable but there are no guarantees that other metadata columns will remain the same in future versions. Default: false
     */
    disableTypeDedupe: boolean;
    /**
     * Drop tables with CASCADE. WARNING! This will delete all data in all dependent objects (views, etc.). Use with caution. This option is intended for usecases which can easily rebuild the dependent objects. Default: false
     */
    dropCascade: boolean;
    /**
     * Hostname of the database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * Password associated with the username.
     */
    password?: string;
    /**
     * Port of the database. Default: 5432
     */
    port: number;
    /**
     * The schema to write raw tables into
     */
    rawDataSchema?: string;
    /**
     * The default schema tables are written to if the source does not specify a namespace. The usual value for this field is "public". Default: "public"
     */
    schema: string;
    /**
     * Encrypt data using SSL. When activating SSL, please select one of the connection modes. Default: false
     */
    ssl: boolean;
    /**
     * SSL connection modes.
     *  <b>disable</b> - Chose this mode to disable encryption of communication between Airbyte and destination database
     *  <b>allow</b> - Chose this mode to enable encryption only when required by the source database
     *  <b>prefer</b> - Chose this mode to allow unencrypted connection only if the source database does not support encryption
     *  <b>require</b> - Chose this mode to always require encryption. If the source database server does not support encryption, connection will fail
     *   <b>verify-ca</b> - Chose this mode to always require encryption and to verify that the source database server has a valid SSL certificate
     *   <b>verify-full</b> - This is the most secure mode. Chose this mode to always require encryption and to verify the identity of the source database server
     *  See more information - <a href="https://jdbc.postgresql.org/documentation/head/ssl-client.html"> in the docs</a>.
     */
    sslMode?: outputs.DestinationPostgresConfigurationSslMode;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.DestinationPostgresConfigurationTunnelMethod;
    /**
     * Username to use to access the database.
     */
    username: string;
}
export interface DestinationPostgresConfigurationSslMode {
    /**
     * Allow SSL mode.
     */
    allow?: outputs.DestinationPostgresConfigurationSslModeAllow;
    /**
     * Disable SSL.
     */
    disable?: outputs.DestinationPostgresConfigurationSslModeDisable;
    /**
     * Prefer SSL mode.
     */
    prefer?: outputs.DestinationPostgresConfigurationSslModePrefer;
    /**
     * Require SSL mode.
     */
    require?: outputs.DestinationPostgresConfigurationSslModeRequire;
    /**
     * Verify-ca SSL mode.
     */
    verifyCa?: outputs.DestinationPostgresConfigurationSslModeVerifyCa;
    /**
     * Verify-full SSL mode.
     */
    verifyFull?: outputs.DestinationPostgresConfigurationSslModeVerifyFull;
}
export interface DestinationPostgresConfigurationSslModeAllow {
}
export interface DestinationPostgresConfigurationSslModeDisable {
}
export interface DestinationPostgresConfigurationSslModePrefer {
}
export interface DestinationPostgresConfigurationSslModeRequire {
}
export interface DestinationPostgresConfigurationSslModeVerifyCa {
    /**
     * CA certificate
     */
    caCertificate: string;
    /**
     * Password for keystorage. This field is optional. If you do not add it - the password will be generated automatically.
     */
    clientKeyPassword?: string;
}
export interface DestinationPostgresConfigurationSslModeVerifyFull {
    /**
     * CA certificate
     */
    caCertificate: string;
    /**
     * Client certificate
     */
    clientCertificate: string;
    /**
     * Client key
     */
    clientKey: string;
    /**
     * Password for keystorage. This field is optional. If you do not add it - the password will be generated automatically.
     */
    clientKeyPassword?: string;
}
export interface DestinationPostgresConfigurationTunnelMethod {
    noTunnel?: outputs.DestinationPostgresConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.DestinationPostgresConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.DestinationPostgresConfigurationTunnelMethodSshKeyAuthentication;
}
export interface DestinationPostgresConfigurationTunnelMethodNoTunnel {
}
export interface DestinationPostgresConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface DestinationPostgresConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface DestinationPubsubConfiguration {
    /**
     * Number of ms before the buffer is flushed. Default: 1
     */
    batchingDelayThreshold: number;
    /**
     * Number of messages before the buffer is flushed. Default: 1
     */
    batchingElementCountThreshold: number;
    /**
     * If TRUE messages will be buffered instead of sending them one by one. Default: false
     */
    batchingEnabled: boolean;
    /**
     * Number of bytes before the buffer is flushed. Default: 1
     */
    batchingRequestBytesThreshold: number;
    /**
     * The contents of the JSON service account key. Check out the <a href="https://docs.airbyte.com/integrations/destinations/pubsub">docs</a> if you need help generating this key.
     */
    credentialsJson: string;
    /**
     * If TRUE PubSub publisher will have <a href="https://cloud.google.com/pubsub/docs/ordering">message ordering</a> enabled. Every message will have an ordering key of stream. Default: false
     */
    orderingEnabled: boolean;
    /**
     * The GCP project ID for the project containing the target PubSub.
     */
    projectId: string;
    /**
     * The PubSub topic ID in the given GCP project ID.
     */
    topicId: string;
}
export interface DestinationQdrantConfiguration {
    /**
     * Embedding configuration
     */
    embedding: outputs.DestinationQdrantConfigurationEmbedding;
    /**
     * Indexing configuration
     */
    indexing: outputs.DestinationQdrantConfigurationIndexing;
    /**
     * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
     */
    omitRawText: boolean;
    processing: outputs.DestinationQdrantConfigurationProcessing;
}
export interface DestinationQdrantConfigurationEmbedding {
    /**
     * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    azureOpenAi?: outputs.DestinationQdrantConfigurationEmbeddingAzureOpenAi;
    /**
     * Use the Cohere API to embed text.
     */
    cohere?: outputs.DestinationQdrantConfigurationEmbeddingCohere;
    /**
     * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
     */
    fake?: outputs.DestinationQdrantConfigurationEmbeddingFake;
    /**
     * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    openAi?: outputs.DestinationQdrantConfigurationEmbeddingOpenAi;
    /**
     * Use a service that's compatible with the OpenAI API to embed text.
     */
    openAiCompatible?: outputs.DestinationQdrantConfigurationEmbeddingOpenAiCompatible;
}
export interface DestinationQdrantConfigurationEmbeddingAzureOpenAi {
    /**
     * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    apiBase: string;
    /**
     * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    deployment: string;
    /**
     * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    openaiKey: string;
}
export interface DestinationQdrantConfigurationEmbeddingCohere {
    cohereKey: string;
}
export interface DestinationQdrantConfigurationEmbeddingFake {
}
export interface DestinationQdrantConfigurationEmbeddingOpenAi {
    openaiKey: string;
}
export interface DestinationQdrantConfigurationEmbeddingOpenAiCompatible {
    /**
     * Default: ""
     */
    apiKey: string;
    /**
     * The base URL for your OpenAI-compatible service
     */
    baseUrl: string;
    /**
     * The number of dimensions the embedding model is generating
     */
    dimensions: number;
    /**
     * The name of the model to use for embedding. Default: "text-embedding-ada-002"
     */
    modelName: string;
}
export interface DestinationQdrantConfigurationIndexing {
    /**
     * Method to authenticate with the Qdrant Instance
     */
    authMethod?: outputs.DestinationQdrantConfigurationIndexingAuthMethod;
    /**
     * The collection to load data into
     */
    collection: string;
    /**
     * The Distance metric used to measure similarities among vectors. This field is only used if the collection defined in the does not exist yet and is created automatically by the connector. must be one of ["dot", "cos", "euc"]; Default: "cos"
     */
    distanceMetric: string;
    /**
     * Whether to prefer gRPC over HTTP. Set to true for Qdrant cloud clusters. Default: true
     */
    preferGrpc: boolean;
    /**
     * The field in the payload that contains the embedded text. Default: "text"
     */
    textField: string;
    /**
     * Public Endpoint of the Qdrant cluser
     */
    url: string;
}
export interface DestinationQdrantConfigurationIndexingAuthMethod {
    apiKeyAuth?: outputs.DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuth;
    noAuth?: outputs.DestinationQdrantConfigurationIndexingAuthMethodNoAuth;
}
export interface DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuth {
    /**
     * API Key for the Qdrant instance
     */
    apiKey: string;
}
export interface DestinationQdrantConfigurationIndexingAuthMethodNoAuth {
}
export interface DestinationQdrantConfigurationProcessing {
    /**
     * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
     */
    chunkOverlap: number;
    /**
     * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
     */
    chunkSize: number;
    /**
     * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
     */
    fieldNameMappings?: outputs.DestinationQdrantConfigurationProcessingFieldNameMapping[];
    /**
     * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
     */
    metadataFields?: string[];
    /**
     * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
     */
    textFields?: string[];
    /**
     * Split text fields into chunks based on the specified method.
     */
    textSplitter?: outputs.DestinationQdrantConfigurationProcessingTextSplitter;
}
export interface DestinationQdrantConfigurationProcessingFieldNameMapping {
    /**
     * The field name in the source
     */
    fromField: string;
    /**
     * The field name to use in the destination
     */
    toField: string;
}
export interface DestinationQdrantConfigurationProcessingTextSplitter {
    /**
     * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
     */
    byMarkdownHeader?: outputs.DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeader;
    /**
     * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
     */
    byProgrammingLanguage?: outputs.DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguage;
    /**
     * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
     */
    bySeparator?: outputs.DestinationQdrantConfigurationProcessingTextSplitterBySeparator;
}
export interface DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeader {
    /**
     * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
     */
    splitLevel: number;
}
export interface DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguage {
    /**
     * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
     */
    language: string;
}
export interface DestinationQdrantConfigurationProcessingTextSplitterBySeparator {
    /**
     * Whether to keep the separator in the resulting chunks. Default: false
     */
    keepSeparator: boolean;
    /**
     * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
     */
    separators?: string[];
}
export interface DestinationRedisConfiguration {
    /**
     * Redis cache type to store data in. must be one of ["hash"]; Default: "hash"
     */
    cacheType: string;
    /**
     * Redis host to connect to.
     */
    host: string;
    /**
     * Password associated with Redis.
     */
    password?: string;
    /**
     * Port of Redis. Default: 6379
     */
    port: number;
    /**
     * Indicates whether SSL encryption protocol will be used to connect to Redis. It is recommended to use SSL connection if possible. Default: false
     */
    ssl: boolean;
    /**
     * SSL connection modes.
     *   <li><b>verify-full</b> - This is the most secure mode. Always require encryption and verifies the identity of the source database server
     */
    sslMode?: outputs.DestinationRedisConfigurationSslMode;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.DestinationRedisConfigurationTunnelMethod;
    /**
     * Username associated with Redis.
     */
    username: string;
}
export interface DestinationRedisConfigurationSslMode {
    /**
     * Disable SSL.
     */
    disable?: outputs.DestinationRedisConfigurationSslModeDisable;
    /**
     * Verify-full SSL mode.
     */
    verifyFull?: outputs.DestinationRedisConfigurationSslModeVerifyFull;
}
export interface DestinationRedisConfigurationSslModeDisable {
}
export interface DestinationRedisConfigurationSslModeVerifyFull {
    /**
     * CA certificate
     */
    caCertificate: string;
    /**
     * Client certificate
     */
    clientCertificate: string;
    /**
     * Client key
     */
    clientKey: string;
    /**
     * Password for keystorage. If you do not add it - the password will be generated automatically.
     */
    clientKeyPassword?: string;
}
export interface DestinationRedisConfigurationTunnelMethod {
    noTunnel?: outputs.DestinationRedisConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.DestinationRedisConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.DestinationRedisConfigurationTunnelMethodSshKeyAuthentication;
}
export interface DestinationRedisConfigurationTunnelMethodNoTunnel {
}
export interface DestinationRedisConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface DestinationRedisConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface DestinationRedshiftConfiguration {
    /**
     * Name of the database.
     */
    database: string;
    /**
     * Disable Writing Final Tables. WARNING! The data format in _airbyte_data is likely stable but there are no guarantees that other metadata columns will remain the same in future versions. Default: false
     */
    disableTypeDedupe: boolean;
    /**
     * Drop tables with CASCADE. WARNING! This will delete all data in all dependent objects (views, etc.). Use with caution. This option is intended for usecases which can easily rebuild the dependent objects. Default: false
     */
    dropCascade: boolean;
    /**
     * Host Endpoint of the Redshift Cluster (must include the cluster-id, region and end with .redshift.amazonaws.com)
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * Password associated with the username.
     */
    password: string;
    /**
     * Port of the database. Default: 5439
     */
    port: number;
    /**
     * The schema to write raw tables into (default: airbyte_internal).
     */
    rawDataSchema?: string;
    /**
     * The default schema tables are written to if the source does not specify a namespace. Unless specifically configured, the usual value for this field is "public". Default: "public"
     */
    schema: string;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.DestinationRedshiftConfigurationTunnelMethod;
    /**
     * The way data will be uploaded to Redshift.
     */
    uploadingMethod?: outputs.DestinationRedshiftConfigurationUploadingMethod;
    /**
     * Username to use to access the database.
     */
    username: string;
}
export interface DestinationRedshiftConfigurationTunnelMethod {
    noTunnel?: outputs.DestinationRedshiftConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.DestinationRedshiftConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.DestinationRedshiftConfigurationTunnelMethodSshKeyAuthentication;
}
export interface DestinationRedshiftConfigurationTunnelMethodNoTunnel {
}
export interface DestinationRedshiftConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface DestinationRedshiftConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface DestinationRedshiftConfigurationUploadingMethod {
    /**
     * <i>(recommended)</i> Uploads data to S3 and then uses a COPY to insert the data into Redshift. COPY is recommended for production workloads for better speed and scalability. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html">AWS docs</a> for more details.
     */
    awss3Staging?: outputs.DestinationRedshiftConfigurationUploadingMethodAwss3Staging;
}
export interface DestinationRedshiftConfigurationUploadingMethodAwss3Staging {
    /**
     * This ID grants access to the above S3 staging bucket. Airbyte requires Read and Write permissions to the given bucket. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys">AWS docs</a> on how to generate an access key ID and secret access key.
     */
    accessKeyId: string;
    /**
     * The pattern allows you to set the file-name format for the S3 staging file(s)
     */
    fileNamePattern?: string;
    /**
     * Whether to delete the staging files from S3 after completing the sync. See <a href="https://docs.airbyte.com/integrations/destinations/redshift/#:~:text=the%20root%20directory.-,Purge%20Staging%20Data,-Whether%20to%20delete"> docs</a> for details. Default: true
     */
    purgeStagingData: boolean;
    /**
     * The name of the staging S3 bucket.
     */
    s3BucketName: string;
    /**
     * The directory under the S3 bucket where data will be written. If not provided, then defaults to the root directory. See <a href="https://docs.aws.amazon.com/prescriptive-guidance/latest/defining-bucket-names-data-lakes/faq.html#:~:text=be%20globally%20unique.-,For%20S3%20bucket%20paths,-%2C%20you%20can%20use">path's name recommendations</a> for more details.
     */
    s3BucketPath?: string;
    /**
     * The region of the S3 staging bucket. must be one of ["", "af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1", "us-west-2"]; Default: ""
     */
    s3BucketRegion: string;
    /**
     * The corresponding secret to the above access key id. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys">AWS docs</a> on how to generate an access key ID and secret access key.
     */
    secretAccessKey: string;
}
export interface DestinationS3Configuration {
    /**
     * The access key ID to access the S3 bucket. Airbyte requires Read and Write permissions to the given bucket. Read more <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys">here</a>.
     */
    accessKeyId?: string;
    /**
     * The pattern allows you to set the file-name format for the S3 staging file(s)
     */
    fileNamePattern?: string;
    /**
     * Format of the data output. See <a href="https://docs.airbyte.com/integrations/destinations/s3/#supported-output-schema">here</a> for more details
     */
    format: outputs.DestinationS3ConfigurationFormat;
    /**
     * The Role ARN
     */
    roleArn?: string;
    /**
     * The name of the S3 bucket. Read more <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html">here</a>.
     */
    s3BucketName: string;
    /**
     * Directory under the S3 bucket where data will be written. Read more <a href="https://docs.airbyte.com/integrations/destinations/s3#:~:text=to%20format%20the-,bucket%20path,-%3A">here</a>
     */
    s3BucketPath: string;
    /**
     * The region of the S3 bucket. See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions">here</a> for all region codes. must be one of ["", "af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1", "us-west-2"]; Default: ""
     */
    s3BucketRegion: string;
    /**
     * Your S3 endpoint url. Read more <a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#:~:text=Service%20endpoints-,Amazon%20S3%20endpoints,-When%20you%20use">here</a>. Default: ""
     */
    s3Endpoint: string;
    /**
     * Format string on how data will be organized inside the S3 bucket directory. Read more <a href="https://docs.airbyte.com/integrations/destinations/s3#:~:text=The%20full%20path%20of%20the%20output%20data%20with%20the%20default%20S3%20path%20format">here</a>
     */
    s3PathFormat?: string;
    /**
     * The corresponding secret to the access key ID. Read more <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys">here</a>
     */
    secretAccessKey?: string;
}
export interface DestinationS3ConfigurationFormat {
    avroApacheAvro?: outputs.DestinationS3ConfigurationFormatAvroApacheAvro;
    csvCommaSeparatedValues?: outputs.DestinationS3ConfigurationFormatCsvCommaSeparatedValues;
    jsonLinesNewlineDelimitedJson?: outputs.DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJson;
    parquetColumnarStorage?: outputs.DestinationS3ConfigurationFormatParquetColumnarStorage;
}
export interface DestinationS3ConfigurationFormatAvroApacheAvro {
    /**
     * The compression algorithm used to compress data. Default to no compression.
     */
    compressionCodec: outputs.DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodec;
    /**
     * must be one of ["Avro"]; Default: "Avro"
     */
    formatType: string;
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodec {
    bzip2?: outputs.DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2;
    deflate?: outputs.DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflate;
    noCompression?: outputs.DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompression;
    snappy?: outputs.DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappy;
    xz?: outputs.DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXz;
    zstandard?: outputs.DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandard;
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2 {
    /**
     * must be one of ["bzip2"]; Default: "bzip2"
     */
    codec: string;
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflate {
    /**
     * must be one of ["Deflate"]; Default: "Deflate"
     */
    codec: string;
    /**
     * 0: no compression & fastest, 9: best compression & slowest. Default: 0
     */
    compressionLevel: number;
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompression {
    /**
     * must be one of ["no compression"]; Default: "no compression"
     */
    codec: string;
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappy {
    /**
     * must be one of ["snappy"]; Default: "snappy"
     */
    codec: string;
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXz {
    /**
     * must be one of ["xz"]; Default: "xz"
     */
    codec: string;
    /**
     * See <a href="https://commons.apache.org/proper/commons-compress/apidocs/org/apache/commons/compress/compressors/xz/XZCompressorOutputStream.html#XZCompressorOutputStream-java.io.OutputStream-int-">here</a> for details. Default: 6
     */
    compressionLevel: number;
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandard {
    /**
     * must be one of ["zstandard"]; Default: "zstandard"
     */
    codec: string;
    /**
     * Negative levels are 'fast' modes akin to lz4 or snappy, levels above 9 are generally for archival purposes, and levels above 18 use a lot of memory. Default: 3
     */
    compressionLevel: number;
    /**
     * If true, include a checksum with each data block. Default: false
     */
    includeChecksum: boolean;
}
export interface DestinationS3ConfigurationFormatCsvCommaSeparatedValues {
    /**
     * Whether the output files should be compressed. If compression is selected, the output filename will have an extra extension (GZIP: ".csv.gz").
     */
    compression?: outputs.DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompression;
    /**
     * Whether the input json data should be normalized (flattened) in the output CSV. Please refer to docs for details. must be one of ["No flattening", "Root level flattening"]; Default: "No flattening"
     */
    flattening: string;
    /**
     * must be one of ["CSV"]; Default: "CSV"
     */
    formatType: string;
}
export interface DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompression {
    gzip?: outputs.DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzip;
    noCompression?: outputs.DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression;
}
export interface DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzip {
    /**
     * must be one of ["GZIP"]; Default: "GZIP"
     */
    compressionType: string;
}
export interface DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression {
    /**
     * must be one of ["No Compression"]; Default: "No Compression"
     */
    compressionType: string;
}
export interface DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJson {
    /**
     * Whether the output files should be compressed. If compression is selected, the output filename will have an extra extension (GZIP: ".jsonl.gz").
     */
    compression?: outputs.DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompression;
    /**
     * Whether the input json data should be normalized (flattened) in the output JSON Lines. Please refer to docs for details. must be one of ["No flattening", "Root level flattening"]; Default: "No flattening"
     */
    flattening: string;
    /**
     * must be one of ["JSONL"]; Default: "JSONL"
     */
    formatType: string;
}
export interface DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompression {
    gzip?: outputs.DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip;
    noCompression?: outputs.DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression;
}
export interface DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip {
    /**
     * must be one of ["GZIP"]; Default: "GZIP"
     */
    compressionType: string;
}
export interface DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression {
    /**
     * must be one of ["No Compression"]; Default: "No Compression"
     */
    compressionType: string;
}
export interface DestinationS3ConfigurationFormatParquetColumnarStorage {
    /**
     * This is the size of a row group being buffered in memory. It limits the memory usage when writing. Larger values will improve the IO when reading, but consume more memory when writing. Default: 128 MB. Default: 128
     */
    blockSizeMb: number;
    /**
     * The compression algorithm used to compress data pages. must be one of ["UNCOMPRESSED", "SNAPPY", "GZIP", "LZO", "BROTLI", "LZ4", "ZSTD"]; Default: "UNCOMPRESSED"
     */
    compressionCodec: string;
    /**
     * Default: true. Default: true
     */
    dictionaryEncoding: boolean;
    /**
     * There is one dictionary page per column per row group when dictionary encoding is used. The dictionary page size works like the page size but for dictionary. Default: 1024 KB. Default: 1024
     */
    dictionaryPageSizeKb: number;
    /**
     * must be one of ["Parquet"]; Default: "Parquet"
     */
    formatType: string;
    /**
     * Maximum size allowed as padding to align row groups. This is also the minimum size of a row group. Default: 8 MB. Default: 8
     */
    maxPaddingSizeMb: number;
    /**
     * The page size is for compression. A block is composed of pages. A page is the smallest unit that must be read fully to access a single record. If this value is too small, the compression will deteriorate. Default: 1024 KB. Default: 1024
     */
    pageSizeKb: number;
}
export interface DestinationS3GlueConfiguration {
    /**
     * The access key ID to access the S3 bucket. Airbyte requires Read and Write permissions to the given bucket. Read more <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys">here</a>.
     */
    accessKeyId?: string;
    /**
     * The pattern allows you to set the file-name format for the S3 staging file(s)
     */
    fileNamePattern?: string;
    /**
     * Format of the data output. See <a href="https://docs.airbyte.com/integrations/destinations/s3/#supported-output-schema">here</a> for more details
     */
    format: outputs.DestinationS3GlueConfigurationFormat;
    /**
     * Name of the glue database for creating the tables, leave blank if no integration
     */
    glueDatabase: string;
    /**
     * The library that your query engine will use for reading and writing data in your lake. must be one of ["org.openx.data.jsonserde.JsonSerDe", "org.apache.hive.hcatalog.data.JsonSerDe"]; Default: "org.openx.data.jsonserde.JsonSerDe"
     */
    glueSerializationLibrary: string;
    /**
     * The name of the S3 bucket. Read more <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html">here</a>.
     */
    s3BucketName: string;
    /**
     * Directory under the S3 bucket where data will be written. Read more <a href="https://docs.airbyte.com/integrations/destinations/s3#:~:text=to%20format%20the-,bucket%20path,-%3A">here</a>
     */
    s3BucketPath: string;
    /**
     * The region of the S3 bucket. See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions">here</a> for all region codes. must be one of ["", "af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1", "us-west-2"]; Default: ""
     */
    s3BucketRegion: string;
    /**
     * Your S3 endpoint url. Read more <a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#:~:text=Service%20endpoints-,Amazon%20S3%20endpoints,-When%20you%20use">here</a>. Default: ""
     */
    s3Endpoint: string;
    /**
     * Format string on how data will be organized inside the S3 bucket directory. Read more <a href="https://docs.airbyte.com/integrations/destinations/s3#:~:text=The%20full%20path%20of%20the%20output%20data%20with%20the%20default%20S3%20path%20format">here</a>
     */
    s3PathFormat?: string;
    /**
     * The corresponding secret to the access key ID. Read more <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys">here</a>
     */
    secretAccessKey?: string;
}
export interface DestinationS3GlueConfigurationFormat {
    jsonLinesNewlineDelimitedJson?: outputs.DestinationS3GlueConfigurationFormatJsonLinesNewlineDelimitedJson;
}
export interface DestinationS3GlueConfigurationFormatJsonLinesNewlineDelimitedJson {
    /**
     * Whether the output files should be compressed. If compression is selected, the output filename will have an extra extension (GZIP: ".jsonl.gz").
     */
    compression?: outputs.DestinationS3GlueConfigurationFormatJsonLinesNewlineDelimitedJsonCompression;
    /**
     * Whether the input json data should be normalized (flattened) in the output JSON Lines. Please refer to docs for details. must be one of ["No flattening", "Root level flattening"]; Default: "Root level flattening"
     */
    flattening: string;
    /**
     * must be one of ["JSONL"]; Default: "JSONL"
     */
    formatType: string;
}
export interface DestinationS3GlueConfigurationFormatJsonLinesNewlineDelimitedJsonCompression {
    gzip?: outputs.DestinationS3GlueConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip;
    noCompression?: outputs.DestinationS3GlueConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression;
}
export interface DestinationS3GlueConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip {
    /**
     * must be one of ["GZIP"]; Default: "GZIP"
     */
    compressionType: string;
}
export interface DestinationS3GlueConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression {
    /**
     * must be one of ["No Compression"]; Default: "No Compression"
     */
    compressionType: string;
}
export interface DestinationSftpJsonConfiguration {
    /**
     * Path to the directory where json files will be written.
     */
    destinationPath: string;
    /**
     * Hostname of the SFTP server.
     */
    host: string;
    /**
     * Password associated with the username.
     */
    password: string;
    /**
     * Port of the SFTP server. Default: 22
     */
    port: number;
    /**
     * Username to use to access the SFTP server.
     */
    username: string;
}
export interface DestinationSnowflakeConfiguration {
    credentials?: outputs.DestinationSnowflakeConfigurationCredentials;
    /**
     * Enter the name of the <a href="https://docs.snowflake.com/en/sql-reference/ddl-database.html#database-schema-share-ddl">database</a> you want to sync data into
     */
    database: string;
    /**
     * Disable Writing Final Tables. WARNING! The data format in _airbyte_data is likely stable but there are no guarantees that other metadata columns will remain the same in future versions. Default: false
     */
    disableTypeDedupe: boolean;
    /**
     * Enter your Snowflake account's <a href="https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#using-an-account-locator-as-an-identifier">locator</a> (in the format <account_locator>.<region>.<cloud>.snowflakecomputing.com)
     */
    host: string;
    /**
     * Enter the additional properties to pass to the JDBC URL string when connecting to the database (formatted as key=value pairs separated by the symbol &). Example: key1=value1&key2=value2&key3=value3
     */
    jdbcUrlParams?: string;
    /**
     * The schema to write raw tables into (default: airbyte_internal)
     */
    rawDataSchema?: string;
    /**
     * The number of days of Snowflake Time Travel to enable on the tables. See <a href="https://docs.snowflake.com/en/user-guide/data-time-travel#data-retention-period">Snowflake's documentation</a> for more information. Setting a nonzero value will incur increased storage costs in your Snowflake instance. Default: 1
     */
    retentionPeriodDays: number;
    /**
     * Enter the <a href="https://docs.snowflake.com/en/user-guide/security-access-control-overview.html#roles">role</a> that you want to use to access Snowflake
     */
    role: string;
    /**
     * Enter the name of the default <a href="https://docs.snowflake.com/en/sql-reference/ddl-database.html#database-schema-share-ddl">schema</a>
     */
    schema: string;
    /**
     * Use MERGE for de-duplication of final tables. This option no effect if Final tables are disabled or Sync mode is not DEDUPE. Default: false
     */
    useMergeForUpsert: boolean;
    /**
     * Enter the name of the user you want to use to access the database
     */
    username: string;
    /**
     * Enter the name of the <a href="https://docs.snowflake.com/en/user-guide/warehouses-overview.html#overview-of-warehouses">warehouse</a> that you want to use as a compute cluster
     */
    warehouse: string;
}
export interface DestinationSnowflakeConfigurationCredentials {
    keyPairAuthentication?: outputs.DestinationSnowflakeConfigurationCredentialsKeyPairAuthentication;
    oAuth20?: outputs.DestinationSnowflakeConfigurationCredentialsOAuth20;
    usernameAndPassword?: outputs.DestinationSnowflakeConfigurationCredentialsUsernameAndPassword;
}
export interface DestinationSnowflakeConfigurationCredentialsKeyPairAuthentication {
    /**
     * RSA Private key to use for Snowflake connection. See the <a href="https://docs.airbyte.com/integrations/destinations/snowflake">docs</a> for more information on how to obtain this key.
     */
    privateKey: string;
    /**
     * Passphrase for private key
     */
    privateKeyPassword?: string;
}
export interface DestinationSnowflakeConfigurationCredentialsOAuth20 {
    /**
     * Enter you application's Access Token
     */
    accessToken: string;
    /**
     * Enter your application's Client ID
     */
    clientId?: string;
    /**
     * Enter your application's Client secret
     */
    clientSecret?: string;
    /**
     * Enter your application's Refresh Token
     */
    refreshToken: string;
}
export interface DestinationSnowflakeConfigurationCredentialsUsernameAndPassword {
    /**
     * Enter the password associated with the username.
     */
    password: string;
}
export interface DestinationSnowflakeCortexConfiguration {
    /**
     * Embedding configuration
     */
    embedding: outputs.DestinationSnowflakeCortexConfigurationEmbedding;
    /**
     * Snowflake can be used to store vector data and retrieve embeddings.
     */
    indexing: outputs.DestinationSnowflakeCortexConfigurationIndexing;
    /**
     * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
     */
    omitRawText: boolean;
    processing: outputs.DestinationSnowflakeCortexConfigurationProcessing;
}
export interface DestinationSnowflakeCortexConfigurationEmbedding {
    /**
     * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    azureOpenAi?: outputs.DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAi;
    /**
     * Use the Cohere API to embed text.
     */
    cohere?: outputs.DestinationSnowflakeCortexConfigurationEmbeddingCohere;
    /**
     * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
     */
    fake?: outputs.DestinationSnowflakeCortexConfigurationEmbeddingFake;
    /**
     * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    openAi?: outputs.DestinationSnowflakeCortexConfigurationEmbeddingOpenAi;
    /**
     * Use a service that's compatible with the OpenAI API to embed text.
     */
    openAiCompatible?: outputs.DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatible;
}
export interface DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAi {
    /**
     * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    apiBase: string;
    /**
     * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    deployment: string;
    /**
     * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    openaiKey: string;
}
export interface DestinationSnowflakeCortexConfigurationEmbeddingCohere {
    cohereKey: string;
}
export interface DestinationSnowflakeCortexConfigurationEmbeddingFake {
}
export interface DestinationSnowflakeCortexConfigurationEmbeddingOpenAi {
    openaiKey: string;
}
export interface DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatible {
    /**
     * Default: ""
     */
    apiKey: string;
    /**
     * The base URL for your OpenAI-compatible service
     */
    baseUrl: string;
    /**
     * The number of dimensions the embedding model is generating
     */
    dimensions: number;
    /**
     * The name of the model to use for embedding. Default: "text-embedding-ada-002"
     */
    modelName: string;
}
export interface DestinationSnowflakeCortexConfigurationIndexing {
    credentials: outputs.DestinationSnowflakeCortexConfigurationIndexingCredentials;
    /**
     * Enter the name of the database that you want to sync data into
     */
    database: string;
    /**
     * Enter the name of the default schema
     */
    defaultSchema: string;
    /**
     * Enter the account name you want to use to access the database. This is usually the identifier before .snowflakecomputing.com
     */
    host: string;
    /**
     * Enter the role that you want to use to access Snowflake
     */
    role: string;
    /**
     * Enter the name of the user you want to use to access the database
     */
    username: string;
    /**
     * Enter the name of the warehouse that you want to use as a compute cluster
     */
    warehouse: string;
}
export interface DestinationSnowflakeCortexConfigurationIndexingCredentials {
    /**
     * Enter the password you want to use to access the database
     */
    password: string;
}
export interface DestinationSnowflakeCortexConfigurationProcessing {
    /**
     * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
     */
    chunkOverlap: number;
    /**
     * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
     */
    chunkSize: number;
    /**
     * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
     */
    fieldNameMappings?: outputs.DestinationSnowflakeCortexConfigurationProcessingFieldNameMapping[];
    /**
     * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
     */
    metadataFields?: string[];
    /**
     * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
     */
    textFields?: string[];
    /**
     * Split text fields into chunks based on the specified method.
     */
    textSplitter?: outputs.DestinationSnowflakeCortexConfigurationProcessingTextSplitter;
}
export interface DestinationSnowflakeCortexConfigurationProcessingFieldNameMapping {
    /**
     * The field name in the source
     */
    fromField: string;
    /**
     * The field name to use in the destination
     */
    toField: string;
}
export interface DestinationSnowflakeCortexConfigurationProcessingTextSplitter {
    /**
     * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
     */
    byMarkdownHeader?: outputs.DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeader;
    /**
     * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
     */
    byProgrammingLanguage?: outputs.DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguage;
    /**
     * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
     */
    bySeparator?: outputs.DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparator;
}
export interface DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeader {
    /**
     * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
     */
    splitLevel: number;
}
export interface DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguage {
    /**
     * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
     */
    language: string;
}
export interface DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparator {
    /**
     * Whether to keep the separator in the resulting chunks. Default: false
     */
    keepSeparator: boolean;
    /**
     * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
     */
    separators?: string[];
}
export interface DestinationTeradataConfiguration {
    /**
     * Hostname of the database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * Password associated with the username.
     */
    password?: string;
    /**
     * The default schema tables are written to if the source does not specify a namespace. The usual value for this field is "public". Default: "airbyte_td"
     */
    schema: string;
    /**
     * Encrypt data using SSL. When activating SSL, please select one of the connection modes. Default: false
     */
    ssl: boolean;
    /**
     * SSL connection modes.
     *  <b>disable</b> - Chose this mode to disable encryption of communication between Airbyte and destination database
     *  <b>allow</b> - Chose this mode to enable encryption only when required by the destination database
     *  <b>prefer</b> - Chose this mode to allow unencrypted connection only if the destination database does not support encryption
     *  <b>require</b> - Chose this mode to always require encryption. If the destination database server does not support encryption, connection will fail
     *   <b>verify-ca</b> - Chose this mode to always require encryption and to verify that the destination database server has a valid SSL certificate
     *   <b>verify-full</b> - This is the most secure mode. Chose this mode to always require encryption and to verify the identity of the destination database server
     *  See more information - <a href="https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#URL_SSLMODE"> in the docs</a>.
     */
    sslMode?: outputs.DestinationTeradataConfigurationSslMode;
    /**
     * Username to use to access the database.
     */
    username: string;
}
export interface DestinationTeradataConfigurationSslMode {
    /**
     * Allow SSL mode.
     */
    allow?: outputs.DestinationTeradataConfigurationSslModeAllow;
    /**
     * Disable SSL.
     */
    disable?: outputs.DestinationTeradataConfigurationSslModeDisable;
    /**
     * Prefer SSL mode.
     */
    prefer?: outputs.DestinationTeradataConfigurationSslModePrefer;
    /**
     * Require SSL mode.
     */
    require?: outputs.DestinationTeradataConfigurationSslModeRequire;
    /**
     * Verify-ca SSL mode.
     */
    verifyCa?: outputs.DestinationTeradataConfigurationSslModeVerifyCa;
    /**
     * Verify-full SSL mode.
     */
    verifyFull?: outputs.DestinationTeradataConfigurationSslModeVerifyFull;
}
export interface DestinationTeradataConfigurationSslModeAllow {
}
export interface DestinationTeradataConfigurationSslModeDisable {
}
export interface DestinationTeradataConfigurationSslModePrefer {
}
export interface DestinationTeradataConfigurationSslModeRequire {
}
export interface DestinationTeradataConfigurationSslModeVerifyCa {
    /**
     * Specifies the file name of a PEM file that contains Certificate Authority (CA) certificates for use with SSLMODE=verify-ca.
     *  See more information - <a href="https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#URL_SSLCA"> in the docs</a>.
     */
    sslCaCertificate: string;
}
export interface DestinationTeradataConfigurationSslModeVerifyFull {
    /**
     * Specifies the file name of a PEM file that contains Certificate Authority (CA) certificates for use with SSLMODE=verify-full.
     *  See more information - <a href="https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#URL_SSLCA"> in the docs</a>.
     */
    sslCaCertificate: string;
}
export interface DestinationTimeplusConfiguration {
    /**
     * Personal API key
     */
    apikey: string;
    /**
     * Timeplus workspace endpoint. Default: "https://us-west-2.timeplus.cloud/<workspace_id>"
     */
    endpoint: string;
}
export interface DestinationTypesenseConfiguration {
    /**
     * Typesense API Key
     */
    apiKey: string;
    /**
     * How many documents should be imported together. Default 1000
     */
    batchSize?: number;
    /**
     * Hostname of the Typesense instance without protocol. Accept multiple hosts separated by comma.
     */
    host: string;
    /**
     * Path of the Typesense instance. Default is none
     */
    path?: string;
    /**
     * Port of the Typesense instance. Ex: 8108, 80, 443. Default is 443
     */
    port?: string;
    /**
     * Protocol of the Typesense instance. Ex: http or https. Default is https
     */
    protocol?: string;
}
export interface DestinationVectaraConfiguration {
    /**
     * The Name of Corpus to load data into
     */
    corpusName: string;
    /**
     * Your customer id as it is in the authenticaion url
     */
    customerId: string;
    /**
     * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
     */
    metadataFields?: string[];
    /**
     * OAuth2.0 credentials used to authenticate admin actions (creating/deleting corpora)
     */
    oauth2: outputs.DestinationVectaraConfigurationOauth2;
    /**
     * Parallelize indexing into Vectara with multiple threads. Default: false
     */
    parallelize: boolean;
    /**
     * List of fields in the record that should be in the section of the document. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
     */
    textFields?: string[];
    /**
     * A field that will be used to populate the `title` of each document. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. Default: ""
     */
    titleField: string;
}
export interface DestinationVectaraConfigurationOauth2 {
    /**
     * OAuth2.0 client id
     */
    clientId: string;
    /**
     * OAuth2.0 client secret
     */
    clientSecret: string;
}
export interface DestinationWeaviateConfiguration {
    /**
     * Embedding configuration
     */
    embedding: outputs.DestinationWeaviateConfigurationEmbedding;
    /**
     * Indexing configuration
     */
    indexing: outputs.DestinationWeaviateConfigurationIndexing;
    /**
     * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
     */
    omitRawText: boolean;
    processing: outputs.DestinationWeaviateConfigurationProcessing;
}
export interface DestinationWeaviateConfigurationEmbedding {
    /**
     * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    azureOpenAi?: outputs.DestinationWeaviateConfigurationEmbeddingAzureOpenAi;
    /**
     * Use the Cohere API to embed text.
     */
    cohere?: outputs.DestinationWeaviateConfigurationEmbeddingCohere;
    /**
     * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
     */
    fake?: outputs.DestinationWeaviateConfigurationEmbeddingFake;
    /**
     * Use a field in the record as the embedding. This is useful if you already have an embedding for your data and want to store it in the vector store.
     */
    fromField?: outputs.DestinationWeaviateConfigurationEmbeddingFromField;
    /**
     * Do not calculate and pass embeddings to Weaviate. Suitable for clusters with configured vectorizers to calculate embeddings within Weaviate or for classes that should only support regular text search.
     */
    noExternalEmbedding?: outputs.DestinationWeaviateConfigurationEmbeddingNoExternalEmbedding;
    /**
     * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
     */
    openAi?: outputs.DestinationWeaviateConfigurationEmbeddingOpenAi;
    /**
     * Use a service that's compatible with the OpenAI API to embed text.
     */
    openAiCompatible?: outputs.DestinationWeaviateConfigurationEmbeddingOpenAiCompatible;
}
export interface DestinationWeaviateConfigurationEmbeddingAzureOpenAi {
    /**
     * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    apiBase: string;
    /**
     * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    deployment: string;
    /**
     * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
     */
    openaiKey: string;
}
export interface DestinationWeaviateConfigurationEmbeddingCohere {
    cohereKey: string;
}
export interface DestinationWeaviateConfigurationEmbeddingFake {
}
export interface DestinationWeaviateConfigurationEmbeddingFromField {
    /**
     * The number of dimensions the embedding model is generating
     */
    dimensions: number;
    /**
     * Name of the field in the record that contains the embedding
     */
    fieldName: string;
}
export interface DestinationWeaviateConfigurationEmbeddingNoExternalEmbedding {
}
export interface DestinationWeaviateConfigurationEmbeddingOpenAi {
    openaiKey: string;
}
export interface DestinationWeaviateConfigurationEmbeddingOpenAiCompatible {
    /**
     * Default: ""
     */
    apiKey: string;
    /**
     * The base URL for your OpenAI-compatible service
     */
    baseUrl: string;
    /**
     * The number of dimensions the embedding model is generating
     */
    dimensions: number;
    /**
     * The name of the model to use for embedding. Default: "text-embedding-ada-002"
     */
    modelName: string;
}
export interface DestinationWeaviateConfigurationIndexing {
    /**
     * Additional HTTP headers to send with every request.
     */
    additionalHeaders?: outputs.DestinationWeaviateConfigurationIndexingAdditionalHeader[];
    /**
     * Authentication method
     */
    auth: outputs.DestinationWeaviateConfigurationIndexingAuth;
    /**
     * The number of records to send to Weaviate in each batch. Default: 128
     */
    batchSize: number;
    /**
     * The vectorizer to use if new classes need to be created. must be one of ["none", "text2vec-cohere", "text2vec-huggingface", "text2vec-openai", "text2vec-palm", "text2vec-contextionary", "text2vec-transformers", "text2vec-gpt4all"]; Default: "none"
     */
    defaultVectorizer: string;
    /**
     * The public endpoint of the Weaviate cluster.
     */
    host: string;
    /**
     * The tenant ID to use for multi tenancy. Default: ""
     */
    tenantId: string;
    /**
     * The field in the object that contains the embedded text. Default: "text"
     */
    textField: string;
}
export interface DestinationWeaviateConfigurationIndexingAdditionalHeader {
    headerKey: string;
    value: string;
}
export interface DestinationWeaviateConfigurationIndexingAuth {
    /**
     * Authenticate using an API token (suitable for Weaviate Cloud)
     */
    apiToken?: outputs.DestinationWeaviateConfigurationIndexingAuthApiToken;
    /**
     * Do not authenticate (suitable for locally running test clusters, do not use for clusters with public IP addresses)
     */
    noAuthentication?: outputs.DestinationWeaviateConfigurationIndexingAuthNoAuthentication;
    /**
     * Authenticate using username and password (suitable for self-managed Weaviate clusters)
     */
    usernamePassword?: outputs.DestinationWeaviateConfigurationIndexingAuthUsernamePassword;
}
export interface DestinationWeaviateConfigurationIndexingAuthApiToken {
    /**
     * API Token for the Weaviate instance
     */
    token: string;
}
export interface DestinationWeaviateConfigurationIndexingAuthNoAuthentication {
}
export interface DestinationWeaviateConfigurationIndexingAuthUsernamePassword {
    /**
     * Password for the Weaviate cluster
     */
    password: string;
    /**
     * Username for the Weaviate cluster
     */
    username: string;
}
export interface DestinationWeaviateConfigurationProcessing {
    /**
     * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
     */
    chunkOverlap: number;
    /**
     * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
     */
    chunkSize: number;
    /**
     * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
     */
    fieldNameMappings?: outputs.DestinationWeaviateConfigurationProcessingFieldNameMapping[];
    /**
     * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
     */
    metadataFields?: string[];
    /**
     * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
     */
    textFields?: string[];
    /**
     * Split text fields into chunks based on the specified method.
     */
    textSplitter?: outputs.DestinationWeaviateConfigurationProcessingTextSplitter;
}
export interface DestinationWeaviateConfigurationProcessingFieldNameMapping {
    /**
     * The field name in the source
     */
    fromField: string;
    /**
     * The field name to use in the destination
     */
    toField: string;
}
export interface DestinationWeaviateConfigurationProcessingTextSplitter {
    /**
     * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
     */
    byMarkdownHeader?: outputs.DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeader;
    /**
     * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
     */
    byProgrammingLanguage?: outputs.DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguage;
    /**
     * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
     */
    bySeparator?: outputs.DestinationWeaviateConfigurationProcessingTextSplitterBySeparator;
}
export interface DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeader {
    /**
     * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
     */
    splitLevel: number;
}
export interface DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguage {
    /**
     * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
     */
    language: string;
}
export interface DestinationWeaviateConfigurationProcessingTextSplitterBySeparator {
    /**
     * Whether to keep the separator in the resulting chunks. Default: false
     */
    keepSeparator: boolean;
    /**
     * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
     */
    separators?: string[];
}
export interface DestinationYellowbrickConfiguration {
    /**
     * Name of the database.
     */
    database: string;
    /**
     * Hostname of the database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * Password associated with the username.
     */
    password?: string;
    /**
     * Port of the database. Default: 5432
     */
    port: number;
    /**
     * The default schema tables are written to if the source does not specify a namespace. The usual value for this field is "public". Default: "public"
     */
    schema: string;
    /**
     * Encrypt data using SSL. When activating SSL, please select one of the connection modes. Default: false
     */
    ssl: boolean;
    /**
     * SSL connection modes.
     *  <b>disable</b> - Chose this mode to disable encryption of communication between Airbyte and destination database
     *  <b>allow</b> - Chose this mode to enable encryption only when required by the source database
     *  <b>prefer</b> - Chose this mode to allow unencrypted connection only if the source database does not support encryption
     *  <b>require</b> - Chose this mode to always require encryption. If the source database server does not support encryption, connection will fail
     *   <b>verify-ca</b> - Chose this mode to always require encryption and to verify that the source database server has a valid SSL certificate
     *   <b>verify-full</b> - This is the most secure mode. Chose this mode to always require encryption and to verify the identity of the source database server
     *  See more information - <a href="https://jdbc.postgresql.org/documentation/head/ssl-client.html"> in the docs</a>.
     */
    sslMode?: outputs.DestinationYellowbrickConfigurationSslMode;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.DestinationYellowbrickConfigurationTunnelMethod;
    /**
     * Username to use to access the database.
     */
    username: string;
}
export interface DestinationYellowbrickConfigurationSslMode {
    /**
     * Allow SSL mode.
     */
    allow?: outputs.DestinationYellowbrickConfigurationSslModeAllow;
    /**
     * Disable SSL.
     */
    disable?: outputs.DestinationYellowbrickConfigurationSslModeDisable;
    /**
     * Prefer SSL mode.
     */
    prefer?: outputs.DestinationYellowbrickConfigurationSslModePrefer;
    /**
     * Require SSL mode.
     */
    require?: outputs.DestinationYellowbrickConfigurationSslModeRequire;
    /**
     * Verify-ca SSL mode.
     */
    verifyCa?: outputs.DestinationYellowbrickConfigurationSslModeVerifyCa;
    /**
     * Verify-full SSL mode.
     */
    verifyFull?: outputs.DestinationYellowbrickConfigurationSslModeVerifyFull;
}
export interface DestinationYellowbrickConfigurationSslModeAllow {
}
export interface DestinationYellowbrickConfigurationSslModeDisable {
}
export interface DestinationYellowbrickConfigurationSslModePrefer {
}
export interface DestinationYellowbrickConfigurationSslModeRequire {
}
export interface DestinationYellowbrickConfigurationSslModeVerifyCa {
    /**
     * CA certificate
     */
    caCertificate: string;
    /**
     * Password for keystorage. This field is optional. If you do not add it - the password will be generated automatically.
     */
    clientKeyPassword?: string;
}
export interface DestinationYellowbrickConfigurationSslModeVerifyFull {
    /**
     * CA certificate
     */
    caCertificate: string;
    /**
     * Client certificate
     */
    clientCertificate: string;
    /**
     * Client key
     */
    clientKey: string;
    /**
     * Password for keystorage. This field is optional. If you do not add it - the password will be generated automatically.
     */
    clientKeyPassword?: string;
}
export interface DestinationYellowbrickConfigurationTunnelMethod {
    noTunnel?: outputs.DestinationYellowbrickConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.DestinationYellowbrickConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthentication;
}
export interface DestinationYellowbrickConfigurationTunnelMethodNoTunnel {
}
export interface DestinationYellowbrickConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface GetConnectionConfigurations {
    streams: outputs.GetConnectionConfigurationsStream[];
}
export interface GetConnectionConfigurationsStream {
    /**
     * Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if `sync_mode` is `incremental` unless there is a default.
     */
    cursorFields: string[];
    name: string;
    /**
     * Paths to the fields that will be used as primary key. This field is REQUIRED if `destination_sync_mode` is `*_dedup` unless it is already supplied by the source schema.
     */
    primaryKeys: string[][];
    /**
     * Paths to the fields that will be included in the configured catalog.
     */
    selectedFields: outputs.GetConnectionConfigurationsStreamSelectedField[];
    /**
     * must be one of ["full_refresh_overwrite", "full_refresh_append", "incremental_append", "incremental_deduped_history"]
     */
    syncMode: string;
}
export interface GetConnectionConfigurationsStreamSelectedField {
    fieldPaths: string[];
}
export interface GetConnectionSchedule {
    basicTiming: string;
    cronExpression: string;
    /**
     * must be one of ["manual", "cron", "basic"]
     */
    scheduleType: string;
}
export interface Source7shiftsConfiguration {
    /**
     * Access token to use for authentication. Generate it in the 7shifts Developer Tools.
     */
    accessToken: string;
    startDate: string;
}
export interface SourceAhaConfiguration {
    /**
     * API Key
     */
    apiKey: string;
    /**
     * URL
     */
    url: string;
}
export interface SourceAirbyteConfiguration {
    clientId: string;
    clientSecret: string;
    startDate: string;
}
export interface SourceAircallConfiguration {
    /**
     * App ID found at settings https://dashboard.aircall.io/integrations/api-keys
     */
    apiId: string;
    /**
     * App token found at settings (Ref- https://dashboard.aircall.io/integrations/api-keys)
     */
    apiToken: string;
    /**
     * Date time filter for incremental filter, Specify which date to extract from.
     */
    startDate: string;
}
export interface SourceAirtableConfiguration {
    credentials?: outputs.SourceAirtableConfigurationCredentials;
}
export interface SourceAirtableConfigurationCredentials {
    oAuth20?: outputs.SourceAirtableConfigurationCredentialsOAuth20;
    personalAccessToken?: outputs.SourceAirtableConfigurationCredentialsPersonalAccessToken;
}
export interface SourceAirtableConfigurationCredentialsOAuth20 {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken?: string;
    /**
     * The client ID of the Airtable developer application.
     */
    clientId: string;
    /**
     * The client secret the Airtable developer application.
     */
    clientSecret: string;
    /**
     * The key to refresh the expired access token.
     */
    refreshToken: string;
    /**
     * The date-time when the access token should be refreshed.
     */
    tokenExpiryDate?: string;
}
export interface SourceAirtableConfigurationCredentialsPersonalAccessToken {
    /**
     * The Personal Access Token for the Airtable account. See the <a href="https://airtable.com/developers/web/guides/personal-access-tokens">Support Guide</a> for more information on how to obtain this token.
     */
    apiKey: string;
}
export interface SourceAmazonAdsConfiguration {
    /**
     * The client ID of your Amazon Ads developer application. See the <a href="https://advertising.amazon.com/API/docs/en-us/get-started/generate-api-tokens#retrieve-your-client-id-and-client-secret">docs</a> for more information.
     */
    clientId: string;
    /**
     * The client secret of your Amazon Ads developer application. See the <a href="https://advertising.amazon.com/API/docs/en-us/get-started/generate-api-tokens#retrieve-your-client-id-and-client-secret">docs</a> for more information.
     */
    clientSecret: string;
    /**
     * The amount of days to go back in time to get the updated data from Amazon Ads. Default: 3
     */
    lookBackWindow: number;
    /**
     * Marketplace IDs you want to fetch data for. Note: If Profile IDs are also selected, profiles will be selected if they match the Profile ID OR the Marketplace ID.
     */
    marketplaceIds?: string[];
    /**
     * Profile IDs you want to fetch data for. The Amazon Ads source connector supports only profiles with seller and vendor type, profiles with agency type will be ignored. See <a href="https://advertising.amazon.com/API/docs/en-us/concepts/authorization/profiles">docs</a> for more details. Note: If Marketplace IDs are also selected, profiles will be selected if they match the Profile ID OR the Marketplace ID.
     */
    profiles?: number[];
    /**
     * Amazon Ads refresh token. See the <a href="https://advertising.amazon.com/API/docs/en-us/get-started/generate-api-tokens">docs</a> for more information on how to obtain this token.
     */
    refreshToken: string;
    /**
     * Region to pull data from (EU/NA/FE). See <a href="https://advertising.amazon.com/API/docs/en-us/info/api-overview#api-endpoints">docs</a> for more details. must be one of ["NA", "EU", "FE"]; Default: "NA"
     */
    region: string;
    /**
     * Optional configuration which accepts an array of string of record types. Leave blank for default behaviour to pull all report types. Use this config option only if you want to pull specific report type(s). See <a href="https://advertising.amazon.com/API/docs/en-us/reporting/v2/report-types">docs</a> for more details
     */
    reportRecordTypes?: string[];
    /**
     * The Start date for collecting reports, should not be more than 60 days in the past. In YYYY-MM-DD format
     */
    startDate?: string;
    /**
     * Reflects the state of the Display, Product, and Brand Campaign streams as enabled, paused, or archived. If you do not populate this field, it will be ignored completely.
     */
    stateFilters?: string[];
}
export interface SourceAmazonSellerPartnerConfiguration {
    /**
     * Type of the Account you're going to authorize the Airbyte application by. must be one of ["Seller", "Vendor"]; Default: "Seller"
     */
    accountType: string;
    /**
     * Select the AWS Environment. must be one of ["PRODUCTION", "SANDBOX"]; Default: "PRODUCTION"
     */
    awsEnvironment: string;
    /**
     * Your Login with Amazon Client ID.
     */
    lwaAppId: string;
    /**
     * Your Login with Amazon Client Secret.
     */
    lwaClientSecret: string;
    /**
     * For syncs spanning a large date range, this option is used to request data in a smaller fixed window to improve sync reliability. This time window can be configured granularly by day. Default: 90
     */
    periodInDays: number;
    /**
     * The Refresh Token obtained via OAuth flow authorization.
     */
    refreshToken: string;
    /**
     * Select the AWS Region. must be one of ["AE", "AU", "BE", "BR", "CA", "DE", "EG", "ES", "FR", "GB", "IN", "IT", "JP", "MX", "NL", "PL", "SA", "SE", "SG", "TR", "UK", "US"]; Default: "US"
     */
    region: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data after this date will not be replicated.
     */
    replicationEndDate?: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. If start date is not provided or older than 2 years ago from today, the date 2 years ago from today will be used.
     */
    replicationStartDate?: string;
    /**
     * Additional information passed to reports. This varies by report type.
     */
    reportOptionsLists?: outputs.SourceAmazonSellerPartnerConfigurationReportOptionsList[];
    /**
     * For report based streams with known amount of requests per time period, this option will use waiting time between requests to avoid fatal statuses in reports. See <a href="https://docs.airbyte.com/integrations/sources/amazon-seller-partner#limitations--troubleshooting" target="_blank">Troubleshooting</a> section for more details. Default: false
     */
    waitToAvoidFatalErrors: boolean;
}
export interface SourceAmazonSellerPartnerConfigurationReportOptionsList {
    /**
     * List of options
     */
    optionsLists: outputs.SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsList[];
    /**
     * must be one of ["GET_AFN_INVENTORY_DATA", "GET_AFN_INVENTORY_DATA_BY_COUNTRY", "GET_AMAZON_FULFILLED_SHIPMENTS_DATA_GENERAL", "GET_FBA_ESTIMATED_FBA_FEES_TXT_DATA", "GET_FBA_FULFILLMENT_CUSTOMER_RETURNS_DATA", "GET_FBA_FULFILLMENT_CUSTOMER_SHIPMENT_PROMOTION_DATA", "GET_FBA_FULFILLMENT_CUSTOMER_SHIPMENT_REPLACEMENT_DATA", "GET_FBA_FULFILLMENT_REMOVAL_ORDER_DETAIL_DATA", "GET_FBA_FULFILLMENT_REMOVAL_SHIPMENT_DETAIL_DATA", "GET_FBA_INVENTORY_PLANNING_DATA", "GET_FBA_MYI_UNSUPPRESSED_INVENTORY_DATA", "GET_FBA_REIMBURSEMENTS_DATA", "GET_FBA_SNS_FORECAST_DATA", "GET_FBA_SNS_PERFORMANCE_DATA", "GET_FBA_STORAGE_FEE_CHARGES_DATA", "GET_FLAT_FILE_ACTIONABLE_ORDER_DATA_SHIPPING", "GET_FLAT_FILE_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL", "GET_FLAT_FILE_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL", "GET_FLAT_FILE_ARCHIVED_ORDERS_DATA_BY_ORDER_DATE", "GET_FLAT_FILE_OPEN_LISTINGS_DATA", "GET_FLAT_FILE_RETURNS_DATA_BY_RETURN_DATE", "GET_LEDGER_DETAIL_VIEW_DATA", "GET_LEDGER_SUMMARY_VIEW_DATA", "GET_MERCHANT_CANCELLED_LISTINGS_DATA", "GET_MERCHANT_LISTINGS_ALL_DATA", "GET_MERCHANT_LISTINGS_DATA", "GET_MERCHANT_LISTINGS_DATA_BACK_COMPAT", "GET_MERCHANT_LISTINGS_INACTIVE_DATA", "GET_MERCHANTS_LISTINGS_FYP_REPORT", "GET_ORDER_REPORT_DATA_SHIPPING", "GET_RESTOCK_INVENTORY_RECOMMENDATIONS_REPORT", "GET_SELLER_FEEDBACK_DATA", "GET_STRANDED_INVENTORY_UI_DATA", "GET_V2_SETTLEMENT_REPORT_DATA_FLAT_FILE", "GET_XML_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL", "GET_XML_BROWSE_TREE_DATA", "GET_VENDOR_REAL_TIME_INVENTORY_REPORT", "GET_BRAND_ANALYTICS_MARKET_BASKET_REPORT", "GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT", "GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT", "GET_SALES_AND_TRAFFIC_REPORT", "GET_VENDOR_SALES_REPORT", "GET_VENDOR_INVENTORY_REPORT", "GET_VENDOR_NET_PURE_PRODUCT_MARGIN_REPORT", "GET_VENDOR_TRAFFIC_REPORT"]
     */
    reportName: string;
    streamName: string;
}
export interface SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsList {
    optionName: string;
    optionValue: string;
}
export interface SourceAmazonSqsConfiguration {
    /**
     * The Access Key ID of the AWS IAM Role to use for pulling messages
     */
    accessKey?: string;
    /**
     * Comma separated list of Mesage Attribute names to return
     */
    attributesToReturn?: string;
    /**
     * If Enabled, messages will be deleted from the SQS Queue after being read. If Disabled, messages are left in the queue and can be read more than once. WARNING: Enabling this option can result in data loss in cases of failure, use with caution, see documentation for more detail. . Default: false
     */
    deleteMessages: boolean;
    /**
     * Max amount of messages to get in one batch (10 max)
     */
    maxBatchSize?: number;
    /**
     * Max amount of time in seconds to wait for messages in a single poll (20 max)
     */
    maxWaitTime?: number;
    /**
     * URL of the SQS Queue
     */
    queueUrl: string;
    /**
     * AWS Region of the SQS Queue. must be one of ["af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1", "us-west-2"]
     */
    region: string;
    /**
     * The Secret Key of the AWS IAM Role to use for pulling messages
     */
    secretKey?: string;
    /**
     * Modify the Visibility Timeout of the individual message from the Queue's default (seconds).
     */
    visibilityTimeout?: number;
}
export interface SourceAmplitudeConfiguration {
    /**
     * Amplitude API Key. See the <a href="https://docs.airbyte.com/integrations/sources/amplitude#setup-guide">setup guide</a> for more information on how to obtain this key.
     */
    apiKey: string;
    /**
     * Amplitude data region server. must be one of ["Standard Server", "EU Residency Server"]; Default: "Standard Server"
     */
    dataRegion: string;
    /**
     * According to <a href="https://www.docs.developers.amplitude.com/analytics/apis/export-api/#considerations">Considerations</a> too big time range in request can cause a timeout error. In this case, set shorter time interval in hours. Default: 24
     */
    requestTimeRange: number;
    /**
     * Amplitude Secret Key. See the <a href="https://docs.airbyte.com/integrations/sources/amplitude#setup-guide">setup guide</a> for more information on how to obtain this key.
     */
    secretKey: string;
    /**
     * UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceApifyDatasetConfiguration {
    /**
     * ID of the dataset you would like to load to Airbyte. In Apify Console, you can view your datasets in the <a href="https://console.apify.com/storage/datasets">Storage section under the Datasets tab</a> after you login. See the <a href="https://docs.apify.com/platform/storage/dataset">Apify Docs</a> for more information.
     */
    datasetId: string;
    /**
     * Personal API token of your Apify account. In Apify Console, you can find your API token in the <a href="https://console.apify.com/account/integrations">Settings section under the Integrations tab</a> after you login. See the <a href="https://docs.apify.com/platform/integrations/api#api-token">Apify Docs</a> for more information.
     */
    token: string;
}
export interface SourceAppcuesConfiguration {
    /**
     * Account ID of Appcues found in account settings page (https://studio.appcues.com/settings/account)
     */
    accountId: string;
    password?: string;
    startDate: string;
    username: string;
}
export interface SourceAppfiguresConfiguration {
    apiKey: string;
    /**
     * Category term for grouping the search results. must be one of ["network", "product", "country", "date"]; Default: "product"
     */
    groupBy: string;
    /**
     * The store which needs to be searched in streams. Default: "apple"
     */
    searchStore: string;
    startDate: string;
}
export interface SourceAppfollowConfiguration {
    /**
     * API Key provided by Appfollow
     */
    apiSecret?: string;
}
export interface SourceAsanaConfiguration {
    /**
     * Choose how to authenticate to Github
     */
    credentials?: outputs.SourceAsanaConfigurationCredentials;
    /**
     * Globally unique identifiers for the organization exports
     */
    organizationExportIds?: string[];
}
export interface SourceAsanaConfigurationCredentials {
    authenticateViaAsanaOauth?: outputs.SourceAsanaConfigurationCredentialsAuthenticateViaAsanaOauth;
    authenticateWithPersonalAccessToken?: outputs.SourceAsanaConfigurationCredentialsAuthenticateWithPersonalAccessToken;
}
export interface SourceAsanaConfigurationCredentialsAuthenticateViaAsanaOauth {
    clientId: string;
    clientSecret: string;
    refreshToken: string;
}
export interface SourceAsanaConfigurationCredentialsAuthenticateWithPersonalAccessToken {
    /**
     * Asana Personal Access Token (generate yours <a href="https://app.asana.com/0/developer-console">here</a>).
     */
    personalAccessToken: string;
}
export interface SourceAuth0Configuration {
    /**
     * The Authentication API is served over HTTPS. All URLs referenced in the documentation have the following base `https://YOUR_DOMAIN`
     */
    baseUrl: string;
    credentials: outputs.SourceAuth0ConfigurationCredentials;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. Default: "2023-08-05T00:43:59.244Z"
     */
    startDate: string;
}
export interface SourceAuth0ConfigurationCredentials {
    oAuth2AccessToken?: outputs.SourceAuth0ConfigurationCredentialsOAuth2AccessToken;
    oAuth2ConfidentialApplication?: outputs.SourceAuth0ConfigurationCredentialsOAuth2ConfidentialApplication;
}
export interface SourceAuth0ConfigurationCredentialsOAuth2AccessToken {
    /**
     * Also called <a href="https://auth0.com/docs/secure/tokens/access-tokens/get-management-api-access-tokens-for-testing">API Access Token </a> The access token used to call the Auth0 Management API Token. It's a JWT that contains specific grant permissions knowns as scopes.
     */
    accessToken: string;
}
export interface SourceAuth0ConfigurationCredentialsOAuth2ConfidentialApplication {
    /**
     * The audience for the token, which is your API. You can find this in the Identifier field on your  <a href="https://manage.auth0.com/#/apis">API's settings tab</a>
     */
    audience: string;
    /**
     * Your application's Client ID. You can find this value on the <a href="https://manage.auth0.com/#/applications">application's settings tab</a> after you login the admin portal.
     */
    clientId: string;
    /**
     * Your application's Client Secret. You can find this value on the <a href="https://manage.auth0.com/#/applications">application's settings tab</a> after you login the admin portal.
     */
    clientSecret: string;
}
export interface SourceAwsCloudtrailConfiguration {
    /**
     * AWS CloudTrail Access Key ID. See the <a href="https://docs.airbyte.com/integrations/sources/aws-cloudtrail">docs</a> for more information on how to obtain this key.
     */
    awsKeyId: string;
    /**
     * The default AWS Region to use, for example, us-west-1 or us-west-2. When specifying a Region inline during client initialization, this property is named region_name. Default: "us-east-1"
     */
    awsRegionName: string;
    /**
     * AWS CloudTrail Access Key ID. See the <a href="https://docs.airbyte.com/integrations/sources/aws-cloudtrail">docs</a> for more information on how to obtain this key.
     */
    awsSecretKey: string;
    lookupAttributesFilter?: outputs.SourceAwsCloudtrailConfigurationLookupAttributesFilter;
    /**
     * The date you would like to replicate data. Data in AWS CloudTrail is available for last 90 days only. Format: YYYY-MM-DD.
     */
    startDate?: string;
}
export interface SourceAwsCloudtrailConfigurationLookupAttributesFilter {
    /**
     * Default: "EventName"
     */
    attributeKey: string;
    /**
     * Default: "ListInstanceAssociations"
     */
    attributeValue: string;
}
export interface SourceAzureBlobStorageConfiguration {
    /**
     * The account's name of the Azure Blob Storage.
     */
    azureBlobStorageAccountName: string;
    /**
     * The name of the Azure blob storage container.
     */
    azureBlobStorageContainerName: string;
    /**
     * This is Azure Blob Storage endpoint domain name. Leave default value (or leave it empty if run container from command line) to use Microsoft native from example.
     */
    azureBlobStorageEndpoint?: string;
    /**
     * Credentials for connecting to the Azure Blob Storage
     */
    credentials: outputs.SourceAzureBlobStorageConfigurationCredentials;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
     */
    startDate?: string;
    /**
     * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
     */
    streams: outputs.SourceAzureBlobStorageConfigurationStream[];
}
export interface SourceAzureBlobStorageConfigurationCredentials {
    authenticateViaOauth2?: outputs.SourceAzureBlobStorageConfigurationCredentialsAuthenticateViaOauth2;
    authenticateViaStorageAccountKey?: outputs.SourceAzureBlobStorageConfigurationCredentialsAuthenticateViaStorageAccountKey;
}
export interface SourceAzureBlobStorageConfigurationCredentialsAuthenticateViaOauth2 {
    /**
     * Client ID of your Microsoft developer application
     */
    clientId: string;
    /**
     * Client Secret of your Microsoft developer application
     */
    clientSecret: string;
    /**
     * Refresh Token of your Microsoft developer application
     */
    refreshToken: string;
    /**
     * Tenant ID of the Microsoft Azure Application user
     */
    tenantId: string;
}
export interface SourceAzureBlobStorageConfigurationCredentialsAuthenticateViaStorageAccountKey {
    /**
     * The Azure blob storage account key.
     */
    azureBlobStorageAccountKey: string;
}
export interface SourceAzureBlobStorageConfigurationStream {
    /**
     * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
     */
    daysToSyncIfHistoryIsFull: number;
    /**
     * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
     */
    format: outputs.SourceAzureBlobStorageConfigurationStreamFormat;
    /**
     * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
     */
    globs?: string[];
    /**
     * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
     */
    inputSchema?: string;
    /**
     * The name of the stream.
     */
    name: string;
    /**
     * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
     */
    schemaless: boolean;
    /**
     * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. must be one of ["Emit Record", "Skip Record", "Wait for Discover"]; Default: "Emit Record"
     */
    validationPolicy: string;
}
export interface SourceAzureBlobStorageConfigurationStreamFormat {
    avroFormat?: outputs.SourceAzureBlobStorageConfigurationStreamFormatAvroFormat;
    csvFormat?: outputs.SourceAzureBlobStorageConfigurationStreamFormatCsvFormat;
    /**
     * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
     */
    documentFileTypeFormatExperimental?: outputs.SourceAzureBlobStorageConfigurationStreamFormatDocumentFileTypeFormatExperimental;
    jsonlFormat?: outputs.SourceAzureBlobStorageConfigurationStreamFormatJsonlFormat;
    parquetFormat?: outputs.SourceAzureBlobStorageConfigurationStreamFormatParquetFormat;
}
export interface SourceAzureBlobStorageConfigurationStreamFormatAvroFormat {
    /**
     * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
     */
    doubleAsString: boolean;
}
export interface SourceAzureBlobStorageConfigurationStreamFormatCsvFormat {
    /**
     * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
     */
    delimiter: string;
    /**
     * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
     */
    doubleQuote: boolean;
    /**
     * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
     */
    encoding: string;
    /**
     * The character used for escaping special characters. To disallow escaping, leave this field blank.
     */
    escapeChar?: string;
    /**
     * A set of case-sensitive strings that should be interpreted as false values.
     */
    falseValues?: string[];
    /**
     * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
     */
    headerDefinition?: outputs.SourceAzureBlobStorageConfigurationStreamFormatCsvFormatHeaderDefinition;
    /**
     * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
     */
    ignoreErrorsOnFieldsMismatch: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
     */
    nullValues?: string[];
    /**
     * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
     */
    quoteChar: string;
    /**
     * The number of rows to skip after the header row. Default: 0
     */
    skipRowsAfterHeader: number;
    /**
     * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
     */
    skipRowsBeforeHeader: number;
    /**
     * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
     */
    stringsCanBeNull: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as true values.
     */
    trueValues?: string[];
}
export interface SourceAzureBlobStorageConfigurationStreamFormatCsvFormatHeaderDefinition {
    autogenerated?: outputs.SourceAzureBlobStorageConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated;
    fromCsv?: outputs.SourceAzureBlobStorageConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv;
    userProvided?: outputs.SourceAzureBlobStorageConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided;
}
export interface SourceAzureBlobStorageConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated {
}
export interface SourceAzureBlobStorageConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv {
}
export interface SourceAzureBlobStorageConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided {
    /**
     * The column names that will be used while emitting the CSV records
     */
    columnNames: string[];
}
export interface SourceAzureBlobStorageConfigurationStreamFormatDocumentFileTypeFormatExperimental {
    /**
     * Processing configuration
     */
    processing?: outputs.SourceAzureBlobStorageConfigurationStreamFormatDocumentFileTypeFormatExperimentalProcessing;
    /**
     * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
     */
    skipUnprocessableFiles: boolean;
    /**
     * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. must be one of ["auto", "fast", "ocr_only", "hi_res"]; Default: "auto"
     */
    strategy: string;
}
export interface SourceAzureBlobStorageConfigurationStreamFormatDocumentFileTypeFormatExperimentalProcessing {
    /**
     * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
     */
    local?: outputs.SourceAzureBlobStorageConfigurationStreamFormatDocumentFileTypeFormatExperimentalProcessingLocal;
}
export interface SourceAzureBlobStorageConfigurationStreamFormatDocumentFileTypeFormatExperimentalProcessingLocal {
}
export interface SourceAzureBlobStorageConfigurationStreamFormatJsonlFormat {
}
export interface SourceAzureBlobStorageConfigurationStreamFormatParquetFormat {
    /**
     * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
     */
    decimalAsFloat: boolean;
}
export interface SourceAzureTableConfiguration {
    /**
     * Azure Table Storage Access Key. See the <a href="https://docs.airbyte.com/integrations/sources/azure-table">docs</a> for more information on how to obtain this key.
     */
    storageAccessKey: string;
    /**
     * The name of your storage account.
     */
    storageAccountName: string;
    /**
     * Azure Table Storage service account URL suffix. See the <a href="https://docs.airbyte.com/integrations/sources/azure-table">docs</a> for more information on how to obtain endpoint suffix. Default: "core.windows.net"
     */
    storageEndpointSuffix: string;
}
export interface SourceBambooHrConfiguration {
    /**
     * Api key of bamboo hr
     */
    apiKey: string;
    /**
     * Comma-separated list of fields to include in custom reports.
     */
    customReportsFields?: string;
    /**
     * If true, the custom reports endpoint will include the default fields defined here: https://documentation.bamboohr.com/docs/list-of-field-names. Default: true
     */
    customReportsIncludeDefaultFields: boolean;
    startDate?: string;
    /**
     * Sub Domain of bamboo hr
     */
    subdomain: string;
}
export interface SourceBasecampConfiguration {
    accountId: number;
    clientId: string;
    clientRefreshToken2: string;
    clientSecret: string;
    startDate: string;
}
export interface SourceBigqueryConfiguration {
    /**
     * The contents of your Service Account Key JSON file. See the <a href="https://docs.airbyte.com/integrations/sources/bigquery#setup-the-bigquery-source-in-airbyte">docs</a> for more information on how to obtain this key.
     */
    credentialsJson: string;
    /**
     * The dataset ID to search for tables and views. If you are only loading data from one dataset, setting this option could result in much faster schema discovery.
     */
    datasetId?: string;
    /**
     * The GCP project ID for the project containing the target BigQuery dataset.
     */
    projectId: string;
}
export interface SourceBingAdsConfiguration {
    /**
     * Predicates that will be used to sync data by specific accounts.
     */
    accountNames?: outputs.SourceBingAdsConfigurationAccountName[];
    /**
     * The Client ID of your Microsoft Advertising developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Microsoft Advertising developer application. Default: ""
     */
    clientSecret: string;
    /**
     * You can add your Custom Bing Ads report by creating one.
     */
    customReports?: outputs.SourceBingAdsConfigurationCustomReport[];
    /**
     * Developer token associated with user. See more info <a href="https://docs.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#get-developer-token"> in the docs</a>.
     */
    developerToken: string;
    /**
     * Also known as attribution or conversion window. How far into the past to look for records (in days). If your conversion window has an hours/minutes granularity, round it up to the number of days exceeding. Used only for performance report streams in incremental mode without specified Reports Start Date. Default: 0
     */
    lookbackWindow: number;
    /**
     * Refresh Token to renew the expired Access Token.
     */
    refreshToken: string;
    /**
     * The start date from which to begin replicating report data. Any data generated before this date will not be replicated in reports. This is a UTC date in YYYY-MM-DD format. If not set, data from previous and current calendar year will be replicated.
     */
    reportsStartDate?: string;
    /**
     * The Tenant ID of your Microsoft Advertising developer application. Set this to "common" unless you know you need a different value. Default: "common"
     */
    tenantId: string;
}
export interface SourceBingAdsConfigurationAccountName {
    /**
     * Account Name is a string value for comparing with the specified predicate.
     */
    name: string;
    /**
     * An Operator that will be used to filter accounts. The Contains predicate has features for matching words, matching inflectional forms of words, searching using wildcard characters, and searching using proximity. The Equals is used to return all rows where account name is equal(=) to the string that you provided. must be one of ["Contains", "Equals"]
     */
    operator: string;
}
export interface SourceBingAdsConfigurationCustomReport {
    /**
     * The name of the custom report, this name would be used as stream name
     */
    name: string;
    /**
     * A list of available aggregations. Default: "[Hourly]"
     */
    reportAggregation: string;
    /**
     * A list of available report object columns. You can find it in description of reporting object that you want to add to custom report.
     */
    reportColumns: string[];
    /**
     * The name of the the object derives from the ReportRequest object. You can find it in Bing Ads Api docs - Reporting API - Reporting Data Objects. must be one of ["AccountPerformanceReportRequest", "AdDynamicTextPerformanceReportRequest", "AdExtensionByAdReportRequest", "AdExtensionByKeywordReportRequest", "AdExtensionDetailReportRequest", "AdGroupPerformanceReportRequest", "AdPerformanceReportRequest", "AgeGenderAudienceReportRequest", "AudiencePerformanceReportRequest", "CallDetailReportRequest", "CampaignPerformanceReportRequest", "ConversionPerformanceReportRequest", "DestinationUrlPerformanceReportRequest", "DSAAutoTargetPerformanceReportRequest", "DSACategoryPerformanceReportRequest", "DSASearchQueryPerformanceReportRequest", "GeographicPerformanceReportRequest", "GoalsAndFunnelsReportRequest", "HotelDimensionPerformanceReportRequest", "HotelGroupPerformanceReportRequest", "KeywordPerformanceReportRequest", "NegativeKeywordConflictReportRequest", "ProductDimensionPerformanceReportRequest", "ProductMatchCountReportRequest", "ProductNegativeKeywordConflictReportRequest", "ProductPartitionPerformanceReportRequest", "ProductPartitionUnitPerformanceReportRequest", "ProductSearchQueryPerformanceReportRequest", "ProfessionalDemographicsAudienceReportRequest", "PublisherUsagePerformanceReportRequest", "SearchCampaignChangeHistoryReportRequest", "SearchQueryPerformanceReportRequest", "ShareOfVoiceReportRequest", "UserLocationPerformanceReportRequest"]
     */
    reportingObject: string;
}
export interface SourceBitlyConfiguration {
    apiKey: string;
    endDate: string;
    startDate: string;
}
export interface SourceBraintreeConfiguration {
    /**
     * Environment specifies where the data will come from. must be one of ["Development", "Sandbox", "Qa", "Production"]
     */
    environment: string;
    /**
     * The unique identifier for your entire gateway account. See the <a href="https://docs.airbyte.com/integrations/sources/braintree">docs</a> for more information on how to obtain this ID.
     */
    merchantId: string;
    /**
     * Braintree Private Key. See the <a href="https://docs.airbyte.com/integrations/sources/braintree">docs</a> for more information on how to obtain this key.
     */
    privateKey: string;
    /**
     * Braintree Public Key. See the <a href="https://docs.airbyte.com/integrations/sources/braintree">docs</a> for more information on how to obtain this key.
     */
    publicKey: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate?: string;
}
export interface SourceBrazeConfiguration {
    /**
     * Braze REST API key
     */
    apiKey: string;
    /**
     * Rows after this date will be synced
     */
    startDate: string;
    /**
     * Braze REST API endpoint
     */
    url: string;
}
export interface SourceBreezyHrConfiguration {
    apiKey: string;
    companyId: string;
}
export interface SourceBrevoConfiguration {
    apiKey: string;
    startDate: string;
}
export interface SourceBuildkiteConfiguration {
    apiKey: string;
    startDate: string;
}
export interface SourceBuzzsproutConfiguration {
    apiKey: string;
    /**
     * Podcast ID found in `https://www.buzzsprout.com/my/profile/api`
     */
    podcastId: string;
    startDate: string;
}
export interface SourceCalendlyConfiguration {
    /**
     * Go to Integrations → API & Webhooks to obtain your bearer token. https://calendly.com/integrations/api_webhooks
     */
    apiKey: string;
    startDate: string;
}
export interface SourceCannyConfiguration {
    /**
     * You can find your secret API key in Your Canny Subdomain > Settings > API
     */
    apiKey: string;
}
export interface SourceCartConfiguration {
    credentials?: outputs.SourceCartConfigurationCredentials;
    /**
     * The date from which you'd like to replicate the data
     */
    startDate: string;
}
export interface SourceCartConfigurationCredentials {
    centralApiRouter?: outputs.SourceCartConfigurationCredentialsCentralApiRouter;
    singleStoreAccessToken?: outputs.SourceCartConfigurationCredentialsSingleStoreAccessToken;
}
export interface SourceCartConfigurationCredentialsCentralApiRouter {
    /**
     * You can determine a site provisioning site Id by hitting https://site.com/store/sitemonitor.aspx and reading the response param PSID
     */
    siteId: string;
    /**
     * Enter your application's User Name
     */
    userName: string;
    /**
     * Enter your application's User Secret
     */
    userSecret: string;
}
export interface SourceCartConfigurationCredentialsSingleStoreAccessToken {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken: string;
    /**
     * The name of Cart.com Online Store. All API URLs start with https://[mystorename.com]/api/v1/, where [mystorename.com] is the domain name of your store.
     */
    storeName: string;
}
export interface SourceChameleonConfiguration {
    apiKey: string;
    endDate: string;
    /**
     * Filter for using in the `segments_experiences` stream. must be one of ["tour", "survey", "launcher"]; Default: "tour"
     */
    filter: string;
    /**
     * Max records per page limit. Default: "50"
     */
    limit: string;
    startDate: string;
}
export interface SourceChargebeeConfiguration {
    /**
     * Product Catalog version of your Chargebee site. Instructions on how to find your version you may find <a href="https://apidocs.chargebee.com/docs/api?prod_cat_ver=2">here</a> under `API Version` section. If left blank, the product catalog version will be set to 2.0. must be one of ["1.0", "2.0"]; Default: "2.0"
     */
    productCatalog: string;
    /**
     * The site prefix for your Chargebee instance.
     */
    site: string;
    /**
     * Chargebee API Key. See the <a href="https://docs.airbyte.com/integrations/sources/chargebee">docs</a> for more information on how to obtain this key.
     */
    siteApiKey: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000Z. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceChartmogulConfiguration {
    /**
     * Your Chartmogul API key. See <a href="https://help.chartmogul.com/hc/en-us/articles/4407796325906-Creating-and-Managing-API-keys#creating-an-api-key"> the docs </a> for info on how to obtain this.
     */
    apiKey: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. When feasible, any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceCimisConfiguration {
    apiKey: string;
    dailyDataItems?: string[];
    endDate: string;
    hourlyDataItems?: string[];
    startDate: string;
    targets: string[];
    /**
     * must be one of ["WSN station numbers", "California zip codes", "decimal-degree coordinates", "street addresses"]
     */
    targetsType: string;
    /**
     * must be one of ["E", "M"]
     */
    unitOfMeasure?: string;
}
export interface SourceClazarConfiguration {
    clientId: string;
    clientSecret: string;
}
export interface SourceClickhouseConfiguration {
    /**
     * The name of the database.
     */
    database: string;
    /**
     * The host endpoint of the Clickhouse cluster.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (Eg. key1=value1&key2=value2&key3=value3). For more information read about <a href="https://jdbc.postgresql.org/documentation/head/connect.html">JDBC URL parameters</a>.
     */
    jdbcUrlParams?: string;
    /**
     * The password associated with this username.
     */
    password?: string;
    /**
     * The port of the database. Default: 8123
     */
    port: number;
    /**
     * Encrypt data using SSL. Default: true
     */
    ssl: boolean;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.SourceClickhouseConfigurationTunnelMethod;
    /**
     * The username which is used to access the database.
     */
    username: string;
}
export interface SourceClickhouseConfigurationTunnelMethod {
    noTunnel?: outputs.SourceClickhouseConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.SourceClickhouseConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.SourceClickhouseConfigurationTunnelMethodSshKeyAuthentication;
}
export interface SourceClickhouseConfigurationTunnelMethodNoTunnel {
}
export interface SourceClickhouseConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface SourceClickhouseConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface SourceClickupApiConfiguration {
    /**
     * Every ClickUp API call required authentication. This field is your personal API token. See <a href="https://clickup.com/api/developer-portal/authentication/#personal-token">here</a>.
     */
    apiToken: string;
    /**
     * Include or exclude closed tasks. By default, they are excluded. See <a https://clickup.com/api/clickupreference/operation/GetTasks/#!in=query&path=include_closed&t=request">here</a>. Default: false
     */
    includeClosedTasks: boolean;
}
export interface SourceClockifyConfiguration {
    /**
     * You can get your api access_key <a href="https://app.clockify.me/user/settings">here</a> This API is Case Sensitive.
     */
    apiKey: string;
    /**
     * The URL for the Clockify API. This should only need to be modified if connecting to an enterprise version of Clockify. Default: "https://api.clockify.me"
     */
    apiUrl: string;
    /**
     * WorkSpace Id
     */
    workspaceId: string;
}
export interface SourceCloseComConfiguration {
    /**
     * Close.com API key (usually starts with 'api_'; find yours <a href="https://app.close.com/settings/api/">here</a>).
     */
    apiKey: string;
    /**
     * The start date to sync data; all data after this date will be replicated. Leave blank to retrieve all the data available in the account. Format: YYYY-MM-DD. Default: "2021-01-01"
     */
    startDate: string;
}
export interface SourceCodaConfiguration {
    /**
     * Bearer token
     */
    authToken: string;
}
export interface SourceCoinApiConfiguration {
    /**
     * API Key
     */
    apiKey: string;
    /**
     * The end date in ISO 8601 format. If not supplied, data will be returned
     * from the start date to the current time, or when the count of result
     * elements reaches its limit.
     */
    endDate?: string;
    /**
     * The environment to use. Either sandbox or production.
     *
     * must be one of ["sandbox", "production"]; Default: "sandbox"
     */
    environment: string;
    /**
     * The maximum number of elements to return. If not supplied, the default
     * is 100. For numbers larger than 100, each 100 items is counted as one
     * request for pricing purposes. Maximum value is 100000.
     *
     * Default: 100
     */
    limit: number;
    /**
     * The period to use. See the documentation for a list. https://docs.coinapi.io/#list-all-periods-get
     */
    period: string;
    /**
     * The start date in ISO 8601 format.
     */
    startDate: string;
    /**
     * The symbol ID to use. See the documentation for a list.
     * https://docs.coinapi.io/#list-all-symbols-get
     */
    symbolId: string;
}
export interface SourceCoinmarketcapConfiguration {
    /**
     * Your API Key. See <a href="https://coinmarketcap.com/api/documentation/v1/#section/Authentication">here</a>. The token is case sensitive.
     */
    apiKey: string;
    /**
     * /latest: Latest market ticker quotes and averages for cryptocurrencies and exchanges. /historical: Intervals of historic market data like OHLCV data or data for use in charting libraries. See <a href="https://coinmarketcap.com/api/documentation/v1/#section/Endpoint-Overview">here</a>. must be one of ["latest", "historical"]
     */
    dataType: string;
    /**
     * Cryptocurrency symbols. (only used for quotes stream)
     */
    symbols?: string[];
}
export interface SourceConfigcatConfiguration {
    /**
     * Basic auth password. See <a href="https://api.configcat.com/docs/#section/Authentication">here</a>.
     */
    password: string;
    /**
     * Basic auth user name. See <a href="https://api.configcat.com/docs/#section/Authentication">here</a>.
     */
    username: string;
}
export interface SourceConfluenceConfiguration {
    /**
     * Please follow the Jira confluence for generating an API token: <a href="https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/">generating an API token</a>.
     */
    apiToken: string;
    /**
     * Your Confluence domain name
     */
    domainName: string;
    /**
     * Your Confluence login email
     */
    email: string;
}
export interface SourceConvexConfiguration {
    /**
     * API access key used to retrieve data from Convex.
     */
    accessKey: string;
    deploymentUrl: string;
}
export interface SourceCustomerIoConfiguration {
    appApiKey: string;
}
export interface SourceDatadogConfiguration {
    /**
     * Datadog API key
     */
    apiKey: string;
    /**
     * Datadog application key
     */
    applicationKey: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Data after this date will  not be replicated. An empty value will represent the current datetime for each  execution. This just applies to Incremental syncs. Default: "2024-01-01T00:00:00Z"
     */
    endDate: string;
    /**
     * Maximum number of records to collect per request. Default: 5000
     */
    maxRecordsPerRequest: number;
    /**
     * List of queries to be run and used as inputs.
     */
    queries?: outputs.SourceDatadogConfigurationQuery[];
    /**
     * The search query. This just applies to Incremental syncs. If empty, it'll collect all logs.
     */
    query?: string;
    /**
     * The site where Datadog data resides in. must be one of ["datadoghq.com", "us3.datadoghq.com", "us5.datadoghq.com", "datadoghq.eu", "ddog-gov.com"]; Default: "datadoghq.com"
     */
    site: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. This just applies to Incremental syncs. Default: "2023-12-01T00:00:00Z"
     */
    startDate: string;
}
export interface SourceDatadogConfigurationQuery {
    /**
     * A data source that is powered by the platform. must be one of ["metrics", "cloud_cost", "logs", "rum"]
     */
    dataSource: string;
    /**
     * The variable name for use in queries.
     */
    name: string;
    /**
     * A classic query string.
     */
    query: string;
}
export interface SourceDatascopeConfiguration {
    /**
     * API Key
     */
    apiKey: string;
    /**
     * Start date for the data to be replicated
     */
    startDate: string;
}
export interface SourceDbtConfiguration {
    accountId: string;
    apiKey2: string;
}
export interface SourceDelightedConfiguration {
    /**
     * A Delighted API key.
     */
    apiKey: string;
    /**
     * The date from which you'd like to replicate the data
     */
    since: string;
}
export interface SourceDixaConfiguration {
    /**
     * Dixa API token
     */
    apiToken: string;
    /**
     * Number of days to batch into one request. Max 31. Default: 31
     */
    batchSize: number;
    /**
     * The connector pulls records updated from this date onwards.
     */
    startDate: string;
}
export interface SourceDockerhubConfiguration {
    /**
     * Username of DockerHub person or organization (for https://hub.docker.com/v2/repositories/USERNAME/ API call)
     */
    dockerUsername: string;
}
export interface SourceDremioConfiguration {
    /**
     * API Key that is generated when you authenticate to Dremio API
     */
    apiKey: string;
    /**
     * URL of your Dremio instance. Default: "https://app.dremio.cloud"
     */
    baseUrl: string;
}
export interface SourceDynamodbConfiguration {
    /**
     * Credentials for the service
     */
    credentials?: outputs.SourceDynamodbConfigurationCredentials;
    /**
     * the URL of the Dynamodb database. Default: ""
     */
    endpoint: string;
    /**
     * Ignore tables with missing scan/read permissions. Default: false
     */
    ignoreMissingReadPermissionsTables: boolean;
    /**
     * The region of the Dynamodb database. must be one of ["", "af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1", "us-west-2"]; Default: ""
     */
    region: string;
    /**
     * Comma separated reserved attribute names present in your tables
     */
    reservedAttributeNames?: string;
}
export interface SourceDynamodbConfigurationCredentials {
    authenticateViaAccessKeys?: outputs.SourceDynamodbConfigurationCredentialsAuthenticateViaAccessKeys;
    roleBasedAuthentication?: outputs.SourceDynamodbConfigurationCredentialsRoleBasedAuthentication;
}
export interface SourceDynamodbConfigurationCredentialsAuthenticateViaAccessKeys {
    /**
     * The access key id to access Dynamodb. Airbyte requires read permissions to the database
     */
    accessKeyId: string;
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * The corresponding secret to the access key id.
     */
    secretAccessKey: string;
}
export interface SourceDynamodbConfigurationCredentialsRoleBasedAuthentication {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
}
export interface SourceEmailoctopusConfiguration {
    /**
     * EmailOctopus API Key. See the <a href="https://help.emailoctopus.com/article/165-how-to-create-and-delete-api-keys">docs</a> for information on how to generate this key.
     */
    apiKey: string;
}
export interface SourceExchangeRatesConfiguration {
    /**
     * Your API Key. See <a href="https://apilayer.com/marketplace/exchangerates_data-api">here</a>. The key is case sensitive.
     */
    accessKey: string;
    /**
     * ISO reference currency. See <a href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">here</a>. Free plan doesn't support Source Currency Switching, default base currency is EUR
     */
    base?: string;
    /**
     * Ignore weekends? (Exchanges don't run on weekends). Default: true
     */
    ignoreWeekends: boolean;
    /**
     * Start getting data from that date.
     */
    startDate: string;
}
export interface SourceEzofficeinventoryConfiguration {
    /**
     * Your EZOfficeInventory Access Token. API Access is disabled by default. Enable API Access in Settings > Integrations > API Integration and click on Update to generate a new access token
     */
    apiKey: string;
    /**
     * Earliest date you want to sync historical streams (inventory_histories, asset_histories, asset_stock_histories) from
     */
    startDate: string;
    /**
     * The company name used in signup, also visible in the URL when logged in.
     */
    subdomain: string;
}
export interface SourceFacebookMarketingConfiguration {
    /**
     * The value of the generated access token. From your App’s Dashboard, click on "Marketing API" then "Tools". Select permissions <b>ads_management, ads_read, read_insights, business_management</b>. Then click on "Get token". See the <a href="https://docs.airbyte.com/integrations/sources/facebook-marketing">docs</a> for more information.
     */
    accessToken?: string;
    /**
     * The Facebook Ad account ID(s) to pull data from. The Ad account ID number is in the account dropdown menu or in your browser's address bar of your <a href="https://adsmanager.facebook.com/adsmanager/">Meta Ads Manager</a>. See the <a href="https://www.facebook.com/business/help/1492627900875762">docs</a> for more information.
     */
    accountIds: string[];
    /**
     * Select the statuses you want to be loaded in the stream. If no specific statuses are selected, the API's default behavior applies, and some statuses may be filtered out.
     */
    adStatuses?: string[];
    /**
     * Select the statuses you want to be loaded in the stream. If no specific statuses are selected, the API's default behavior applies, and some statuses may be filtered out.
     */
    adsetStatuses?: string[];
    /**
     * Select the statuses you want to be loaded in the stream. If no specific statuses are selected, the API's default behavior applies, and some statuses may be filtered out.
     */
    campaignStatuses?: string[];
    /**
     * Credentials for connecting to the Facebook Marketing API
     */
    credentials: outputs.SourceFacebookMarketingConfigurationCredentials;
    /**
     * A list which contains ad statistics entries, each entry must have a name and can contains fields, breakdowns or action_breakdowns. Click on "add" to fill this field.
     */
    customInsights?: outputs.SourceFacebookMarketingConfigurationCustomInsight[];
    /**
     * The date until which you'd like to replicate data for all incremental streams, in the format YYYY-MM-DDT00:00:00Z. All data generated between the start date and this end date will be replicated. Not setting this option will result in always syncing the latest data.
     */
    endDate?: string;
    /**
     * Set to active if you want to fetch the thumbnail_url and store the result in thumbnail_data_url for each Ad Creative. Default: false
     */
    fetchThumbnailImages: boolean;
    /**
     * Insights Job Timeout establishes the maximum amount of time (in minutes) of waiting for the report job to complete. When timeout is reached the job is considered failed and we are trying to request smaller amount of data by breaking the job to few smaller ones. If you definitely know that 60 minutes is not enough for your report to be processed then you can decrease the timeout value, so we start breaking job to smaller parts faster. Default: 60
     */
    insightsJobTimeout: number;
    /**
     * The attribution window. Facebook freezes insight data 28 days after it was generated, which means that all data from the past 28 days may have changed since we last emitted it, so you can retrieve refreshed insights from the past by setting this parameter. If you set a custom lookback window value in Facebook account, please provide the same value here. Default: 28
     */
    insightsLookbackWindow: number;
    /**
     * Page size used when sending requests to Facebook API to specify number of records per page when response has pagination. Most users do not need to set this field unless they specifically need to tune the connector to address specific issues or use cases. Default: 100
     */
    pageSize: number;
    /**
     * The date from which you'd like to replicate data for all incremental streams, in the format YYYY-MM-DDT00:00:00Z. If not set then all data will be replicated for usual streams and only last 2 years for insight streams.
     */
    startDate?: string;
}
export interface SourceFacebookMarketingConfigurationCredentials {
    authenticateViaFacebookMarketingOauth?: outputs.SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauth;
    serviceAccountKeyAuthentication?: outputs.SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthentication;
}
export interface SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauth {
    /**
     * The value of the generated access token. From your App’s Dashboard, click on "Marketing API" then "Tools". Select permissions <b>ads_management, ads_read, read_insights, business_management</b>. Then click on "Get token". See the <a href="https://docs.airbyte.com/integrations/sources/facebook-marketing">docs</a> for more information.
     */
    accessToken?: string;
    /**
     * Client ID for the Facebook Marketing API
     */
    clientId: string;
    /**
     * Client Secret for the Facebook Marketing API
     */
    clientSecret: string;
}
export interface SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthentication {
    /**
     * The value of the generated access token. From your App’s Dashboard, click on "Marketing API" then "Tools". Select permissions <b>ads_management, ads_read, read_insights, business_management</b>. Then click on "Get token". See the <a href="https://docs.airbyte.com/integrations/sources/facebook-marketing">docs</a> for more information.
     */
    accessToken: string;
}
export interface SourceFacebookMarketingConfigurationCustomInsight {
    /**
     * A list of chosen action_breakdowns for action_breakdowns
     */
    actionBreakdowns?: string[];
    /**
     * Determines the report time of action stats. For example, if a person saw the ad on Jan 1st but converted on Jan 2nd, when you query the API with action_report_time=impression, you see a conversion on Jan 1st. When you query the API with action_report_time=conversion, you see a conversion on Jan 2nd. must be one of ["conversion", "impression", "mixed"]; Default: "mixed"
     */
    actionReportTime: string;
    /**
     * A list of chosen breakdowns for breakdowns
     */
    breakdowns?: string[];
    /**
     * The date until which you'd like to replicate data for this stream, in the format YYYY-MM-DDT00:00:00Z. All data generated between the start date and this end date will be replicated. Not setting this option will result in always syncing the latest data.
     */
    endDate?: string;
    /**
     * A list of chosen fields for fields parameter
     */
    fields?: string[];
    /**
     * The insights job timeout. Default: 60
     */
    insightsJobTimeout: number;
    /**
     * The attribution window. Default: 28
     */
    insightsLookbackWindow: number;
    /**
     * Chosen level for API. must be one of ["ad", "adset", "campaign", "account"]; Default: "ad"
     */
    level: string;
    /**
     * The name value of insight
     */
    name: string;
    /**
     * The date from which you'd like to replicate data for this stream, in the format YYYY-MM-DDT00:00:00Z.
     */
    startDate?: string;
    /**
     * Time window in days by which to aggregate statistics. The sync will be chunked into N day intervals, where N is the number of days you specified. For example, if you set this value to 7, then all statistics will be reported as 7-day aggregates by starting from the start_date. If the start and end dates are October 1st and October 30th, then the connector will output 5 records: 01 - 06, 07 - 13, 14 - 20, 21 - 27, and 28 - 30 (3 days only). The minimum allowed value for this field is 1, and the maximum is 89. Default: 1
     */
    timeIncrement: number;
}
export interface SourceFakerConfiguration {
    /**
     * Should the updated_at values for every record be new each sync?  Setting this to false will case the source to stop emitting records after COUNT records have been emitted. Default: true
     */
    alwaysUpdated: boolean;
    /**
     * How many users should be generated in total. The purchases table will be scaled to match, with 10 purchases created per 10 users. This setting does not apply to the products stream. Default: 1000
     */
    count: number;
    /**
     * How many parallel workers should we use to generate fake data?  Choose a value equal to the number of CPUs you will allocate to this source. Default: 4
     */
    parallelism: number;
    /**
     * How many fake records will be in each page (stream slice), before a state message is emitted?. Default: 1000
     */
    recordsPerSlice: number;
    /**
     * Manually control the faker random seed to return the same values on subsequent runs (leave -1 for random). Default: -1
     */
    seed: number;
}
export interface SourceFaunaConfiguration {
    /**
     * Settings for the Fauna Collection.
     */
    collection?: outputs.SourceFaunaConfigurationCollection;
    /**
     * Domain of Fauna to query. Defaults db.fauna.com. See <a href=https://docs.fauna.com/fauna/current/learn/understanding/region_groups#how-to-use-region-groups>the docs</a>. Default: "db.fauna.com"
     */
    domain: string;
    /**
     * Endpoint port. Default: 443
     */
    port: number;
    /**
     * URL scheme. Default: "https"
     */
    scheme: string;
    /**
     * Fauna secret, used when authenticating with the database.
     */
    secret: string;
}
export interface SourceFaunaConfigurationCollection {
    /**
     * <b>This only applies to incremental syncs.</b> <br>
     * Enabling deletion mode informs your destination of deleted documents.<br>
     * Disabled - Leave this feature disabled, and ignore deleted documents.<br>
     * Enabled - Enables this feature. When a document is deleted, the connector exports a record with a "deleted at" column containing the time that the document was deleted.
     */
    deletions: outputs.SourceFaunaConfigurationCollectionDeletions;
    /**
     * The page size used when reading documents from the database. The larger the page size, the faster the connector processes documents. However, if a page is too large, the connector may fail. <br>
     * Choose your page size based on how large the documents are. <br>
     * See <a href="https://docs.fauna.com/fauna/current/learn/understanding/types#page">the docs</a>.
     * Default: 64
     */
    pageSize: number;
}
export interface SourceFaunaConfigurationCollectionDeletions {
    disabled?: outputs.SourceFaunaConfigurationCollectionDeletionsDisabled;
    enabled?: outputs.SourceFaunaConfigurationCollectionDeletionsEnabled;
}
export interface SourceFaunaConfigurationCollectionDeletionsDisabled {
}
export interface SourceFaunaConfigurationCollectionDeletionsEnabled {
    /**
     * Name of the "deleted at" column. Default: "deleted_at"
     */
    column: string;
}
export interface SourceFileConfiguration {
    /**
     * The Name of the final table to replicate this file into (should include letters, numbers dash and underscores only).
     */
    datasetName: string;
    /**
     * The Format of the file which should be replicated (Warning: some formats may be experimental, please refer to the docs). must be one of ["csv", "json", "jsonl", "excel", "excel_binary", "fwf", "feather", "parquet", "yaml"]; Default: "csv"
     */
    format: string;
    /**
     * The storage Provider or Location of the file(s) which should be replicated.
     */
    provider: outputs.SourceFileConfigurationProvider;
    /**
     * This should be a string in JSON format. It depends on the chosen file format to provide additional options and tune its behavior.
     */
    readerOptions?: string;
    /**
     * The URL path to access the file which should be replicated.
     */
    url: string;
}
export interface SourceFileConfigurationProvider {
    azBlobAzureBlobStorage?: outputs.SourceFileConfigurationProviderAzBlobAzureBlobStorage;
    gcsGoogleCloudStorage?: outputs.SourceFileConfigurationProviderGcsGoogleCloudStorage;
    httpsPublicWeb?: outputs.SourceFileConfigurationProviderHttpsPublicWeb;
    localFilesystemLimited?: outputs.SourceFileConfigurationProviderLocalFilesystemLimited;
    s3AmazonWebServices?: outputs.SourceFileConfigurationProviderS3AmazonWebServices;
    scpSecureCopyProtocol?: outputs.SourceFileConfigurationProviderScpSecureCopyProtocol;
    sftpSecureFileTransferProtocol?: outputs.SourceFileConfigurationProviderSftpSecureFileTransferProtocol;
    sshSecureShell?: outputs.SourceFileConfigurationProviderSshSecureShell;
}
export interface SourceFileConfigurationProviderAzBlobAzureBlobStorage {
    /**
     * To access Azure Blob Storage, this connector would need credentials with the proper permissions. One option is a SAS (Shared Access Signature) token. If accessing publicly available data, this field is not necessary.
     */
    sasToken?: string;
    /**
     * To access Azure Blob Storage, this connector would need credentials with the proper permissions. One option is a storage account shared key (aka account key or access key). If accessing publicly available data, this field is not necessary.
     */
    sharedKey?: string;
    /**
     * The globally unique name of the storage account that the desired blob sits within. See <a href="https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview" target="_blank">here</a> for more details.
     */
    storageAccount: string;
}
export interface SourceFileConfigurationProviderGcsGoogleCloudStorage {
    /**
     * In order to access private Buckets stored on Google Cloud, this connector would need a service account json credentials with the proper permissions as described <a href="https://cloud.google.com/iam/docs/service-accounts" target="_blank">here</a>. Please generate the credentials.json file and copy/paste its content to this field (expecting JSON formats). If accessing publicly available data, this field is not necessary.
     */
    serviceAccountJson?: string;
}
export interface SourceFileConfigurationProviderHttpsPublicWeb {
    /**
     * Add User-Agent to request. Default: false
     */
    userAgent: boolean;
}
export interface SourceFileConfigurationProviderLocalFilesystemLimited {
}
export interface SourceFileConfigurationProviderS3AmazonWebServices {
    /**
     * In order to access private Buckets stored on AWS S3, this connector would need credentials with the proper permissions. If accessing publicly available data, this field is not necessary.
     */
    awsAccessKeyId?: string;
    /**
     * In order to access private Buckets stored on AWS S3, this connector would need credentials with the proper permissions. If accessing publicly available data, this field is not necessary.
     */
    awsSecretAccessKey?: string;
}
export interface SourceFileConfigurationProviderScpSecureCopyProtocol {
    host: string;
    password?: string;
    /**
     * Default: "22"
     */
    port: string;
    user: string;
}
export interface SourceFileConfigurationProviderSftpSecureFileTransferProtocol {
    host: string;
    password?: string;
    /**
     * Default: "22"
     */
    port: string;
    user: string;
}
export interface SourceFileConfigurationProviderSshSecureShell {
    host: string;
    password?: string;
    /**
     * Default: "22"
     */
    port: string;
    user: string;
}
export interface SourceFireboltConfiguration {
    /**
     * Firebolt account to login.
     */
    account: string;
    /**
     * Firebolt service account ID.
     */
    clientId: string;
    /**
     * Firebolt secret, corresponding to the service account ID.
     */
    clientSecret: string;
    /**
     * The database to connect to.
     */
    database: string;
    /**
     * Engine name to connect to.
     */
    engine: string;
    /**
     * The host name of your Firebolt database.
     */
    host?: string;
}
export interface SourceFleetioConfiguration {
    accountToken: string;
    apiKey: string;
}
export interface SourceFreshcallerConfiguration {
    /**
     * Freshcaller API Key. See the <a href="https://docs.airbyte.com/integrations/sources/freshcaller">docs</a> for more information on how to obtain this key.
     */
    apiKey: string;
    /**
     * Used to construct Base URL for the Freshcaller APIs
     */
    domain: string;
    /**
     * The number of requests per minute that this source allowed to use. There is a rate limit of 50 requests per minute per app per account.
     */
    requestsPerMinute?: number;
    /**
     * UTC date and time. Any data created after this date will be replicated.
     */
    startDate?: string;
    /**
     * Lag in minutes for each sync, i.e., at time T, data for the time range [prev_sync_time, T-30] will be fetched
     */
    syncLagMinutes?: number;
}
export interface SourceFreshdeskConfiguration {
    /**
     * Freshdesk API Key. See the <a href="https://docs.airbyte.com/integrations/sources/freshdesk">docs</a> for more information on how to obtain this key.
     */
    apiKey: string;
    /**
     * Freshdesk domain
     */
    domain: string;
    /**
     * Number of days for lookback window for the stream Satisfaction Ratings. Default: 14
     */
    lookbackWindowInDays: number;
    /**
     * The number of requests per minute that this source allowed to use. There is a rate limit of 50 requests per minute per app per account.
     */
    requestsPerMinute?: number;
    /**
     * UTC date and time. Any data created after this date will be replicated. If this parameter is not set, all data will be replicated.
     */
    startDate?: string;
}
export interface SourceFreshsalesConfiguration {
    /**
     * Freshsales API Key. See <a href="https://crmsupport.freshworks.com/support/solutions/articles/50000002503-how-to-find-my-api-key-">here</a>. The key is case sensitive.
     */
    apiKey: string;
    /**
     * The Name of your Freshsales domain
     */
    domainName: string;
}
export interface SourceFrontConfiguration {
    apiKey: string;
    /**
     * Page limit for the responses. Default: "50"
     */
    pageLimit: string;
    startDate: string;
}
export interface SourceGainsightPxConfiguration {
    /**
     * The Aptrinsic API Key which is recieved from the dashboard settings (ref - https://app.aptrinsic.com/settings/api-keys)
     */
    apiKey: string;
}
export interface SourceGcsConfiguration {
    /**
     * Name of the GCS bucket where the file(s) exist.
     */
    bucket: string;
    /**
     * Enter your Google Cloud <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys">service account key</a> in JSON format
     */
    serviceAccount: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
     */
    startDate?: string;
    /**
     * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
     */
    streams: outputs.SourceGcsConfigurationStream[];
}
export interface SourceGcsConfigurationStream {
    /**
     * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
     */
    daysToSyncIfHistoryIsFull: number;
    /**
     * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
     */
    format: outputs.SourceGcsConfigurationStreamFormat;
    /**
     * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
     */
    globs?: string[];
    /**
     * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
     */
    inputSchema?: string;
    /**
     * The name of the stream.
     */
    name: string;
    /**
     * The number of resent files which will be used to discover the schema for this stream.
     */
    recentNFilesToReadForSchemaDiscovery?: number;
    /**
     * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
     */
    schemaless: boolean;
    /**
     * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. must be one of ["Emit Record", "Skip Record", "Wait for Discover"]; Default: "Emit Record"
     */
    validationPolicy: string;
}
export interface SourceGcsConfigurationStreamFormat {
    avroFormat?: outputs.SourceGcsConfigurationStreamFormatAvroFormat;
    csvFormat?: outputs.SourceGcsConfigurationStreamFormatCsvFormat;
    excelFormat?: outputs.SourceGcsConfigurationStreamFormatExcelFormat;
    jsonlFormat?: outputs.SourceGcsConfigurationStreamFormatJsonlFormat;
    parquetFormat?: outputs.SourceGcsConfigurationStreamFormatParquetFormat;
    /**
     * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
     */
    unstructuredDocumentFormat?: outputs.SourceGcsConfigurationStreamFormatUnstructuredDocumentFormat;
}
export interface SourceGcsConfigurationStreamFormatAvroFormat {
    /**
     * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
     */
    doubleAsString: boolean;
}
export interface SourceGcsConfigurationStreamFormatCsvFormat {
    /**
     * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
     */
    delimiter: string;
    /**
     * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
     */
    doubleQuote: boolean;
    /**
     * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
     */
    encoding: string;
    /**
     * The character used for escaping special characters. To disallow escaping, leave this field blank.
     */
    escapeChar?: string;
    /**
     * A set of case-sensitive strings that should be interpreted as false values.
     */
    falseValues?: string[];
    /**
     * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
     */
    headerDefinition?: outputs.SourceGcsConfigurationStreamFormatCsvFormatHeaderDefinition;
    /**
     * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
     */
    ignoreErrorsOnFieldsMismatch: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
     */
    nullValues?: string[];
    /**
     * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
     */
    quoteChar: string;
    /**
     * The number of rows to skip after the header row. Default: 0
     */
    skipRowsAfterHeader: number;
    /**
     * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
     */
    skipRowsBeforeHeader: number;
    /**
     * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
     */
    stringsCanBeNull: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as true values.
     */
    trueValues?: string[];
}
export interface SourceGcsConfigurationStreamFormatCsvFormatHeaderDefinition {
    autogenerated?: outputs.SourceGcsConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated;
    fromCsv?: outputs.SourceGcsConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv;
    userProvided?: outputs.SourceGcsConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided;
}
export interface SourceGcsConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated {
}
export interface SourceGcsConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv {
}
export interface SourceGcsConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided {
    /**
     * The column names that will be used while emitting the CSV records
     */
    columnNames: string[];
}
export interface SourceGcsConfigurationStreamFormatExcelFormat {
}
export interface SourceGcsConfigurationStreamFormatJsonlFormat {
}
export interface SourceGcsConfigurationStreamFormatParquetFormat {
    /**
     * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
     */
    decimalAsFloat: boolean;
}
export interface SourceGcsConfigurationStreamFormatUnstructuredDocumentFormat {
    /**
     * Processing configuration
     */
    processing?: outputs.SourceGcsConfigurationStreamFormatUnstructuredDocumentFormatProcessing;
    /**
     * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
     */
    skipUnprocessableFiles: boolean;
    /**
     * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. must be one of ["auto", "fast", "ocr_only", "hi_res"]; Default: "auto"
     */
    strategy: string;
}
export interface SourceGcsConfigurationStreamFormatUnstructuredDocumentFormatProcessing {
    /**
     * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
     */
    local?: outputs.SourceGcsConfigurationStreamFormatUnstructuredDocumentFormatProcessingLocal;
    /**
     * Process files via an API, using the `hi_res` mode. This option is useful for increased performance and accuracy, but requires an API key and a hosted instance of unstructured.
     */
    viaApi?: outputs.SourceGcsConfigurationStreamFormatUnstructuredDocumentFormatProcessingViaApi;
}
export interface SourceGcsConfigurationStreamFormatUnstructuredDocumentFormatProcessingLocal {
}
export interface SourceGcsConfigurationStreamFormatUnstructuredDocumentFormatProcessingViaApi {
    /**
     * The API key to use matching the environment. Default: ""
     */
    apiKey: string;
    /**
     * The URL of the unstructured API to use. Default: "https://api.unstructured.io"
     */
    apiUrl: string;
    /**
     * List of parameters send to the API
     */
    parameters?: outputs.SourceGcsConfigurationStreamFormatUnstructuredDocumentFormatProcessingViaApiParameter[];
}
export interface SourceGcsConfigurationStreamFormatUnstructuredDocumentFormatProcessingViaApiParameter {
    /**
     * The name of the unstructured API parameter to use
     */
    name: string;
    /**
     * The value of the parameter
     */
    value: string;
}
export interface SourceGetlagoConfiguration {
    /**
     * Your API Key. See <a href="https://doc.getlago.com/docs/api/intro">here</a>.
     */
    apiKey: string;
    /**
     * Your Lago API URL. Default: "https://api.getlago.com/api/v1"
     */
    apiUrl: string;
}
export interface SourceGithubConfiguration {
    /**
     * Please enter your basic URL from self-hosted GitHub instance or leave it empty to use GitHub. Default: "https://api.github.com/"
     */
    apiUrl: string;
    /**
     * List of GitHub repository branches to pull commits for, e.g. `airbytehq/airbyte/master`. If no branches are specified for a repository, the default branch will be pulled.
     */
    branches?: string[];
    /**
     * Choose how to authenticate to GitHub
     */
    credentials: outputs.SourceGithubConfigurationCredentials;
    /**
     * Max Waiting Time for rate limit. Set higher value to wait till rate limits will be resetted to continue sync. Default: 10
     */
    maxWaitingTime: number;
    /**
     * List of GitHub organizations/repositories, e.g. `airbytehq/airbyte` for single repository, `airbytehq/*` for get all repositories from organization and `airbytehq/a* for matching multiple repositories by pattern.
     */
    repositories: string[];
    /**
     * The date from which you'd like to replicate data from GitHub in the format YYYY-MM-DDT00:00:00Z. If the date is not set, all data will be replicated.  For the streams which support this configuration, only data generated on or after the start date will be replicated. This field doesn't apply to all streams, see the <a href="https://docs.airbyte.com/integrations/sources/github">docs</a> for more info
     */
    startDate?: string;
}
export interface SourceGithubConfigurationCredentials {
    oAuth?: outputs.SourceGithubConfigurationCredentialsOAuth;
    personalAccessToken?: outputs.SourceGithubConfigurationCredentialsPersonalAccessToken;
}
export interface SourceGithubConfigurationCredentialsOAuth {
    /**
     * OAuth access token
     */
    accessToken: string;
    /**
     * OAuth Client Id
     */
    clientId?: string;
    /**
     * OAuth Client secret
     */
    clientSecret?: string;
}
export interface SourceGithubConfigurationCredentialsPersonalAccessToken {
    /**
     * Log into GitHub and then generate a <a href="https://github.com/settings/tokens">personal access token</a>. To load balance your API quota consumption across multiple API tokens, input multiple tokens separated with ","
     */
    personalAccessToken: string;
}
export interface SourceGitlabConfiguration {
    /**
     * Please enter your basic URL from GitLab instance. Default: "gitlab.com"
     */
    apiUrl: string;
    credentials: outputs.SourceGitlabConfigurationCredentials;
    /**
     * List of groups. e.g. airbyte.io.
     */
    groupsLists?: string[];
    /**
     * Space-delimited list of projects. e.g. airbyte.io/documentation meltano/tap-gitlab.
     */
    projectsLists?: string[];
    /**
     * The date from which you'd like to replicate data for GitLab API, in the format YYYY-MM-DDT00:00:00Z. Optional. If not set, all data will be replicated. All data generated after this date will be replicated.
     */
    startDate?: string;
}
export interface SourceGitlabConfigurationCredentials {
    oAuth20?: outputs.SourceGitlabConfigurationCredentialsOAuth20;
    privateToken?: outputs.SourceGitlabConfigurationCredentialsPrivateToken;
}
export interface SourceGitlabConfigurationCredentialsOAuth20 {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken: string;
    /**
     * The API ID of the Gitlab developer application.
     */
    clientId: string;
    /**
     * The API Secret the Gitlab developer application.
     */
    clientSecret: string;
    /**
     * The key to refresh the expired access_token.
     */
    refreshToken: string;
    /**
     * The date-time when the access token should be refreshed.
     */
    tokenExpiryDate: string;
}
export interface SourceGitlabConfigurationCredentialsPrivateToken {
    /**
     * Log into your Gitlab account and then generate a personal Access Token.
     */
    accessToken: string;
}
export interface SourceGlassfrogConfiguration {
    /**
     * API key provided by Glassfrog
     */
    apiKey: string;
}
export interface SourceGnewsConfiguration {
    /**
     * API Key
     */
    apiKey: string;
    /**
     * This parameter allows you to specify the country where the news articles returned by the API were published, the contents of the articles are not necessarily related to the specified country. You have to set as value the 2 letters code of the country you want to filter. must be one of ["au", "br", "ca", "cn", "eg", "fr", "de", "gr", "hk", "in", "ie", "il", "it", "jp", "nl", "no", "pk", "pe", "ph", "pt", "ro", "ru", "sg", "es", "se", "ch", "tw", "ua", "gb", "us"]
     */
    country?: string;
    /**
     * This parameter allows you to filter the articles that have a publication date smaller than or equal to the  specified value. The date must respect the following format: YYYY-MM-DD hh:mm:ss (in UTC)
     */
    endDate?: string;
    /**
     * This parameter allows you to choose in which attributes the keywords are searched. The attributes that can be set are title, description and content. It is possible to combine several attributes.
     */
    ins?: string[];
    /**
     * must be one of ["ar", "zh", "nl", "en", "fr", "de", "el", "he", "hi", "it", "ja", "ml", "mr", "no", "pt", "ro", "ru", "es", "sv", "ta", "te", "uk"]
     */
    language?: string;
    /**
     * This parameter allows you to specify the attributes that you allow to return null values. The attributes that  can be set are title, description and content. It is possible to combine several attributes
     */
    nullables?: string[];
    /**
     * This parameter allows you to specify your search keywords to find the news articles you are looking for. The keywords will be used to return the most relevant articles. It is possible to use logical operators  with keywords. - Phrase Search Operator: This operator allows you to make an exact search. Keywords surrounded by
     *   quotation marks are used to search for articles with the exact same keyword sequence.
     *   For example the query: "Apple iPhone" will return articles matching at least once this sequence of keywords.
     * - Logical AND Operator: This operator allows you to make sure that several keywords are all used in the article
     *   search. By default the space character acts as an AND operator, it is possible to replace the space character
     *   by AND to obtain the same result. For example the query: Apple Microsoft is equivalent to Apple AND Microsoft
     * - Logical OR Operator: This operator allows you to retrieve articles matching the keyword a or the keyword b.
     *   It is important to note that this operator has a higher precedence than the AND operator. For example the
     *   query: Apple OR Microsoft will return all articles matching the keyword Apple as well as all articles matching
     *   the keyword Microsoft
     * - Logical NOT Operator: This operator allows you to remove from the results the articles corresponding to the
     *   specified keywords. To use it, you need to add NOT in front of each word or phrase surrounded by quotes.
     *   For example the query: Apple NOT iPhone will return all articles matching the keyword Apple but not the keyword
     *   iPhone
     */
    query: string;
    /**
     * This parameter allows you to choose with which type of sorting the articles should be returned. Two values  are possible:
     *   - publishedAt = sort by publication date, the articles with the most recent publication date are returned first
     *   - relevance = sort by best match to keywords, the articles with the best match are returned first
     * must be one of ["publishedAt", "relevance"]
     */
    sortby?: string;
    /**
     * This parameter allows you to filter the articles that have a publication date greater than or equal to the  specified value. The date must respect the following format: YYYY-MM-DD hh:mm:ss (in UTC)
     */
    startDate?: string;
    /**
     * This parameter allows you to specify your search keywords to find the news articles you are looking for. The keywords will be used to return the most relevant articles. It is possible to use logical operators  with keywords. - Phrase Search Operator: This operator allows you to make an exact search. Keywords surrounded by
     *   quotation marks are used to search for articles with the exact same keyword sequence.
     *   For example the query: "Apple iPhone" will return articles matching at least once this sequence of keywords.
     * - Logical AND Operator: This operator allows you to make sure that several keywords are all used in the article
     *   search. By default the space character acts as an AND operator, it is possible to replace the space character
     *   by AND to obtain the same result. For example the query: Apple Microsoft is equivalent to Apple AND Microsoft
     * - Logical OR Operator: This operator allows you to retrieve articles matching the keyword a or the keyword b.
     *   It is important to note that this operator has a higher precedence than the AND operator. For example the
     *   query: Apple OR Microsoft will return all articles matching the keyword Apple as well as all articles matching
     *   the keyword Microsoft
     * - Logical NOT Operator: This operator allows you to remove from the results the articles corresponding to the
     *   specified keywords. To use it, you need to add NOT in front of each word or phrase surrounded by quotes.
     *   For example the query: Apple NOT iPhone will return all articles matching the keyword Apple but not the keyword
     *   iPhone
     */
    topHeadlinesQuery?: string;
    /**
     * This parameter allows you to change the category for the request. must be one of ["breaking-news", "world", "nation", "business", "technology", "entertainment", "sports", "science", "health"]
     */
    topHeadlinesTopic?: string;
}
export interface SourceGoldcastConfiguration {
    /**
     * Your API Access Key. See <a href="https://help.goldcast.io/hc/en-us/articles/22931655725723-How-To-Create-an-API-Token-in-Goldcast">here</a>. The key is case sensitive.
     */
    accessKey: string;
}
export interface SourceGoogleAdsConfiguration {
    /**
     * A conversion window is the number of days after an ad interaction (such as an ad click or video view) during which a conversion, such as a purchase, is recorded in Google Ads. For more information, see <a href="https://support.google.com/google-ads/answer/3123169?hl=en">Google's documentation</a>. Default: 14
     */
    conversionWindowDays: number;
    credentials: outputs.SourceGoogleAdsConfigurationCredentials;
    customQueriesArrays?: outputs.SourceGoogleAdsConfigurationCustomQueriesArray[];
    /**
     * Comma-separated list of (client) customer IDs. Each customer ID must be specified as a 10-digit number without dashes. For detailed instructions on finding this value, refer to our <a href="https://docs.airbyte.com/integrations/sources/google-ads#setup-guide">documentation</a>.
     */
    customerId?: string;
    /**
     * A list of customer statuses to filter on. For detailed info about what each status mean refer to Google Ads <a href="https://developers.google.com/google-ads/api/reference/rpc/v15/CustomerStatusEnum.CustomerStatus">documentation</a>.
     */
    customerStatusFilters?: string[];
    /**
     * UTC date in the format YYYY-MM-DD. Any data after this date will not be replicated. (Default value of today is used if not set)
     */
    endDate?: string;
    /**
     * UTC date in the format YYYY-MM-DD. Any data before this date will not be replicated. (Default value of two years ago is used if not set)
     */
    startDate?: string;
}
export interface SourceGoogleAdsConfigurationCredentials {
    /**
     * The Access Token for making authenticated requests. For detailed instructions on finding this value, refer to our <a href="https://docs.airbyte.com/integrations/sources/google-ads#setup-guide">documentation</a>.
     */
    accessToken?: string;
    /**
     * The Client ID of your Google Ads developer application. For detailed instructions on finding this value, refer to our <a href="https://docs.airbyte.com/integrations/sources/google-ads#setup-guide">documentation</a>.
     */
    clientId: string;
    /**
     * The Client Secret of your Google Ads developer application. For detailed instructions on finding this value, refer to our <a href="https://docs.airbyte.com/integrations/sources/google-ads#setup-guide">documentation</a>.
     */
    clientSecret: string;
    /**
     * The Developer Token granted by Google to use their APIs. For detailed instructions on finding this value, refer to our <a href="https://docs.airbyte.com/integrations/sources/google-ads#setup-guide">documentation</a>.
     */
    developerToken: string;
    /**
     * The token used to obtain a new Access Token. For detailed instructions on finding this value, refer to our <a href="https://docs.airbyte.com/integrations/sources/google-ads#setup-guide">documentation</a>.
     */
    refreshToken: string;
}
export interface SourceGoogleAdsConfigurationCustomQueriesArray {
    /**
     * A custom defined GAQL query for building the report. Avoid including the segments.date field; wherever possible, Airbyte will automatically include it for incremental syncs. For more information, refer to <a href="https://developers.google.com/google-ads/api/fields/v11/overview_query_builder">Google's documentation</a>.
     */
    query: string;
    /**
     * The table name in your destination database for the chosen query.
     */
    tableName: string;
}
export interface SourceGoogleAnalyticsDataApiConfiguration {
    /**
     * Enables conversion of `conversions:*` event metrics from integers to floats. This is beneficial for preventing data rounding when the API returns float values for any `conversions:*` fields. Default: false
     */
    convertConversionsEvent: boolean;
    /**
     * Credentials for the service
     */
    credentials?: outputs.SourceGoogleAnalyticsDataApiConfigurationCredentials;
    /**
     * You can add your Custom Analytics report by creating one.
     */
    customReportsArrays?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArray[];
    /**
     * The start date from which to replicate report data in the format YYYY-MM-DD. Data generated before this date will not be included in the report. Not applied to custom Cohort reports.
     */
    dateRangesStartDate?: string;
    /**
     * If false, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. More information is available in <a href="https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport#request-body">the documentation</a>. Default: false
     */
    keepEmptyRows: boolean;
    /**
     * Since attribution changes after the event date, and Google Analytics has a data processing latency, we should specify how many days in the past we should refresh the data in every run. So if you set it at 5 days, in every sync it will fetch the last bookmark date minus 5 days. Default: 2
     */
    lookbackWindow: number;
    /**
     * A list of your Property IDs. The Property ID is a unique number assigned to each property in Google Analytics, found in your GA4 property URL. This ID allows the connector to track the specific events associated with your property. Refer to the <a href='https://developers.google.com/analytics/devguides/reporting/data/v1/property-id#what_is_my_property_id'>Google Analytics documentation</a> to locate your property ID.
     */
    propertyIds: string[];
    /**
     * The interval in days for each data request made to the Google Analytics API. A larger value speeds up data sync, but increases the chance of data sampling, which may result in inaccuracies. We recommend a value of 1 to minimize sampling, unless speed is an absolute priority over accuracy. Acceptable values range from 1 to 364. Does not apply to custom Cohort reports. More information is available in <a href="https://docs.airbyte.com/integrations/sources/google-analytics-data-api">the documentation</a>. Default: 1
     */
    windowInDays: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCredentials {
    authenticateViaGoogleOauth?: outputs.SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauth;
    serviceAccountKeyAuthentication?: outputs.SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthentication;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauth {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken?: string;
    /**
     * The Client ID of your Google Analytics developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Google Analytics developer application.
     */
    clientSecret: string;
    /**
     * The token for obtaining a new access token.
     */
    refreshToken: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthentication {
    /**
     * The JSON key linked to the service account used for authorization. For steps on obtaining this key, refer to <a href="https://docs.airbyte.com/integrations/sources/google-analytics-data-api/#setup-guide">the setup guide</a>.
     */
    credentialsJson: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArray {
    /**
     * Cohort reports creates a time series of user retention for the cohort.
     */
    cohortSpec?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpec;
    /**
     * Dimensions filter
     */
    dimensionFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilter;
    /**
     * A list of dimensions.
     */
    dimensions: string[];
    /**
     * Metrics filter
     */
    metricFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilter;
    /**
     * A list of metrics.
     */
    metrics: string[];
    /**
     * The name of the custom report, this name would be used as stream name.
     */
    name: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpec {
    disabled?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabled;
    enabled?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabled;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabled {
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabled {
    /**
     * Optional settings for a cohort report.
     */
    cohortReportSettings?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettings;
    cohorts?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohort[];
    cohortsRange?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRange;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohort {
    dateRange: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortDateRange;
    /**
     * Dimension used by the cohort. Required and only supports `firstSessionDate`. must be one of ["firstSessionDate"]
     */
    dimension: string;
    /**
     * Assigns a name to this cohort. If not set, cohorts are named by their zero based index cohort_0, cohort_1, etc.
     */
    name?: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortDateRange {
    endDate: string;
    startDate: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettings {
    /**
     * If true, accumulates the result from first touch day to the end day
     */
    accumulate?: boolean;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRange {
    /**
     * Specifies the end date of the extended reporting date range for a cohort report.
     */
    endOffset: number;
    /**
     * The granularity used to interpret the startOffset and endOffset for the extended reporting date range for a cohort report. must be one of ["GRANULARITY_UNSPECIFIED", "DAILY", "WEEKLY", "MONTHLY"]
     */
    granularity: string;
    /**
     * Specifies the start date of the extended reporting date range for a cohort report.
     */
    startOffset?: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilter {
    /**
     * The FilterExpressions in andGroup have an AND relationship.
     */
    andGroup?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroup;
    /**
     * A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all dimensions.
     */
    filter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilter;
    /**
     * The FilterExpression is NOT of notExpression.
     */
    notExpression?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpression;
    /**
     * The FilterExpressions in orGroup have an OR relationship.
     */
    orGroup?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroup;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroup {
    expressions: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpression[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpression {
    fieldName: string;
    filter: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilter {
    betweenFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilter;
    inListFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterInListFilter;
    numericFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterNumericFilter;
    stringFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterStringFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilter {
    fromValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterFromValue;
    toValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterToValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterFromValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterFromValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterFromValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterFromValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterFromValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterToValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterToValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterToValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterToValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterBetweenFilterToValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterInListFilter {
    caseSensitive?: boolean;
    values: string[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterNumericFilter {
    operations: string[];
    value: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterNumericFilterValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterNumericFilterValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterNumericFilterValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterNumericFilterValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterNumericFilterValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterNumericFilterValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionFilterStringFilter {
    caseSensitive?: boolean;
    matchTypes?: string[];
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilter {
    fieldName: string;
    filter: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilter {
    betweenFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilter;
    inListFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilter;
    numericFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilter;
    stringFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilter {
    fromValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValue;
    toValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilter {
    caseSensitive?: boolean;
    values: string[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilter {
    operations: string[];
    value: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilter {
    caseSensitive?: boolean;
    matchTypes?: string[];
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpression {
    expression?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpression;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpression {
    fieldName: string;
    filter: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilter {
    betweenFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilter;
    inListFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilter;
    numericFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilter;
    stringFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilter {
    fromValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValue;
    toValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilter {
    caseSensitive?: boolean;
    values: string[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilter {
    operations: string[];
    value: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilter {
    caseSensitive?: boolean;
    matchTypes?: string[];
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroup {
    expressions: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpression[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpression {
    fieldName: string;
    filter: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilter {
    betweenFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilter;
    inListFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterInListFilter;
    numericFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterNumericFilter;
    stringFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterStringFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilter {
    fromValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterFromValue;
    toValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterToValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterFromValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterFromValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterFromValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterFromValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterFromValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterToValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterToValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterToValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterToValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterBetweenFilterToValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterInListFilter {
    caseSensitive?: boolean;
    values: string[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterNumericFilter {
    operations: string[];
    value: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterNumericFilterValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterNumericFilterValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterNumericFilterValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterNumericFilterValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterNumericFilterValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterNumericFilterValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionFilterStringFilter {
    caseSensitive?: boolean;
    matchTypes?: string[];
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilter {
    /**
     * The FilterExpressions in andGroup have an AND relationship.
     */
    andGroup?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroup;
    /**
     * A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all metrics.
     */
    filter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilter;
    /**
     * The FilterExpression is NOT of notExpression.
     */
    notExpression?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpression;
    /**
     * The FilterExpressions in orGroup have an OR relationship.
     */
    orGroup?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroup;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroup {
    expressions: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpression[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpression {
    fieldName: string;
    filter: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilter {
    betweenFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilter;
    inListFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterInListFilter;
    numericFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterNumericFilter;
    stringFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterStringFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilter {
    fromValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterFromValue;
    toValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterToValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterFromValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterFromValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterFromValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterFromValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterFromValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterToValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterToValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterToValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterToValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterBetweenFilterToValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterInListFilter {
    caseSensitive?: boolean;
    values: string[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterNumericFilter {
    operations: string[];
    value: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterNumericFilterValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterNumericFilterValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterNumericFilterValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterNumericFilterValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterNumericFilterValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterNumericFilterValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionFilterStringFilter {
    caseSensitive?: boolean;
    matchTypes?: string[];
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilter {
    fieldName: string;
    filter: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilter {
    betweenFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilter;
    inListFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilter;
    numericFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilter;
    stringFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilter {
    fromValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValue;
    toValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilter {
    caseSensitive?: boolean;
    values: string[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilter {
    operations: string[];
    value: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilter {
    caseSensitive?: boolean;
    matchTypes?: string[];
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpression {
    expression?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpression;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpression {
    fieldName: string;
    filter: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilter {
    betweenFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilter;
    inListFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilter;
    numericFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilter;
    stringFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilter {
    fromValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValue;
    toValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilter {
    caseSensitive?: boolean;
    values: string[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilter {
    operations: string[];
    value: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilter {
    caseSensitive?: boolean;
    matchTypes?: string[];
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroup {
    expressions: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpression[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpression {
    fieldName: string;
    filter: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilter {
    betweenFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilter;
    inListFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterInListFilter;
    numericFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterNumericFilter;
    stringFilter?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterStringFilter;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilter {
    fromValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterFromValue;
    toValue: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterToValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterFromValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterFromValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterFromValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterFromValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterFromValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterToValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterToValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterToValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterToValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterBetweenFilterToValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterInListFilter {
    caseSensitive?: boolean;
    values: string[];
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterNumericFilter {
    operations: string[];
    value: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterNumericFilterValue;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterNumericFilterValue {
    doubleValue?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterNumericFilterValueDoubleValue;
    int64Value?: outputs.SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterNumericFilterValueInt64Value;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterNumericFilterValueDoubleValue {
    value: number;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterNumericFilterValueInt64Value {
    value: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionFilterStringFilter {
    caseSensitive?: boolean;
    matchTypes?: string[];
    value: string;
}
export interface SourceGoogleDirectoryConfiguration {
    /**
     * Google APIs use the OAuth 2.0 protocol for authentication and authorization. The Source supports <a href="https://developers.google.com/identity/protocols/oauth2#webserver" target="_blank">Web server application</a> and <a href="https://developers.google.com/identity/protocols/oauth2#serviceaccount" target="_blank">Service accounts</a> scenarios.
     */
    credentials?: outputs.SourceGoogleDirectoryConfigurationCredentials;
}
export interface SourceGoogleDirectoryConfigurationCredentials {
    /**
     * For these scenario user should obtain service account's credentials from the Google API Console and provide delegated email.
     */
    serviceAccountKey?: outputs.SourceGoogleDirectoryConfigurationCredentialsServiceAccountKey;
    /**
     * For these scenario user only needs to give permission to read Google Directory data.
     */
    signInViaGoogleOAuth?: outputs.SourceGoogleDirectoryConfigurationCredentialsSignInViaGoogleOAuth;
}
export interface SourceGoogleDirectoryConfigurationCredentialsServiceAccountKey {
    /**
     * The contents of the JSON service account key. See the <a href="https://developers.google.com/admin-sdk/directory/v1/guides/delegation">docs</a> for more information on how to generate this key.
     */
    credentialsJson: string;
    /**
     * The email of the user, which has permissions to access the Google Workspace Admin APIs.
     */
    email: string;
}
export interface SourceGoogleDirectoryConfigurationCredentialsSignInViaGoogleOAuth {
    /**
     * The Client ID of the developer application.
     */
    clientId: string;
    /**
     * The Client Secret of the developer application.
     */
    clientSecret: string;
    /**
     * The Token for obtaining a new access token.
     */
    refreshToken: string;
}
export interface SourceGoogleDriveConfiguration {
    /**
     * Credentials for connecting to the Google Drive API
     */
    credentials: outputs.SourceGoogleDriveConfigurationCredentials;
    /**
     * URL for the folder you want to sync. Using individual streams and glob patterns, it's possible to only sync a subset of all files located in the folder.
     */
    folderUrl: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
     */
    startDate?: string;
    /**
     * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
     */
    streams: outputs.SourceGoogleDriveConfigurationStream[];
}
export interface SourceGoogleDriveConfigurationCredentials {
    authenticateViaGoogleOAuth?: outputs.SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuth;
    serviceAccountKeyAuthentication?: outputs.SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthentication;
}
export interface SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuth {
    /**
     * Client ID for the Google Drive API
     */
    clientId: string;
    /**
     * Client Secret for the Google Drive API
     */
    clientSecret: string;
    /**
     * Refresh Token for the Google Drive API
     */
    refreshToken: string;
}
export interface SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthentication {
    /**
     * The JSON key of the service account to use for authorization. Read more <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys">here</a>.
     */
    serviceAccountInfo: string;
}
export interface SourceGoogleDriveConfigurationStream {
    /**
     * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
     */
    daysToSyncIfHistoryIsFull: number;
    /**
     * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
     */
    format: outputs.SourceGoogleDriveConfigurationStreamFormat;
    /**
     * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
     */
    globs?: string[];
    /**
     * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
     */
    inputSchema?: string;
    /**
     * The name of the stream.
     */
    name: string;
    /**
     * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
     */
    schemaless: boolean;
    /**
     * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. must be one of ["Emit Record", "Skip Record", "Wait for Discover"]; Default: "Emit Record"
     */
    validationPolicy: string;
}
export interface SourceGoogleDriveConfigurationStreamFormat {
    avroFormat?: outputs.SourceGoogleDriveConfigurationStreamFormatAvroFormat;
    csvFormat?: outputs.SourceGoogleDriveConfigurationStreamFormatCsvFormat;
    /**
     * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
     */
    documentFileTypeFormatExperimental?: outputs.SourceGoogleDriveConfigurationStreamFormatDocumentFileTypeFormatExperimental;
    jsonlFormat?: outputs.SourceGoogleDriveConfigurationStreamFormatJsonlFormat;
    parquetFormat?: outputs.SourceGoogleDriveConfigurationStreamFormatParquetFormat;
}
export interface SourceGoogleDriveConfigurationStreamFormatAvroFormat {
    /**
     * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
     */
    doubleAsString: boolean;
}
export interface SourceGoogleDriveConfigurationStreamFormatCsvFormat {
    /**
     * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
     */
    delimiter: string;
    /**
     * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
     */
    doubleQuote: boolean;
    /**
     * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
     */
    encoding: string;
    /**
     * The character used for escaping special characters. To disallow escaping, leave this field blank.
     */
    escapeChar?: string;
    /**
     * A set of case-sensitive strings that should be interpreted as false values.
     */
    falseValues?: string[];
    /**
     * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
     */
    headerDefinition?: outputs.SourceGoogleDriveConfigurationStreamFormatCsvFormatHeaderDefinition;
    /**
     * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
     */
    ignoreErrorsOnFieldsMismatch: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
     */
    nullValues?: string[];
    /**
     * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
     */
    quoteChar: string;
    /**
     * The number of rows to skip after the header row. Default: 0
     */
    skipRowsAfterHeader: number;
    /**
     * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
     */
    skipRowsBeforeHeader: number;
    /**
     * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
     */
    stringsCanBeNull: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as true values.
     */
    trueValues?: string[];
}
export interface SourceGoogleDriveConfigurationStreamFormatCsvFormatHeaderDefinition {
    autogenerated?: outputs.SourceGoogleDriveConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated;
    fromCsv?: outputs.SourceGoogleDriveConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv;
    userProvided?: outputs.SourceGoogleDriveConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided;
}
export interface SourceGoogleDriveConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated {
}
export interface SourceGoogleDriveConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv {
}
export interface SourceGoogleDriveConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided {
    /**
     * The column names that will be used while emitting the CSV records
     */
    columnNames: string[];
}
export interface SourceGoogleDriveConfigurationStreamFormatDocumentFileTypeFormatExperimental {
    /**
     * Processing configuration
     */
    processing?: outputs.SourceGoogleDriveConfigurationStreamFormatDocumentFileTypeFormatExperimentalProcessing;
    /**
     * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
     */
    skipUnprocessableFiles: boolean;
    /**
     * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. must be one of ["auto", "fast", "ocr_only", "hi_res"]; Default: "auto"
     */
    strategy: string;
}
export interface SourceGoogleDriveConfigurationStreamFormatDocumentFileTypeFormatExperimentalProcessing {
    /**
     * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
     */
    local?: outputs.SourceGoogleDriveConfigurationStreamFormatDocumentFileTypeFormatExperimentalProcessingLocal;
}
export interface SourceGoogleDriveConfigurationStreamFormatDocumentFileTypeFormatExperimentalProcessingLocal {
}
export interface SourceGoogleDriveConfigurationStreamFormatJsonlFormat {
}
export interface SourceGoogleDriveConfigurationStreamFormatParquetFormat {
    /**
     * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
     */
    decimalAsFloat: boolean;
}
export interface SourceGooglePagespeedInsightsConfiguration {
    /**
     * Google PageSpeed API Key. See <a href="https://developers.google.com/speed/docs/insights/v5/get-started#APIKey">here</a>. The key is optional - however the API is heavily rate limited when using without API Key. Creating and using the API key therefore is recommended. The key is case sensitive.
     */
    apiKey?: string;
    /**
     * Defines which Lighthouse category to run. One or many of: "accessibility", "best-practices", "performance", "pwa", "seo".
     */
    categories: string[];
    /**
     * The analyses strategy to use. Either "desktop" or "mobile".
     */
    strategies: string[];
    /**
     * The URLs to retrieve pagespeed information from. The connector will attempt to sync PageSpeed reports for all the defined URLs. Format: https://(www.)url.domain
     */
    urls: string[];
}
export interface SourceGoogleSearchConsoleConfiguration {
    authorization: outputs.SourceGoogleSearchConsoleConfigurationAuthorization;
    /**
     * You can add your Custom Analytics report by creating one.
     */
    customReportsArrays?: outputs.SourceGoogleSearchConsoleConfigurationCustomReportsArray[];
    /**
     * If set to 'final', the returned data will include only finalized, stable data. If set to 'all', fresh data will be included. When using Incremental sync mode, we do not recommend setting this parameter to 'all' as it may cause data loss. More information can be found in our <a href='https://docs.airbyte.com/integrations/source/google-search-console'>full documentation</a>. must be one of ["final", "all"]; Default: "final"
     */
    dataState: string;
    /**
     * UTC date in the format YYYY-MM-DD. Any data created after this date will not be replicated. Must be greater or equal to the start date field. Leaving this field blank will replicate all data from the start date onward.
     */
    endDate?: string;
    /**
     * The URLs of the website property attached to your GSC account. Learn more about properties <a href="https://support.google.com/webmasters/answer/34592?hl=en">here</a>.
     */
    siteUrls: string[];
    /**
     * UTC date in the format YYYY-MM-DD. Any data before this date will not be replicated. Default: "2021-01-01"
     */
    startDate: string;
}
export interface SourceGoogleSearchConsoleConfigurationAuthorization {
    oAuth?: outputs.SourceGoogleSearchConsoleConfigurationAuthorizationOAuth;
    serviceAccountKeyAuthentication?: outputs.SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthentication;
}
export interface SourceGoogleSearchConsoleConfigurationAuthorizationOAuth {
    /**
     * Access token for making authenticated requests. Read more <a href="https://developers.google.com/webmaster-tools/v1/how-tos/authorizing">here</a>.
     */
    accessToken?: string;
    /**
     * The client ID of your Google Search Console developer application. Read more <a href="https://developers.google.com/webmaster-tools/v1/how-tos/authorizing">here</a>.
     */
    clientId: string;
    /**
     * The client secret of your Google Search Console developer application. Read more <a href="https://developers.google.com/webmaster-tools/v1/how-tos/authorizing">here</a>.
     */
    clientSecret: string;
    /**
     * The token for obtaining a new access token. Read more <a href="https://developers.google.com/webmaster-tools/v1/how-tos/authorizing">here</a>.
     */
    refreshToken: string;
}
export interface SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthentication {
    /**
     * The email of the user which has permissions to access the Google Workspace Admin APIs.
     */
    email: string;
    /**
     * The JSON key of the service account to use for authorization. Read more <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys">here</a>.
     */
    serviceAccountInfo: string;
}
export interface SourceGoogleSearchConsoleConfigurationCustomReportsArray {
    /**
     * A list of available dimensions. Please note, that for technical reasons `date` is the default dimension which will be included in your query whether you specify it or not. Primary key will consist of your custom dimensions and the default dimension along with `site_url` and `search_type`.
     */
    dimensions: string[];
    /**
     * The name of the custom report, this name would be used as stream name
     */
    name: string;
}
export interface SourceGoogleSheetsConfiguration {
    /**
     * Default value is 200. An integer representing row batch size for each sent request to Google Sheets API. Row batch size means how many rows are processed from the google sheet, for example default value 200 would process rows 1-201, then 201-401 and so on. Based on <a href='https://developers.google.com/sheets/api/limits'>Google Sheets API limits documentation</a>, it is possible to send up to 300 requests per minute, but each individual request has to be processed under 180 seconds, otherwise the request returns a timeout error. In regards to this information, consider network speed and number of columns of the google sheet when deciding a batch_size value. Default value should cover most of the cases, but if a google sheet has over 100,000 records or more, consider increasing batch_size value. Default: 200
     */
    batchSize: number;
    /**
     * Credentials for connecting to the Google Sheets API
     */
    credentials: outputs.SourceGoogleSheetsConfigurationCredentials;
    /**
     * Enables the conversion of column names to a standardized, SQL-compliant format. For example, 'My Name' > 'my_name'. Enable this option if your destination is SQL-based. Default: false
     */
    namesConversion: boolean;
    /**
     * Enter the link to the Google spreadsheet you want to sync. To copy the link, click the 'Share' button in the top-right corner of the spreadsheet, then click 'Copy link'.
     */
    spreadsheetId: string;
}
export interface SourceGoogleSheetsConfigurationCredentials {
    authenticateViaGoogleOAuth?: outputs.SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuth;
    serviceAccountKeyAuthentication?: outputs.SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthentication;
}
export interface SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuth {
    /**
     * Enter your Google application's Client ID. See <a href='https://developers.google.com/identity/protocols/oauth2'>Google's documentation</a> for more information.
     */
    clientId: string;
    /**
     * Enter your Google application's Client Secret. See <a href='https://developers.google.com/identity/protocols/oauth2'>Google's documentation</a> for more information.
     */
    clientSecret: string;
    /**
     * Enter your Google application's refresh token. See <a href='https://developers.google.com/identity/protocols/oauth2'>Google's documentation</a> for more information.
     */
    refreshToken: string;
}
export interface SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthentication {
    /**
     * The JSON key of the service account to use for authorization. Read more <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys">here</a>.
     */
    serviceAccountInfo: string;
}
export interface SourceGoogleTasksConfiguration {
    apiKey: string;
    /**
     * The maximum number of records to be returned per request. Default: "50"
     */
    recordsLimit: string;
    startDate: string;
}
export interface SourceGoogleWebfontsConfiguration {
    /**
     * Optional, Available params- json, media, proto
     */
    alt?: string;
    /**
     * API key is required to access google apis, For getting your's goto google console and generate api key for Webfonts
     */
    apiKey: string;
    /**
     * Optional, boolean type
     */
    prettyPrint?: string;
    /**
     * Optional, to find how to sort
     */
    sort?: string;
}
export interface SourceGreenhouseConfiguration {
    /**
     * Greenhouse API Key. See the <a href="https://docs.airbyte.com/integrations/sources/greenhouse">docs</a> for more information on how to generate this key.
     */
    apiKey: string;
}
export interface SourceGridlyConfiguration {
    apiKey: string;
    /**
     * ID of a grid, or can be ID of a branch
     */
    gridId: string;
}
export interface SourceGuruConfiguration {
    password?: string;
    /**
     * Query for searching cards
     */
    searchCardsQuery?: string;
    startDate: string;
    /**
     * Team ID received through response of /teams streams, make sure about access to the team
     */
    teamId?: string;
    username: string;
}
export interface SourceHardcodedRecordsConfiguration {
    /**
     * How many records per stream should be generated. Default: 1000
     */
    count: number;
}
export interface SourceHarvestConfiguration {
    /**
     * Harvest account ID. Required for all Harvest requests in pair with Personal Access Token
     */
    accountId: string;
    /**
     * Choose how to authenticate to Harvest.
     */
    credentials?: outputs.SourceHarvestConfigurationCredentials;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    replicationStartDate: string;
}
export interface SourceHarvestConfigurationCredentials {
    authenticateViaHarvestOAuth?: outputs.SourceHarvestConfigurationCredentialsAuthenticateViaHarvestOAuth;
    authenticateWithPersonalAccessToken?: outputs.SourceHarvestConfigurationCredentialsAuthenticateWithPersonalAccessToken;
}
export interface SourceHarvestConfigurationCredentialsAuthenticateViaHarvestOAuth {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * The Client ID of your Harvest developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Harvest developer application.
     */
    clientSecret: string;
    /**
     * Refresh Token to renew the expired Access Token.
     */
    refreshToken: string;
}
export interface SourceHarvestConfigurationCredentialsAuthenticateWithPersonalAccessToken {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * Log into Harvest and then create new <a href="https://id.getharvest.com/developers"> personal access token</a>.
     */
    apiToken: string;
}
export interface SourceHeightConfiguration {
    apiKey: string;
    /**
     * Search query to be used with search stream. Default: "task"
     */
    searchQuery: string;
    startDate: string;
}
export interface SourceHibobConfiguration {
    /**
     * Toggle true if this instance is a HiBob sandbox
     */
    isSandbox: boolean;
    password?: string;
    username: string;
}
export interface SourceHighLevelConfiguration {
    apiKey: string;
    locationId: string;
    startDate: string;
}
export interface SourceHubplannerConfiguration {
    /**
     * Hubplanner API key. See https://github.com/hubplanner/API#authentication for more details.
     */
    apiKey: string;
}
export interface SourceHubspotConfiguration {
    /**
     * Choose how to authenticate to HubSpot.
     */
    credentials: outputs.SourceHubspotConfigurationCredentials;
    /**
     * If enabled then experimental streams become available for sync. Default: false
     */
    enableExperimentalStreams: boolean;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. If not set, "2006-06-01T00:00:00Z" (Hubspot creation date) will be used as start date. It's recommended to provide relevant to your data start date value to optimize synchronization.
     */
    startDate?: string;
}
export interface SourceHubspotConfigurationCredentials {
    oAuth?: outputs.SourceHubspotConfigurationCredentialsOAuth;
    privateApp?: outputs.SourceHubspotConfigurationCredentialsPrivateApp;
}
export interface SourceHubspotConfigurationCredentialsOAuth {
    /**
     * The Client ID of your HubSpot developer application. See the <a href="https://legacydocs.hubspot.com/docs/methods/oauth2/oauth2-quickstart">Hubspot docs</a> if you need help finding this ID.
     */
    clientId: string;
    /**
     * The client secret for your HubSpot developer application. See the <a href="https://legacydocs.hubspot.com/docs/methods/oauth2/oauth2-quickstart">Hubspot docs</a> if you need help finding this secret.
     */
    clientSecret: string;
    /**
     * Refresh token to renew an expired access token. See the <a href="https://legacydocs.hubspot.com/docs/methods/oauth2/oauth2-quickstart">Hubspot docs</a> if you need help finding this token.
     */
    refreshToken: string;
}
export interface SourceHubspotConfigurationCredentialsPrivateApp {
    /**
     * HubSpot Access token. See the <a href="https://developers.hubspot.com/docs/api/private-apps">Hubspot docs</a> if you need help finding this token.
     */
    accessToken: string;
}
export interface SourceInsightlyConfiguration {
    /**
     * The date from which you'd like to replicate data for Insightly in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated. Note that it will be used only for incremental streams.
     */
    startDate: string;
    /**
     * Your Insightly API token.
     */
    token: string;
}
export interface SourceInstagramConfiguration {
    /**
     * The value of the access token generated with <b>instagram_basic, instagram_manage_insights, pages_show_list, pages_read_engagement, Instagram Public Content Access</b> permissions. See the <a href="https://docs.airbyte.com/integrations/sources/instagram/#step-1-set-up-instagram">docs</a> for more information
     */
    accessToken: string;
    /**
     * The date from which you'd like to replicate data for User Insights, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated. If left blank, the start date will be set to 2 years before the present date.
     */
    startDate?: string;
}
export interface SourceInstatusConfiguration {
    /**
     * Instatus REST API key
     */
    apiKey: string;
}
export interface SourceIntercomConfiguration {
    /**
     * Access token for making authenticated requests. See the <a href="https://developers.intercom.com/building-apps/docs/authentication-types#how-to-get-your-access-token">Intercom docs</a> for more information.
     */
    accessToken: string;
    /**
     * Set lower value in case of failing long running sync of Activity Logs stream. Default: 30
     */
    activityLogsTimeStep: number;
    /**
     * Client Id for your Intercom application.
     */
    clientId?: string;
    /**
     * Client Secret for your Intercom application.
     */
    clientSecret?: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceIp2whoisConfiguration {
    /**
     * Your API Key. See <a href="https://www.ip2whois.com/developers-api">here</a>.
     */
    apiKey?: string;
    /**
     * Domain name. See <a href="https://www.ip2whois.com/developers-api">here</a>.
     */
    domain?: string;
}
export interface SourceIterableConfiguration {
    /**
     * Iterable API Key. See the <a href=\"https://docs.airbyte.com/integrations/sources/iterable\">docs</a>  for more information on how to obtain this key.
     */
    apiKey: string;
    /**
     * The date from which you'd like to replicate data for Iterable, in the format YYYY-MM-DDT00:00:00Z.  All data generated after this date will be replicated.
     */
    startDate: string;
}
export interface SourceJiraConfiguration {
    /**
     * Jira API Token. See the <a href="https://docs.airbyte.com/integrations/sources/jira">docs</a> for more information on how to generate this key. API Token is used for Authorization to your account by BasicAuth.
     */
    apiToken: string;
    /**
     * The Domain for your Jira account, e.g. airbyteio.atlassian.net, airbyteio.jira.com, jira.your-domain.com
     */
    domain: string;
    /**
     * The user email for your Jira account which you used to generate the API token. This field is used for Authorization to your account by BasicAuth.
     */
    email: string;
    /**
     * Allow the use of experimental streams which rely on undocumented Jira API endpoints. See https://docs.airbyte.com/integrations/sources/jira#experimental-tables for more info. Default: false
     */
    enableExperimentalStreams: boolean;
    /**
     * When set to N, the connector will always refresh resources created within the past N minutes. By default, updated objects that are not newly created are not incrementally synced. Default: 0
     */
    lookbackWindowMinutes: number;
    /**
     * List of Jira project keys to replicate data for, or leave it empty if you want to replicate data for all projects.
     */
    projects?: string[];
    /**
     * The date from which you want to replicate data from Jira, use the format YYYY-MM-DDT00:00:00Z. Note that this field only applies to certain streams, and only data generated on or after the start date will be replicated. Or leave it empty if you want to replicate all data. For more information, refer to the <a href="https://docs.airbyte.com/integrations/sources/jira/">documentation</a>.
     */
    startDate?: string;
}
export interface SourceJotformConfiguration {
    apiEndpoint: outputs.SourceJotformConfigurationApiEndpoint;
    apiKey: string;
    endDate: string;
    startDate: string;
}
export interface SourceJotformConfigurationApiEndpoint {
    basic?: outputs.SourceJotformConfigurationApiEndpointBasic;
    enterprise?: outputs.SourceJotformConfigurationApiEndpointEnterprise;
}
export interface SourceJotformConfigurationApiEndpointBasic {
    /**
     * You can access our API through the following URLs - Standard API Usage (Use the default API URL - https://api.jotform.com), For EU (Use the EU API URL - https://eu-api.jotform.com), For HIPAA (Use the HIPAA API URL - https://hipaa-api.jotform.com). must be one of ["Standard", "EU", "HIPAA"]; Default: "Standard"
     */
    urlPrefix: string;
}
export interface SourceJotformConfigurationApiEndpointEnterprise {
    /**
     * Upgrade to Enterprise to make your API url your-domain.com/API or subdomain.jotform.com/API instead of api.jotform.com
     */
    enterpriseUrl: string;
}
export interface SourceK6CloudConfiguration {
    /**
     * Your API Token. See <a href="https://k6.io/docs/cloud/integrations/token/">here</a>. The key is case sensitive.
     */
    apiToken: string;
}
export interface SourceKlarnaConfiguration {
    /**
     * A string which is associated with your Merchant ID and is used to authorize use of Klarna's APIs (https://developers.klarna.com/api/#authentication)
     */
    password: string;
    /**
     * Propertie defining if connector is used against playground or production environment. Default: false
     */
    playground: boolean;
    /**
     * Base url region (For playground eu https://docs.klarna.com/klarna-payments/api/payments-api/#tag/API-URLs). Supported 'eu', 'na', 'oc'. must be one of ["eu", "na", "oc"]
     */
    region: string;
    /**
     * Consists of your Merchant ID (eid) - a unique number that identifies your e-store, combined with a random string (https://developers.klarna.com/api/#authentication)
     */
    username: string;
}
export interface SourceKlaviyoConfiguration {
    /**
     * Klaviyo API Key. See our <a href="https://docs.airbyte.com/integrations/sources/klaviyo">docs</a> if you need help finding this key.
     */
    apiKey: string;
    /**
     * Certain streams like the profiles stream can retrieve predictive analytics data from Klaviyo's API. However, at high volume, this can lead to service availability issues on the API which can be improved by not fetching this field. WARNING: Enabling this setting will stop the  "predictive_analytics" column from being populated in your downstream destination.
     */
    disableFetchingPredictiveAnalytics?: boolean;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. This field is optional - if not provided, all data will be replicated.
     */
    startDate?: string;
}
export interface SourceKyveConfiguration {
    /**
     * The IDs of the KYVE storage pool you want to archive. (Comma separated)
     */
    poolIds: string;
    /**
     * The start-id defines, from which bundle id the pipeline should start to extract the data. (Comma separated)
     */
    startIds: string;
    /**
     * URL to the KYVE Chain API. Default: "https://api.kyve.network"
     */
    urlBase: string;
}
export interface SourceLaunchdarklyConfiguration {
    /**
     * Your Access token. See <a href="https://apidocs.launchdarkly.com/#section/Overview/Authentication">here</a>.
     */
    accessToken: string;
}
export interface SourceLeadfeederConfiguration {
    apiToken: string;
    startDate: string;
}
export interface SourceLemlistConfiguration {
    /**
     * Lemlist API key,
     */
    apiKey: string;
}
export interface SourceLeverHiringConfiguration {
    /**
     * Choose how to authenticate to Lever Hiring.
     */
    credentials?: outputs.SourceLeverHiringConfigurationCredentials;
    /**
     * The environment in which you'd like to replicate data for Lever. This is used to determine which Lever API endpoint to use. must be one of ["Production", "Sandbox"]; Default: "Sandbox"
     */
    environment: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. Note that it will be used only in the following incremental streams: comments, commits, and issues.
     */
    startDate: string;
}
export interface SourceLeverHiringConfigurationCredentials {
    authenticateViaLeverApiKey?: outputs.SourceLeverHiringConfigurationCredentialsAuthenticateViaLeverApiKey;
    authenticateViaLeverOAuth?: outputs.SourceLeverHiringConfigurationCredentialsAuthenticateViaLeverOAuth;
}
export interface SourceLeverHiringConfigurationCredentialsAuthenticateViaLeverApiKey {
    /**
     * The Api Key of your Lever Hiring account.
     */
    apiKey: string;
}
export interface SourceLeverHiringConfigurationCredentialsAuthenticateViaLeverOAuth {
    /**
     * The Client ID of your Lever Hiring developer application.
     */
    clientId?: string;
    /**
     * The Client Secret of your Lever Hiring developer application.
     */
    clientSecret?: string;
    /**
     * The token for obtaining new access token.
     */
    refreshToken: string;
}
export interface SourceLinkedinAdsConfiguration {
    /**
     * Specify the account IDs to pull data from, separated by a space. Leave this field empty if you want to pull the data from all accounts accessible by the authenticated user. See the <a href="https://www.linkedin.com/help/linkedin/answer/a424270/find-linkedin-ads-account-details?lang=en">LinkedIn docs</a> to locate these IDs.
     */
    accountIds?: number[];
    adAnalyticsReports?: outputs.SourceLinkedinAdsConfigurationAdAnalyticsReport[];
    credentials?: outputs.SourceLinkedinAdsConfigurationCredentials;
    /**
     * How far into the past to look for records. (in days). Default: 0
     */
    lookbackWindow: number;
    /**
     * UTC date in the format YYYY-MM-DD. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceLinkedinAdsConfigurationAdAnalyticsReport {
    /**
     * The name for the custom report.
     */
    name: string;
    /**
     * Choose a category to pivot your analytics report around. This selection will organize your data based on the chosen attribute, allowing you to analyze trends and performance from different perspectives. must be one of ["COMPANY", "ACCOUNT", "SHARE", "CAMPAIGN", "CREATIVE", "CAMPAIGN_GROUP", "CONVERSION", "CONVERSATION_NODE", "CONVERSATION_NODE_OPTION_INDEX", "SERVING_LOCATION", "CARD_INDEX", "MEMBER_COMPANY_SIZE", "MEMBER_INDUSTRY", "MEMBER_SENIORITY", "MEMBER_JOB_TITLE", "MEMBER_JOB_FUNCTION", "MEMBER_COUNTRY_V2", "MEMBER_REGION_V2", "MEMBER_COMPANY", "PLACEMENT_NAME", "IMPRESSION_DEVICE_TYPE"]
     */
    pivotBy: string;
    /**
     * Choose how to group the data in your report by time. The options are:<br>- 'ALL': A single result summarizing the entire time range.<br>- 'DAILY': Group results by each day.<br>- 'MONTHLY': Group results by each month.<br>- 'YEARLY': Group results by each year.<br>Selecting a time grouping helps you analyze trends and patterns over different time periods. must be one of ["ALL", "DAILY", "MONTHLY", "YEARLY"]
     */
    timeGranularity: string;
}
export interface SourceLinkedinAdsConfigurationCredentials {
    accessToken?: outputs.SourceLinkedinAdsConfigurationCredentialsAccessToken;
    oAuth20?: outputs.SourceLinkedinAdsConfigurationCredentialsOAuth20;
}
export interface SourceLinkedinAdsConfigurationCredentialsAccessToken {
    /**
     * The access token generated for your developer application. Refer to our <a href='https://docs.airbyte.com/integrations/sources/linkedin-ads#setup-guide'>documentation</a> for more information.
     */
    accessToken: string;
}
export interface SourceLinkedinAdsConfigurationCredentialsOAuth20 {
    /**
     * The client ID of your developer application. Refer to our <a href='https://docs.airbyte.com/integrations/sources/linkedin-ads#setup-guide'>documentation</a> for more information.
     */
    clientId: string;
    /**
     * The client secret of your developer application. Refer to our <a href='https://docs.airbyte.com/integrations/sources/linkedin-ads#setup-guide'>documentation</a> for more information.
     */
    clientSecret: string;
    /**
     * The key to refresh the expired access token. Refer to our <a href='https://docs.airbyte.com/integrations/sources/linkedin-ads#setup-guide'>documentation</a> for more information.
     */
    refreshToken: string;
}
export interface SourceLinkedinPagesConfiguration {
    credentials?: outputs.SourceLinkedinPagesConfigurationCredentials;
    /**
     * Specify the Organization ID
     */
    orgId: string;
    /**
     * Start date for getting metrics per time period. Must be atmost 12 months before the request date (UTC) and atleast 2 days prior to the request date (UTC). See https://bit.ly/linkedin-pages-date-rules {{"{{"}} "\n" {{"}}"}} {{"{{"}} response.errorDetails {{"}}"}}. Default: "2023-01-01T00:00:00Z"
     */
    startDate: string;
    /**
     * Granularity of the statistics for metrics per time period. Must be either "DAY" or "MONTH". must be one of ["DAY", "MONTH"]; Default: "DAY"
     */
    timeGranularityType: string;
}
export interface SourceLinkedinPagesConfigurationCredentials {
    accessToken?: outputs.SourceLinkedinPagesConfigurationCredentialsAccessToken;
    oAuth20?: outputs.SourceLinkedinPagesConfigurationCredentialsOAuth20;
}
export interface SourceLinkedinPagesConfigurationCredentialsAccessToken {
    /**
     * The token value generated using the LinkedIn Developers OAuth Token Tools. See the <a href="https://docs.airbyte.com/integrations/sources/linkedin-pages/">docs</a> to obtain yours.
     */
    accessToken: string;
}
export interface SourceLinkedinPagesConfigurationCredentialsOAuth20 {
    /**
     * The client ID of the LinkedIn developer application.
     */
    clientId: string;
    /**
     * The client secret of the LinkedIn developer application.
     */
    clientSecret: string;
    /**
     * The token value generated using the LinkedIn Developers OAuth Token Tools. See the <a href="https://docs.airbyte.com/integrations/sources/linkedin-pages/">docs</a> to obtain yours.
     */
    refreshToken: string;
}
export interface SourceLinnworksConfiguration {
    /**
     * Linnworks Application ID
     */
    applicationId: string;
    /**
     * Linnworks Application Secret
     */
    applicationSecret: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
    token: string;
}
export interface SourceLokaliseConfiguration {
    /**
     * Lokalise API Key with read-access. Available at Profile settings > API tokens. See <a href="https://docs.lokalise.com/en/articles/1929556-api-tokens">here</a>.
     */
    apiKey: string;
    /**
     * Lokalise project ID. Available at Project Settings > General.
     */
    projectId: string;
}
export interface SourceLookerConfiguration {
    /**
     * The Client ID is first part of an API3 key that is specific to each Looker user. See the <a href="https://docs.airbyte.com/integrations/sources/looker">docs</a> for more information on how to generate this key.
     */
    clientId: string;
    /**
     * The Client Secret is second part of an API3 key.
     */
    clientSecret: string;
    /**
     * Domain for your Looker account, e.g. airbyte.cloud.looker.com,looker.[clientname].com,IP address
     */
    domain: string;
    /**
     * The IDs of any Looks to run
     */
    runLookIds?: string[];
}
export interface SourceLumaConfiguration {
    /**
     * Get your API key on lu.ma Calendars dashboard → Settings.
     */
    apiKey: string;
}
export interface SourceMailchimpConfiguration {
    credentials?: outputs.SourceMailchimpConfigurationCredentials;
    /**
     * The date from which you want to start syncing data for Incremental streams. Only records that have been created or modified since this date will be synced. If left blank, all data will by synced.
     */
    startDate?: string;
}
export interface SourceMailchimpConfigurationCredentials {
    apiKey?: outputs.SourceMailchimpConfigurationCredentialsApiKey;
    oAuth20?: outputs.SourceMailchimpConfigurationCredentialsOAuth20;
}
export interface SourceMailchimpConfigurationCredentialsApiKey {
    /**
     * Mailchimp API Key. See the <a href="https://docs.airbyte.com/integrations/sources/mailchimp">docs</a> for information on how to generate this key.
     */
    apikey: string;
}
export interface SourceMailchimpConfigurationCredentialsOAuth20 {
    /**
     * An access token generated using the above client ID and secret.
     */
    accessToken: string;
    /**
     * The Client ID of your OAuth application.
     */
    clientId?: string;
    /**
     * The Client Secret of your OAuth application.
     */
    clientSecret?: string;
}
export interface SourceMailgunConfiguration {
    /**
     * Domain region code. 'EU' or 'US' are possible values. The default is 'US'. must be one of ["US", "EU"]; Default: "US"
     */
    domainRegion: string;
    /**
     * Primary account API key to access your Mailgun data.
     */
    privateKey: string;
    /**
     * UTC date and time in the format 2020-10-01 00:00:00. Any data before this date will not be replicated. If omitted, defaults to 3 days ago.
     */
    startDate?: string;
}
export interface SourceMailjetSmsConfiguration {
    /**
     * Retrieve SMS messages created before the specified timestamp. Required format - Unix timestamp.
     */
    endDate?: number;
    /**
     * Retrieve SMS messages created after the specified timestamp. Required format - Unix timestamp.
     */
    startDate?: number;
    /**
     * Your access token. See <a href="https://dev.mailjet.com/sms/reference/overview/authentication">here</a>.
     */
    token: string;
}
export interface SourceMarketoConfiguration {
    /**
     * The Client ID of your Marketo developer application. See <a href="https://docs.airbyte.com/integrations/sources/marketo"> the docs </a> for info on how to obtain this.
     */
    clientId: string;
    /**
     * The Client Secret of your Marketo developer application. See <a href="https://docs.airbyte.com/integrations/sources/marketo"> the docs </a> for info on how to obtain this.
     */
    clientSecret: string;
    /**
     * Your Marketo Base URL. See <a href="https://docs.airbyte.com/integrations/sources/marketo"> the docs </a> for info on how to obtain this.
     */
    domainUrl: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceMetabaseConfiguration {
    /**
     * URL to your metabase instance API
     */
    instanceApiUrl: string;
    password?: string;
    /**
     * To generate your session token, you need to run the following command: ``` curl -X POST \
     *   -H "Content-Type: application/json" \
     *   -d '{"username": "person@metabase.com", "password": "fakepassword"}' \
     *   http://localhost:3000/api/session
     * ``` Then copy the value of the `id` field returned by a successful call to that API.
     * Note that by default, sessions are good for 14 days and needs to be regenerated.
     */
    sessionToken?: string;
    username: string;
}
export interface SourceMicrosoftOnedriveConfiguration {
    /**
     * Credentials for connecting to the One Drive API
     */
    credentials: outputs.SourceMicrosoftOnedriveConfigurationCredentials;
    /**
     * Name of the Microsoft OneDrive drive where the file(s) exist. Default: "OneDrive"
     */
    driveName: string;
    /**
     * Path to a specific folder within the drives to search for files. Leave empty to search all folders of the drives. This does not apply to shared items. Default: "."
     */
    folderPath: string;
    /**
     * Specifies the location(s) to search for files. Valid options are 'ACCESSIBLE_DRIVES' to search in the selected OneDrive drive, 'SHARED_ITEMS' for shared items the user has access to, and 'ALL' to search both. must be one of ["ACCESSIBLE_DRIVES", "SHARED_ITEMS", "ALL"]; Default: "ALL"
     */
    searchScope: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
     */
    startDate?: string;
    /**
     * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
     */
    streams: outputs.SourceMicrosoftOnedriveConfigurationStream[];
}
export interface SourceMicrosoftOnedriveConfigurationCredentials {
    /**
     * OAuthCredentials class to hold authentication details for Microsoft OAuth authentication.
     * This class uses pydantic for data validation and settings management.
     */
    authenticateViaMicrosoftOAuth?: outputs.SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuth;
    /**
     * ServiceCredentials class for service key authentication.
     * This class is structured similarly to OAuthCredentials but for a different authentication method.
     */
    serviceKeyAuthentication?: outputs.SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthentication;
}
export interface SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuth {
    /**
     * Client ID of your Microsoft developer application
     */
    clientId: string;
    /**
     * Client Secret of your Microsoft developer application
     */
    clientSecret: string;
    /**
     * Refresh Token of your Microsoft developer application
     */
    refreshToken: string;
    /**
     * Tenant ID of the Microsoft OneDrive user
     */
    tenantId: string;
}
export interface SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthentication {
    /**
     * Client ID of your Microsoft developer application
     */
    clientId: string;
    /**
     * Client Secret of your Microsoft developer application
     */
    clientSecret: string;
    /**
     * Tenant ID of the Microsoft OneDrive user
     */
    tenantId: string;
    /**
     * Special characters such as a period, comma, space, and the at sign (@) are converted to underscores (_). More details: https://learn.microsoft.com/en-us/sharepoint/list-onedrive-urls
     */
    userPrincipalName: string;
}
export interface SourceMicrosoftOnedriveConfigurationStream {
    /**
     * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
     */
    daysToSyncIfHistoryIsFull: number;
    /**
     * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
     */
    format: outputs.SourceMicrosoftOnedriveConfigurationStreamFormat;
    /**
     * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
     */
    globs?: string[];
    /**
     * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
     */
    inputSchema?: string;
    /**
     * The name of the stream.
     */
    name: string;
    /**
     * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
     */
    schemaless: boolean;
    /**
     * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. must be one of ["Emit Record", "Skip Record", "Wait for Discover"]; Default: "Emit Record"
     */
    validationPolicy: string;
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormat {
    avroFormat?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatAvroFormat;
    csvFormat?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatCsvFormat;
    jsonlFormat?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatJsonlFormat;
    parquetFormat?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatParquetFormat;
    /**
     * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
     */
    unstructuredDocumentFormat?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatUnstructuredDocumentFormat;
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatAvroFormat {
    /**
     * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
     */
    doubleAsString: boolean;
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatCsvFormat {
    /**
     * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
     */
    delimiter: string;
    /**
     * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
     */
    doubleQuote: boolean;
    /**
     * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
     */
    encoding: string;
    /**
     * The character used for escaping special characters. To disallow escaping, leave this field blank.
     */
    escapeChar?: string;
    /**
     * A set of case-sensitive strings that should be interpreted as false values.
     */
    falseValues?: string[];
    /**
     * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
     */
    headerDefinition?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatCsvFormatHeaderDefinition;
    /**
     * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
     */
    ignoreErrorsOnFieldsMismatch: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
     */
    nullValues?: string[];
    /**
     * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
     */
    quoteChar: string;
    /**
     * The number of rows to skip after the header row. Default: 0
     */
    skipRowsAfterHeader: number;
    /**
     * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
     */
    skipRowsBeforeHeader: number;
    /**
     * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
     */
    stringsCanBeNull: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as true values.
     */
    trueValues?: string[];
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatCsvFormatHeaderDefinition {
    autogenerated?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated;
    fromCsv?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv;
    userProvided?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided;
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated {
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv {
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided {
    /**
     * The column names that will be used while emitting the CSV records
     */
    columnNames: string[];
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatJsonlFormat {
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatParquetFormat {
    /**
     * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
     */
    decimalAsFloat: boolean;
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatUnstructuredDocumentFormat {
    /**
     * Processing configuration
     */
    processing?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatUnstructuredDocumentFormatProcessing;
    /**
     * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
     */
    skipUnprocessableFiles: boolean;
    /**
     * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. must be one of ["auto", "fast", "ocr_only", "hi_res"]; Default: "auto"
     */
    strategy: string;
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatUnstructuredDocumentFormatProcessing {
    /**
     * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
     */
    local?: outputs.SourceMicrosoftOnedriveConfigurationStreamFormatUnstructuredDocumentFormatProcessingLocal;
}
export interface SourceMicrosoftOnedriveConfigurationStreamFormatUnstructuredDocumentFormatProcessingLocal {
}
export interface SourceMicrosoftSharepointConfiguration {
    /**
     * Credentials for connecting to the One Drive API
     */
    credentials: outputs.SourceMicrosoftSharepointConfigurationCredentials;
    /**
     * Path to a specific folder within the drives to search for files. Leave empty to search all folders of the drives. This does not apply to shared items. Default: "."
     */
    folderPath: string;
    /**
     * Specifies the location(s) to search for files. Valid options are 'ACCESSIBLE_DRIVES' for all SharePoint drives the user can access, 'SHARED_ITEMS' for shared items the user has access to, and 'ALL' to search both. must be one of ["ACCESSIBLE_DRIVES", "SHARED_ITEMS", "ALL"]; Default: "ALL"
     */
    searchScope: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
     */
    startDate?: string;
    /**
     * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
     */
    streams: outputs.SourceMicrosoftSharepointConfigurationStream[];
}
export interface SourceMicrosoftSharepointConfigurationCredentials {
    /**
     * OAuthCredentials class to hold authentication details for Microsoft OAuth authentication.
     * This class uses pydantic for data validation and settings management.
     */
    authenticateViaMicrosoftOAuth?: outputs.SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuth;
    /**
     * ServiceCredentials class for service key authentication.
     * This class is structured similarly to OAuthCredentials but for a different authentication method.
     */
    serviceKeyAuthentication?: outputs.SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthentication;
}
export interface SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuth {
    /**
     * Client ID of your Microsoft developer application
     */
    clientId: string;
    /**
     * Client Secret of your Microsoft developer application
     */
    clientSecret: string;
    /**
     * Refresh Token of your Microsoft developer application
     */
    refreshToken?: string;
    /**
     * Tenant ID of the Microsoft SharePoint user
     */
    tenantId: string;
}
export interface SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthentication {
    /**
     * Client ID of your Microsoft developer application
     */
    clientId: string;
    /**
     * Client Secret of your Microsoft developer application
     */
    clientSecret: string;
    /**
     * Tenant ID of the Microsoft SharePoint user
     */
    tenantId: string;
    /**
     * Special characters such as a period, comma, space, and the at sign (@) are converted to underscores (_). More details: https://learn.microsoft.com/en-us/sharepoint/list-onedrive-urls
     */
    userPrincipalName: string;
}
export interface SourceMicrosoftSharepointConfigurationStream {
    /**
     * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
     */
    daysToSyncIfHistoryIsFull: number;
    /**
     * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
     */
    format: outputs.SourceMicrosoftSharepointConfigurationStreamFormat;
    /**
     * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
     */
    globs?: string[];
    /**
     * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
     */
    inputSchema?: string;
    /**
     * The name of the stream.
     */
    name: string;
    /**
     * The number of resent files which will be used to discover the schema for this stream.
     */
    recentNFilesToReadForSchemaDiscovery?: number;
    /**
     * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
     */
    schemaless: boolean;
    /**
     * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. must be one of ["Emit Record", "Skip Record", "Wait for Discover"]; Default: "Emit Record"
     */
    validationPolicy: string;
}
export interface SourceMicrosoftSharepointConfigurationStreamFormat {
    avroFormat?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatAvroFormat;
    csvFormat?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatCsvFormat;
    excelFormat?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatExcelFormat;
    jsonlFormat?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatJsonlFormat;
    parquetFormat?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatParquetFormat;
    /**
     * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
     */
    unstructuredDocumentFormat?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatUnstructuredDocumentFormat;
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatAvroFormat {
    /**
     * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
     */
    doubleAsString: boolean;
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatCsvFormat {
    /**
     * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
     */
    delimiter: string;
    /**
     * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
     */
    doubleQuote: boolean;
    /**
     * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
     */
    encoding: string;
    /**
     * The character used for escaping special characters. To disallow escaping, leave this field blank.
     */
    escapeChar?: string;
    /**
     * A set of case-sensitive strings that should be interpreted as false values.
     */
    falseValues?: string[];
    /**
     * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
     */
    headerDefinition?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatCsvFormatHeaderDefinition;
    /**
     * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
     */
    ignoreErrorsOnFieldsMismatch: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
     */
    nullValues?: string[];
    /**
     * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
     */
    quoteChar: string;
    /**
     * The number of rows to skip after the header row. Default: 0
     */
    skipRowsAfterHeader: number;
    /**
     * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
     */
    skipRowsBeforeHeader: number;
    /**
     * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
     */
    stringsCanBeNull: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as true values.
     */
    trueValues?: string[];
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatCsvFormatHeaderDefinition {
    autogenerated?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated;
    fromCsv?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv;
    userProvided?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided;
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated {
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv {
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided {
    /**
     * The column names that will be used while emitting the CSV records
     */
    columnNames: string[];
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatExcelFormat {
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatJsonlFormat {
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatParquetFormat {
    /**
     * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
     */
    decimalAsFloat: boolean;
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatUnstructuredDocumentFormat {
    /**
     * Processing configuration
     */
    processing?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatUnstructuredDocumentFormatProcessing;
    /**
     * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
     */
    skipUnprocessableFiles: boolean;
    /**
     * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. must be one of ["auto", "fast", "ocr_only", "hi_res"]; Default: "auto"
     */
    strategy: string;
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatUnstructuredDocumentFormatProcessing {
    /**
     * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
     */
    local?: outputs.SourceMicrosoftSharepointConfigurationStreamFormatUnstructuredDocumentFormatProcessingLocal;
}
export interface SourceMicrosoftSharepointConfigurationStreamFormatUnstructuredDocumentFormatProcessingLocal {
}
export interface SourceMicrosoftTeamsConfiguration {
    /**
     * Choose how to authenticate to Microsoft
     */
    credentials?: outputs.SourceMicrosoftTeamsConfigurationCredentials;
    /**
     * Specifies the length of time over which the Team Device Report stream is aggregated. The supported values are: D7, D30, D90, and D180.
     */
    period: string;
}
export interface SourceMicrosoftTeamsConfigurationCredentials {
    authenticateViaMicrosoft?: outputs.SourceMicrosoftTeamsConfigurationCredentialsAuthenticateViaMicrosoft;
    authenticateViaMicrosoftOAuth20?: outputs.SourceMicrosoftTeamsConfigurationCredentialsAuthenticateViaMicrosoftOAuth20;
}
export interface SourceMicrosoftTeamsConfigurationCredentialsAuthenticateViaMicrosoft {
    /**
     * The Client ID of your Microsoft Teams developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Microsoft Teams developer application.
     */
    clientSecret: string;
    /**
     * A globally unique identifier (GUID) that is different than your organization name or domain. Follow these steps to obtain: open one of the Teams where you belong inside the Teams Application > Click on the … next to the Team title > Click on Get link to team > Copy the link to the team and grab the tenant ID form the URL
     */
    tenantId: string;
}
export interface SourceMicrosoftTeamsConfigurationCredentialsAuthenticateViaMicrosoftOAuth20 {
    /**
     * The Client ID of your Microsoft Teams developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Microsoft Teams developer application.
     */
    clientSecret: string;
    /**
     * A Refresh Token to renew the expired Access Token.
     */
    refreshToken: string;
    /**
     * A globally unique identifier (GUID) that is different than your organization name or domain. Follow these steps to obtain: open one of the Teams where you belong inside the Teams Application > Click on the … next to the Team title > Click on Get link to team > Copy the link to the team and grab the tenant ID form the URL
     */
    tenantId: string;
}
export interface SourceMixpanelConfiguration {
    /**
     * A period of time for attributing results to ads and the lookback period after those actions occur during which ad results are counted. Default attribution window is 5 days. (This value should be non-negative integer). Default: 5
     */
    attributionWindow: number;
    /**
     * Choose how to authenticate to Mixpanel
     */
    credentials: outputs.SourceMixpanelConfigurationCredentials;
    /**
     * Defines window size in days, that used to slice through data. You can reduce it, if amount of data in each window is too big for your environment. (This value should be positive integer). Default: 30
     */
    dateWindowSize: number;
    /**
     * The date in the format YYYY-MM-DD. Any data after this date will not be replicated. Left empty to always sync to most recent date
     */
    endDate?: string;
    /**
     * The number of records to fetch per request for the engage stream. Default is 1000. If you are experiencing long sync times with this stream, try increasing this value. Default: 1000
     */
    pageSize: number;
    /**
     * Time zone in which integer date times are stored. The project timezone may be found in the project settings in the <a href="https://help.mixpanel.com/hc/en-us/articles/115004547203-Manage-Timezones-for-Projects-in-Mixpanel">Mixpanel console</a>. Default: "US/Pacific"
     */
    projectTimezone: string;
    /**
     * The region of mixpanel domain instance either US or EU. must be one of ["US", "EU"]; Default: "US"
     */
    region: string;
    /**
     * Setting this config parameter to TRUE ensures that new properties on events and engage records are captured. Otherwise new properties will be ignored. Default: true
     */
    selectPropertiesByDefault: boolean;
    /**
     * The date in the format YYYY-MM-DD. Any data before this date will not be replicated. If this option is not set, the connector will replicate data from up to one year ago by default.
     */
    startDate?: string;
}
export interface SourceMixpanelConfigurationCredentials {
    projectSecret?: outputs.SourceMixpanelConfigurationCredentialsProjectSecret;
    serviceAccount?: outputs.SourceMixpanelConfigurationCredentialsServiceAccount;
}
export interface SourceMixpanelConfigurationCredentialsProjectSecret {
    /**
     * Mixpanel project secret. See the <a href="https://developer.mixpanel.com/reference/project-secret#managing-a-projects-secret">docs</a> for more information on how to obtain this.
     */
    apiSecret: string;
}
export interface SourceMixpanelConfigurationCredentialsServiceAccount {
    /**
     * Your project ID number. See the <a href="https://help.mixpanel.com/hc/en-us/articles/115004490503-Project-Settings#project-id">docs</a> for more information on how to obtain this.
     */
    projectId: number;
    /**
     * Mixpanel Service Account Secret. See the <a href="https://developer.mixpanel.com/reference/service-accounts">docs</a> for more information on how to obtain this.
     */
    secret: string;
    /**
     * Mixpanel Service Account Username. See the <a href="https://developer.mixpanel.com/reference/service-accounts">docs</a> for more information on how to obtain this.
     */
    username: string;
}
export interface SourceMondayConfiguration {
    credentials?: outputs.SourceMondayConfigurationCredentials;
}
export interface SourceMondayConfigurationCredentials {
    apiToken?: outputs.SourceMondayConfigurationCredentialsApiToken;
    oAuth20?: outputs.SourceMondayConfigurationCredentialsOAuth20;
}
export interface SourceMondayConfigurationCredentialsApiToken {
    /**
     * API Token for making authenticated requests.
     */
    apiToken: string;
}
export interface SourceMondayConfigurationCredentialsOAuth20 {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken: string;
    /**
     * The Client ID of your OAuth application.
     */
    clientId: string;
    /**
     * The Client Secret of your OAuth application.
     */
    clientSecret: string;
    /**
     * Slug/subdomain of the account, or the first part of the URL that comes before .monday.com. Default: ""
     */
    subdomain: string;
}
export interface SourceMongodbV2Configuration {
    /**
     * Configures the MongoDB cluster type.
     */
    databaseConfig: outputs.SourceMongodbV2ConfigurationDatabaseConfig;
    /**
     * The maximum number of documents to sample when attempting to discover the unique fields for a collection. Default: 10000
     */
    discoverSampleSize: number;
    /**
     * The amount of time an initial load is allowed to continue for before catching up on CDC logs. Default: 8
     */
    initialLoadTimeoutHours: number;
    /**
     * The amount of time the connector will wait when it launches to determine if there is new data to sync or not. Defaults to 300 seconds. Valid range: 120 seconds to 1200 seconds. Default: 300
     */
    initialWaitingSeconds: number;
    /**
     * Determines whether Airbyte should fail or re-sync data in case of an stale/invalid cursor value into the WAL. If 'Fail sync' is chosen, a user will have to manually reset the connection before being able to continue syncing data. If 'Re-sync data' is chosen, Airbyte will automatically trigger a refresh but could lead to higher cloud costs and data loss. must be one of ["Fail sync", "Re-sync data"]; Default: "Fail sync"
     */
    invalidCdcCursorPositionBehavior: string;
    /**
     * The size of the internal queue. This may interfere with memory consumption and efficiency of the connector, please be careful. Default: 10000
     */
    queueSize: number;
    /**
     * Determines how Airbyte looks up the value of an updated document. If 'Lookup' is chosen, the current value of the document will be read. If 'Post Image' is chosen, then the version of the document immediately after an update will be read. WARNING : Severe data loss will occur if this option is chosen and the appropriate settings are not set on your Mongo instance : https://www.mongodb.com/docs/manual/changeStreams/#change-streams-with-document-pre-and-post-images. must be one of ["Lookup", "Post Image"]; Default: "Lookup"
     */
    updateCaptureMode: string;
}
export interface SourceMongodbV2ConfigurationDatabaseConfig {
    /**
     * MongoDB Atlas-hosted cluster configured as a replica set
     */
    mongoDbAtlasReplicaSet?: outputs.SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSet;
    /**
     * MongoDB self-hosted cluster configured as a replica set
     */
    selfManagedReplicaSet?: outputs.SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSet;
}
export interface SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSet {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * The authentication source where the user information is stored.  See https://www.mongodb.com/docs/manual/reference/connection-string/#mongodb-urioption-urioption.authSource for more details. Default: "admin"
     */
    authSource: string;
    /**
     * The connection string of the cluster that you want to replicate.
     */
    connectionString: string;
    /**
     * The name of the MongoDB database that contains the collection(s) to replicate.
     */
    database: string;
    /**
     * The password associated with this username.
     */
    password: string;
    /**
     * When enabled, syncs will validate and structure records against the stream's schema. Default: true
     */
    schemaEnforced: boolean;
    /**
     * The username which is used to access the database.
     */
    username: string;
}
export interface SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSet {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * The authentication source where the user information is stored. Default: "admin"
     */
    authSource: string;
    /**
     * The connection string of the cluster that you want to replicate.  https://www.mongodb.com/docs/manual/reference/connection-string/#find-your-self-hosted-deployment-s-connection-string for more information.
     */
    connectionString: string;
    /**
     * The name of the MongoDB database that contains the collection(s) to replicate.
     */
    database: string;
    /**
     * The password associated with this username.
     */
    password?: string;
    /**
     * When enabled, syncs will validate and structure records against the stream's schema. Default: true
     */
    schemaEnforced: boolean;
    /**
     * The username which is used to access the database.
     */
    username?: string;
}
export interface SourceMssqlConfiguration {
    /**
     * The name of the database.
     */
    database: string;
    /**
     * The hostname of the database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * The password associated with the username.
     */
    password: string;
    /**
     * The port of the database.
     */
    port: number;
    /**
     * Configures how data is extracted from the database.
     */
    replicationMethod?: outputs.SourceMssqlConfigurationReplicationMethod;
    /**
     * The list of schemas to sync from. Defaults to user. Case sensitive.
     */
    schemas?: string[];
    /**
     * The encryption method which is used when communicating with the database.
     */
    sslMethod?: outputs.SourceMssqlConfigurationSslMethod;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.SourceMssqlConfigurationTunnelMethod;
    /**
     * The username which is used to access the database.
     */
    username: string;
}
export interface SourceMssqlConfigurationReplicationMethod {
    /**
     * <i>Recommended</i> - Incrementally reads new inserts, updates, and deletes using the SQL Server's <a href="https://docs.airbyte.com/integrations/sources/mssql/#change-data-capture-cdc">change data capture feature</a>. This must be enabled on your database.
     */
    readChangesUsingChangeDataCaptureCdc?: outputs.SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdc;
    /**
     * Incrementally detects new inserts and updates using the <a href="https://docs.airbyte.com/understanding-airbyte/connections/incremental-append/#user-defined-cursor">cursor column</a> chosen when configuring a connection (e.g. created_at, updated_at).
     */
    scanChangesWithUserDefinedCursor?: outputs.SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor;
}
export interface SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdc {
    /**
     * The amount of time an initial load is allowed to continue for before catching up on CDC logs. Default: 8
     */
    initialLoadTimeoutHours: number;
    /**
     * The amount of time the connector will wait when it launches to determine if there is new data to sync or not. Defaults to 300 seconds. Valid range: 120 seconds to 3600 seconds. Read about <a href="https://docs.airbyte.com/integrations/sources/mysql/#change-data-capture-cdc">initial waiting time</a>. Default: 300
     */
    initialWaitingSeconds: number;
    /**
     * Determines whether Airbyte should fail or re-sync data in case of an stale/invalid cursor value into the WAL. If 'Fail sync' is chosen, a user will have to manually reset the connection before being able to continue syncing data. If 'Re-sync data' is chosen, Airbyte will automatically trigger a refresh but could lead to higher cloud costs and data loss. must be one of ["Fail sync", "Re-sync data"]; Default: "Fail sync"
     */
    invalidCdcCursorPositionBehavior: string;
    /**
     * The size of the internal queue. This may interfere with memory consumption and efficiency of the connector, please be careful. Default: 10000
     */
    queueSize: number;
}
export interface SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor {
}
export interface SourceMssqlConfigurationSslMethod {
    /**
     * Use the certificate provided by the server without verification. (For testing purposes only!)
     */
    encryptedTrustServerCertificate?: outputs.SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificate;
    /**
     * Verify and use the certificate provided by the server.
     */
    encryptedVerifyCertificate?: outputs.SourceMssqlConfigurationSslMethodEncryptedVerifyCertificate;
    /**
     * Data transfer will not be encrypted.
     */
    unencrypted?: outputs.SourceMssqlConfigurationSslMethodUnencrypted;
}
export interface SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificate {
}
export interface SourceMssqlConfigurationSslMethodEncryptedVerifyCertificate {
    /**
     * certificate of the server, or of the CA that signed the server certificate
     */
    certificate?: string;
    /**
     * Specifies the host name of the server. The value of this property must match the subject property of the certificate.
     */
    hostNameInCertificate?: string;
}
export interface SourceMssqlConfigurationSslMethodUnencrypted {
}
export interface SourceMssqlConfigurationTunnelMethod {
    noTunnel?: outputs.SourceMssqlConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.SourceMssqlConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.SourceMssqlConfigurationTunnelMethodSshKeyAuthentication;
}
export interface SourceMssqlConfigurationTunnelMethodNoTunnel {
}
export interface SourceMssqlConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface SourceMssqlConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface SourceMyHoursConfiguration {
    /**
     * Your My Hours username
     */
    email: string;
    /**
     * Pagination size used for retrieving logs in days. Default: 30
     */
    logsBatchSize: number;
    /**
     * The password associated to the username
     */
    password: string;
    /**
     * Start date for collecting time logs
     */
    startDate: string;
}
export interface SourceMysqlConfiguration {
    /**
     * The database name.
     */
    database: string;
    /**
     * The host name of the database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3). For more information read about <a href="https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-jdbc-url-format.html">JDBC URL parameters</a>.
     */
    jdbcUrlParams?: string;
    /**
     * The password associated with the username.
     */
    password?: string;
    /**
     * The port to connect to. Default: 3306
     */
    port: number;
    /**
     * Configures how data is extracted from the database.
     */
    replicationMethod: outputs.SourceMysqlConfigurationReplicationMethod;
    /**
     * Encrypt data using SSL. Default: true
     */
    ssl: boolean;
    /**
     * SSL connection modes. Read more <a href="https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-using-ssl.html"> in the docs</a>.
     */
    sslMode?: outputs.SourceMysqlConfigurationSslMode;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.SourceMysqlConfigurationTunnelMethod;
    /**
     * The username which is used to access the database.
     */
    username: string;
}
export interface SourceMysqlConfigurationReplicationMethod {
    /**
     * <i>Recommended</i> - Incrementally reads new inserts, updates, and deletes using the MySQL <a href="https://docs.airbyte.com/integrations/sources/mysql/#change-data-capture-cdc">binary log</a>. This must be enabled on your database.
     */
    readChangesUsingBinaryLogCdc?: outputs.SourceMysqlConfigurationReplicationMethodReadChangesUsingBinaryLogCdc;
    /**
     * Incrementally detects new inserts and updates using the <a href="https://docs.airbyte.com/understanding-airbyte/connections/incremental-append/#user-defined-cursor">cursor column</a> chosen when configuring a connection (e.g. created_at, updated_at).
     */
    scanChangesWithUserDefinedCursor?: outputs.SourceMysqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor;
}
export interface SourceMysqlConfigurationReplicationMethodReadChangesUsingBinaryLogCdc {
    /**
     * The amount of time an initial load is allowed to continue for before catching up on CDC logs. Default: 8
     */
    initialLoadTimeoutHours: number;
    /**
     * The amount of time the connector will wait when it launches to determine if there is new data to sync or not. Defaults to 300 seconds. Valid range: 120 seconds to 1200 seconds. Read about <a href="https://docs.airbyte.com/integrations/sources/mysql/#change-data-capture-cdc">initial waiting time</a>. Default: 300
     */
    initialWaitingSeconds: number;
    /**
     * Determines whether Airbyte should fail or re-sync data in case of an stale/invalid cursor value into the WAL. If 'Fail sync' is chosen, a user will have to manually reset the connection before being able to continue syncing data. If 'Re-sync data' is chosen, Airbyte will automatically trigger a refresh but could lead to higher cloud costs and data loss. must be one of ["Fail sync", "Re-sync data"]; Default: "Fail sync"
     */
    invalidCdcCursorPositionBehavior: string;
    /**
     * Enter the configured MySQL server timezone. This should only be done if the configured timezone in your MySQL instance does not conform to IANNA standard.
     */
    serverTimeZone?: string;
}
export interface SourceMysqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor {
}
export interface SourceMysqlConfigurationSslMode {
    /**
     * Automatically attempt SSL connection. If the MySQL server does not support SSL, continue with a regular connection.
     */
    preferred?: outputs.SourceMysqlConfigurationSslModePreferred;
    /**
     * Always connect with SSL. If the MySQL server doesn’t support SSL, the connection will not be established. Certificate Authority (CA) and Hostname are not verified.
     */
    required?: outputs.SourceMysqlConfigurationSslModeRequired;
    /**
     * Always connect with SSL. Verifies CA, but allows connection even if Hostname does not match.
     */
    verifyCa?: outputs.SourceMysqlConfigurationSslModeVerifyCa;
    /**
     * Always connect with SSL. Verify both CA and Hostname.
     */
    verifyIdentity?: outputs.SourceMysqlConfigurationSslModeVerifyIdentity;
}
export interface SourceMysqlConfigurationSslModePreferred {
}
export interface SourceMysqlConfigurationSslModeRequired {
}
export interface SourceMysqlConfigurationSslModeVerifyCa {
    /**
     * CA certificate
     */
    caCertificate: string;
    /**
     * Client certificate (this is not a required field, but if you want to use it, you will need to add the <b>Client key</b> as well)
     */
    clientCertificate?: string;
    /**
     * Client key (this is not a required field, but if you want to use it, you will need to add the <b>Client certificate</b> as well)
     */
    clientKey?: string;
    /**
     * Password for keystorage. This field is optional. If you do not add it - the password will be generated automatically.
     */
    clientKeyPassword?: string;
}
export interface SourceMysqlConfigurationSslModeVerifyIdentity {
    /**
     * CA certificate
     */
    caCertificate: string;
    /**
     * Client certificate (this is not a required field, but if you want to use it, you will need to add the <b>Client key</b> as well)
     */
    clientCertificate?: string;
    /**
     * Client key (this is not a required field, but if you want to use it, you will need to add the <b>Client certificate</b> as well)
     */
    clientKey?: string;
    /**
     * Password for keystorage. This field is optional. If you do not add it - the password will be generated automatically.
     */
    clientKeyPassword?: string;
}
export interface SourceMysqlConfigurationTunnelMethod {
    noTunnel?: outputs.SourceMysqlConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.SourceMysqlConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.SourceMysqlConfigurationTunnelMethodSshKeyAuthentication;
}
export interface SourceMysqlConfigurationTunnelMethodNoTunnel {
}
export interface SourceMysqlConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface SourceMysqlConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface SourceNetsuiteConfiguration {
    /**
     * Consumer key associated with your integration
     */
    consumerKey: string;
    /**
     * Consumer secret associated with your integration
     */
    consumerSecret: string;
    /**
     * The API names of the Netsuite objects you want to sync. Setting this speeds up the connection setup process by limiting the number of schemas that need to be retrieved from Netsuite.
     */
    objectTypes?: string[];
    /**
     * Netsuite realm e.g. 2344535, as for `production` or 2344535_SB1, as for the `sandbox`
     */
    realm: string;
    /**
     * Starting point for your data replication, in format of "YYYY-MM-DDTHH:mm:ssZ"
     */
    startDatetime: string;
    /**
     * Access token key
     */
    tokenKey: string;
    /**
     * Access token secret
     */
    tokenSecret: string;
    /**
     * The amount of days used to query the data with date chunks. Set smaller value, if you have lots of data. Default: 30
     */
    windowInDays: number;
}
export interface SourceNorthpassLmsConfiguration {
    apiKey: string;
}
export interface SourceNotionConfiguration {
    /**
     * Choose either OAuth (recommended for Airbyte Cloud) or Access Token. See our <a href='https://docs.airbyte.com/integrations/sources/notion#setup-guide'>docs</a> for more information.
     */
    credentials?: outputs.SourceNotionConfigurationCredentials;
    /**
     * UTC date and time in the format YYYY-MM-DDTHH:MM:SS.000Z. During incremental sync, any data generated before this date will not be replicated. If left blank, the start date will be set to 2 years before the present date.
     */
    startDate?: string;
}
export interface SourceNotionConfigurationCredentials {
    accessToken?: outputs.SourceNotionConfigurationCredentialsAccessToken;
    oAuth20?: outputs.SourceNotionConfigurationCredentialsOAuth20;
}
export interface SourceNotionConfigurationCredentialsAccessToken {
    /**
     * The Access Token for your private Notion integration. See the <a href='https://docs.airbyte.com/integrations/sources/notion#step-1-create-an-integration-in-notion'>docs</a> for more information on how to obtain this token.
     */
    token: string;
}
export interface SourceNotionConfigurationCredentialsOAuth20 {
    /**
     * The Access Token received by completing the OAuth flow for your Notion integration. See our <a href='https://docs.airbyte.com/integrations/sources/notion#step-2-set-permissions-and-acquire-authorization-credentials'>docs</a> for more information.
     */
    accessToken: string;
    /**
     * The Client ID of your Notion integration. See our <a href='https://docs.airbyte.com/integrations/sources/notion#step-2-set-permissions-and-acquire-authorization-credentials'>docs</a> for more information.
     */
    clientId: string;
    /**
     * The Client Secret of your Notion integration. See our <a href='https://docs.airbyte.com/integrations/sources/notion#step-2-set-permissions-and-acquire-authorization-credentials'>docs</a> for more information.
     */
    clientSecret: string;
}
export interface SourceNylasConfiguration {
    apiKey: string;
    /**
     * must be one of ["us", "eu"]
     */
    apiServer: string;
    endDate: string;
    startDate: string;
}
export interface SourceNytimesConfiguration {
    /**
     * API Key
     */
    apiKey: string;
    /**
     * End date to stop the article retrieval (format YYYY-MM)
     */
    endDate?: string;
    /**
     * Period of time (in days). must be one of ["1", "7", "30"]
     */
    period: number;
    /**
     * Share Type. must be one of ["facebook"]
     */
    shareType?: string;
    /**
     * Start date to begin the article retrieval (format YYYY-MM)
     */
    startDate: string;
}
export interface SourceOktaConfiguration {
    credentials?: outputs.SourceOktaConfigurationCredentials;
    /**
     * The Okta domain. See the <a href="https://docs.airbyte.com/integrations/sources/okta">docs</a> for instructions on how to find it.
     */
    domain?: string;
    /**
     * UTC date and time in the format YYYY-MM-DDTHH:MM:SSZ. Any data before this date will not be replicated.
     */
    startDate?: string;
}
export interface SourceOktaConfigurationCredentials {
    apiToken?: outputs.SourceOktaConfigurationCredentialsApiToken;
    oAuth20?: outputs.SourceOktaConfigurationCredentialsOAuth20;
    oAuth20WithPrivateKey?: outputs.SourceOktaConfigurationCredentialsOAuth20WithPrivateKey;
}
export interface SourceOktaConfigurationCredentialsApiToken {
    /**
     * An Okta token. See the <a href="https://docs.airbyte.com/integrations/sources/okta">docs</a> for instructions on how to generate it.
     */
    apiToken: string;
}
export interface SourceOktaConfigurationCredentialsOAuth20 {
    /**
     * The Client ID of your OAuth application.
     */
    clientId: string;
    /**
     * The Client Secret of your OAuth application.
     */
    clientSecret: string;
    /**
     * Refresh Token to obtain new Access Token, when it's expired.
     */
    refreshToken: string;
}
export interface SourceOktaConfigurationCredentialsOAuth20WithPrivateKey {
    /**
     * The Client ID of your OAuth application.
     */
    clientId: string;
    /**
     * The key ID (kid).
     */
    keyId: string;
    /**
     * The private key in PEM format
     */
    privateKey: string;
    /**
     * The OAuth scope.
     */
    scope: string;
}
export interface SourceOmnisendConfiguration {
    /**
     * API Key
     */
    apiKey: string;
}
export interface SourceOnesignalConfiguration {
    /**
     * Applications keys, see the <a href="https://documentation.onesignal.com/docs/accounts-and-keys">docs</a> for more information on how to obtain this data
     */
    applications: outputs.SourceOnesignalConfigurationApplication[];
    /**
     * Comma-separated list of names and the value (sum/count) for the returned outcome data. See the <a href="https://documentation.onesignal.com/reference/view-outcomes">docs</a> for more details
     */
    outcomeNames: string;
    /**
     * The date from which you'd like to replicate data for OneSignal API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated.
     */
    startDate: string;
    /**
     * OneSignal User Auth Key, see the <a href="https://documentation.onesignal.com/docs/accounts-and-keys#user-auth-key">docs</a> for more information on how to obtain this key.
     */
    userAuthKey: string;
}
export interface SourceOnesignalConfigurationApplication {
    appApiKey: string;
    appId: string;
    appName?: string;
}
export interface SourceOracleConfiguration {
    /**
     * Connect data that will be used for DB connection
     */
    connectionData?: outputs.SourceOracleConfigurationConnectionData;
    /**
     * The encryption method with is used when communicating with the database.
     */
    encryption?: outputs.SourceOracleConfigurationEncryption;
    /**
     * Hostname of the database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * The password associated with the username.
     */
    password?: string;
    /**
     * Port of the database.
     * Oracle Corporations recommends the following port numbers:
     * 1521 - Default listening port for client connections to the listener.
     * 2484 - Recommended and officially registered listening port for client connections to the listener using TCP/IP with SSL
     * Default: 1521
     */
    port: number;
    /**
     * The list of schemas to sync from. Defaults to user. Case sensitive.
     */
    schemas?: string[];
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.SourceOracleConfigurationTunnelMethod;
    /**
     * The username which is used to access the database.
     */
    username: string;
}
export interface SourceOracleConfigurationConnectionData {
    /**
     * Use service name
     */
    serviceName?: outputs.SourceOracleConfigurationConnectionDataServiceName;
    /**
     * Use SID (Oracle System Identifier)
     */
    systemIdsid?: outputs.SourceOracleConfigurationConnectionDataSystemIdsid;
}
export interface SourceOracleConfigurationConnectionDataServiceName {
    serviceName: string;
}
export interface SourceOracleConfigurationConnectionDataSystemIdsid {
    sid: string;
}
export interface SourceOracleConfigurationEncryption {
    /**
     * The native network encryption gives you the ability to encrypt database connections, without the configuration overhead of TCP/IP and SSL/TLS and without the need to open and listen on different ports.
     */
    nativeNetworkEncryptionNne?: outputs.SourceOracleConfigurationEncryptionNativeNetworkEncryptionNne;
    /**
     * Verify and use the certificate provided by the server.
     */
    tlsEncryptedVerifyCertificate?: outputs.SourceOracleConfigurationEncryptionTlsEncryptedVerifyCertificate;
    /**
     * Data transfer will not be encrypted.
     */
    unencrypted?: outputs.SourceOracleConfigurationEncryptionUnencrypted;
}
export interface SourceOracleConfigurationEncryptionNativeNetworkEncryptionNne {
    /**
     * This parameter defines what encryption algorithm is used. must be one of ["AES256", "RC4_56", "3DES168"]; Default: "AES256"
     */
    encryptionAlgorithm: string;
}
export interface SourceOracleConfigurationEncryptionTlsEncryptedVerifyCertificate {
    /**
     * Privacy Enhanced Mail (PEM) files are concatenated certificate containers frequently used in certificate installations.
     */
    sslCertificate: string;
}
export interface SourceOracleConfigurationEncryptionUnencrypted {
}
export interface SourceOracleConfigurationTunnelMethod {
    noTunnel?: outputs.SourceOracleConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.SourceOracleConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.SourceOracleConfigurationTunnelMethodSshKeyAuthentication;
}
export interface SourceOracleConfigurationTunnelMethodNoTunnel {
}
export interface SourceOracleConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface SourceOracleConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface SourceOrbConfiguration {
    /**
     * Orb API Key, issued from the Orb admin console.
     */
    apiKey: string;
    /**
     * UTC date and time in the format 2022-03-01T00:00:00Z. Any data with created_at after this data will not be synced. For Subscription Usage, this becomes the `timeframe_start` API parameter.
     */
    endDate?: string;
    /**
     * When set to N, the connector will always refresh resources created within the past N days. By default, updated objects that are not newly created are not incrementally synced. Default: 0
     */
    lookbackWindowDays: number;
    /**
     * Property key names to extract from all events, in order to enrich ledger entries corresponding to an event deduction.
     */
    numericEventPropertiesKeys?: string[];
    /**
     * Orb Plan ID to filter subscriptions that should have usage fetched.
     */
    planId?: string;
    /**
     * UTC date and time in the format 2022-03-01T00:00:00Z. Any data with created_at before this data will not be synced. For Subscription Usage, this becomes the `timeframe_start` API parameter.
     */
    startDate: string;
    /**
     * Property key names to extract from all events, in order to enrich ledger entries corresponding to an event deduction.
     */
    stringEventPropertiesKeys?: string[];
    /**
     * Property key name to group subscription usage by.
     */
    subscriptionUsageGroupingKey?: string;
}
export interface SourceOrbitConfiguration {
    /**
     * Authorizes you to work with Orbit workspaces associated with the token.
     */
    apiToken: string;
    /**
     * Date in the format 2022-06-26. Only load members whose last activities are after this date.
     */
    startDate?: string;
    /**
     * The unique name of the workspace that your API token is associated with.
     */
    workspace: string;
}
export interface SourceOutbrainAmplifyConfiguration {
    /**
     * Credentials for making authenticated requests requires either username/password or access_token.
     */
    credentials: outputs.SourceOutbrainAmplifyConfigurationCredentials;
    /**
     * Date in the format YYYY-MM-DD.
     */
    endDate?: string;
    /**
     * The granularity used for geo location data in reports. must be one of ["country", "region", "subregion"]
     */
    geoLocationBreakdown?: string;
    /**
     * The granularity used for periodic data in reports. See <a href="https://amplifyv01.docs.apiary.io/#reference/performance-reporting/periodic/retrieve-performance-statistics-for-all-marketer-campaigns-by-periodic-breakdown">the docs</a>. must be one of ["daily", "weekly", "monthly"]
     */
    reportGranularity?: string;
    /**
     * Date in the format YYYY-MM-DD eg. 2017-01-25. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceOutbrainAmplifyConfigurationCredentials {
    accessToken?: outputs.SourceOutbrainAmplifyConfigurationCredentialsAccessToken;
    usernamePassword?: outputs.SourceOutbrainAmplifyConfigurationCredentialsUsernamePassword;
}
export interface SourceOutbrainAmplifyConfigurationCredentialsAccessToken {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken: string;
}
export interface SourceOutbrainAmplifyConfigurationCredentialsUsernamePassword {
    /**
     * Add Password for authentication.
     */
    password: string;
    /**
     * Add Username for authentication.
     */
    username: string;
}
export interface SourceOutreachConfiguration {
    /**
     * The Client ID of your Outreach developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Outreach developer application.
     */
    clientSecret: string;
    /**
     * A Redirect URI is the location where the authorization server sends the user once the app has been successfully authorized and granted an authorization code or access token.
     */
    redirectUri: string;
    /**
     * The token for obtaining the new access token.
     */
    refreshToken: string;
    /**
     * The date from which you'd like to replicate data for Outreach API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated.
     */
    startDate: string;
}
export interface SourcePaypalTransactionConfiguration {
    /**
     * The Client ID of your Paypal developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Paypal developer application.
     */
    clientSecret: string;
    /**
     * Start Date parameter for the list dispute endpoint in <a href=\"https://datatracker.ietf.org/doc/html/rfc3339#section-5.6\">ISO format</a>. This Start Date must be in range within 180 days before present time, and requires ONLY 3 miliseconds(mandatory). If you don't use this option, it defaults to a start date set 180 days in the past.
     */
    disputeStartDate?: string;
    /**
     * End Date for data extraction in <a href=\"https://datatracker.ietf.org/doc/html/rfc3339#section-5.6\">ISO format</a>. This can be help you select specific range of time, mainly for test purposes  or data integrity tests. When this is not used, now_utc() is used by the streams. This does not apply to Disputes and Product streams.
     */
    endDate?: string;
    /**
     * Determines whether to use the sandbox or production environment. Default: false
     */
    isSandbox: boolean;
    /**
     * The key to refresh the expired access token.
     */
    refreshToken?: string;
    /**
     * Start Date for data extraction in <a href=\"https://datatracker.ietf.org/doc/html/rfc3339#section-5.6\">ISO format</a>. Date must be in range from 3 years till 12 hrs before present time.
     */
    startDate: string;
    /**
     * The number of days per request. Must be a number between 1 and 31. Default: 7
     */
    timeWindow: number;
}
export interface SourcePaystackConfiguration {
    /**
     * When set, the connector will always reload data from the past N days, where N is the value set here. This is useful if your data is updated after creation. Default: 0
     */
    lookbackWindowDays: number;
    /**
     * The Paystack API key (usually starts with 'sk_live_'; find yours <a href="https://dashboard.paystack.com/#/settings/developer">here</a>).
     */
    secretKey: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourcePendoConfiguration {
    apiKey: string;
}
export interface SourcePennylaneConfiguration {
    apiKey: string;
    startTime: string;
}
export interface SourcePersistiqConfiguration {
    /**
     * PersistIq API Key. See the <a href="https://apidocs.persistiq.com/#authentication">docs</a> for more information on where to find that key.
     */
    apiKey: string;
}
export interface SourcePexelsApiConfiguration {
    /**
     * API key is required to access pexels api, For getting your's goto https://www.pexels.com/api/documentation and create account for free.
     */
    apiKey: string;
    /**
     * Optional, Desired photo color. Supported colors red, orange, yellow, green, turquoise, blue, violet, pink, brown, black, gray, white or any hexidecimal color code.
     */
    color?: string;
    /**
     * Optional, The locale of the search you are performing. The current supported locales are 'en-US' 'pt-BR' 'es-ES' 'ca-ES' 'de-DE' 'it-IT' 'fr-FR' 'sv-SE' 'id-ID' 'pl-PL' 'ja-JP' 'zh-TW' 'zh-CN' 'ko-KR' 'th-TH' 'nl-NL' 'hu-HU' 'vi-VN' 'cs-CZ' 'da-DK' 'fi-FI' 'uk-UA' 'el-GR' 'ro-RO' 'nb-NO' 'sk-SK' 'tr-TR' 'ru-RU'.
     */
    locale?: string;
    /**
     * Optional, Desired photo orientation. The current supported orientations are landscape, portrait or square
     */
    orientation?: string;
    /**
     * Optional, the search query, Example Ocean, Tigers, Pears, etc.
     */
    query: string;
    /**
     * Optional, Minimum photo size. The current supported sizes are large(24MP), medium(12MP) or small(4MP).
     */
    size?: string;
}
export interface SourcePicqerConfiguration {
    /**
     * The organization name which is used to login to picqer
     */
    organizationName: string;
    password?: string;
    startDate: string;
    username: string;
}
export interface SourcePinterestConfiguration {
    credentials?: outputs.SourcePinterestConfigurationCredentials;
    /**
     * A list which contains ad statistics entries, each entry must have a name and can contains fields, breakdowns or action_breakdowns. Click on "add" to fill this field.
     */
    customReports?: outputs.SourcePinterestConfigurationCustomReport[];
    /**
     * A date in the format YYYY-MM-DD. If you have not set a date, it would be defaulted to latest allowed date by api (89 days from today).
     */
    startDate?: string;
    /**
     * For the ads, ad_groups, and campaigns streams, specifying a status will filter out records that do not match the specified ones. If a status is not specified, the source will default to records with a status of either ACTIVE or PAUSED.
     */
    statuses?: string[];
}
export interface SourcePinterestConfigurationCredentials {
    /**
     * The Client ID of your OAuth application
     */
    clientId: string;
    /**
     * The Client Secret of your OAuth application.
     */
    clientSecret: string;
    /**
     * Refresh Token to obtain new Access Token, when it's expired.
     */
    refreshToken: string;
}
export interface SourcePinterestConfigurationCustomReport {
    /**
     * List of types of attribution for the conversion report
     */
    attributionTypes?: string[];
    /**
     * Number of days to use as the conversion attribution window for a pin click action. must be one of ["0", "1", "7", "14", "30", "60"]; Default: 30
     */
    clickWindowDays: number;
    /**
     * A list of chosen columns
     */
    columns: string[];
    /**
     * The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event.. must be one of ["TIME_OF_AD_ACTION", "TIME_OF_CONVERSION"]; Default: "TIME_OF_AD_ACTION"
     */
    conversionReportTime: string;
    /**
     * Number of days to use as the conversion attribution window for an engagement action. must be one of ["0", "1", "7", "14", "30", "60"]; Default: [30]
     */
    engagementWindowDays: number;
    /**
     * Chosen granularity for API. must be one of ["TOTAL", "DAY", "HOUR", "WEEK", "MONTH"]; Default: "TOTAL"
     */
    granularity: string;
    /**
     * Chosen level for API. must be one of ["ADVERTISER", "ADVERTISER_TARGETING", "CAMPAIGN", "CAMPAIGN_TARGETING", "AD_GROUP", "AD_GROUP_TARGETING", "PIN_PROMOTION", "PIN_PROMOTION_TARGETING", "KEYWORD", "PRODUCT_GROUP", "PRODUCT_GROUP_TARGETING", "PRODUCT_ITEM"]; Default: "ADVERTISER"
     */
    level: string;
    /**
     * The name value of report
     */
    name: string;
    /**
     * A date in the format YYYY-MM-DD. If you have not set a date, it would be defaulted to latest allowed date by report api (913 days from today).
     */
    startDate?: string;
    /**
     * Number of days to use as the conversion attribution window for a view action. must be one of ["0", "1", "7", "14", "30", "60"]; Default: [30]
     */
    viewWindowDays: number;
}
export interface SourcePipedriveConfiguration {
    /**
     * The Pipedrive API Token.
     */
    apiToken: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. When specified and not None, then stream will behave as incremental
     */
    replicationStartDate: string;
}
export interface SourcePiwikConfiguration {
    clientId: string;
    clientSecret: string;
    /**
     * The organization id appearing at URL of your piwik website
     */
    organizationId: string;
}
export interface SourcePlanhatConfiguration {
    /**
     * Your Planhat <a href="https://docs.planhat.com/#authentication">API Access Token</a>
     */
    apiToken: string;
}
export interface SourcePocketConfiguration {
    /**
     * The user's Pocket access token.
     */
    accessToken: string;
    /**
     * Your application's Consumer Key.
     */
    consumerKey: string;
    /**
     * Select the content type of the items to retrieve. must be one of ["article", "video", "image"]
     */
    contentType?: string;
    /**
     * Select the granularity of the information about each item. must be one of ["simple", "complete"]
     */
    detailType?: string;
    /**
     * Only return items from a particular `domain`.
     */
    domain?: string;
    /**
     * Retrieve only favorited items. Default: false
     */
    favorite: boolean;
    /**
     * Only return items whose title or url contain the `search` string.
     */
    search?: string;
    /**
     * Only return items modified since the given timestamp.
     */
    since?: string;
    /**
     * Sort retrieved items by the given criteria. must be one of ["newest", "oldest", "title", "site"]
     */
    sort?: string;
    /**
     * Select the state of the items to retrieve. must be one of ["unread", "archive", "all"]
     */
    state?: string;
    /**
     * Return only items tagged with this tag name. Use _untagged_ for retrieving only untagged items.
     */
    tag?: string;
}
export interface SourcePokeapiConfiguration {
    /**
     * Pokemon requested from the API. must be one of ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoranf", "nidorina", "nidoqueen", "nidoranm", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mrmime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho-oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mimejr", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon-z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "reshiram", "zekrom", "landorus", "kyurem", "keldeo", "meloetta", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge", "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie", "hoopa", "volcanion", "rowlet", "dartrix", "decidueye", "litten", "torracat", "incineroar", "popplio", "brionne", "primarina", "pikipek", "trumbeak", "toucannon", "yungoos", "gumshoos", "grubbin", "charjabug", "vikavolt", "crabrawler", "crabominable", "oricorio", "cutiefly", "ribombee", "rockruff", "lycanroc", "wishiwashi", "mareanie", "toxapex", "mudbray", "mudsdale", "dewpider", "araquanid", "fomantis", "lurantis", "morelull", "shiinotic", "salandit", "salazzle", "stufful", "bewear", "bounsweet", "steenee", "tsareena", "comfey", "oranguru", "passimian", "wimpod", "golisopod", "sandygast", "palossand", "pyukumuku", "typenull", "silvally", "minior", "komala", "turtonator", "togedemaru", "mimikyu", "bruxish", "drampa", "dhelmise", "jangmo-o", "hakamo-o", "kommo-o", "tapukoko", "tapulele", "tapubulu", "tapufini", "cosmog", "cosmoem", "solgaleo", "lunala", "nihilego", "buzzwole", "pheromosa", "xurkitree", "celesteela", "kartana", "guzzlord", "necrozma", "magearna", "marshadow", "poipole", "naganadel", "stakataka", "blacephalon", "zeraora", "meltan", "melmetal", "grookey", "thwackey", "rillaboom", "scorbunny", "raboot", "cinderace", "sobble", "drizzile", "inteleon", "skwovet", "greedent", "rookidee", "corvisquire", "corviknight", "blipbug", "dottler", "orbeetle", "nickit", "thievul", "gossifleur", "eldegoss", "wooloo", "dubwool", "chewtle", "drednaw", "yamper", "boltund", "rolycoly", "carkol", "coalossal", "applin", "flapple", "appletun", "silicobra", "sandaconda", "cramorant", "arrokuda", "barraskewda", "toxel", "toxtricity", "sizzlipede", "centiskorch", "clobbopus", "grapploct", "sinistea", "polteageist", "hatenna", "hattrem", "hatterene", "impidimp", "morgrem", "grimmsnarl", "obstagoon", "perrserker", "cursola", "sirfetchd", "mrrime", "runerigus", "milcery", "alcremie", "falinks", "pincurchin", "snom", "frosmoth", "stonjourner", "eiscue", "indeedee", "morpeko", "cufant", "copperajah", "dracozolt", "arctozolt", "dracovish", "arctovish", "duraludon", "dreepy", "drakloak", "dragapult", "zacian", "zamazenta", "eternatus", "kubfu", "urshifu", "zarude", "regieleki", "regidrago", "glastrier", "spectrier", "calyrex"]
     */
    pokemonName: string;
}
export interface SourcePolygonStockApiConfiguration {
    /**
     * Determines whether or not the results are adjusted for splits. By default, results are adjusted and set to true. Set this to false to get results that are NOT adjusted for splits.
     */
    adjusted?: string;
    /**
     * Your API ACCESS Key
     */
    apiKey: string;
    /**
     * The target date for the aggregate window.
     */
    endDate: string;
    /**
     * The target date for the aggregate window.
     */
    limit?: number;
    /**
     * The size of the timespan multiplier.
     */
    multiplier: number;
    /**
     * Sort the results by timestamp. asc will return results in ascending order (oldest at the top), desc will return results in descending order (newest at the top).
     */
    sort?: string;
    /**
     * The beginning date for the aggregate window.
     */
    startDate: string;
    /**
     * The exchange symbol that this item is traded under.
     */
    stocksTicker: string;
    /**
     * The size of the time window.
     */
    timespan: string;
}
export interface SourcePostgresConfiguration {
    /**
     * Name of the database.
     */
    database: string;
    /**
     * Hostname of the database.
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (Eg. key1=value1&key2=value2&key3=value3). For more information read about <a href="https://jdbc.postgresql.org/documentation/head/connect.html">JDBC URL parameters</a>.
     */
    jdbcUrlParams?: string;
    /**
     * Password associated with the username.
     */
    password?: string;
    /**
     * Port of the database. Default: 5432
     */
    port: number;
    /**
     * Configures how data is extracted from the database.
     */
    replicationMethod?: outputs.SourcePostgresConfigurationReplicationMethod;
    /**
     * The list of schemas (case sensitive) to sync from. Defaults to public.
     */
    schemas?: string[];
    /**
     * SSL connection modes.
     *   Read more <a href="https://jdbc.postgresql.org/documentation/head/ssl-client.html"> in the docs</a>.
     */
    sslMode?: outputs.SourcePostgresConfigurationSslMode;
    /**
     * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
     */
    tunnelMethod?: outputs.SourcePostgresConfigurationTunnelMethod;
    /**
     * Username to access the database.
     */
    username: string;
}
export interface SourcePostgresConfigurationReplicationMethod {
    /**
     * <i>Recommended</i> - Incrementally reads new inserts and updates via Postgres <a href="https://docs.airbyte.com/integrations/sources/postgres/#xmin">Xmin system column</a>. Suitable for databases that have low transaction pressure.
     */
    detectChangesWithXminSystemColumn?: outputs.SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumn;
    /**
     * <i>Recommended</i> - Incrementally reads new inserts, updates, and deletes using the Postgres <a href="https://docs.airbyte.com/integrations/sources/postgres/#cdc">write-ahead log (WAL)</a>. This needs to be configured on the source database itself. Recommended for tables of any size.
     */
    readChangesUsingWriteAheadLogCdc?: outputs.SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdc;
    /**
     * Incrementally detects new inserts and updates using the <a href="https://docs.airbyte.com/understanding-airbyte/connections/incremental-append/#user-defined-cursor">cursor column</a> chosen when configuring a connection (e.g. created_at, updated_at).
     */
    scanChangesWithUserDefinedCursor?: outputs.SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursor;
}
export interface SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumn {
}
export interface SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdc {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * Specifies a query that the connector executes on the source database when the connector sends a heartbeat message. Please see the <a href="https://docs.airbyte.com/integrations/sources/postgres/postgres-troubleshooting#advanced-wal-disk-consumption-and-heartbeat-action-query">setup guide</a> for how and when to configure this setting. Default: ""
     */
    heartbeatActionQuery: string;
    /**
     * The amount of time an initial load is allowed to continue for before catching up on CDC logs. Default: 8
     */
    initialLoadTimeoutHours: number;
    /**
     * The amount of time the connector will wait when it launches to determine if there is new data to sync or not. Defaults to 1200 seconds. Valid range: 120 seconds to 2400 seconds. Read about <a href="https://docs.airbyte.com/integrations/sources/postgres/postgres-troubleshooting#advanced-setting-up-initial-cdc-waiting-time">initial waiting time</a>. Default: 1200
     */
    initialWaitingSeconds: number;
    /**
     * Determines whether Airbyte should fail or re-sync data in case of an stale/invalid cursor value into the WAL. If 'Fail sync' is chosen, a user will have to manually reset the connection before being able to continue syncing data. If 'Re-sync data' is chosen, Airbyte will automatically trigger a refresh but could lead to higher cloud costs and data loss. must be one of ["Fail sync", "Re-sync data"]; Default: "Fail sync"
     */
    invalidCdcCursorPositionBehavior: string;
    /**
     * Determines when Airbyte should flush the LSN of processed WAL logs in the source database. `After loading Data in the destination` is default. If `While reading Data` is selected, in case of a downstream failure (while loading data into the destination), next sync would result in a full sync. must be one of ["While reading Data", "After loading Data in the destination"]; Default: "After loading Data in the destination"
     */
    lsnCommitBehaviour: string;
    /**
     * A logical decoding plugin installed on the PostgreSQL server. must be one of ["pgoutput"]; Default: "pgoutput"
     */
    plugin: string;
    /**
     * A Postgres publication used for consuming changes. Read about <a href="https://docs.airbyte.com/integrations/sources/postgres#step-4-create-publications-and-replication-identities-for-tables">publications and replication identities</a>.
     */
    publication: string;
    /**
     * The size of the internal queue. This may interfere with memory consumption and efficiency of the connector, please be careful. Default: 10000
     */
    queueSize: number;
    /**
     * A plugin logical replication slot. Read about <a href="https://docs.airbyte.com/integrations/sources/postgres#step-3-create-replication-slot">replication slots</a>.
     */
    replicationSlot: string;
}
export interface SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursor {
}
export interface SourcePostgresConfigurationSslMode {
    /**
     * Enables encryption only when required by the source database.
     */
    allow?: outputs.SourcePostgresConfigurationSslModeAllow;
    /**
     * Disables encryption of communication between Airbyte and source database.
     */
    disable?: outputs.SourcePostgresConfigurationSslModeDisable;
    /**
     * Allows unencrypted connection only if the source database does not support encryption.
     */
    prefer?: outputs.SourcePostgresConfigurationSslModePrefer;
    /**
     * Always require encryption. If the source database server does not support encryption, connection will fail.
     */
    require?: outputs.SourcePostgresConfigurationSslModeRequire;
    /**
     * Always require encryption and verifies that the source database server has a valid SSL certificate.
     */
    verifyCa?: outputs.SourcePostgresConfigurationSslModeVerifyCa;
    /**
     * This is the most secure mode. Always require encryption and verifies the identity of the source database server.
     */
    verifyFull?: outputs.SourcePostgresConfigurationSslModeVerifyFull;
}
export interface SourcePostgresConfigurationSslModeAllow {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
}
export interface SourcePostgresConfigurationSslModeDisable {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
}
export interface SourcePostgresConfigurationSslModePrefer {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
}
export interface SourcePostgresConfigurationSslModeRequire {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
}
export interface SourcePostgresConfigurationSslModeVerifyCa {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * CA certificate
     */
    caCertificate: string;
    /**
     * Client certificate
     */
    clientCertificate?: string;
    /**
     * Client key
     */
    clientKey?: string;
    /**
     * Password for keystorage. If you do not add it - the password will be generated automatically.
     */
    clientKeyPassword?: string;
}
export interface SourcePostgresConfigurationSslModeVerifyFull {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * CA certificate
     */
    caCertificate: string;
    /**
     * Client certificate
     */
    clientCertificate?: string;
    /**
     * Client key
     */
    clientKey?: string;
    /**
     * Password for keystorage. If you do not add it - the password will be generated automatically.
     */
    clientKeyPassword?: string;
}
export interface SourcePostgresConfigurationTunnelMethod {
    noTunnel?: outputs.SourcePostgresConfigurationTunnelMethodNoTunnel;
    passwordAuthentication?: outputs.SourcePostgresConfigurationTunnelMethodPasswordAuthentication;
    sshKeyAuthentication?: outputs.SourcePostgresConfigurationTunnelMethodSshKeyAuthentication;
}
export interface SourcePostgresConfigurationTunnelMethodNoTunnel {
}
export interface SourcePostgresConfigurationTunnelMethodPasswordAuthentication {
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host
     */
    tunnelUser: string;
    /**
     * OS-level password for logging into the jump server host
     */
    tunnelUserPassword: string;
}
export interface SourcePostgresConfigurationTunnelMethodSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    sshKey: string;
    /**
     * Hostname of the jump server host that allows inbound ssh tunnel.
     */
    tunnelHost: string;
    /**
     * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
     */
    tunnelPort: number;
    /**
     * OS-level username for logging into the jump server host.
     */
    tunnelUser: string;
}
export interface SourcePosthogConfiguration {
    /**
     * API Key. See the <a href="https://docs.airbyte.com/integrations/sources/posthog">docs</a> for information on how to generate this key.
     */
    apiKey: string;
    /**
     * Base PostHog url. Defaults to PostHog Cloud (https://app.posthog.com). Default: "https://app.posthog.com"
     */
    baseUrl: string;
    /**
     * Set lower value in case of failing long running sync of events stream. Default: 30
     */
    eventsTimeStep: number;
    /**
     * The date from which you'd like to replicate the data. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourcePostmarkappConfiguration {
    /**
     * API Key for account
     */
    xPostmarkAccountToken: string;
    /**
     * API Key for server
     */
    xPostmarkServerToken: string;
}
export interface SourcePrestashopConfiguration {
    /**
     * Your PrestaShop access key. See <a href="https://devdocs.prestashop.com/1.7/webservice/tutorials/creating-access/#create-an-access-key"> the docs </a> for info on how to obtain this.
     */
    accessKey: string;
    /**
     * The Start date in the format YYYY-MM-DD.
     */
    startDate: string;
    /**
     * Shop URL without trailing slash.
     */
    url: string;
}
export interface SourceProductboardConfiguration {
    /**
     * Your Productboard access token. See https://developer.productboard.com/reference/authentication for steps to generate one.
     */
    accessToken: string;
    startDate: string;
}
export interface SourceProductiveConfiguration {
    apiKey: string;
    /**
     * The organization ID which could be seen from `https://app.productive.io/xxxx-xxxx/settings/api-integrations` page
     */
    organizationId: string;
}
export interface SourcePypiConfiguration {
    /**
     * Name of the project/package. Can only be in lowercase with hyphen. This is the name used using pip command for installing the package.
     */
    projectName: string;
    /**
     * Version of the project/package.  Use it to find a particular release instead of all releases.
     */
    version?: string;
}
export interface SourceQualarooConfiguration {
    /**
     * A Qualaroo token. See the <a href="https://help.qualaroo.com/hc/en-us/articles/201969438-The-REST-Reporting-API">docs</a> for instructions on how to generate it.
     */
    key: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
    /**
     * IDs of the surveys from which you'd like to replicate data. If left empty, data from all surveys to which you have access will be replicated.
     */
    surveyIds?: string[];
    /**
     * A Qualaroo token. See the <a href="https://help.qualaroo.com/hc/en-us/articles/201969438-The-REST-Reporting-API">docs</a> for instructions on how to generate it.
     */
    token: string;
}
export interface SourceRailzConfiguration {
    /**
     * Client ID (client_id)
     */
    clientId: string;
    /**
     * Secret key (secret_key)
     */
    secretKey: string;
    /**
     * Start date
     */
    startDate: string;
}
export interface SourceRechargeConfiguration {
    /**
     * The value of the Access Token generated. See the <a href="https://docs.airbyte.com/integrations/sources/recharge">docs</a> for more information.
     */
    accessToken: string;
    /**
     * The date from which you'd like to replicate data for Recharge API, in the format YYYY-MM-DDT00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
    /**
     * Define whether or not the `Orders` stream should use the deprecated `2021-01` API version, or use `2021-11`, otherwise. Default: true
     */
    useOrdersDeprecatedApi: boolean;
}
export interface SourceRecreationConfiguration {
    /**
     * API Key
     */
    apikey: string;
    queryCampsites?: string;
}
export interface SourceRecruiteeConfiguration {
    /**
     * Recruitee API Key. See <a href="https://docs.recruitee.com/reference/getting-started#generate-api-token">here</a>.
     */
    apiKey: string;
    /**
     * Recruitee Company ID. You can also find this ID on the <a href="https://app.recruitee.com/#/settings/api_tokens">Recruitee API tokens page</a>.
     */
    companyId: number;
}
export interface SourceRecurlyConfiguration {
    /**
     * Recurly API Key. See the  <a href="https://docs.airbyte.com/integrations/sources/recurly">docs</a> for more information on how to generate this key.
     */
    apiKey: string;
    /**
     * ISO8601 timestamp from which the replication from Recurly API will start from.
     */
    beginTime?: string;
    /**
     * ISO8601 timestamp to which the replication from Recurly API will stop. Records after that date won't be imported.
     */
    endTime?: string;
}
export interface SourceRedditConfiguration {
    apiKey: string;
    /**
     * Specifies exact keyword and reduces distractions
     */
    exact?: boolean;
    /**
     * Includes mature content. Default: false
     */
    includeOver18: boolean;
    /**
     * Max records per page limit. Default: "1000"
     */
    limit: number;
    /**
     * Specifies the query for searching in reddits and subreddits. Default: "airbyte"
     */
    query: string;
    startDate: string;
    /**
     * Subreddits for exploration
     */
    subreddits?: string[];
}
export interface SourceRedshiftConfiguration {
    /**
     * Name of the database.
     */
    database: string;
    /**
     * Host Endpoint of the Redshift Cluster (must include the cluster-id, region and end with .redshift.amazonaws.com).
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * Password associated with the username.
     */
    password: string;
    /**
     * Port of the database. Default: 5439
     */
    port: number;
    /**
     * The list of schemas to sync from. Specify one or more explicitly or keep empty to process all schemas. Schema names are case sensitive.
     */
    schemas?: string[];
    /**
     * Username to use to access the database.
     */
    username: string;
}
export interface SourceRetentlyConfiguration {
    /**
     * Choose how to authenticate to Retently
     */
    credentials?: outputs.SourceRetentlyConfigurationCredentials;
}
export interface SourceRetentlyConfigurationCredentials {
    authenticateViaRetentlyOAuth?: outputs.SourceRetentlyConfigurationCredentialsAuthenticateViaRetentlyOAuth;
    authenticateWithApiToken?: outputs.SourceRetentlyConfigurationCredentialsAuthenticateWithApiToken;
}
export interface SourceRetentlyConfigurationCredentialsAuthenticateViaRetentlyOAuth {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * The Client ID of your Retently developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Retently developer application.
     */
    clientSecret: string;
    /**
     * Retently Refresh Token which can be used to fetch new Bearer Tokens when the current one expires.
     */
    refreshToken: string;
}
export interface SourceRetentlyConfigurationCredentialsAuthenticateWithApiToken {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * Retently API Token. See the <a href="https://app.retently.com/settings/api/tokens">docs</a> for more information on how to obtain this key.
     */
    apiKey: string;
}
export interface SourceRkiCovidConfiguration {
    /**
     * UTC date in the format 2017-01-25. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceRssConfiguration {
    /**
     * RSS Feed URL
     */
    url: string;
}
export interface SourceS3Configuration {
    /**
     * In order to access private Buckets stored on AWS S3, this connector requires credentials with the proper permissions. If accessing publicly available data, this field is not necessary.
     */
    awsAccessKeyId?: string;
    /**
     * In order to access private Buckets stored on AWS S3, this connector requires credentials with the proper permissions. If accessing publicly available data, this field is not necessary.
     */
    awsSecretAccessKey?: string;
    /**
     * Name of the S3 bucket where the file(s) exist.
     */
    bucket: string;
    /**
     * Endpoint to an S3 compatible service. Leave empty to use AWS. Default: ""
     */
    endpoint: string;
    /**
     * AWS region where the S3 bucket is located. If not provided, the region will be determined automatically.
     */
    regionName?: string;
    /**
     * Specifies the Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations requested using this profile. Set the External ID to the Airbyte workspace ID, which can be found in the URL of this page.
     */
    roleArn?: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
     */
    startDate?: string;
    /**
     * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
     */
    streams: outputs.SourceS3ConfigurationStream[];
}
export interface SourceS3ConfigurationStream {
    /**
     * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
     */
    daysToSyncIfHistoryIsFull: number;
    /**
     * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
     */
    format: outputs.SourceS3ConfigurationStreamFormat;
    /**
     * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
     */
    globs?: string[];
    /**
     * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
     */
    inputSchema?: string;
    /**
     * The name of the stream.
     */
    name: string;
    /**
     * The number of resent files which will be used to discover the schema for this stream.
     */
    recentNFilesToReadForSchemaDiscovery?: number;
    /**
     * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
     */
    schemaless: boolean;
    /**
     * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. must be one of ["Emit Record", "Skip Record", "Wait for Discover"]; Default: "Emit Record"
     */
    validationPolicy: string;
}
export interface SourceS3ConfigurationStreamFormat {
    avroFormat?: outputs.SourceS3ConfigurationStreamFormatAvroFormat;
    csvFormat?: outputs.SourceS3ConfigurationStreamFormatCsvFormat;
    jsonlFormat?: outputs.SourceS3ConfigurationStreamFormatJsonlFormat;
    parquetFormat?: outputs.SourceS3ConfigurationStreamFormatParquetFormat;
    /**
     * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
     */
    unstructuredDocumentFormat?: outputs.SourceS3ConfigurationStreamFormatUnstructuredDocumentFormat;
}
export interface SourceS3ConfigurationStreamFormatAvroFormat {
    /**
     * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
     */
    doubleAsString: boolean;
}
export interface SourceS3ConfigurationStreamFormatCsvFormat {
    /**
     * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
     */
    delimiter: string;
    /**
     * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
     */
    doubleQuote: boolean;
    /**
     * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
     */
    encoding: string;
    /**
     * The character used for escaping special characters. To disallow escaping, leave this field blank.
     */
    escapeChar?: string;
    /**
     * A set of case-sensitive strings that should be interpreted as false values.
     */
    falseValues?: string[];
    /**
     * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
     */
    headerDefinition?: outputs.SourceS3ConfigurationStreamFormatCsvFormatHeaderDefinition;
    /**
     * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
     */
    ignoreErrorsOnFieldsMismatch: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
     */
    nullValues?: string[];
    /**
     * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
     */
    quoteChar: string;
    /**
     * The number of rows to skip after the header row. Default: 0
     */
    skipRowsAfterHeader: number;
    /**
     * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
     */
    skipRowsBeforeHeader: number;
    /**
     * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
     */
    stringsCanBeNull: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as true values.
     */
    trueValues?: string[];
}
export interface SourceS3ConfigurationStreamFormatCsvFormatHeaderDefinition {
    autogenerated?: outputs.SourceS3ConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated;
    fromCsv?: outputs.SourceS3ConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv;
    userProvided?: outputs.SourceS3ConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided;
}
export interface SourceS3ConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated {
}
export interface SourceS3ConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv {
}
export interface SourceS3ConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided {
    /**
     * The column names that will be used while emitting the CSV records
     */
    columnNames: string[];
}
export interface SourceS3ConfigurationStreamFormatJsonlFormat {
}
export interface SourceS3ConfigurationStreamFormatParquetFormat {
    /**
     * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
     */
    decimalAsFloat: boolean;
}
export interface SourceS3ConfigurationStreamFormatUnstructuredDocumentFormat {
    /**
     * Processing configuration
     */
    processing?: outputs.SourceS3ConfigurationStreamFormatUnstructuredDocumentFormatProcessing;
    /**
     * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
     */
    skipUnprocessableFiles: boolean;
    /**
     * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. must be one of ["auto", "fast", "ocr_only", "hi_res"]; Default: "auto"
     */
    strategy: string;
}
export interface SourceS3ConfigurationStreamFormatUnstructuredDocumentFormatProcessing {
    /**
     * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
     */
    local?: outputs.SourceS3ConfigurationStreamFormatUnstructuredDocumentFormatProcessingLocal;
}
export interface SourceS3ConfigurationStreamFormatUnstructuredDocumentFormatProcessingLocal {
}
export interface SourceSalesforceConfiguration {
    /**
     * Enter your Salesforce developer application's <a href="https://developer.salesforce.com/forums/?id=9062I000000DLgbQAG">Client ID</a>
     */
    clientId: string;
    /**
     * Enter your Salesforce developer application's <a href="https://developer.salesforce.com/forums/?id=9062I000000DLgbQAG">Client secret</a>
     */
    clientSecret: string;
    /**
     * Toggle to use Bulk API (this might cause empty fields for some streams). Default: false
     */
    forceUseBulkApi: boolean;
    /**
     * Toggle if you're using a <a href="https://help.salesforce.com/s/articleView?id=sf.deploy_sandboxes_parent.htm&type=5">Salesforce Sandbox</a>. Default: false
     */
    isSandbox: boolean;
    /**
     * Enter your application's <a href="https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/oauth_refresh_token_flow.htm">Salesforce Refresh Token</a> used for Airbyte to access your Salesforce account.
     */
    refreshToken: string;
    /**
     * Enter the date (or date-time) in the YYYY-MM-DD or YYYY-MM-DDTHH:mm:ssZ format. Airbyte will replicate the data updated on and after this date. If this field is blank, Airbyte will replicate the data for last two years.
     */
    startDate?: string;
    /**
     * The size of the time window (ISO8601 duration) to slice requests. Default: "P30D"
     */
    streamSliceStep: string;
    /**
     * Add filters to select only required stream based on `SObject` name. Use this field to filter which tables are displayed by this connector. This is useful if your Salesforce account has a large number of tables (>1000), in which case you may find it easier to navigate the UI and speed up the connector's performance if you restrict the tables displayed by this connector.
     */
    streamsCriterias?: outputs.SourceSalesforceConfigurationStreamsCriteria[];
}
export interface SourceSalesforceConfigurationStreamsCriteria {
    /**
     * must be one of ["starts with", "ends with", "contains", "exacts", "starts not with", "ends not with", "not contains", "not exacts"]; Default: "contains"
     */
    criteria: string;
    value: string;
}
export interface SourceSalesloftConfiguration {
    credentials: outputs.SourceSalesloftConfigurationCredentials;
    /**
     * The date from which you'd like to replicate data for Salesloft API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated.
     */
    startDate: string;
}
export interface SourceSalesloftConfigurationCredentials {
    authenticateViaApiKey?: outputs.SourceSalesloftConfigurationCredentialsAuthenticateViaApiKey;
    authenticateViaOAuth?: outputs.SourceSalesloftConfigurationCredentialsAuthenticateViaOAuth;
}
export interface SourceSalesloftConfigurationCredentialsAuthenticateViaApiKey {
    /**
     * API Key for making authenticated requests. More instruction on how to find this value in our <a href="https://docs.airbyte.com/integrations/sources/salesloft#setup-guide">docs</a>
     */
    apiKey: string;
}
export interface SourceSalesloftConfigurationCredentialsAuthenticateViaOAuth {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken: string;
    /**
     * The Client ID of your Salesloft developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Salesloft developer application.
     */
    clientSecret: string;
    /**
     * The token for obtaining a new access token.
     */
    refreshToken: string;
    /**
     * The date-time when the access token should be refreshed.
     */
    tokenExpiryDate: string;
}
export interface SourceSapFieldglassConfiguration {
    /**
     * API Key
     */
    apiKey: string;
}
export interface SourceSavvycalConfiguration {
    /**
     * Go to SavvyCal → Settings → Developer → Personal Tokens and make a new token. Then, copy the private key. https://savvycal.com/developers
     */
    apiKey: string;
}
export interface SourceScryfallConfiguration {
}
export interface SourceSecodaConfiguration {
    /**
     * Your API Access Key. See <a href="https://docs.secoda.co/secoda-api/authentication">here</a>. The key is case sensitive.
     */
    apiKey: string;
}
export interface SourceSendgridConfiguration {
    /**
     * Sendgrid API Key, use <a href=\"https://app.sendgrid.com/settings/api_keys/\">admin</a> to generate this key.
     */
    apiKey: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceSendinblueConfiguration {
    /**
     * Your API Key. See <a href="https://developers.sendinblue.com/docs/getting-started">here</a>.
     */
    apiKey: string;
}
export interface SourceSenseforceConfiguration {
    /**
     * Your API access token. See <a href="https://manual.senseforce.io/manual/sf-platform/public-api/get-your-access-token/">here</a>. The toke is case sensitive.
     */
    accessToken: string;
    /**
     * Your Senseforce API backend URL. This is the URL shown during the Login screen. See <a href="https://manual.senseforce.io/manual/sf-platform/public-api/get-your-access-token/">here</a> for more details. (Note: Most Senseforce backend APIs have the term 'galaxy' in their ULR)
     */
    backendUrl: string;
    /**
     * The ID of the dataset you want to synchronize. The ID can be found in the URL when opening the dataset. See <a href="https://manual.senseforce.io/manual/sf-platform/public-api/get-your-access-token/">here</a> for more details. (Note: As the Senseforce API only allows to synchronize a specific dataset, each dataset you  want to synchronize needs to be implemented as a separate airbyte source).
     */
    datasetId: string;
    /**
     * UTC date and time in the format 2017-01-25. Only data with "Timestamp" after this date will be replicated. Important note: This start date must be set to the first day of where your dataset provides data.  If your dataset has data from 2020-10-10 10:21:10, set the start_date to 2020-10-10 or later
     */
    startDate: string;
}
export interface SourceSentryConfiguration {
    /**
     * Log into Sentry and then <a href="https://sentry.io/settings/account/api/auth-tokens/">create authentication tokens</a>.For self-hosted, you can find or create authentication tokens by visiting "{instance_url_prefix}/settings/account/api/auth-tokens/"
     */
    authToken: string;
    /**
     * Fields to retrieve when fetching discover events
     */
    discoverFields?: string[];
    /**
     * Host name of Sentry API server.For self-hosted, specify your host name here. Otherwise, leave it empty. Default: "sentry.io"
     */
    hostname: string;
    /**
     * The slug of the organization the groups belong to.
     */
    organization: string;
    /**
     * The name (slug) of the Project you want to sync.
     */
    project: string;
}
export interface SourceSftpBulkConfiguration {
    /**
     * Credentials for connecting to the SFTP Server
     */
    credentials: outputs.SourceSftpBulkConfigurationCredentials;
    /**
     * The directory to search files for sync. Default: "/"
     */
    folderPath: string;
    /**
     * The server host address
     */
    host: string;
    /**
     * The server port. Default: 22
     */
    port: number;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
     */
    startDate?: string;
    /**
     * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
     */
    streams: outputs.SourceSftpBulkConfigurationStream[];
    /**
     * The server user
     */
    username: string;
}
export interface SourceSftpBulkConfigurationCredentials {
    authenticateViaPassword?: outputs.SourceSftpBulkConfigurationCredentialsAuthenticateViaPassword;
    authenticateViaPrivateKey?: outputs.SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKey;
}
export interface SourceSftpBulkConfigurationCredentialsAuthenticateViaPassword {
    /**
     * Password
     */
    password: string;
}
export interface SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKey {
    /**
     * The Private key
     */
    privateKey: string;
}
export interface SourceSftpBulkConfigurationStream {
    /**
     * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
     */
    daysToSyncIfHistoryIsFull: number;
    /**
     * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
     */
    format: outputs.SourceSftpBulkConfigurationStreamFormat;
    /**
     * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
     */
    globs?: string[];
    /**
     * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
     */
    inputSchema?: string;
    /**
     * The name of the stream.
     */
    name: string;
    /**
     * The number of resent files which will be used to discover the schema for this stream.
     */
    recentNFilesToReadForSchemaDiscovery?: number;
    /**
     * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
     */
    schemaless: boolean;
    /**
     * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. must be one of ["Emit Record", "Skip Record", "Wait for Discover"]; Default: "Emit Record"
     */
    validationPolicy: string;
}
export interface SourceSftpBulkConfigurationStreamFormat {
    avroFormat?: outputs.SourceSftpBulkConfigurationStreamFormatAvroFormat;
    csvFormat?: outputs.SourceSftpBulkConfigurationStreamFormatCsvFormat;
    excelFormat?: outputs.SourceSftpBulkConfigurationStreamFormatExcelFormat;
    jsonlFormat?: outputs.SourceSftpBulkConfigurationStreamFormatJsonlFormat;
    parquetFormat?: outputs.SourceSftpBulkConfigurationStreamFormatParquetFormat;
    /**
     * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
     */
    unstructuredDocumentFormat?: outputs.SourceSftpBulkConfigurationStreamFormatUnstructuredDocumentFormat;
}
export interface SourceSftpBulkConfigurationStreamFormatAvroFormat {
    /**
     * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
     */
    doubleAsString: boolean;
}
export interface SourceSftpBulkConfigurationStreamFormatCsvFormat {
    /**
     * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
     */
    delimiter: string;
    /**
     * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
     */
    doubleQuote: boolean;
    /**
     * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
     */
    encoding: string;
    /**
     * The character used for escaping special characters. To disallow escaping, leave this field blank.
     */
    escapeChar?: string;
    /**
     * A set of case-sensitive strings that should be interpreted as false values.
     */
    falseValues?: string[];
    /**
     * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
     */
    headerDefinition?: outputs.SourceSftpBulkConfigurationStreamFormatCsvFormatHeaderDefinition;
    /**
     * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
     */
    ignoreErrorsOnFieldsMismatch: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
     */
    nullValues?: string[];
    /**
     * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
     */
    quoteChar: string;
    /**
     * The number of rows to skip after the header row. Default: 0
     */
    skipRowsAfterHeader: number;
    /**
     * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
     */
    skipRowsBeforeHeader: number;
    /**
     * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
     */
    stringsCanBeNull: boolean;
    /**
     * A set of case-sensitive strings that should be interpreted as true values.
     */
    trueValues?: string[];
}
export interface SourceSftpBulkConfigurationStreamFormatCsvFormatHeaderDefinition {
    autogenerated?: outputs.SourceSftpBulkConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated;
    fromCsv?: outputs.SourceSftpBulkConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv;
    userProvided?: outputs.SourceSftpBulkConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided;
}
export interface SourceSftpBulkConfigurationStreamFormatCsvFormatHeaderDefinitionAutogenerated {
}
export interface SourceSftpBulkConfigurationStreamFormatCsvFormatHeaderDefinitionFromCsv {
}
export interface SourceSftpBulkConfigurationStreamFormatCsvFormatHeaderDefinitionUserProvided {
    /**
     * The column names that will be used while emitting the CSV records
     */
    columnNames: string[];
}
export interface SourceSftpBulkConfigurationStreamFormatExcelFormat {
}
export interface SourceSftpBulkConfigurationStreamFormatJsonlFormat {
}
export interface SourceSftpBulkConfigurationStreamFormatParquetFormat {
    /**
     * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
     */
    decimalAsFloat: boolean;
}
export interface SourceSftpBulkConfigurationStreamFormatUnstructuredDocumentFormat {
    /**
     * Processing configuration
     */
    processing?: outputs.SourceSftpBulkConfigurationStreamFormatUnstructuredDocumentFormatProcessing;
    /**
     * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
     */
    skipUnprocessableFiles: boolean;
    /**
     * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. must be one of ["auto", "fast", "ocr_only", "hi_res"]; Default: "auto"
     */
    strategy: string;
}
export interface SourceSftpBulkConfigurationStreamFormatUnstructuredDocumentFormatProcessing {
    /**
     * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
     */
    local?: outputs.SourceSftpBulkConfigurationStreamFormatUnstructuredDocumentFormatProcessingLocal;
    /**
     * Process files via an API, using the `hi_res` mode. This option is useful for increased performance and accuracy, but requires an API key and a hosted instance of unstructured.
     */
    viaApi?: outputs.SourceSftpBulkConfigurationStreamFormatUnstructuredDocumentFormatProcessingViaApi;
}
export interface SourceSftpBulkConfigurationStreamFormatUnstructuredDocumentFormatProcessingLocal {
}
export interface SourceSftpBulkConfigurationStreamFormatUnstructuredDocumentFormatProcessingViaApi {
    /**
     * The API key to use matching the environment. Default: ""
     */
    apiKey: string;
    /**
     * The URL of the unstructured API to use. Default: "https://api.unstructured.io"
     */
    apiUrl: string;
    /**
     * List of parameters send to the API
     */
    parameters?: outputs.SourceSftpBulkConfigurationStreamFormatUnstructuredDocumentFormatProcessingViaApiParameter[];
}
export interface SourceSftpBulkConfigurationStreamFormatUnstructuredDocumentFormatProcessingViaApiParameter {
    /**
     * The name of the unstructured API parameter to use
     */
    name: string;
    /**
     * The value of the parameter
     */
    value: string;
}
export interface SourceSftpConfiguration {
    /**
     * The server authentication method
     */
    credentials?: outputs.SourceSftpConfigurationCredentials;
    /**
     * The regular expression to specify files for sync in a chosen Folder Path. Default: ""
     */
    filePattern: string;
    /**
     * Coma separated file types. Currently only 'csv' and 'json' types are supported. Default: "csv,json"
     */
    fileTypes: string;
    /**
     * The directory to search files for sync. Default: ""
     */
    folderPath: string;
    /**
     * The server host address
     */
    host: string;
    /**
     * The server port. Default: 22
     */
    port: number;
    /**
     * The server user
     */
    user: string;
}
export interface SourceSftpConfigurationCredentials {
    passwordAuthentication?: outputs.SourceSftpConfigurationCredentialsPasswordAuthentication;
    sshKeyAuthentication?: outputs.SourceSftpConfigurationCredentialsSshKeyAuthentication;
}
export interface SourceSftpConfigurationCredentialsPasswordAuthentication {
    /**
     * OS-level password for logging into the jump server host
     */
    authUserPassword: string;
}
export interface SourceSftpConfigurationCredentialsSshKeyAuthentication {
    /**
     * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
     */
    authSshKey: string;
}
export interface SourceShopifyConfiguration {
    /**
     * Defines what would be a date range per single BULK Job. Default: 30
     */
    bulkWindowInDays: number;
    /**
     * The authorization method to use to retrieve data from Shopify
     */
    credentials?: outputs.SourceShopifyConfigurationCredentials;
    /**
     * Defines which API type (REST/BULK) to use to fetch `Transactions` data. If you are a `Shopify Plus` user, leave the default value to speed up the fetch. Default: false
     */
    fetchTransactionsUserId: boolean;
    /**
     * The threshold, after which the single BULK Job should be checkpointed. Default: 100000
     */
    jobCheckpointInterval: number;
    /**
     * If enabled, the `Product Variants` stream attempts to include `Presentment prices` field (may affect the performance). Default: true
     */
    jobProductVariantsIncludePresPrices: boolean;
    /**
     * The max time in seconds, after which the single BULK Job should be `CANCELED` and retried. The bigger the value the longer the BULK Job is allowed to run. Default: 7200
     */
    jobTerminationThreshold: number;
    /**
     * The name of your Shopify store found in the URL. For example, if your URL was https://NAME.myshopify.com, then the name would be 'NAME' or 'NAME.myshopify.com'.
     */
    shop: string;
    /**
     * The date you would like to replicate data from. Format: YYYY-MM-DD. Any data before this date will not be replicated. Default: "2020-01-01"
     */
    startDate: string;
}
export interface SourceShopifyConfigurationCredentials {
    /**
     * API Password Auth
     */
    apiPassword?: outputs.SourceShopifyConfigurationCredentialsApiPassword;
    /**
     * OAuth2.0
     */
    oAuth20?: outputs.SourceShopifyConfigurationCredentialsOAuth20;
}
export interface SourceShopifyConfigurationCredentialsApiPassword {
    /**
     * The API Password for your private application in the `Shopify` store.
     */
    apiPassword: string;
}
export interface SourceShopifyConfigurationCredentialsOAuth20 {
    /**
     * The Access Token for making authenticated requests.
     */
    accessToken?: string;
    /**
     * The Client ID of the Shopify developer application.
     */
    clientId?: string;
    /**
     * The Client Secret of the Shopify developer application.
     */
    clientSecret?: string;
}
export interface SourceShortcutConfiguration {
    apiKey2: string;
    /**
     * Query for searching as defined in `https://help.shortcut.com/hc/en-us/articles/360000046646-Searching-in-Shortcut-Using-Search-Operators`. Default: "title:Our first Epic"
     */
    query: string;
    startDate: string;
}
export interface SourceShortioConfiguration {
    domainId: string;
    /**
     * Short.io Secret Key
     */
    secretKey: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceSlackConfiguration {
    /**
     * A channel name list (without leading '#' char) which limit the channels from which you'd like to sync. Empty list means no filter.
     */
    channelFilters?: string[];
    /**
     * Choose how to authenticate into Slack
     */
    credentials?: outputs.SourceSlackConfigurationCredentials;
    /**
     * Whether to read information from private channels that the bot is already in.  If false, only public channels will be read.  If true, the bot must be manually added to private channels. . Default: false
     */
    includePrivateChannels: boolean;
    /**
     * Whether to join all channels or to sync data only from channels the bot is already in.  If false, you'll need to manually add the bot to all the channels from which you'd like to sync messages. . Default: true
     */
    joinChannels: boolean;
    /**
     * How far into the past to look for messages in threads, default is 0 days. Default: 0
     */
    lookbackWindow: number;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceSlackConfigurationCredentials {
    apiToken?: outputs.SourceSlackConfigurationCredentialsApiToken;
    signInViaSlackOAuth?: outputs.SourceSlackConfigurationCredentialsSignInViaSlackOAuth;
}
export interface SourceSlackConfigurationCredentialsApiToken {
    /**
     * A Slack bot token. See the <a href="https://docs.airbyte.com/integrations/sources/slack">docs</a> for instructions on how to generate it.
     */
    apiToken: string;
}
export interface SourceSlackConfigurationCredentialsSignInViaSlackOAuth {
    /**
     * Slack access_token. See our <a href="https://docs.airbyte.com/integrations/sources/slack">docs</a> if you need help generating the token.
     */
    accessToken: string;
    /**
     * Slack client_id. See our <a href="https://docs.airbyte.com/integrations/sources/slack">docs</a> if you need help finding this id.
     */
    clientId: string;
    /**
     * Slack client_secret. See our <a href="https://docs.airbyte.com/integrations/sources/slack">docs</a> if you need help finding this secret.
     */
    clientSecret: string;
}
export interface SourceSmailyConfiguration {
    /**
     * API user password. See https://smaily.com/help/api/general/create-api-user/
     */
    apiPassword: string;
    /**
     * API Subdomain. See https://smaily.com/help/api/general/create-api-user/
     */
    apiSubdomain: string;
    /**
     * API user username. See https://smaily.com/help/api/general/create-api-user/
     */
    apiUsername: string;
}
export interface SourceSmartengageConfiguration {
    /**
     * API Key
     */
    apiKey: string;
}
export interface SourceSmartsheetsConfiguration {
    credentials: outputs.SourceSmartsheetsConfigurationCredentials;
    /**
     * A List of available columns which metadata can be pulled from.
     */
    metadataFields?: string[];
    /**
     * The spreadsheet ID. Find it by opening the spreadsheet then navigating to File > Properties
     */
    spreadsheetId: string;
}
export interface SourceSmartsheetsConfigurationCredentials {
    apiAccessToken?: outputs.SourceSmartsheetsConfigurationCredentialsApiAccessToken;
    oAuth20?: outputs.SourceSmartsheetsConfigurationCredentialsOAuth20;
}
export interface SourceSmartsheetsConfigurationCredentialsApiAccessToken {
    /**
     * The access token to use for accessing your data from Smartsheets. This access token must be generated by a user with at least read access to the data you'd like to replicate. Generate an access token in the Smartsheets main menu by clicking Account > Apps & Integrations > API Access. See the <a href="https://docs.airbyte.com/integrations/sources/smartsheets/#setup-guide">setup guide</a> for information on how to obtain this token.
     */
    accessToken: string;
}
export interface SourceSmartsheetsConfigurationCredentialsOAuth20 {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken: string;
    /**
     * The API ID of the SmartSheets developer application.
     */
    clientId: string;
    /**
     * The API Secret the SmartSheets developer application.
     */
    clientSecret: string;
    /**
     * The key to refresh the expired access_token.
     */
    refreshToken: string;
    /**
     * The date-time when the access token should be refreshed.
     */
    tokenExpiryDate: string;
}
export interface SourceSnapchatMarketingConfiguration {
    /**
     * Specifies the principle for conversion reporting. must be one of ["conversion", "impression"]; Default: "conversion"
     */
    actionReportTime: string;
    /**
     * The Client ID of your Snapchat developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Snapchat developer application.
     */
    clientSecret: string;
    /**
     * Date in the format 2017-01-25. Any data after this date will not be replicated.
     */
    endDate?: string;
    /**
     * Refresh Token to renew the expired Access Token.
     */
    refreshToken: string;
    /**
     * Date in the format 2022-01-01. Any data before this date will not be replicated. Default: "2022-01-01"
     */
    startDate: string;
    /**
     * Attribution window for swipe ups. must be one of ["1_DAY", "7_DAY", "28_DAY"]; Default: "28_DAY"
     */
    swipeUpAttributionWindow: string;
    /**
     * Attribution window for views. must be one of ["1_HOUR", "3_HOUR", "6_HOUR", "1_DAY", "7_DAY"]; Default: "1_DAY"
     */
    viewAttributionWindow: string;
}
export interface SourceSnowflakeConfiguration {
    credentials?: outputs.SourceSnowflakeConfigurationCredentials;
    /**
     * The database you created for Airbyte to access data.
     */
    database: string;
    /**
     * The host domain of the snowflake instance (must include the account, region, cloud environment, and end with snowflakecomputing.com).
     */
    host: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
     */
    jdbcUrlParams?: string;
    /**
     * The role you created for Airbyte to access Snowflake.
     */
    role: string;
    /**
     * The source Snowflake schema tables. Leave empty to access tables from multiple schemas.
     */
    schema?: string;
    /**
     * The warehouse you created for Airbyte to access data.
     */
    warehouse: string;
}
export interface SourceSnowflakeConfigurationCredentials {
    keyPairAuthentication?: outputs.SourceSnowflakeConfigurationCredentialsKeyPairAuthentication;
    oAuth20?: outputs.SourceSnowflakeConfigurationCredentialsOAuth20;
    usernameAndPassword?: outputs.SourceSnowflakeConfigurationCredentialsUsernameAndPassword;
}
export interface SourceSnowflakeConfigurationCredentialsKeyPairAuthentication {
    /**
     * RSA Private key to use for Snowflake connection. See the <a href="https://docs.airbyte.com/integrations/sources/snowflake#key-pair-authentication">docs</a> for more information on how to obtain this key.
     */
    privateKey: string;
    /**
     * Passphrase for private key
     */
    privateKeyPassword?: string;
    /**
     * The username you created to allow Airbyte to access the database.
     */
    username: string;
}
export interface SourceSnowflakeConfigurationCredentialsOAuth20 {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken?: string;
    /**
     * The Client ID of your Snowflake developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Snowflake developer application.
     */
    clientSecret: string;
    /**
     * Refresh Token for making authenticated requests.
     */
    refreshToken?: string;
}
export interface SourceSnowflakeConfigurationCredentialsUsernameAndPassword {
    /**
     * The password associated with the username.
     */
    password: string;
    /**
     * The username you created to allow Airbyte to access the database.
     */
    username: string;
}
export interface SourceSonarCloudConfiguration {
    /**
     * Comma-separated list of component keys.
     */
    componentKeys: string[];
    /**
     * To retrieve issues created before the given date (inclusive).
     */
    endDate?: string;
    /**
     * Organization key. See <a href="https://docs.sonarcloud.io/appendices/project-information/#project-and-organization-keys">here</a>.
     */
    organization: string;
    /**
     * To retrieve issues created after the given date (inclusive).
     */
    startDate?: string;
    /**
     * Your User Token. See <a href="https://docs.sonarcloud.io/advanced-setup/user-accounts/">here</a>. The token is case sensitive.
     */
    userToken: string;
}
export interface SourceSpacexApiConfiguration {
    id?: string;
    options?: string;
}
export interface SourceSquareConfiguration {
    /**
     * Choose how to authenticate to Square.
     */
    credentials?: outputs.SourceSquareConfigurationCredentials;
    /**
     * In some streams there is an option to include deleted objects (Items, Categories, Discounts, Taxes). Default: false
     */
    includeDeletedObjects: boolean;
    /**
     * Determines whether to use the sandbox or production environment. Default: false
     */
    isSandbox: boolean;
    /**
     * UTC date in the format YYYY-MM-DD. Any data before this date will not be replicated. If not set, all data will be replicated. Default: "2021-01-01"
     */
    startDate: string;
}
export interface SourceSquareConfigurationCredentials {
    apiKey?: outputs.SourceSquareConfigurationCredentialsApiKey;
    oauthAuthentication?: outputs.SourceSquareConfigurationCredentialsOauthAuthentication;
}
export interface SourceSquareConfigurationCredentialsApiKey {
    /**
     * The API key for a Square application
     */
    apiKey: string;
}
export interface SourceSquareConfigurationCredentialsOauthAuthentication {
    /**
     * The Square-issued ID of your application
     */
    clientId: string;
    /**
     * The Square-issued application secret for your application
     */
    clientSecret: string;
    /**
     * A refresh token generated using the above client ID and secret
     */
    refreshToken: string;
}
export interface SourceStravaConfiguration {
    /**
     * The Athlete ID of your Strava developer application.
     */
    athleteId: number;
    /**
     * The Client ID of your Strava developer application.
     */
    clientId: string;
    /**
     * The Client Secret of your Strava developer application.
     */
    clientSecret: string;
    /**
     * The Refresh Token with the activity: read_all permissions.
     */
    refreshToken: string;
    /**
     * UTC date and time. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceStripeConfiguration {
    /**
     * Your Stripe account ID (starts with 'acct_', find yours <a href="https://dashboard.stripe.com/settings/account">here</a>).
     */
    accountId: string;
    /**
     * The number of API calls per second that you allow connector to make. This value can not be bigger than real API call rate limit (https://stripe.com/docs/rate-limits). If not specified the default maximum is 25 and 100 calls per second for test and production tokens respectively.
     */
    callRateLimit?: number;
    /**
     * Stripe API key (usually starts with 'sk_live_'; find yours <a href="https://dashboard.stripe.com/apikeys">here</a>).
     */
    clientSecret: string;
    /**
     * When set, the connector will always re-export data from the past N days, where N is the value set here. This is useful if your data is frequently updated after creation. The Lookback Window only applies to streams that do not support event-based incremental syncs: Events, SetupAttempts, ShippingRates, BalanceTransactions, Files, FileLinks, Refunds. More info <a href="https://docs.airbyte.com/integrations/sources/stripe#requirements">here</a>. Default: 0
     */
    lookbackWindowDays: number;
    /**
     * The number of worker thread to use for the sync. The performance upper boundary depends on call_rate_limit setting and type of account. Default: 10
     */
    numWorkers: number;
    /**
     * The time increment used by the connector when requesting data from the Stripe API. The bigger the value is, the less requests will be made and faster the sync will be. On the other hand, the more seldom the state is persisted. Default: 365
     */
    sliceRange: number;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Only data generated after this date will be replicated. Default: "2017-01-25T00:00:00Z"
     */
    startDate: string;
}
export interface SourceSurveySparrowConfiguration {
    /**
     * Your access token. See <a href="https://developers.surveysparrow.com/rest-apis#authentication">here</a>. The key is case sensitive.
     */
    accessToken: string;
    /**
     * Is your account location is EU based? If yes, the base url to retrieve data will be different.
     */
    region?: outputs.SourceSurveySparrowConfigurationRegion;
    /**
     * A List of your survey ids for survey-specific stream
     */
    surveyIds?: string[];
}
export interface SourceSurveySparrowConfigurationRegion {
    euBasedAccount?: outputs.SourceSurveySparrowConfigurationRegionEuBasedAccount;
    globalAccount?: outputs.SourceSurveySparrowConfigurationRegionGlobalAccount;
}
export interface SourceSurveySparrowConfigurationRegionEuBasedAccount {
}
export interface SourceSurveySparrowConfigurationRegionGlobalAccount {
}
export interface SourceSurveymonkeyConfiguration {
    /**
     * The authorization method to use to retrieve data from SurveyMonkey
     */
    credentials: outputs.SourceSurveymonkeyConfigurationCredentials;
    /**
     * Depending on the originating datacenter of the SurveyMonkey account, the API access URL may be different. must be one of ["USA", "Europe", "Canada"]; Default: "USA"
     */
    origin: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
    /**
     * IDs of the surveys from which you'd like to replicate data. If left empty, data from all boards to which you have access will be replicated.
     */
    surveyIds?: string[];
}
export interface SourceSurveymonkeyConfigurationCredentials {
    /**
     * Access Token for making authenticated requests. See the <a href="https://docs.airbyte.io/integrations/sources/surveymonkey">docs</a> for information on how to generate this key.
     */
    accessToken: string;
    /**
     * The Client ID of the SurveyMonkey developer application.
     */
    clientId?: string;
    /**
     * The Client Secret of the SurveyMonkey developer application.
     */
    clientSecret?: string;
}
export interface SourceSurvicateConfiguration {
    apiKey: string;
    startDate: string;
}
export interface SourceTeamworkConfiguration {
    password?: string;
    /**
     * The teamwork site name appearing at the url
     */
    siteName: string;
    startDate: string;
    username: string;
}
export interface SourceTempoConfiguration {
    /**
     * Tempo API Token. Go to Tempo>Settings, scroll down to Data Access and select API integration.
     */
    apiToken: string;
}
export interface SourceTheGuardianApiConfiguration {
    /**
     * Your API Key. See <a href="https://open-platform.theguardian.com/access/">here</a>. The key is case sensitive.
     */
    apiKey: string;
    /**
     * (Optional) Use this to set the maximum date (YYYY-MM-DD) of the results. Results newer than the end_date will not be shown. Default is set to the current date (today) for incremental syncs.
     */
    endDate?: string;
    /**
     * (Optional) The query (q) parameter filters the results to only those that include that search term. The q parameter supports AND, OR and NOT operators.
     */
    query?: string;
    /**
     * (Optional) Use this to filter the results by a particular section. See <a href="https://content.guardianapis.com/sections?api-key=test">here</a> for a list of all sections, and <a href="https://open-platform.theguardian.com/documentation/section">here</a> for the sections endpoint documentation.
     */
    section?: string;
    /**
     * Use this to set the minimum date (YYYY-MM-DD) of the results. Results older than the start_date will not be shown.
     */
    startDate: string;
    /**
     * (Optional) A tag is a piece of data that is used by The Guardian to categorise content. Use this parameter to filter results by showing only the ones matching the entered tag. See <a href="https://content.guardianapis.com/tags?api-key=test">here</a> for a list of all tags, and <a href="https://open-platform.theguardian.com/documentation/tag">here</a> for the tags endpoint documentation.
     */
    tag?: string;
}
export interface SourceTiktokMarketingConfiguration {
    /**
     * The attribution window in days. Default: 3
     */
    attributionWindow: number;
    /**
     * Authentication method
     */
    credentials?: outputs.SourceTiktokMarketingConfigurationCredentials;
    /**
     * The date until which you'd like to replicate data for all incremental streams, in the format YYYY-MM-DD. All data generated between start_date and this date will be replicated. Not setting this option will result in always syncing the data till the current date.
     */
    endDate?: string;
    /**
     * Set to active if you want to include deleted data in report based streams and Ads, Ad Groups and Campaign streams. Default: false
     */
    includeDeleted: boolean;
    /**
     * The Start Date in format: YYYY-MM-DD. Any data before this date will not be replicated. If this parameter is not set, all data will be replicated. Default: "2016-09-01"
     */
    startDate: string;
}
export interface SourceTiktokMarketingConfigurationCredentials {
    oAuth20?: outputs.SourceTiktokMarketingConfigurationCredentialsOAuth20;
    sandboxAccessToken?: outputs.SourceTiktokMarketingConfigurationCredentialsSandboxAccessToken;
}
export interface SourceTiktokMarketingConfigurationCredentialsOAuth20 {
    /**
     * Long-term Authorized Access Token.
     */
    accessToken: string;
    /**
     * The Advertiser ID to filter reports and streams. Let this empty to retrieve all.
     */
    advertiserId?: string;
    /**
     * The Developer Application App ID.
     */
    appId: string;
    /**
     * The Developer Application Secret.
     */
    secret: string;
}
export interface SourceTiktokMarketingConfigurationCredentialsSandboxAccessToken {
    /**
     * The long-term authorized access token.
     */
    accessToken: string;
    /**
     * The Advertiser ID which generated for the developer's Sandbox application.
     */
    advertiserId: string;
}
export interface SourceTrelloConfiguration {
    /**
     * IDs of the boards to replicate data from. If left empty, data from all boards to which you have access will be replicated. Please note that this is not the 8-character ID in the board's shortLink (URL of the board). Rather, what is required here is the 24-character ID usually returned by the API
     */
    boardIds?: string[];
    /**
     * Trello API key. See the <a href="https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/#using-basic-oauth">docs</a> for instructions on how to generate it.
     */
    key: string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
    /**
     * Trello API token. See the <a href="https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/#using-basic-oauth">docs</a> for instructions on how to generate it.
     */
    token: string;
}
export interface SourceTrustpilotConfiguration {
    /**
     * The names of business units which shall be synchronized. Some streams e.g. configured_business_units or private_reviews use this configuration.
     */
    businessUnits: string[];
    credentials: outputs.SourceTrustpilotConfigurationCredentials;
    /**
     * For streams with sync. method incremental the start date time to be used
     */
    startDate: string;
}
export interface SourceTrustpilotConfigurationCredentials {
    /**
     * The API key authentication method gives you access to only the streams which are part of the Public API. When you want to get streams available via the Consumer API (e.g. the private reviews) you need to use authentication method OAuth 2.0.
     */
    apiKey?: outputs.SourceTrustpilotConfigurationCredentialsApiKey;
    oAuth20?: outputs.SourceTrustpilotConfigurationCredentialsOAuth20;
}
export interface SourceTrustpilotConfigurationCredentialsApiKey {
    /**
     * The API key of the Trustpilot API application.
     */
    clientId: string;
}
export interface SourceTrustpilotConfigurationCredentialsOAuth20 {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken: string;
    /**
     * The API key of the Trustpilot API application. (represents the OAuth Client ID)
     */
    clientId: string;
    /**
     * The Secret of the Trustpilot API application. (represents the OAuth Client Secret)
     */
    clientSecret: string;
    /**
     * The key to refresh the expired access_token.
     */
    refreshToken: string;
    /**
     * The date-time when the access token should be refreshed.
     */
    tokenExpiryDate: string;
}
export interface SourceTvmazeScheduleConfiguration {
    /**
     * Country code for domestic TV schedule retrieval.
     */
    domesticScheduleCountryCode: string;
    /**
     * End date for TV schedule retrieval. May be in the future. Optional.
     */
    endDate?: string;
    /**
     * Start date for TV schedule retrieval. May be in the future.
     */
    startDate: string;
    /**
     * ISO 3166-1 country code for web TV schedule retrieval. Leave blank for
     * all countries plus global web channels (e.g. Netflix). Alternatively,
     * set to 'global' for just global web channels.
     */
    webScheduleCountryCode?: string;
}
export interface SourceTwilioConfiguration {
    /**
     * Twilio account SID
     */
    accountSid: string;
    /**
     * Twilio Auth Token.
     */
    authToken: string;
    /**
     * How far into the past to look for records. (in minutes). Default: 0
     */
    lookbackWindow: number;
    /**
     * UTC date and time in the format 2020-10-01T00:00:00Z. Any data before this date will not be replicated.
     */
    startDate: string;
}
export interface SourceTwilioTaskrouterConfiguration {
    /**
     * Twilio Account ID
     */
    accountSid: string;
    /**
     * Twilio Auth Token
     */
    authToken: string;
}
export interface SourceTwitterConfiguration {
    /**
     * App only Bearer Token. See the <a href="https://developer.twitter.com/en/docs/authentication/oauth-2-0/bearer-tokens">docs</a> for more information on how to obtain this token.
     */
    apiKey: string;
    /**
     * The end date for retrieving tweets must be a minimum of 10 seconds prior to the request time.
     */
    endDate?: string;
    /**
     * Query for matching Tweets. You can learn how to build this query by reading <a href="https://developer.twitter.com/en/docs/twitter-api/tweets/search/integrate/build-a-query"> build a query guide </a>.
     */
    query: string;
    /**
     * The start date for retrieving tweets cannot be more than 7 days in the past.
     */
    startDate?: string;
}
export interface SourceTypeformConfiguration {
    credentials: outputs.SourceTypeformConfigurationCredentials;
    /**
     * When this parameter is set, the connector will replicate data only from the input forms. Otherwise, all forms in your Typeform account will be replicated. You can find form IDs in your form URLs. For example, in the URL "https://mysite.typeform.com/to/u6nXL7" the form_id is u6nXL7. You can find form URLs on Share panel
     */
    formIds?: string[];
    /**
     * The date from which you'd like to replicate data for Typeform API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated.
     */
    startDate?: string;
}
export interface SourceTypeformConfigurationCredentials {
    oAuth20?: outputs.SourceTypeformConfigurationCredentialsOAuth20;
    privateToken?: outputs.SourceTypeformConfigurationCredentialsPrivateToken;
}
export interface SourceTypeformConfigurationCredentialsOAuth20 {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken: string;
    /**
     * The Client ID of the Typeform developer application.
     */
    clientId: string;
    /**
     * The Client Secret the Typeform developer application.
     */
    clientSecret: string;
    /**
     * The key to refresh the expired access_token.
     */
    refreshToken: string;
    /**
     * The date-time when the access token should be refreshed.
     */
    tokenExpiryDate: string;
}
export interface SourceTypeformConfigurationCredentialsPrivateToken {
    /**
     * Log into your Typeform account and then generate a personal Access Token.
     */
    accessToken: string;
}
export interface SourceUsCensusConfiguration {
    /**
     * Your API Key. Get your key <a href="https://api.census.gov/data/key_signup.html">here</a>.
     */
    apiKey: string;
    /**
     * The query parameters portion of the GET request, without the api key
     */
    queryParams?: string;
    /**
     * The path portion of the GET request
     */
    queryPath: string;
}
export interface SourceVantageConfiguration {
    /**
     * Your API Access token. See <a href="https://vantage.readme.io/reference/authentication">here</a>.
     */
    accessToken: string;
}
export interface SourceWebflowConfiguration {
    /**
     * The version of the Webflow API to use. See https://developers.webflow.com/#versioning
     */
    acceptVersion?: string;
    /**
     * The API token for authenticating to Webflow. See https://university.webflow.com/lesson/intro-to-the-webflow-api
     */
    apiKey: string;
    /**
     * The id of the Webflow site you are requesting data from. See https://developers.webflow.com/#sites
     */
    siteId: string;
}
export interface SourceWhenIWorkConfiguration {
    /**
     * Email of your when-i-work account
     */
    email: string;
    /**
     * Password for your when-i-work account
     */
    password: string;
}
export interface SourceWhiskyHunterConfiguration {
}
export interface SourceWikipediaPageviewsConfiguration {
    /**
     * If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access.
     */
    access: string;
    /**
     * If you want to filter by agent type, use one of user, automated or spider. If you are interested in pageviews regardless of agent type, use all-agents.
     */
    agent: string;
    /**
     * The title of any article in the specified project. Any spaces should be replaced with underscores. It also should be URI-encoded, so that non-URI-safe characters like %, / or ? are accepted.
     */
    article: string;
    /**
     * The ISO 3166-1 alpha-2 code of a country for which to retrieve top articles.
     */
    country: string;
    /**
     * The date of the last day to include, in YYYYMMDD or YYYYMMDDHH format.
     */
    end: string;
    /**
     * If you want to filter by project, use the domain of any Wikimedia project.
     */
    project: string;
    /**
     * The date of the first day to include, in YYYYMMDD or YYYYMMDDHH format. Also serves as the date to retrieve data for the top articles.
     */
    start: string;
}
export interface SourceWoocommerceConfiguration {
    /**
     * Customer Key for API in WooCommerce shop
     */
    apiKey: string;
    /**
     * Customer Secret for API in WooCommerce shop
     */
    apiSecret: string;
    /**
     * The name of the store. For https://EXAMPLE.com, the shop name is 'EXAMPLE.com'.
     */
    shop: string;
    /**
     * The date you would like to replicate data from. Format: YYYY-MM-DD
     */
    startDate: string;
}
export interface SourceXkcdConfiguration {
    /**
     * Specifies the comic number in which details are to be extracted, pagination will begin with that number to end of available comics. Default: "2960"
     */
    comicNumber: string;
}
export interface SourceYandexMetricaConfiguration {
    /**
     * Your Yandex Metrica API access token
     */
    authToken: string;
    /**
     * Counter ID
     */
    counterId: string;
    /**
     * Starting point for your data replication, in format of "YYYY-MM-DD". If not provided will sync till most recent date.
     */
    endDate?: string;
    /**
     * Starting point for your data replication, in format of "YYYY-MM-DD".
     */
    startDate: string;
}
export interface SourceYotpoConfiguration {
    /**
     * Access token recieved as a result of API call to https://api.yotpo.com/oauth/token (Ref- https://apidocs.yotpo.com/reference/yotpo-authentication)
     */
    accessToken: string;
    /**
     * App key found at settings (Ref- https://settings.yotpo.com/#/general_settings)
     */
    appKey: string;
    /**
     * Email address registered with yotpo. Default: "example@gmail.com"
     */
    email: string;
    /**
     * Date time filter for incremental filter, Specify which date to extract from.
     */
    startDate: string;
}
export interface SourceYoutubeAnalyticsConfiguration {
    credentials: outputs.SourceYoutubeAnalyticsConfigurationCredentials;
}
export interface SourceYoutubeAnalyticsConfigurationCredentials {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * The Client ID of your developer application
     */
    clientId: string;
    /**
     * The client secret of your developer application
     */
    clientSecret: string;
    /**
     * A refresh token generated using the above client ID and secret
     */
    refreshToken: string;
}
export interface SourceZendeskChatConfiguration {
    credentials?: outputs.SourceZendeskChatConfigurationCredentials;
    /**
     * The date from which you'd like to replicate data for Zendesk Chat API, in the format YYYY-MM-DDT00:00:00Z.
     */
    startDate: string;
    /**
     * Required if you access Zendesk Chat from a Zendesk Support subdomain. Default: ""
     */
    subdomain: string;
}
export interface SourceZendeskChatConfigurationCredentials {
    accessToken?: outputs.SourceZendeskChatConfigurationCredentialsAccessToken;
    oAuth20?: outputs.SourceZendeskChatConfigurationCredentialsOAuth20;
}
export interface SourceZendeskChatConfigurationCredentialsAccessToken {
    /**
     * The Access Token to make authenticated requests.
     */
    accessToken: string;
}
export interface SourceZendeskChatConfigurationCredentialsOAuth20 {
    /**
     * Access Token for making authenticated requests.
     */
    accessToken?: string;
    /**
     * The Client ID of your OAuth application
     */
    clientId?: string;
    /**
     * The Client Secret of your OAuth application.
     */
    clientSecret?: string;
    /**
     * Refresh Token to obtain new Access Token, when it's expired.
     */
    refreshToken?: string;
}
export interface SourceZendeskSunshineConfiguration {
    credentials?: outputs.SourceZendeskSunshineConfigurationCredentials;
    /**
     * The date from which you'd like to replicate data for Zendesk Sunshine API, in the format YYYY-MM-DDT00:00:00Z.
     */
    startDate: string;
    /**
     * The subdomain for your Zendesk Account.
     */
    subdomain: string;
}
export interface SourceZendeskSunshineConfigurationCredentials {
    apiToken?: outputs.SourceZendeskSunshineConfigurationCredentialsApiToken;
    oAuth20?: outputs.SourceZendeskSunshineConfigurationCredentialsOAuth20;
}
export interface SourceZendeskSunshineConfigurationCredentialsApiToken {
    /**
     * API Token. See the <a href="https://docs.airbyte.com/integrations/sources/zendesk_sunshine">docs</a> for information on how to generate this key.
     */
    apiToken: string;
    /**
     * The user email for your Zendesk account
     */
    email: string;
}
export interface SourceZendeskSunshineConfigurationCredentialsOAuth20 {
    /**
     * Long-term access Token for making authenticated requests.
     */
    accessToken: string;
    /**
     * The Client ID of your OAuth application.
     */
    clientId: string;
    /**
     * The Client Secret of your OAuth application.
     */
    clientSecret: string;
}
export interface SourceZendeskSupportConfiguration {
    /**
     * Zendesk allows two authentication methods. We recommend using `OAuth2.0` for Airbyte Cloud users and `API token` for Airbyte Open Source users.
     */
    credentials?: outputs.SourceZendeskSupportConfigurationCredentials;
    /**
     * The UTC date and time from which you'd like to replicate data, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated.
     */
    startDate?: string;
    /**
     * This is your unique Zendesk subdomain that can be found in your account URL. For example, in https://MY_SUBDOMAIN.zendesk.com/, MY_SUBDOMAIN is the value of your subdomain.
     */
    subdomain: string;
}
export interface SourceZendeskSupportConfigurationCredentials {
    apiToken?: outputs.SourceZendeskSupportConfigurationCredentialsApiToken;
    oAuth20?: outputs.SourceZendeskSupportConfigurationCredentialsOAuth20;
}
export interface SourceZendeskSupportConfigurationCredentialsApiToken {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * The value of the API token generated. See our <a href="https://docs.airbyte.com/integrations/sources/zendesk-support#setup-guide">full documentation</a> for more information on generating this token.
     */
    apiToken: string;
    /**
     * The user email for your Zendesk account.
     */
    email: string;
}
export interface SourceZendeskSupportConfigurationCredentialsOAuth20 {
    /**
     * The OAuth access token. See the <a href="https://developer.zendesk.com/documentation/ticketing/working-with-oauth/creating-and-using-oauth-tokens-with-the-api/">Zendesk docs</a> for more information on generating this token.
     */
    accessToken: string;
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * The OAuth client's ID. See <a href="https://docs.searchunify.com/Content/Content-Sources/Zendesk-Authentication-OAuth-Client-ID-Secret.htm#:~:text=Get%20Client%20ID%20and%20Client%20Secret&text=Go%20to%20OAuth%20Clients%20and,will%20be%20displayed%20only%20once.">this guide</a> for more information.
     */
    clientId?: string;
    /**
     * The OAuth client secret. See <a href="https://docs.searchunify.com/Content/Content-Sources/Zendesk-Authentication-OAuth-Client-ID-Secret.htm#:~:text=Get%20Client%20ID%20and%20Client%20Secret&text=Go%20to%20OAuth%20Clients%20and,will%20be%20displayed%20only%20once.">this guide</a> for more information.
     */
    clientSecret?: string;
}
export interface SourceZendeskTalkConfiguration {
    /**
     * Zendesk service provides two authentication methods. Choose between: `OAuth2.0` or `API token`.
     */
    credentials?: outputs.SourceZendeskTalkConfigurationCredentials;
    /**
     * The date from which you'd like to replicate data for Zendesk Talk API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated.
     */
    startDate: string;
    /**
     * This is your Zendesk subdomain that can be found in your account URL. For example, in https://{MY_SUBDOMAIN}.zendesk.com/, where MY_SUBDOMAIN is the value of your subdomain.
     */
    subdomain: string;
}
export interface SourceZendeskTalkConfigurationCredentials {
    apiToken?: outputs.SourceZendeskTalkConfigurationCredentialsApiToken;
    oAuth20?: outputs.SourceZendeskTalkConfigurationCredentialsOAuth20;
}
export interface SourceZendeskTalkConfigurationCredentialsApiToken {
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * The value of the API token generated. See the <a href="https://docs.airbyte.com/integrations/sources/zendesk-talk">docs</a> for more information.
     */
    apiToken: string;
    /**
     * The user email for your Zendesk account.
     */
    email: string;
}
export interface SourceZendeskTalkConfigurationCredentialsOAuth20 {
    /**
     * The value of the API token generated. See the <a href="https://docs.airbyte.com/integrations/sources/zendesk-talk">docs</a> for more information.
     */
    accessToken: string;
    /**
     * Parsed as JSON.
     */
    additionalProperties?: string;
    /**
     * Client ID
     */
    clientId?: string;
    /**
     * Client Secret
     */
    clientSecret?: string;
}
export interface SourceZenloopConfiguration {
    /**
     * Zenloop API Token. You can get the API token in settings page <a href="https://app.zenloop.com/settings/api">here</a>
     */
    apiToken: string;
    /**
     * Zenloop date_from. Format: 2021-10-24T03:30:30Z or 2021-10-24. Leave empty if only data from current data should be synced
     */
    dateFrom?: string;
    /**
     * Zenloop Survey Group ID. Can be found by pulling All Survey Groups via SurveyGroups stream. Leave empty to pull answers from all survey groups
     */
    surveyGroupId?: string;
    /**
     * Zenloop Survey ID. Can be found <a href="https://app.zenloop.com/settings/api">here</a>. Leave empty to pull answers from all surveys
     */
    surveyId?: string;
}
export interface SourceZohoCrmConfiguration {
    /**
     * OAuth2.0 Client ID
     */
    clientId: string;
    /**
     * OAuth2.0 Client Secret
     */
    clientSecret: string;
    /**
     * Please choose the region of your Data Center location. More info by this <a href="https://www.zoho.com/crm/developer/docs/api/v2/multi-dc.html">Link</a>. must be one of ["US", "AU", "EU", "IN", "CN", "JP"]
     */
    dcRegion: string;
    /**
     * Choose your Edition of Zoho CRM to determine API Concurrency Limits. must be one of ["Free", "Standard", "Professional", "Enterprise", "Ultimate"]; Default: "Free"
     */
    edition: string;
    /**
     * Please choose the environment. must be one of ["Production", "Developer", "Sandbox"]
     */
    environment: string;
    /**
     * OAuth2.0 Refresh Token
     */
    refreshToken: string;
    /**
     * ISO 8601, for instance: `YYYY-MM-DD`, `YYYY-MM-DD HH:MM:SS+HH:MM`
     */
    startDatetime?: string;
}
export interface SourceZoomConfiguration {
    /**
     * The account ID for your Zoom account. You can find this in the Zoom Marketplace under the "Manage" tab for your app.
     */
    accountId: string;
    /**
     * Default: "https://zoom.us/oauth/token"
     */
    authorizationEndpoint: string;
    /**
     * The client ID for your Zoom app. You can find this in the Zoom Marketplace under the "Manage" tab for your app.
     */
    clientId: string;
    /**
     * The client secret for your Zoom app. You can find this in the Zoom Marketplace under the "Manage" tab for your app.
     */
    clientSecret: string;
}
//# sourceMappingURL=output.d.ts.map