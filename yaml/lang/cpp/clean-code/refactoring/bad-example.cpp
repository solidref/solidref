#include <vector>
#include <string>

// Assuming User is a struct that holds user information
struct User {
    int id;
    std::string name;
    std::string email;
};

// Extracts emails from a vector of users
std::vector<std::string> getEmails(const std::vector<User>& users) {
  std::vector<std::string> emails;
  for (const auto& user : users) {  // Using range-based for loop
    emails.push_back(user.email);
  }
  return emails;
}