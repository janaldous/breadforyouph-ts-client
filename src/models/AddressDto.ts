/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AddressDto
 */
export interface AddressDto {
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    line1: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    postcode: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    province: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    village: string;
}

export function AddressDtoFromJSON(json: any): AddressDto {
    return AddressDtoFromJSONTyped(json, false);
}

export function AddressDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'city': json['city'],
        'line1': json['line1'],
        'postcode': json['postcode'],
        'province': json['province'],
        'village': json['village'],
    };
}

export function AddressDtoToJSON(value?: AddressDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'city': value.city,
        'line1': value.line1,
        'postcode': value.postcode,
        'province': value.province,
        'village': value.village,
    };
}


