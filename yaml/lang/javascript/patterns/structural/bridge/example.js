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
 * The Vehicle class represents the abstraction, which is extended by Car and Truck.
 *
 * The Workshop interface represents the implementor, defining the work method.
 *
 * PaintWorkshop and RepairWorkshop are concrete implementations of the Workshop interface.
 *
 * Each vehicle can be associated with a specific workshop using composition, and it delegates the work to that workshop.
 */
