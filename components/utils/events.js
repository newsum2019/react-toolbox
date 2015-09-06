module.exports = {

  getMousePosition (event) {
    return {
      x: event.pageX,
      y: event.pageY
    };
  },

  getTouchPosition (event) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  },

  pauseEvent (event) {
    event.stopPropagation();
    event.preventDefault();
    event.returnValue = false;
    event.cancelBubble = true;
  },

  addEventsToDocument (eventMap) {
    for (let key in eventMap) {
      document.addEventListener(key, eventMap[key], false);
    }
  },

  removeEventsFromDocument (eventMap) {
    for (let key in eventMap) {
      document.removeEventListener(key, eventMap[key], false);
    }
  }

};
