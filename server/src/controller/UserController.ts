import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'

export class UserController{
    async create(request:Request, response:Response){
        const {name,email,photo}=request.body
        
        const User=await prismaClient.users.create({
            data:{
                name,
                email,
                photo,
            }
        })
        return response.json(User)
    }
    /*
    async consultar(request:Request, response:Response){
        try {
            const Product = await prismaClient.product.findMany({})
            return response.json(Product)
            
        } catch (error) {
            return response.json(error)
        }
            
    }    

    async atualizar(request:Request, response:Response){
        const{id}=request.params
        const{name,bar_code,price}=request.body;

        let Product=await prismaClient.product.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!Product){
            return response.json({
                error:"não existe o produto"
            })
        }

        Product=await prismaClient.product.update({
            where:{
                id:Number(id)
            },
            data:{
                bar_code,
                name,
                price,
            }
        })

        return response.json(Product)
    }    

    async deletar(request:Request, response:Response){
        const {id}=request.params
        const Product = await prismaClient.product.delete({
            where: {
               id:Number(id)
            },
          }) 
        response.json("registro excluído")
    }

    async pesquisar(request:Request, response:Response){
        const{id}=request.params;

        const Product=await prismaClient.product.findFirst({
            where:{
                id:Number(id)
            },
            include:{
                ProductCategory:true,
            }
        })

        if(!Product){
            return response.json({
                error:"não existe o produto"
            })
        }

        return response.json(Product)
    }*/    
}