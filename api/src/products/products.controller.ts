import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){

    }

    @Get()
    get(){
        return this.productsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productsService.findOneById(id)
    }

    @Post()
    create(@Body() newProduct : ProductDto){
        return this.productsService.create(newProduct)
    }


    @Put('/sale/:id')
    sale(@Body() stock: {stock: number}, @Param('id') id: number){
        return this.productsService.sale(id, stock)
    }

    @Put(':id')
    put(@Body() newProduct: ProductDto, @Param('id') id: number){
        return this.productsService.update(id, newProduct)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.productsService.delete(id)
    }


}
