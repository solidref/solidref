#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Adaptee: Existing MP3 player
// Represents the existing audio player that can play MP3 files.
typedef struct {
    void (*playMp3)(const char* fileName);
} Mp3Player;

void playMp3(const char* fileName) {
    printf("Playing MP3 file: %s\n", fileName);
}

Mp3Player createMp3Player() {
    Mp3Player player;
    player.playMp3 = playMp3;
    return player;
}

// Target: Interface expected by the client (unified interface)
// Defines the unified interface expected by the client application for playing audio files.
typedef struct {
    void (*play)(const char* fileName);
} AudioPlayer;

// Adapter: Converts OGG audio files to MP3 format
// Implements the AudioPlayer interface. It internally uses the Mp3Player to play MP3 files but converts OGG files to MP3 format before delegating to the Mp3Player.
typedef struct {
    Mp3Player mp3Player;
    void (*play)(const char* fileName);
} OggToMp3Adapter;

char* convertToMp3(const char* fileName) {
    // Simulate conversion process (replace extension)
    char* mp3FileName = strdup(fileName);
    char* ext = strrchr(mp3FileName, '.');
    if (ext != NULL) strcpy(ext, ".mp3");
    return mp3FileName;
}

void adapterPlay(const char* fileName) {
    printf("Converting OGG file '%s' to MP3 format\n", fileName);
    char* mp3FileName = convertToMp3(fileName);
    Mp3Player player = createMp3Player();
    player.playMp3(mp3FileName);
    free(mp3FileName);
}

OggToMp3Adapter createOggToMp3Adapter() {
    OggToMp3Adapter adapter;
    adapter.mp3Player = createMp3Player(); // might be unnecessary unless mp3Player needs initialization
    adapter.play = adapterPlay;
    return adapter;
}

int main() {
    // Client code
    OggToMp3Adapter adapter = createOggToMp3Adapter();
    AudioPlayer audioPlayer;
    audioPlayer.play = adapter.play;

    // Play MP3 file
    audioPlayer.play("audio1.mp3");

    // Play OGG file (automatically converted to MP3)
    audioPlayer.play("audio2.ogg");

    return 0;
}