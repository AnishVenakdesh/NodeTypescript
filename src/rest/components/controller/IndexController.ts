import {  NextFunction, Request, Response } from "express";
import { bind } from 'decko';
import { getManager } from "typeorm";
import { mytable } from "../entity/Index";

export class IndexController {

    @bind
    public async Vantage(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const output:any = [];
        try
        {
            const StartDate = req.body.start_date;

            if(StartDate !="" && StartDate!= null)
            {
                const  list = await getManager()
                .createQueryBuilder(mytable, "table")
                .where("table")
                .where("table.observation_date = :StartDate", { StartDate: StartDate })
                .getMany();

                if(list.length > 0 ){
                    list.forEach(function(listarray:any){
                        output.push({'Id':listarray.Id,
                            'observation_date': listarray.observation_date,
                        'vintage': listarray.vintage,
                        'vantage_range' : listarray.vantage_range,
                        'delinquent_status' : listarray.delinquent_status,
                        'ecl' : listarray.ecl,
                        'balance': listarray.balance
                        });
                    });
                    if(output.length > 0){
                        res.json(Array({ 
                            table: output,
                            status: 200,  
                            message: 'success' }) );
                    }
                    else{
                        res.json(Array({ 
                            
                            status: 400,  
                            message: 'Failed' }) );
                    }
                }else{
                    res.json(Array({ 
                            
                        status: 400,  
                        message: 'Failed' }) );
                }
            }
            else{
                res.json(Array({ 
                            
                    status: 400,  
                    message: 'Failed' }) );
            }

        }
        catch(err){
            return next(err);

        }
    }

    public async Vintage(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const output:any = [];
        try
        {
            const StartDate = req.body.start_date;

            if(StartDate !="" && StartDate!= null)
            {
                const  list = await getManager()
                .createQueryBuilder(mytable, "table")
                .where("table")
                .where("table.observation_date = :StartDate", { StartDate: StartDate })
                .getMany();

                if(list.length > 0 ){
                    list.forEach(function(listarray:any){
                        output.push({'Id':listarray.Id,
                            'observation_date': listarray.observation_date,
                        'vintage': listarray.vintage,
                        'vantage_range' : listarray.vantage_range,
                        'delinquent_status' : listarray.delinquent_status,
                        'ecl' : listarray.ecl,
                        'balance': listarray.balance
                        });
                    });
                    if(output.length > 0){
                        res.json(Array({ 
                            table: output,
                            status: 200,  
                            message: 'success' }) );
                    }
                    else{
                        res.json(Array({ 
                            
                            status: 400,  
                            message: 'Failed' }) );
                    }
                }else{
                    res.json(Array({ 
                            
                        status: 400,  
                        message: 'Failed' }) );
                }
            }
            else{
                res.json(Array({ 
                            
                    status: 400,  
                    message: 'Failed' }) );
            }

        }
        catch(err){
            return next(err);

        }
    }
}