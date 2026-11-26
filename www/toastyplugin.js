module.exports = {
  show: function((message, duration, successCallback, errorCallback) {
      var options = {};
      options.message = message;
      options.duration = duration;
      cordova.exec(successCallback, errorCallback, 'ToastyPlugin', 'show', [options]);
  }
};
