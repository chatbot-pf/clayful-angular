/**
 * Clayful
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: minsu.lee@dietfriends.co.kr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ReviewRequest { 
    product?: string;
    title?: string;
    body?: string;
    images?: Array<string>;
    rating?: number;
    meta?: object;
}

