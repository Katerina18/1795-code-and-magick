// Файл setup.js
'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


class Wizard{
  constructor(firstName, secondName, coatColor, eyesColor) {
    this.name = firstName + ' ' + secondName;
    this.coatColor = coatColor;
    this.eyesColor = eyesColor;
  }
}

function GenerateWizards(num) {
  const FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  const SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  const COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizards = new Array(num);
  for (var i = 0; i < wizards.length; i++)
    wizards[i] = new Wizard(
      FIRST_NAMES[parseInt(Math.random() * FIRST_NAMES.length)],
      SECOND_NAMES[parseInt(Math.random() * SECOND_NAMES.length)],
      COAT_COLORS[parseInt(Math.random() * COAT_COLORS.length)],
      EYES_COLORS[parseInt(Math.random() * EYES_COLORS.length)]);

  return wizards;
}

var wizards = GenerateWizards(4);



var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

var similarListElement = userDialog.querySelector('.setup-similar-list');
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');