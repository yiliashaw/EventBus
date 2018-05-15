module.exports = class EventBus {
  constructor() {
    this.listeners = Object.create(null);
  }

  /**
   *
   * @param {string | Array<string>} event
   * @param {Function} fn
   */
  on(event, fn) {
    const eventTypeValid = typeof event === 'string' || Array.isArray(event);
    if (eventTypeValid) {

      if (Array.isArray(event)) {
        event.forEach(ev => {
          this.on(ev, fn);
        });
      } else if (/\s+/.test(event.trim())) {
        event.split(/\s+/).forEach(ev => {
          this.on(ev, fn)
        });
      } else {
        const callbacks = this.listeners[event];

        if (!callbacks) {
          this.listeners[event] = [fn];
        } else {
          this.listeners[event].push(fn);
        }

      }
    } else {
      throw new TypeError('event is expected to be string or array')
    }

  }

  /**
   *
   *
   * @param {string} event
   * @param {Function} fn
   */
  once(event, fn) {
    const on = () => {
      this.off(event, fn);
      fn.apply(this, arguments);
    };
    on.fn = fn;
    this.$on(event, on);
  }


  off(event, fn) {
    const eventTypeValid = typeof event === 'string' || Array.isArray(event);
    if (eventTypeValid) {

      if (Array.isArray(event)) {
        event.forEach(ev => {
          this.off(ev, fn);
        });
      } else if (/\s+/.test(event.trim())) {
        event.split(/\s+/).forEach(ev => {
          this.off(ev, fn)
        });
      } else {
        const callbacks = this.listeners[event];

        if (!callbacks) {
          console.error(`No subscribers for event ${envent}`);
          return;
        }

        const index = callbacks.findIndex((val, index, arr) => val === cb);

        if (index === -1) {
          return;
        }

        callbacks.splice(index, 1);

        if (callbacks.length === 0) {
          this.listeners[event] = null;
          return;
        }

        this.listeners[event] = callbacks;
      }


    } else {
      throw new TypeError('event is expected to be string or array')
    }

  }

  trigger(event, ...args) {
    const callbacks = this.listeners[event];

    if (!callbacks) {
      console.error(`No subscribers for event ${event}`);
      return;
    }

    callbacks.forEach(cb => cb(...args));
  }
}