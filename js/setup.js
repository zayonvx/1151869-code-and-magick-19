// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COLORS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYECOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (arr) {
  var RandomIndex = Math.floor(Math.random() * arr.length);
  return arr[RandomIndex];
};

var wizardList = function () {
  var result = [];
  for (var i = 0; i < 4; i++) {
    var wizardNew = {};
    wizardNew.name = getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES);
    wizardNew.coatColor = getRandom(WIZARD_COLORS);
    wizardNew.eyesColor = getRandom(WIZARD_EYECOLORS);
    result.push(wizardNew);
  }
  return result;
};

var userDialog = document.querySelector('.setup');
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

var wizard = wizardList();
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizard.length; i++) {
  fragment.appendChild(renderWizard(wizard[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
