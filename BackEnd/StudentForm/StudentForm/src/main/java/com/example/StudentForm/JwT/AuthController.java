// package com.example.StudentForm.JwT;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.example.StudentForm.Model.Account;
// import com.example.StudentForm.Repository.AccountRepo;

// @RestController
// @RequestMapping("/api/auth")
// public class AuthController {

//     @Autowired
//     private AccountRepo accountRepo;

//     @Autowired
//     private JwtUtil jwtUtil;

//     @PostMapping("/login")
//     public ResponseEntity<?> login(@RequestBody Account loginRequest) {
//         Account account = accountRepo.findByUserName(loginRequest.getUserName());
        
//         if (account == null || !account.getPassword().equals(loginRequest.getPassword())) {
//             return ResponseEntity.status(401).body("Invalid username or password");
//         }

//         String token = jwtUtil.generateToken(account.getUserName());
//         return ResponseEntity.ok(new LoginResponse(token));
//     }
// }

// class LoginRequest {
//     private String userName;
//     private String password;
//     public String getUserName() {
//         return userName;
//     }
//     public void setUserName(String userName) {
//         this.userName = userName;
//     }
//     public String getPassword() {
//         return password;
//     }
//     public void setPassword(String password) {
//         this.password = password;
//     }
    
//     // Getters and Setters
// }

// class LoginResponse {
//     private String token;

//     public LoginResponse(String token) {
//         this.token = token;
//     }

//     public String getToken() {
//         return token;
//     }
// }
