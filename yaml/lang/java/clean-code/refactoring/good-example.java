import java.util.List;
import java.util.stream.Collectors;

public class UserEmailFetcher {

    public static List<String> getEmails(List<User> users) {
        // Map each user to their email
        return users.stream()
                    .map(User::getEmail)
                    .collect(Collectors.toList());
    }

    static class User {
        private int id;
        private String name;
        private String email;

        public User(int id, String name, String email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }

        public String getEmail() {
            return email;
        }
    }
}