export class CounterService{
  activeCount = 0;
  inactiveCount = 0;

  incrementActive(){
    this.activeCount++;
    console.log('Number of times a user has been made active: '+this.activeCount);
  }

  incrementInactive(){
    this.inactiveCount++;
    console.log('Number of a times a user has been made inactive: '+this.inactiveCount);
  }
}
