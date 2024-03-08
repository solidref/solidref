class Mp3Player:
    def play_mp3(self, file_name):
        print(f"Playing MP3 file: {file_name}")

class AudioPlayer:
    def play(self, file_name):
        pass

class OggToMp3Adapter(AudioPlayer):
    def __init__(self):
        self.mp3_player = Mp3Player()

    def play(self, file_name):
        # Convert OGG to MP3 and play using the MP3 player
        print(f"Converting OGG file '{file_name}' to MP3 format")
        mp3_file_name = self._convert_to_mp3(file_name)
        self.mp3_player.play_mp3(mp3_file_name)

    def _convert_to_mp3(self, file_name):
        # Simulate conversion process (replace extension)
        return file_name.replace('.ogg', '.mp3')

# Client code
audio_player = OggToMp3Adapter()

# Play MP3 file
audio_player.play('audio1.mp3')

# Play OGG file (automatically converted to MP3)
audio_player.play('audio2.ogg')