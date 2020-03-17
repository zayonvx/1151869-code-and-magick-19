// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var wizardNew = function (names, surnames) {
  var wizard = {
    name: window.getRandom(names) + ' ' + window.getRandom(surnames),
    coatColor: window.getRandom(window.colors.wizardColors),
    eyesColor: window.getRandom(window.colors.wizardEyeColors)
  };
  return wizard;
};

var wizardList = function () {
  var result = [];
  for (var i = 0; i < 4; i++) {
    result.push(wizardNew(WIZARD_NAMES, WIZARD_SURNAMES));
  }
  return result;
};

var similarListElement = window.userDialog
    .querySelector('.setup-similar-list');

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

window.userDialog.querySelector('.setup-similar').classList.remove('hidden');
