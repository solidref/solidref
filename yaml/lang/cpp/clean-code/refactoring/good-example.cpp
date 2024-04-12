#include <vector>
#include <string>
#include <algorithm>
#include <iterator>

// Fetches the email addresses from a list of users
std::vector<std::string> getEmails(const std::vector<std::pair<int, std::pair<std::string, std::string>>>& users) {
    std::vector<std::string> emails;
    std::transform(users.begin(), users.end(), std::back_inserter(emails),
                   [](const auto& user) { return user.second.second; });
    return emails;
}