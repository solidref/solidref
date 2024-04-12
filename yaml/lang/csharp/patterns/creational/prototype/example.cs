using System;

// Prototype interface: IUserProfile
public interface IUserProfile
{
    IUserProfile Clone();
    void CustomizeProfile(UserProfileSettings settings);
    void DisplayProfile();
}

// Concrete Prototype: DefaultUserProfile
public class DefaultUserProfile : IUserProfile
{
    private string username;
    private string bio;
    private string profilePicture;

    // Constructor for the DefaultUserProfile
    public DefaultUserProfile(string username, string bio, string profilePicture)
    {
        this.username = username;
        this.bio = bio;
        this.profilePicture = profilePicture;
    }

    // Creates a shallow copy of the current object
    public IUserProfile Clone()
    {
        return new DefaultUserProfile(this.username, this.bio, this.profilePicture);
    }

    // Customizes profile with provided settings
    public void CustomizeProfile(UserProfileSettings settings)
    {
        if (settings.Username != null)
        {
            this.username = settings.Username;
        }
        if (settings.Bio != null)
        {
            this.bio = settings.Bio;
        }
        if (settings.ProfilePicture != null)
        {
            this.profilePicture = settings.ProfilePicture;
        }
    }

    // Displays user profile information
    public void DisplayProfile()
    {
        Console.WriteLine("Username: " + this.username);
        Console.WriteLine("Bio: " + this.bio);
        Console.WriteLine("Profile Picture: " + this.profilePicture);
    }
}

// Prototype settings: UserProfileSettings
public class UserProfileSettings
{
    public string Username { get; set; }
    public string Bio { get; set; }
    public string ProfilePicture { get; set; }
}

// Client code
class Program
{
    static void Main()
    {
        // Creating a default user profile
        var defaultProfile = new DefaultUserProfile("user123", "Welcome to my profile!", "default.jpg");

        // Cloning the default profile to create a customized profile
        var customizedProfile = defaultProfile.Clone();
        customizedProfile.CustomizeProfile(new UserProfileSettings 
                                            { Bio = "I'm a software developer.", 
                                              ProfilePicture = "avatar.jpg" });

        // Displaying both profiles
        Console.WriteLine("Default Profile:");
        defaultProfile.DisplayProfile();

        Console.WriteLine("\nCustomized Profile:");
        customizedProfile.DisplayProfile();
    }
} 

/*
 * The IUserProfile interface defines methods for cloning a profile, customizing profile settings, and
 * displaying the profile.
 *
 * The DefaultUserProfile class is a concrete implementation of the IUserProfile interface. It represents
 * the default user profile with properties like username, bio, and profile picture. The Clone()
 * method creates a copy of the profile, and the CustomizeProfile() method allows modifying profile
 * settings.
 *
 * The UserProfileSettings class defines optional settings that can be customized in a user profile.
 *
 * In the client code, we create a default user profile and then clone it to create a customized profile
 * with updated settings. Both profiles can be displayed independently, demonstrating the use of the
 * Prototype pattern to create new objects by copying existing ones.
 */