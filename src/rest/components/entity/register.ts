import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class register {
   @PrimaryGeneratedColumn()
   Id: number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;
    
    @Column()
    emailID : string;
    
    @Column()
    password : string;
   
    @Column()
    employeeID:string;

    @Column()
    organizationName:string;
    count: number;
    
}