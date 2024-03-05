// Adaptee: Existing MP3 player
class Mp3Player {
  playMp3(fileName) {
    console.log(`Playing MP3 file: ${fileName}`);
  }
}

// Adapter: Converts OGG audio files to MP3 format
class OggToMp3Adapter {
  constructor() {
    this.mp3Player = new Mp3Player();
  }

  play(fileName) {
    if (fileName.endsWith('.ogg')) {
      console.log(`Converting OGG file '${fileName}' to MP3 format`);
      fileName = this.convertToMp3(fileName);
    }
    this.mp3Player.playMp3(fileName);
  }

  private convertToMp3(fileName) {
    // Simulate conversion process (replace extension)
    return fileName.replace('.ogg', '.mp3');
  }
}

// Client code
const audioPlayer = new OggToMp3Adapter();

// Play MP3 file
audioPlayer.play('audio1.mp3');

// Play OGG file (automatically converted to MP3)
audioPlayer.play('audio2.ogg');


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
