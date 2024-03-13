struct AuthenticationService {}

impl AuthenticationService {
    fn new() -> Self {
        AuthenticationService {}
    }

    fn login(&self, _username: &str, _password: &str) -> bool {
        // Authentication logic here
        true // Dummy implementation
    }

    fn logout(&self) {
        // Logout logic here
    }
}

struct DataService {}

impl DataService {
    fn new() -> Self {
        DataService {}
    }

    fn fetch_data(&self) -> Vec<()> {
        // Data retrieval logic here
        vec![] // Dummy implementation
    }
}

/**
 * - The `CombinedController` struct is responsible for both user authentication and data retrieval.
 * - The `login_user` method not only handles authentication but also retrieves user data directly
 *   from the `DataService`, violating the Single Responsibility Principle and mixing concerns.
 * - This violates the principle of Separation of Concerns and makes the code harder to maintain, test, and understand.
 */
struct CombinedController {
    auth_service: AuthenticationService,
    data_service: DataService,
}

impl CombinedController {
    fn new(auth_service: AuthenticationService, data_service: DataService) -> Self {
        CombinedController {
            auth_service,
            data_service,
        }
    }

    fn login_user(&self, username: &str, password: &str) -> bool {
        // Authentication logic here
        let is_authenticated = self.auth_service.login(username, password);
        if is_authenticated {
            // Retrieve user data (mixing concerns)
            let user_data = self.data_service.fetch_data();
            println!("{:?}", user_data);
        }
        is_authenticated
    }

    fn logout_user(&self) {
        // Logout logic here
        self.auth_service.logout();
    }
}

fn main() {
    let auth_service = AuthenticationService::new();
    let data_service = DataService::new();

    let combined_controller = CombinedController::new(auth_service, data_service);

    // Simulate user login/logout
    combined_controller.login_user("username", "password");
    combined_controller.logout_user();
}