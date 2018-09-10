import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ProjectEntity } from './../../shared/entity/ProjectEntity';
import { MemberEntity } from '../../shared/entity/MemberEntity';
import { fakeProject, fakeProjects } from './../fake-data/project.fake';
import { fakeMember } from './../fake-data/member.fake';

@Injectable()
export class UserMockService {
  private user: Observable<MemberEntity>;
  private userGroup: string;

  constructor() {
  }

  public getUser(): Observable<MemberEntity> {
    this.user = Observable.of(fakeMember());
    return this.user;
  }

  currentUserGroup(projectID: string): Observable<string> {
    this.userGroup = fakeMember().projects[0].group;
    return Observable.of(fakeMember().projects[0].group);
  }
}