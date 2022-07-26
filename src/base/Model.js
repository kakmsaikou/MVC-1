import EventBus from "./EventBus.js";

class Model extends EventBus {
  constructor(options) {
    super();
    Object.assign(this, options);
  }
  create() {
    console && console.error && console.error("你还没有实现 create()");
  }
  delete() {
    console && console.error && console.error("你还没有实现 delete()");
  }
  update() {
    console && console.error && console.error("你还没有实现 update()");
  }
  get() {
    console && console.error && console.error("你还没有实现 get()");
  }
}

export default Model;
