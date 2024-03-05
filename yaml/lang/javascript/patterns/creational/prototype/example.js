// Concrete Prototype: DefaultUserProfile
class DefaultUserProfile {
  constructor(username, bio, profilePicture) {
    this.username = username;
    this.bio = bio;
    this.profilePicture = profilePicture;
  }

  clone() {
    // Using Object.assign for a shallow copy, which is sufficient for primitive properties.
    // For deep cloning, consider using a library or implementing a deeper clone logic.
    return new DefaultUserProfile(this.username, this.bio, this.profilePicture);
  }

  customizeProfile(settings) {
    if (settings.username) {
      this.username = settings.username;
    }
    if (settings.bio) {
      this.bio = settings.bio;
    }
    if (settings.profilePicture) {
      this.profilePicture = settings.profilePicture;
    }
  }

  displayProfile() {
    console.log("Username:", this.username);
    console.log("Bio:", this.bio);
    console.log("Profile Picture:", this.profilePicture);
  }
}

// Client code
const defaultProfile = new DefaultUserProfile("user123", "Welcome to my profile!", "default.jpg");

// Clone the default profile to create a customized profile
const customizedProfile = defaultProfile.clone();
customizedProfile.customizeProfile({ bio: "I'm a software developer.", profilePicture: "avatar.jpg" });

// Display both profiles
console.log("Default Profile:");
defaultProfile.displayProfile();

console.log("\nCustomized Profile:");
customizedProfile.displayProfile();

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
