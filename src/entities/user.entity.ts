import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { VaiTro } from './user-role.enum';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    dienthoai: string;

    @Column()
    matkhauHash: string;

    @Column({ default: true })
    phaidoiMK: boolean;

    @Column({
        type: 'enum',
        enum: VaiTro
    })
    vaitro: VaiTro;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
