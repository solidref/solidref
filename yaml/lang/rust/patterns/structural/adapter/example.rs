struct Mp3Player;

impl Mp3Player {
    fn play_mp3(&self, file_name: &str) {
        println!("Playing MP3 file: {}", file_name);
    }
}

trait AudioPlayer {
    fn play(&self, file_name: &str);
}

struct OggToMp3Adapter {
    mp3_player: Mp3Player,
}

impl OggToMp3Adapter {
    fn new() -> Self {
        OggToMp3Adapter {
            mp3_player: Mp3Player,
        }
    }

    fn convert_to_mp3(&self, file_name: &str) -> String {
        // Simulate conversion process (replace extension)
        file_name.replace(".ogg", ".mp3")
    }
}

impl AudioPlayer for OggToMp3Adapter {
    fn play(&self, file_name: &str) {
        // Convert OGG to MP3 and play using the MP3 player
        println!("Converting OGG file '{}' to MP3 format", file_name);
        let mp3_file_name = self.convert_to_mp3(file_name);
        self.mp3_player.play_mp3(&mp3_file_name);
    }
}

fn main() {
    // Client code
    let audio_player: Box<dyn AudioPlayer> = Box::new(OggToMp3Adapter::new());

    // Play MP3 file
    audio_player.play("audio1.mp3");

    // Play OGG file (automatically converted to MP3)
    audio_player.play("audio2.ogg");
}