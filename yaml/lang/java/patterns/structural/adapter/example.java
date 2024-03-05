// Mp3Player.java (Adaptee)
class Mp3Player {
  public void playMp3(String fileName) {
    System.out.println("Playing MP3 file: " + fileName);
  }
}

// AudioPlayer.java (Target interface)
interface AudioPlayer {
  void play(String fileName);
}

// OggToMp3Adapter.java (Adapter)
class OggToMp3Adapter implements AudioPlayer {
  private Mp3Player mp3Player;

  public OggToMp3Adapter() {
    this.mp3Player = new Mp3Player();
  }

  @Override
  public void play(String fileName) {
    // Convert OGG to MP3 and play using the MP3 player
    System.out.println("Converting OGG file '" + fileName + "' to MP3 format");
    String mp3FileName = convertToMp3(fileName);
    mp3Player.playMp3(mp3FileName);
  }

  private String convertToMp3(String fileName) {
    // Simulate conversion process (replace extension)
    return fileName.replace(".ogg", ".mp3");
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    AudioPlayer audioPlayer = new OggToMp3Adapter();

    // Play MP3 file
    audioPlayer.play("audio1.mp3");

    // Play OGG file (automatically converted to MP3)
    audioPlayer.play("audio2.ogg");
  }
}

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
