import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wishlist {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    userId: string;
    @Column()
    realEstateId: string;
}
