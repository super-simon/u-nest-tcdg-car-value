import { Exclude } from 'class-transformer';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with ID', this.id);
  }

  @AfterUpdate()
  logUpdatet() {
    console.log('Updated User with ID', this.id);
  }

  @AfterRemove()
  logRemoved() {
    console.log('Removed User with ID', this.id);
  }
}
