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
import { ProductShipping } from './productShipping';
import { Discount } from './discount';
import { NumberValue } from './numberValue';
import { VariantType } from './variantType';
import { Resource } from './resource';
import { Collection } from './collection';
import { ProductPrice } from './productPrice';
import { Image } from './image';
import { Catalog } from './catalog';


export interface Product { 
    _id: string;
    name: string;
    summary: string;
    description: string;
    price: ProductPrice;
    discount?: Discount;
    shipping?: ProductShipping;
    rating?: ProductShipping;
    bundled?: boolean;
    available?: boolean;
    brand?: Resource;
    thumbnail?: Image;
    totalReview?: NumberValue;
    collections?: Collection;
    catalogs?: Array<Catalog>;
    types?: VariantType;
    weight?: NumberValue;
    width?: NumberValue;
    height?: NumberValue;
    depth?: NumberValue;
}

