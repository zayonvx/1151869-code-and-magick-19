// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userNameField = userDialog.querySelector('.setup-user-name');
var wizardDialog = document.querySelector('.setup-wizard');
var wizardCoatChange = wizardDialog.querySelector('.wizard-coat');
var wizardEyesChange = wizardDialog.querySelector('.wizard-eyes');
var wizardFireballChange = document.querySelector('.setup-fireball-wrap');

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && evt.target !== userNameField) {
    closePopup();
  }
};

var getRandom = function (arr) {
  var RandomIndex = Math.floor(Math.random() * arr.length);
  return arr[RandomIndex];
};

var changeAtt = function (arr, element, inputValue) {
  var randomAtt = getRandom(arr);
  userDialog.querySelector('input[name="' + inputValue + '"]').value = randomAtt;

  if (element === wizardFireballChange) {
    element.style.background = randomAtt;
  } else {
    element.style.fill = randomAtt;
  }
};

var wizardNew = function () {
  var wizard = {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
    coatColor: getRandom(WIZARD_COLORS),
    eyesColor: getRandom(WIZARD_EYE_COLORS)
  };
  return wizard;
};

var wizardList = function () {
  var result = [];
  for (var i = 0; i < 4; i++) {
    result.push(wizardNew());
  }
  return result;
};

userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var wizards = wizardList();
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

userNameField.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    event.preventDefault();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY && evt.target === setupClose) {
    closePopup();
  }
});

wizardCoatChange.addEventListener('click', function () {
  changeAtt(WIZARD_COLORS, wizardCoatChange, 'coat-color');
});

wizardEyesChange.addEventListener('click', function () {
  changeAtt(WIZARD_EYE_COLORS, wizardEyesChange, 'eyes-color');
});

wizardFireballChange.addEventListener('click', function () {
  changeAtt(WIZARD_FIREBALL_COLORS, wizardFireballChange, 'fireball-color');
});
