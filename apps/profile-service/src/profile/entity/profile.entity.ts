import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { IUserCreationProfileAttrs } from '../profile.interface';

@Entity({ name: 'user_profile' })
export class ProfileEntity implements IUserCreationProfileAttrs {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ length: 20, default: 'Your name' })
  name: string;
}
