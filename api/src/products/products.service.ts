import { Injectable, Inject } from '@nestjs/common';
import { Products } from './products.entity';
import { PRODUCTS_REPOSITORY } from 'src/core/constants';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {

  constructor(@Inject(PRODUCTS_REPOSITORY) private readonly productsRepository: typeof Products) { }

  async create(product: ProductDto): Promise<Products> {
    return await this.productsRepository.create<Products>(product);
  }

  async findAll(): Promise<Products[]> {
    return this.productsRepository.findAll<Products>({ where: { isDelete: false } })
  }

  async findOneById(id: number): Promise<Products> {
    return await this.productsRepository.findOne<Products>({ where: { id } });
  }

  async update(id: number, product: ProductDto): Promise<Products> {
    const res = await this.productsRepository
    .update({ ...product }, {
      where: {
        id
      }
    });
    if(res){
      return this.findOneById(id)
    }
  }

  async sale(id: number, stock: {stock: number}){

    const changeStock: number = stock.stock
    const date: string = new Date().toISOString()

    const existStock = await this.findOneById(id)
    

    if(existStock.stock === 0){
      return 'product no has store'
    }

    if(existStock.stock < changeStock){
      return 'not exist this stock for this product'
    }
    
    const res = await this.productsRepository
    .update({ stock: existStock.stock - changeStock, lastSale: date }, {
      where: {
        id
      }
    });
    if(res){
      return 'sale realized'
    }
  }

  async delete(id) {
    const date = new Date()
    const res = await this.productsRepository
    .update({ isDelete: true, deletedAt: date.toISOString() }, {
      where: {
        id
      }
    });
    if(res){
      return 'deleted'
    }
  }}
