import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity('mytable')
export class mytable {
   @PrimaryGeneratedColumn()
   Id: number;

    @Column()
    observation_date : Date;

    @Column()
    vantage_range : string;
    
    @Column()
    vintage : string;
    
    @Column()
    delinquent_status : string;

    @Column({ type: 'decimal', precision: 18, scale: 9 })
    ecl : number;
    
    @Column({ type: 'decimal', precision: 20, scale: 9 })
	balance : number;
}
