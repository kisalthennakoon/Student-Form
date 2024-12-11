// package com.example.StudentForm.JwT;

// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import com.example.StudentForm.Model.Account;
// import com.example.StudentForm.Service.AccountService;

// @Service
// public class CustomUserDetailsService implements UserDetailsService {

//     private final AccountService accountService; // Replace with your service or repository to fetch user details

//     public CustomUserDetailsService(AccountService accountService) {
//         this.accountService = accountService;
//     }

//     @Override
//     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//         Account account = accountService.findByUsername(username); // Fetch user by username
//         if (account == null) {
//             throw new UsernameNotFoundException("User not found with username: " + username);
//         }

//         // Map Account to UserDetails
//         return org.springframework.security.core.userdetails.User
//                 .withUsername(account.getUserName())
//                 .password(account.getPassword()) // Ensure password is encoded
//                 .roles("USER") // Set roles or authorities
//                 .build();
//     }
// }
