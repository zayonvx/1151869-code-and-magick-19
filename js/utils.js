'use strict';

(function () {
  window.randomInteger = function (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  window.getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.getRandom = function (arr) {
    var RandomIndex = Math.floor(Math.random() * arr.length);
    return arr[RandomIndex];
  };

  window.userDialog = document.querySelector('.setup');
})();
