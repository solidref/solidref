// UserProfile.java
interface UserProfile {
  UserProfile clone();
  void customizeProfile(UserProfileSettings settings);
  void displayProfile();
}

// DefaultUserProfile.java
class DefaultUserProfile implements UserProfile {
  private String username;
  private String bio;
  private String profilePicture;

  public DefaultUserProfile(String username, String bio, String profilePicture) {
    this.username = username;
    this.bio = bio;
    this.profilePicture = profilePicture;
  }

  @Override
  public UserProfile clone() {
    return new DefaultUserProfile(this.username, this.bio, this.profilePicture);
  }

  @Override
  public void customizeProfile(UserProfileSettings settings) {
    if (settings.username != null) {
      this.username = settings.username;
    }
    if (settings.bio != null) {
      this.bio = settings.bio;
    }
    if (settings.profilePicture != null) {
      this.profilePicture = settings.profilePicture;
    }
  }

  @Override
  public void displayProfile() {
    System.out.println("Username: " + this.username);
    System.out.println("Bio: " + this.bio);
    System.out.println("Profile Picture: " + this.profilePicture);
  }
}

// UserProfileSettings.java
class UserProfileSettings {
  String username;
  String bio;
  String profilePicture;

  public UserProfileSettings(String username, String bio, String profilePicture) {
    this.username = username;
    this.bio = bio;
    this.profilePicture = profilePicture;
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    DefaultUserProfile defaultProfile = new DefaultUserProfile("user123", "Welcome to my profile!", "default.jpg");

    // Clone the default profile to create a customized profile
    UserProfile customizedProfile = defaultProfile.clone();
    customizedProfile.customizeProfile(new UserProfileSettings(null, "I'm a software developer.", "avatar.jpg"));

    // Display both profiles
    System.out.println("Default Profile:");
    defaultProfile.displayProfile();

    System.out.println("\nCustomized Profile:");
    customizedProfile.displayProfile();
  }
}


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
