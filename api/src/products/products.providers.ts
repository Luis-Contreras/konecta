import { PRODUCTS_REPOSITORY } from 'src/core/constants';
import { Products } from './products.entity';

export const productsProviders = [{
    provide: PRODUCTS_REPOSITORY,
    useValue: Products,
}];