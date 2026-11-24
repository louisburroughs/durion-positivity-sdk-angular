// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-bulk-loader/openapi.yaml.

/**
 * What a caller must hold to call one operation. The same shape as
 * `OperationRequirement` in @durion-sdk/transport, which documents it and
 * evaluates it (`isOperationPermitted`). Declared here as well because a
 * generated package cannot import another workspace package at build time; the
 * two are interchangeable.
 */
export interface OperationRequirement {
  readonly anyOf: readonly string[];
  readonly allOf: readonly string[];
  readonly conditional: readonly string[];
  readonly authenticated: boolean;
}

/** Every operation of @durion-sdk/bulk-loader, by the name of its generated service method. */
export type BulkLoaderOperationId =
  | 'appendTusUploadChunk'
  | 'approveColumnMappings'
  | 'cancelBulkLoadJob'
  | 'cancelTusUpload'
  | 'createBulkLoadJob'
  | 'createTusUpload'
  | 'downloadErrorReport'
  | 'getBulkLoadJob'
  | 'getColumnMappings'
  | 'getTusCapabilities'
  | 'getTusUploadOffset'
  | 'listAuditRecords'
  | 'listBulkLoadJobs'
  | 'retryBulkLoadJob'
  | 'startJobProcessing'
  | 'submitCorrections'
  | 'submitSingleCorrection'
  | 'uploadJobFile';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<BulkLoaderOperationId, OperationRequirement>>> = {
  appendTusUploadChunk: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  approveColumnMappings: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  cancelBulkLoadJob: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  cancelTusUpload: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  createBulkLoadJob: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  createTusUpload: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  downloadErrorReport: { anyOf: ['bulkImport:status:read'], allOf: [], conditional: [], authenticated: false },
  getBulkLoadJob: { anyOf: ['bulkImport:status:read'], allOf: [], conditional: [], authenticated: false },
  getColumnMappings: { anyOf: ['bulkImport:status:read'], allOf: [], conditional: [], authenticated: false },
  getTusUploadOffset: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  listAuditRecords: { anyOf: ['bulkImport:status:read'], allOf: [], conditional: [], authenticated: false },
  listBulkLoadJobs: { anyOf: ['bulkImport:status:read'], allOf: [], conditional: [], authenticated: false },
  retryBulkLoadJob: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  startJobProcessing: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  submitCorrections: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  submitSingleCorrection: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
  uploadJobFile: { anyOf: ['bulkImport:upload:execute'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly BulkLoaderOperationId[] = [
  'getTusCapabilities',
];
