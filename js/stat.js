'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var SHADOW_OFFSET = 10;
  var GAP = 50;
  var BAR_MAX_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var FONT_FAMILY = '16px PT Mono';
  var BAR_PADDING = 80;
  var FONT_PADDING = 20;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderBar = function (ctx, name, time, maxTime, offsetX) {
    var roundTime = Math.round(time);
    var barHeight = Math.round((roundTime * BAR_MAX_HEIGHT) / maxTime);
    ctx.fillText(roundTime, CLOUD_X + BAR_WIDTH + offsetX, BAR_MAX_HEIGHT - barHeight + CLOUD_Y + BAR_PADDING - FONT_PADDING);

    ctx.fillStyle = (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(244,' + window.randomInteger(0, 100) + '%, 50%)';
    ctx.fillRect(CLOUD_X + BAR_WIDTH + offsetX, BAR_MAX_HEIGHT - barHeight + CLOUD_Y + BAR_PADDING, BAR_WIDTH, barHeight);

    ctx.fillStyle = window.colors.textColor;
    ctx.fillText(name, CLOUD_X + BAR_WIDTH + offsetX, BAR_MAX_HEIGHT + CLOUD_Y + BAR_PADDING + FONT_PADDING);
  };

  var renderData = function (ctx, players, times) {
    var maxTime = window.getMaxElement(times);
    var offsetX;
    for (var i = 0; i < players.length; i++) {
      offsetX = (BAR_WIDTH + GAP) * i;
      renderBar(ctx, players[i], times[i], maxTime, offsetX);
    }
  };

  window.renderStatistics = function (ctx, players, times) {

    renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.font = FONT_FAMILY;
    ctx.fillStyle = window.colors.textColor;
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + FONT_PADDING, CLOUD_Y + FONT_PADDING);
    ctx.fillText('Список результатов:', CLOUD_X + FONT_PADDING, CLOUD_Y + FONT_PADDING * 2);

    renderData(ctx, players, times);
  };
})();
