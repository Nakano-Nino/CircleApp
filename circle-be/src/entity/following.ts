import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Following {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Users, (following_id) => following_id.following)
    following_id: Users

    @ManyToOne(() => Users, (followed_id) => followed_id.followed)
    followed_id: Users

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date

    

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updared_at: Date
}