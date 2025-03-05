export default class Event{
    constructor() {
        this.eventList = {}
    }
    on(eventName, fn) {
        this.eventList[eventName] = this.eventList[eventName] || []
        this.eventList[eventName].push(fn)
    }
    emit(eventName, ...args) {
        let fns = this.eventList[eventName]
        if (fns) {
            this.eventList[eventName].forEach(item => {
                item?.call(this,...args)
            })
        }
    }
    off(eventName, fn) {
        if (!this.eventList[eventName]) {
            return
        }
        this.eventList[eventName] = this.eventList[eventName].filter(item => item!== fn)
    }
    offAll(eventName) {
        if (eventName) {
            delete this.eventList[eventName]
            return
        }
        this.eventList = {}
    }
}