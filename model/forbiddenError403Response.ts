/**
 * ManageSpace Communication API
 * ManageSpace Communication API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';


export interface ForbiddenError403Response { 
    readonly data: Array<string>;
    readonly success: boolean;
    error: ForbiddenError403ResponseError;
}

