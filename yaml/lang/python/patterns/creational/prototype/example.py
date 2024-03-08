class UserProfile:
    def clone(self):
        pass

    def customize_profile(self, settings):
        pass

    def display_profile(self):
        pass


class DefaultUserProfile(UserProfile):
    def __init__(self, username, bio, profile_picture):
        self.username = username
        self.bio = bio
        self.profile_picture = profile_picture

    def clone(self):
        return DefaultUserProfile(self.username, self.bio, self.profile_picture)

    def customize_profile(self, settings):
        self.username = settings.get('username', self.username)
        self.bio = settings.get('bio', self.bio)
        self.profile_picture = settings.get('profile_picture', self.profile_picture)

    def display_profile(self):
        print("Username:", self.username)
        print("Bio:", self.bio)
        print("Profile Picture:", self.profile_picture)


# Client code
default_profile = DefaultUserProfile("user123", "Welcome to my profile!", "default.jpg")

# Clone the default profile to create a customized profile
customized_profile = default_profile.clone()
customized_profile.customize_profile({'bio': "I'm a software developer.", 'profile_picture': "avatar.jpg"})

# Display both profiles
print("Default Profile:")
default_profile.display_profile()

print("\nCustomized Profile:")
customized_profile.display_profile()