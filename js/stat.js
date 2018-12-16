'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_HEIGHT = 16; // px
var FONT_GAP = FONT_HEIGHT / 2;

var BAR_WIDTH = 40;
var BAR_GAP = 50;

var BAR_MAX_HEIGHT = CLOUD_HEIGHT - (2 * GAP + 4 * (FONT_HEIGHT + FONT_GAP) + FONT_GAP);

var font = FONT_HEIGHT.toString() + 'px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = font;
  ctx.textBaseline = 'hanging';
  ctx.strokeText('Ура вы победили!', CLOUD_X + BAR_GAP, CLOUD_Y + GAP);
  ctx.strokeText('Список результатов:', CLOUD_X + BAR_GAP, CLOUD_Y + GAP + FONT_HEIGHT + FONT_GAP);

  for (var i = 0; i < players.length; i++) {
    var barHeight = BAR_MAX_HEIGHT * times[i] / maxTime;

    // ctx.fillStyle = '#000';

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + BAR_GAP / 2 + i * (BAR_WIDTH + BAR_GAP),
        CLOUD_Y + CLOUD_HEIGHT - (GAP + 2 * (FONT_HEIGHT + FONT_GAP) + barHeight)
    );

    ctx.fillText(
        players[i],
        CLOUD_X + BAR_GAP / 2 + i * (BAR_WIDTH + BAR_GAP),
        CLOUD_Y + CLOUD_HEIGHT - (GAP + FONT_HEIGHT)
    );

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toString() + ')';
    }

    ctx.fillRect(
        CLOUD_X + BAR_GAP / 2 + i * (BAR_WIDTH + BAR_GAP),
        CLOUD_Y + CLOUD_HEIGHT - (GAP + FONT_HEIGHT + FONT_GAP + barHeight),
        BAR_WIDTH,
        barHeight
    );
  }
};
