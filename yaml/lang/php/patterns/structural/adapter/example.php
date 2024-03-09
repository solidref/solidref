<?php

// Adaptee: Existing MP3 player
class Mp3Player {
  public function playMp3($fileName) {
    echo "Playing MP3 file: $fileName\n";
  }
}

// Target: Interface expected by the client (unified interface)
interface AudioPlayer {
  public function play($fileName);
}

// Adapter: Converts OGG audio files to MP3 format
class OggToMp3Adapter implements AudioPlayer {
  private $mp3Player;

  public function __construct() {
    $this->mp3Player = new Mp3Player();
  }

  public function play($fileName) {
    // Convert OGG to MP3 and play using the MP3 player
    echo "Converting OGG file '$fileName' to MP3 format\n";
    $mp3FileName = $this->convertToMp3($fileName);
    $this->mp3Player->playMp3($mp3FileName);
  }

  private function convertToMp3($fileName) {
    // Simulate conversion process (replace extension)
    return str_replace('.ogg', '.mp3', $fileName);
  }
}

// Client code
$audioPlayer = new OggToMp3Adapter();

// Play MP3 file
$audioPlayer->play('audio1.mp3');

// Play OGG file (automatically converted to MP3)
$audioPlayer->play('audio2.ogg');

/**
 * Mp3Player represents the existing audio player that can play MP3 files.
 *
 * AudioPlayer is the target interface that defines the unified interface expected by the
 * client application for playing audio files.
 *
 * OggToMp3Adapter is the adapter class that implements the AudioPlayer interface. It internally
 * uses the Mp3Player to play MP3 files but converts OGG files to MP3 format before delegating to
 * the Mp3Player.
 *
 * In the client code, the application interacts with the AudioPlayer interface, unaware of whether
 * it's playing MP3 or OGG files. When playing an OGG file, the adapter automatically converts it
 * to MP3 format before playing it using the Mp3Player.
 *
 */
?>