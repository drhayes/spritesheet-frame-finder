// Copyright (c) 2013 David Hayes

'use strict';

module.exports = {
  // Given an imageHeight, imageWidth, frameWidth, and frameHeight, this
  // function will return an array of frames (i.e. {x, y}) of the frames of
  // animation within the image. It will assume that frames begin at (0, 0) in
  // the image and each frame is frameWidth wide and frameHeight high,
  // proceeding to the right. Once it reaches the end of the image, it will go
  // to the next "line" in the image.
  auto: function(imageWidth, imageHeight, frameWidth, frameHeight) {
    var framesHigh = Math.floor(imageHeight / frameHeight);
    var framesWide = Math.floor(imageWidth / frameWidth);
    var frames = [];
    for (var y = 0; y < framesHigh; y++) {
      for (var x = 0; x < framesWide; x++) {
        frames.push({
          x: x * frameWidth,
          y: y * frameHeight
        });
      }
    }
    return frames;
  }
};