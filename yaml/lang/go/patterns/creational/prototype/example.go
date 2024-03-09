package main

import (
	"fmt"
)

// UserProfile provides methods for cloning a profile,
// customizing profile settings, and displaying the profile.
type UserProfile interface {
	Clone() UserProfile
	CustomizeProfile(settings UserProfileSettings)
	DisplayProfile()
}

// DefaultUserProfile represents the default user profile with properties like username,
// bio, and profile picture. It is a concrete implementation of the UserProfile interface.
type DefaultUserProfile struct {
	username      string
	bio           string
	profilePicture string
}

func NewDefaultUserProfile(username, bio, profilePicture string) *DefaultUserProfile {
	return &DefaultUserProfile{
		username:       username,
		bio:            bio,
		profilePicture: profilePicture,
	}
}

func (dup *DefaultUserProfile) Clone() UserProfile {
	return NewDefaultUserProfile(dup.username, dup.bio, dup.profilePicture)
}

func (dup *DefaultUserProfile) CustomizeProfile(settings UserProfileSettings) {
	if settings.Username != "" {
		dup.username = settings.Username
	}
	if settings.Bio != "" {
		dup.bio = settings.Bio
	}
	if settings.ProfilePicture != "" {
		dup.profilePicture = settings.ProfilePicture
	}
}

func (dup *DefaultUserProfile) DisplayProfile() {
	fmt.Println("Username:", dup.username)
	fmt.Println("Bio:", dup.bio)
	fmt.Println("Profile Picture:", dup.profilePicture)
}

// UserProfileSettings defines optional settings that can be customized in a user profile.
type UserProfileSettings struct {
	Username       string
	Bio            string
	ProfilePicture string
}

func main() {
	// Create a default user profile
	defaultProfile := NewDefaultUserProfile("user123", "Welcome to my profile!", "default.jpg")

	// Clone the default profile to create a customized profile
	customizedProfile := defaultProfile.Clone()
	customizedProfile.CustomizeProfile(UserProfileSettings{Bio: "I'm a software developer.", ProfilePicture: "avatar.jpg"})

	// Display both profiles
	fmt.Println("Default Profile:")
	defaultProfile.DisplayProfile()

	fmt.Println("\nCustomized Profile:")
	customizedProfile.DisplayProfile()
}

/**
 * In this Go implementation, the Prototype pattern is used to create new objects by copying existing ones.
 * The UserProfile interface and DefaultUserProfile struct implement the clone, customize profile, and display profile
 * functionalities, adhering closely to the original example's structure and behavior. The UserProfileSettings struct
 * replaces the settings interface from the TypeScript example, providing a way to specify optional customizations
 * for a user profile. The main function demonstrates creating a default and customized profile, showcasing the
 * versatility of the Prototype pattern.
 */