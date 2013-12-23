spritesheet-frame-finder
========================

Very simple utility to return the position of animation frames within
a spritesheet.

## Usage

Currently supports automatically finding the frames within a spritesheet given
its width and height.

    var sff = require('spritesheet-frame-finder');
    var spritesheetWidth = 100;
    var spritesheetHeight = 100;
    var frameWidth = 10;
    var frameHeight = 10;
    var frames = sff.auto(spritesheetWidth, spritesheetHeight,
      frameWidth, frameHeight);
