'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.userDialog.querySelector('.setup-close');
  var userNameField = window.userDialog.querySelector('.setup-user-name');
  var wizardDialog = document.querySelector('.setup-wizard');
  var wizardCoatChange = wizardDialog.querySelector('.wizard-coat');
  var wizardEyesChange = wizardDialog.querySelector('.wizard-eyes');
  var wizardFireballChange = document.querySelector('.setup-fireball-wrap');

  var changeAtt = function (arr, element, inputValue) {
    var randomAtt = window.getRandom(arr);
    window.userDialog.querySelector('input[name="' + inputValue + '"]').value = randomAtt;

    if (element === wizardFireballChange) {
      element.style.background = randomAtt;
    } else {
      element.style.fill = randomAtt;
    }
  };

  var openPopup = function () {
    window.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.userDialog.classList.add('hidden');
    window.userDialog.removeAttribute('style', '');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === window.keys.esc && evt.target !== userNameField) {
      closePopup();
    }
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.keys.enter) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  userNameField.addEventListener('keydown', function (evt) {
    if (evt.key === window.keys.enter) {
      event.preventDefault();
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.keys.enter && evt.target === setupClose) {
      closePopup();
    }
  });

  wizardCoatChange.addEventListener('click', function () {
    changeAtt(window.colors.wizardColors, wizardCoatChange, 'coat-color');
  });

  wizardEyesChange.addEventListener('click', function () {
    changeAtt(window.colors.wizardEyeColors, wizardEyesChange, 'eyes-color');
  });

  wizardFireballChange.addEventListener('click', function () {
    changeAtt(window.colors.wizardFireballColors, wizardFireballChange, 'fireball-color');
  });
})();
