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
import {
    UserDto,
    UserDtoFromJSON,
    UserDtoFromJSONTyped,
    UserDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrderConfirmation
 */
export interface OrderConfirmation {
    /**
     * 
     * @type {number}
     * @memberof OrderConfirmation
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderConfirmation
     */
    orderStatus?: OrderConfirmationOrderStatusEnum;
    /**
     * 
     * @type {UserDto}
     * @memberof OrderConfirmation
     */
    user?: UserDto;
}

export function OrderConfirmationFromJSON(json: any): OrderConfirmation {
    return OrderConfirmationFromJSONTyped(json, false);
}

export function OrderConfirmationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderConfirmation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderNumber': !exists(json, 'orderNumber') ? undefined : json['orderNumber'],
        'orderStatus': !exists(json, 'orderStatus') ? undefined : json['orderStatus'],
        'user': !exists(json, 'user') ? undefined : UserDtoFromJSON(json['user']),
    };
}

export function OrderConfirmationToJSON(value?: OrderConfirmation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orderNumber': value.orderNumber,
        'orderStatus': value.orderStatus,
        'user': UserDtoToJSON(value.user),
    };
}

/**
* @export
* @enum {string}
*/
export enum OrderConfirmationOrderStatusEnum {
    REGISTERED = 'REGISTERED',
    COOKING = 'COOKING',
    OTW = 'OTW',
    DELIVERED = 'DELIVERED'
}


