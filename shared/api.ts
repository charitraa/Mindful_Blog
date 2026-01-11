/**
 * Shared code between src and server
 * Useful to share types between src and server
 * and/or small pure JS functions that can be used on both src and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}
