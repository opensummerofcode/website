<?php

$glob = glob('*.{jpg,png}', GLOB_BRACE);

foreach ($glob as $path) {
  echo sprintf('%s%s', basename($path), PHP_EOL);

  $image = new Imagick($path);

  $orientation = $image->getImageOrientation();

  switch($orientation) {
      case Imagick::ORIENTATION_BOTTOMRIGHT:
          $image->rotateimage("#000", 180); // rotate 180 degrees
      break;

      case Imagick::ORIENTATION_RIGHTTOP:
          $image->rotateimage("#000", 90); // rotate 90 degrees CW
      break;

      case Imagick::ORIENTATION_LEFTBOTTOM:
          $image->rotateimage("#000", -90); // rotate 90 degrees CCW
      break;
  }

  // Now that it's auto-rotated, make sure the EXIF data is correct in case the EXIF gets saved with the image!
  $image->setImageOrientation(Imagick::ORIENTATION_TOPLEFT);

  $image->cropThumbnailImage(400,400);

  $new = sprintf('../%s', strtolower(basename($image->getImageFilename())));

  $image->writeImage($new);

  $image->destroy();
}

exit();
