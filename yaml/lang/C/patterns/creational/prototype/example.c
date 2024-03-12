#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// UserProfile struct
typedef struct UserProfile UserProfile;

// Function pointers within the UserProfile struct
struct UserProfile {
    void (*clone)(UserProfile *this, UserProfile **target);
    void (*customizeProfile)(UserProfile *this, const char *username, const char *bio, const char *profilePicture);
    void (*displayProfile)(UserProfile *this);
    // Attributes
    char *username;
    char *bio;
    char *profilePicture;
};

// Function to clone a UserProfile
void clone(UserProfile *this, UserProfile **target) {
    *target = malloc(sizeof(UserProfile));
    **target = *this;
    (*target)->username = strdup(this->username);
    (*target)->bio = strdup(this->bio);
    (*target)->profilePicture = strdup(this->profilePicture);
}

// Function to customize UserProfile
void customizeProfile(UserProfile *this, const char *username, const char *bio, const char *profilePicture) {
    if (username) {
        free(this->username);
        this->username = strdup(username);
    }
    if (bio) {
        free(this->bio);
        this->bio = strdup(bio);
    }
    if (profilePicture) {
        free(this->profilePicture);
        this->profilePicture = strdup(profilePicture);
    }
}

// Function to display UserProfile
void displayProfile(UserProfile *this) {
    printf("Username: %s\n", this->username);
    printf("Bio: %s\n", this->bio);
    printf("Profile Picture: %s\n", this->profilePicture);
}

// Factory for DefaultUserProfile
void DefaultUserProfile(char *username, char *bio, char *profilePicture, UserProfile **profile) {
    *profile = malloc(sizeof(UserProfile));
    (*profile)->username = strdup(username);
    (*profile)->bio = strdup(bio);
    (*profile)->profilePicture = strdup(profilePicture);
    (*profile)->clone = clone;
    (*profile)->customizeProfile = customizeProfile;
    (*profile)->displayProfile = displayProfile;
}

// Function to free UserProfile resources
void FreeUserProfile(UserProfile *profile) {
    free(profile->username);
    free(profile->bio);
    free(profile->profilePicture);
    free(profile);
}

int main() {
    // Create a default user profile
    UserProfile *defaultProfile;
    DefaultUserProfile("user123", "Welcome to my profile!", "default.jpg", &defaultProfile);

    // Clone the default profile to create a customized profile
    UserProfile *customizedProfile;
    defaultProfile->clone(defaultProfile, &customizedProfile);
    customizedProfile->customizeProfile(customizedProfile, NULL, "I'm a software developer.", "avatar.jpg");

    // Display both profiles
    printf("Default Profile:\n");
    defaultProfile->displayProfile(defaultProfile);

    printf("\nCustomized Profile:\n");
    customizedProfile->displayProfile(customizedProfile);

    // Free resources
    FreeUserProfile(defaultProfile);
    FreeUserProfile(customizedProfile);

    return 0;
}

/**
 * Explanation of adaptation:
 * 
 * - The UserProfile interface is represented by a struct in C, which includes function pointers for the clone,
 * customizeProfile, and displayProfile functions, along with username, bio, and profilePicture attributes.
 * 
 * - The DefaultUserProfile class function initializes a UserProfile instance with provided values. The functions
 * clone, customizeProfile, and displayProfile are implemented to operate on UserProfile pointers.
 * 
 * - The original object-oriented concepts like interfaces and inheritance don't directly map to C; thus, we use
 * structs and function pointers to achieve similar behavior.
 * 
 * - Memory management is manual, using malloc for allocation and free for deallocation, along with the strdup
 * function for string copying.
 * 
 * - This adaptation maintains the essence of the prototype design pattern, while adhering to C language idioms and practices.
 */