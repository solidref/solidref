use std::fmt;

// UserProfile trait: Defines an interface for cloning and customizing the profile, along with a method for displaying the profile
trait UserProfile: Clone {
    fn customize_profile(&mut self, settings: UserProfileSettings);
    fn display_profile(&self);
}

// DefaultUserProfile struct: A concrete implementation of the UserProfile trait
#[derive(Clone)]
struct DefaultUserProfile {
    username: String,
    bio: String,
    profile_picture: String,
}

impl DefaultUserProfile {
    fn new(username: String, bio: String, profile_picture: String) -> Self {
        Self {
            username,
            bio,
            profile_picture,
        }
    }
}

impl UserProfile for DefaultUserProfile {
    fn customize_profile(&mut self, settings: UserProfileSettings) {
        if let Some(username) = settings.username {
            self.username = username;
        }
        if let Some(bio) = settings.bio {
            self.bio = bio;
        }
        if let Some(profile_picture) = settings.profile_picture {
            self.profile_picture = profile_picture;
        }
    }

    fn display_profile(&self) {
        println!("Username: {}", self.username);
        println!("Bio: {}", self.bio);
        println!("Profile Picture: {}", self.profile_picture);
    }
}

// UserProfileSettings struct: Represents optional settings for customizing a user profile
struct UserProfileSettings {
    username: Option<String>,
    bio: Option<String>,
    profile_picture: Option<String>,
}

impl UserProfileSettings {
    pub fn new(username: Option<String>, bio: Option<String>, profile_picture: Option<String>) -> Self {
        Self {
            username,
            bio,
            profile_picture,
        }
    }
}

fn main() {
    // Creating a default user profile
    let default_profile = DefaultUserProfile::new(
        "user123".into(),
        "Welcome to my profile!".into(),
        "default.jpg".into(),
    );

    // Cloning the default profile to create a customized profile
    let mut customized_profile = default_profile.clone();
    customized_profile.customize_profile(UserProfileSettings::new(
        None,
        Some("I'm a software developer.".into()),
        Some("avatar.jpg".into()),
    ));

    // Displaying both profiles
    println!("Default Profile:");
    default_profile.display_profile();

    println!("\nCustomized Profile:");
    customized_profile.display_profile();

    // The use of the Prototype pattern in Rust involves the Clone trait to create a new instance of a struct. 
    // The UserProfile trait and its methods allow for customizing and displaying the profile. The UserProfileSettings 
    // struct replaces the interface for optional settings, illustrating the use of the Prototype pattern to create 
    // and customize objects by cloning existing ones.
}