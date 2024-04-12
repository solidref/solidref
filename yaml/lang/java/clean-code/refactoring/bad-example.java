public static List<String> getEmails(List<User> users) {
    List<String> emails = new ArrayList<>();
    for (User user : users) {
        // Adding the email of each user to the emails list
        emails.add(user.getEmail());
    }
    return emails;
}

class User {
    private int id;
    private String name;
    private String email;
    
    // Constructor
    public User(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    
    // Getter for email
    public String getEmail() {
        return email;
    }
    
    // Additional getters and setters could be implemented for id and name if needed
}