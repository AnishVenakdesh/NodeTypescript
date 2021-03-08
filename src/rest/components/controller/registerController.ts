import { NextFunction, Request, Response } from "express";
import { bind } from 'decko';
import { getManager } from "typeorm";
import { register } from "../entity/register";
import { isNull } from "util";
import { CommonAPIController } from "./commonController";

let Common = new CommonAPIController();
const entityManager = getManager();
export class registerController {

    @bind
    public async register(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const output: any = []
        try {
            const FirstName = req.body.FirstName;
            const LastName = req.body.LastName;
            const EmailID = req.body.EmailID;
            const Password = Common.encrypt(req.body.Password);
            const EmployeeID = req.body.EmployeeID;
            const OrganizationName = req.body.OrganizationName;
            if (FirstName != null) {
                let roleModel = await entityManager
                    .createQueryBuilder(register, "register")
                    .where("register.employeeID = :EmployeeID", { EmployeeID: EmployeeID })
                    .getOne();
                if (roleModel = null) {
                    const list = await entityManager
                        .createQueryBuilder(register, "register")
                        .insert()
                        .into(register)
                        .values([{
                            firstName: FirstName,
                            lastName: LastName,
                            emailID: EmailID,
                            password: Password,
                            employeeID: EmployeeID,
                            organizationName: OrganizationName
                        }
                        ]).execute();

                    if (list) {
                        res.json(Array({
                            register: "Data Added Succesfully",
                            status: 200,
                            message: 'success'
                        }));
                    }
                    else {
                        res.json(Array({
                            register: "Data Not Added ",
                            status: 200,
                            message: 'Failed'
                        }));
                    }
                } else {
                    res.json(Array({
                        register: "Employee ID Already Registered Please Choose Another EMP ID",
                        status: 400,
                        message: 'Failure'
                    }));
                }
            }

            else {
                res.json(Array({
                    register: "Data Must Not Empty",
                    status: 400,
                    message: 'Failure'
                }));
            }
        }
        catch (err) {
            return next(err);
        }
    }

    public async userlist(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const entityManager = getManager();

        let roleModel = await getManager()
            .createQueryBuilder(register, "register")
            .getMany();

        console.log(roleModel);
        if (roleModel) {
            res.json(Array({
                UserList: roleModel,
                status: 200,
                message: 'success'
            }));
        }
        else {
            res.json(Array({
                register: "Data Not Displayed ",
                status: 200,
                message: 'Failed'
            }));
        }
    }

    // public async Login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    //     const entityManager = getManager();
    //     var responseResult;

    //     const output: any = [];

    //     try {
    //         const EmailID = req.body.emailID;
    //         const Password = Common.decrypt(req.body.password);

    //         if (EmailID && Password) {
    //             let roleModel = await getManager()
    //                 .createQueryBuilder(register, "register")
    //                 .where("register.employeeID = :EmployeeID", { EmailID: EmailID })
    //                 .getOne();
    //                 console.log(roleModel)
    //                 if(roleModel){
    //                     res.json(Array({
    //                         UserLogin: roleModel,
    //                         status: 400,
    //                         message: 'Failure'
    //                     }));
    //                 }
    //         }else{
    //             res.json(Array({
    //                 register: "Employee ID ",
    //                 status: 400,
    //                 message: 'Failure'
    //             }));
    //         }
    //     }
    //     catch (err) {
    //         return next(err);
    //     }
    // }

    // public async Login(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    //     try
    //     {
    //         const userName = request.body.username;
    //         const pass = request.body.password;

    //         if(request.body.username && request.body.password){
    //             const user = await entityManager
                
    //             .createQueryBuilder()
    //             .select("user")
    //             .from(register, "user")
    //             .where("user.username = :username", { username: userName })
    //             //  .andWhere("user.password = :password", { password: pass })
    //             .getOne();
    //             if(user != null){
    //                 if (Common.decrypt(user.password) == request.body.password) {
                       
                        
    //                     response.status(200).json({
    //                         "status":"true",
    //                         "level":"200",
    //                         "message": "Login success",
    //                         "Token": Common.Token(120),
    //                         });
    //                 }
    //                 else{
    //                     response.status(201).json({
    //                         "status":"true",
    //                         "message": "Login failed"
    //                     });
    //                 }
                    
    //             }else{
    //                 response.status(202).json({
    //                     "status":"true",
    //                     "message": "Login failed"
    //                 });
    //             }
    //         }
    //         else{
    //             response.status(201).json({
    //                 "message": "decreption failed"
    //             });
    //         }
    //     }
    //     catch(err){
    //         response.status(400).json({
    //             "status":"true",
    //             "message": "decreption failed"
    //         });
    //     }
    // }
}
