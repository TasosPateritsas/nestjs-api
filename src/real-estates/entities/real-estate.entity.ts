import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RealEstate {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    address: string;
    @Column()
    sellerId: string;
    @Column()
    price: number;
}
