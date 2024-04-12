<?php

function getEmails(array $users): array {
  $emails = [];
  foreach ($users as $user) {
    // Add user email to emails array
    $emails[] = $user['email'];
  }
  return $emails;
}

?>