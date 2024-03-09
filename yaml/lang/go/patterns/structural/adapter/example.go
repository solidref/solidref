package main

import (
	"fmt"
	"strings"
)

// Mp3Player represents the existing audio player that can play MP3 files.
type Mp3Player struct{}

func (mp *Mp3Player) playMp3(fileName string) {
	fmt.Println("Playing MP3 file:", fileName)
}

// AudioPlayer is the target interface that defines the unified interface expected by the
// client application for playing audio files.
type AudioPlayer interface {
	play(fileName string)
}

// OggToMp3Adapter is the adapter class that implements the AudioPlayer interface. It internally
// uses the Mp3Player to play MP3 files but converts OGG files to MP3 format before delegating to
// the Mp3Player.
type OggToMp3Adapter struct {
	mp3Player Mp3Player
}

func NewOggToMp3Adapter() *OggToMp3Adapter {
	return &OggToMp3Adapter{
		mp3Player: Mp3Player{},
	}
}

func (adapter *OggToMp3Adapter) play(fileName string) {
	// Convert OGG to MP3 and play using the MP3 player
	fmt.Printf("Converting OGG file '%s' to MP3 format\n", fileName)
	mp3FileName := adapter.convertToMp3(fileName)
	adapter.mp3Player.playMp3(mp3FileName)
}

func (adapter *OggToMp3Adapter) convertToMp3(fileName string) string {
	// Simulate conversion process (replace extension)
	return strings.Replace(fileName, ".ogg", ".mp3", -1)
}

// Client code demonstrates the usage of the adapter.
func main() {
	audioPlayer := NewOggToMp3Adapter()

	// Play MP3 file
	audioPlayer.play("audio1.mp3")

	// Play OGG file (automatically converted to MP3)
	audioPlayer.play("audio2.ogg")
}