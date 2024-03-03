// Prototype interface: UserProfile
interface UserProfile {
  clone(): UserProfile;
  customizeProfile(settings: UserProfileSettings): void;
  displayProfile(): void;
}

// Concrete Prototype: DefaultUserProfile
class DefaultUserProfile implements UserProfile {
  private username: string;
  private bio: string;
  private profilePicture: string;

  constructor(username: string, bio: string, profilePicture: string) {
    this.username = username;
    this.bio = bio;
    this.profilePicture = profilePicture;
  }

  clone(): UserProfile {
    return new DefaultUserProfile(this.username, this.bio, this.profilePicture);
  }

  customizeProfile(settings: UserProfileSettings): void {
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

  displayProfile(): void {
    console.log("Username:", this.username);
    console.log("Bio:", this.bio);
    console.log("Profile Picture:", this.profilePicture);
  }
}

// Prototype settings: UserProfileSettings
interface UserProfileSettings {
  username?: string;
  bio?: string;
  profilePicture?: string;
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
