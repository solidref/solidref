<?php

interface UserProfile {
  public function clone();
  public function customizeProfile($settings);
  public function displayProfile();
}

class DefaultUserProfile implements UserProfile {
  private $username;
  private $bio;
  private $profilePicture;

  public function __construct($username, $bio, $profilePicture) {
    $this->username = $username;
    $this->bio = $bio;
    $this->profilePicture = $profilePicture;
  }

  public function clone() {
    return new DefaultUserProfile($this->username, $this->bio, $this->profilePicture);
  }

  public function customizeProfile($settings) {
    if (!empty($settings['username'])) {
      $this->username = $settings['username'];
    }
    if (!empty($settings['bio'])) {
      $this->bio = $settings['bio'];
    }
    if (!empty($settings['profilePicture'])) {
      $this->profilePicture = $settings['profilePicture'];
    }
  }

  public function displayProfile() {
    echo "Username: " . $this->username . "\n";
    echo "Bio: " . $this->bio . "\n";
    echo "Profile Picture: " . $this->profilePicture . "\n";
  }
}

// Client code
$defaultProfile = new DefaultUserProfile("user123", "Welcome to my profile!", "default.jpg");

// Clone the default profile to create a customized profile
$customizedProfile = $defaultProfile->clone();
$customizedProfile->customizeProfile(['bio' => "I'm a software developer.", 'profilePicture' => "avatar.jpg"]);

// Display both profiles
echo "Default Profile:\n";
$defaultProfile->displayProfile();

echo "\nCustomized Profile:\n";
$customizedProfile->displayProfile();

/**
 * The UserProfile interface defines methods for cloning a profile, customizing profile settings, and
 * displaying the profile.
 *
 * The DefaultUserProfile class is a concrete implementation of the UserProfile interface. It represents
 * the default user profile with properties like username, bio, and profile picture. The clone()
 * method creates a copy of the profile, and the customizeProfile() method allows modifying profile
 * settings.
 *
 * The UserProfileSettings interface defines optional settings that can be customized in a user profile.
 *
 * In the client code, we create a default user profile and then clone it to create a customized profile
 * with updated settings. Both profiles can be displayed independently, demonstrating the use of the
 * Prototype pattern to create new objects by copying existing ones.
 */