<?php

// Function to extract email addresses from an array of users
function getEmails(array $users): array {
    return array_map(function ($user) {
        return $user['email'];
    }, $users);
}

?>