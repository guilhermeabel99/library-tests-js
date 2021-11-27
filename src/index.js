export default class OnLeaveIntent {
  constructor(callback) {
    
    this.callback = callback

    this.callback()
  }
}