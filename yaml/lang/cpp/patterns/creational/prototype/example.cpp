#include <iostream>
#include <memory>
#include <string>

// Prototype interface
class UserProfile {
public:
  virtual std::unique_ptr<UserProfile> clone() const = 0;
  virtual void customizeProfile(const std::string &username,
                                const std::string &bio,
                                const std::string &profilePicture) = 0;
  virtual void displayProfile() const = 0;
  virtual ~UserProfile() {}
};

// Concrete Prototype
class DefaultUserProfile : public UserProfile {
  std::string username;
  std::string bio;
  std::string profilePicture;

public:
  DefaultUserProfile(const std::string &username, const std::string &bio,
                     const std::string &profilePicture)
      : username(username), bio(bio), profilePicture(profilePicture) {}

  std::unique_ptr<UserProfile> clone() const override {
    return std::make_unique<DefaultUserProfile>(*this);
  }

  void customizeProfile(const std::string &newUsername,
                        const std::string &newBio,
                        const std::string &newProfilePicture) override {
    if (!newUsername.empty())
      username = newUsername;
    if (!newBio.empty())
      bio = newBio;
    if (!newProfilePicture.empty())
      profilePicture = newProfilePicture;
  }

  void displayProfile() const override {
    std::cout << "Username: " << username << std::endl;
    std::cout << "Bio: " << bio << std::endl;
    std::cout << "Profile Picture: " << profilePicture << std::endl;
  }
};

// Client Code

int main() {
  DefaultUserProfile defaultProfile("user123", "Welcome to my profile!",
                                    "default.jpg");

  // Clone the default profile to create a customized profile
  auto customizedProfile = defaultProfile.clone();
  customizedProfile->customizeProfile("", "I'm a software developer.",
                                      "avatar.jpg");

  // Display both profiles
  std::cout << "Default Profile:" << std::endl;
  defaultProfile.displayProfile();

  std::cout << "\nCustomized Profile:" << std::endl;
  customizedProfile->displayProfile();

  return 0;
}
/**
 * The UserProfile interface defines methods for cloning a profile, customizing
 * profile settings, and displaying the profile.
 *
 * The DefaultUserProfile class is a concrete implementation of the UserProfile
 * interface. It represents the default user profile with properties like
 * username, bio, and profile picture. The clone() method creates a copy of the
 * profile, and the customizeProfile() method allows modifying profile settings.
 *
 * The UserProfileSettings interface defines optional settings that can be
 * customized in a user profile.
 *
 * In the client code, we create a default user profile and then clone it to
 * create a customized profile with updated settings. Both profiles can be
 * displayed independently, demonstrating the use of the Prototype pattern to
 * create new objects by copying existing ones.
 */
