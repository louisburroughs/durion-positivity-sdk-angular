export * from './peopleAPI.service';
import { PeopleAPIService } from './peopleAPI.service';
export * from './peopleAccessControl.service';
import { PeopleAccessControlService } from './peopleAccessControl.service';
export * from './userPersonLinkingAPI.service';
import { UserPersonLinkingAPIService } from './userPersonLinkingAPI.service';
export const APIS = [PeopleAPIService, PeopleAccessControlService, UserPersonLinkingAPIService];
