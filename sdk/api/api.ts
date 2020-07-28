export * from './customer.service';
import { CustomerService } from './customer.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './product.service';
import { ProductService } from './product.service';
export * from './review.service';
import { ReviewService } from './review.service';
export const APIS = [CustomerService, DefaultService, ProductService, ReviewService];
