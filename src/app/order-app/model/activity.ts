export class Activity {
  id: number;
  activityName: string;
  activityAddress: string;

  constructor(activity: any) {
    this.id = activity.id;
    this.activityName = activity.activityName;
    this.activityAddress = activity.activityAddress;
  }
}
