import { EntityManager, getManager, getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { sign, verify, decode } from 'jsonwebtoken';
import { register } from "../entity/register";

var crypto = require('crypto');
var key = "123456";
var algorithm = "aes256";

export class CommonAPIController {

    public encrypt(text: string) {
        var cipher = crypto.createCipher(algorithm, key);
        var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
        return encrypted;
    }

    public decrypt(text: string) {
        var decipher = crypto.createDecipher(algorithm, key);
        var decrypted = decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
        return decrypted;
    }

    public Token(length = 120) {
        var result = ''; 
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    

    public async verifyToken(token: any) {
        let result: any;
        const entityManager = getManager();
        var response: any;
        const accessToken = token;
            if (accessToken) {
            const active:any = await entityManager
            .createQueryBuilder(register , "user")
            .where("user.Token")
            }
            return response = { resultstatus : false,
                userid : null,
                error : 'invalid access token'
                };

        
        

    }
}