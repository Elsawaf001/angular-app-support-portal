import { DatePipe } from '@angular/common';

export class User {

  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  profileImageUrl: string;
  lastLoginDate: Date;
  lastLoginDateDisplay: string | null;
  joinedDate: Date;
  role: string;
  authorities: string[];
  isActive: boolean;
  isNotLocked: boolean;

  constructor(user: any) {
    this.id = user.id;
    this.userId = user.userId;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.userName = user.userName;
    this.password = user.password;
    this.email = user.email;
    this.profileImageUrl = user.profileImageUrl;
    this.lastLoginDate = user.lastLoginDate;
    this.lastLoginDateDisplay = new DatePipe('en-US').transform(user.lastLoginDateDisplay, 'yyyy-MM-dd');
    this.joinedDate = user.joinedDate;
    this.role = user.role;
    this.authorities = user.authorities;
    this.isActive = user.isActive;
    this.isNotLocked = user.isNotLocked;
  }
}

