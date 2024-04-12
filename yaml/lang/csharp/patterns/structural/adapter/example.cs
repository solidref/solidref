using System;

// Adaptee: Existing MP3 player
public class Mp3Player {
  public void PlayMp3(string fileName) {
    Console.WriteLine($"Playing MP3 file: {fileName}");
  }
}

// Target: Interface expected by the client (unified interface)
public interface IAudioPlayer {
  void Play(string fileName);
}

// Adapter: Converts OGG audio files to MP3 format
public class OggToMp3Adapter : IAudioPlayer {
  private Mp3Player _mp3Player;

  public OggToMp3Adapter() {
    _mp3Player = new Mp3Player();
  }

  public void Play(string fileName) {
    // Convert OGG to MP3 and play using the MP3 player
    Console.WriteLine($"Converting OGG file '{fileName}' to MP3 format");
    var mp3FileName = ConvertToMp3(fileName);
    _mp3Player.PlayMp3(mp3FileName);
  }

  private string ConvertToMp3(string fileName) {
    // Simulate conversion process (replace extension)
    return fileName.Replace(".ogg", ".mp3");
  }
}

class Program {
  static void Main(string[] args) {
    // Client code
    IAudioPlayer audioPlayer = new OggToMp3Adapter();

    // Play MP3 file
    audioPlayer.Play("audio1.mp3");

    // Play OGG file (automatically converted to MP3)
    audioPlayer.Play("audio2.ogg");
  }
}

/*
 * Mp3Player represents the existing audio player that can play MP3 files.
 *
 * IAudioPlayer is the target interface that defines the unified interface expected by the
 * client application for playing audio files.
 *
 * OggToMp3Adapter is the adapter class that implements the IAudioPlayer interface. It internally
 * uses the Mp3Player to play MP3 files but converts OGG files to MP3 format before delegating to
 * the Mp3Player.
 *
 * In the client code, the application interacts with the IAudioPlayer interface, unaware of whether
 * it's playing MP3 or OGG files. When playing an OGG file, the adapter automatically converts it
 * to MP3 format before playing it using the Mp3Player.
 *
 */