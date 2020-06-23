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
    Address,
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    OrderItem,
    OrderItemFromJSON,
    OrderItemFromJSONTyped,
    OrderItemToJSON,
    OrderTracking,
    OrderTrackingFromJSON,
    OrderTrackingFromJSONTyped,
    OrderTrackingToJSON,
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrderDetail
 */
export interface OrderDetail {
    /**
     * 
     * @type {Address}
     * @memberof OrderDetail
     */
    billing?: Address;
    /**
     * 
     * @type {string}
     * @memberof OrderDetail
     */
    deliveryType?: OrderDetailDeliveryTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof OrderDetail
     */
    id?: number;
    /**
     * 
     * @type {Date}
     * @memberof OrderDetail
     */
    orderDate?: Date;
    /**
     * 
     * @type {Array<OrderItem>}
     * @memberof OrderDetail
     */
    orderItems?: Array<OrderItem>;
    /**
     * 
     * @type {string}
     * @memberof OrderDetail
     */
    paymentType?: OrderDetailPaymentTypeEnum;
    /**
     * 
     * @type {Address}
     * @memberof OrderDetail
     */
    shipping?: Address;
    /**
     * 
     * @type {number}
     * @memberof OrderDetail
     */
    total?: number;
    /**
     * 
     * @type {OrderTracking}
     * @memberof OrderDetail
     */
    tracking?: OrderTracking;
    /**
     * 
     * @type {User}
     * @memberof OrderDetail
     */
    user?: User;
}

export function OrderDetailFromJSON(json: any): OrderDetail {
    return OrderDetailFromJSONTyped(json, false);
}

export function OrderDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'billing': !exists(json, 'billing') ? undefined : AddressFromJSON(json['billing']),
        'deliveryType': !exists(json, 'deliveryType') ? undefined : json['deliveryType'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'orderDate': !exists(json, 'orderDate') ? undefined : (new Date(json['orderDate'])),
        'orderItems': !exists(json, 'orderItems') ? undefined : ((json['orderItems'] as Array<any>).map(OrderItemFromJSON)),
        'paymentType': !exists(json, 'paymentType') ? undefined : json['paymentType'],
        'shipping': !exists(json, 'shipping') ? undefined : AddressFromJSON(json['shipping']),
        'total': !exists(json, 'total') ? undefined : json['total'],
        'tracking': !exists(json, 'tracking') ? undefined : OrderTrackingFromJSON(json['tracking']),
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function OrderDetailToJSON(value?: OrderDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'billing': AddressToJSON(value.billing),
        'deliveryType': value.deliveryType,
        'id': value.id,
        'orderDate': value.orderDate === undefined ? undefined : (value.orderDate.toISOString()),
        'orderItems': value.orderItems === undefined ? undefined : ((value.orderItems as Array<any>).map(OrderItemToJSON)),
        'paymentType': value.paymentType,
        'shipping': AddressToJSON(value.shipping),
        'total': value.total,
        'tracking': OrderTrackingToJSON(value.tracking),
        'user': UserToJSON(value.user),
    };
}

/**
* @export
* @enum {string}
*/
export enum OrderDetailDeliveryTypeEnum {
    DELIVER = 'DELIVER',
    PICKUP = 'PICK_UP'
}
/**
* @export
* @enum {string}
*/
export enum OrderDetailPaymentTypeEnum {
    CASH = 'CASH',
    GCASH = 'GCASH'
}

