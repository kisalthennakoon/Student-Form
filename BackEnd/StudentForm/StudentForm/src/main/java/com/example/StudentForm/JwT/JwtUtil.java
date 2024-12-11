// package com.example.StudentForm.JwT;

// import io.jsonwebtoken.Claims;
// import io.jsonwebtoken.Jwts;
// import io.jsonwebtoken.SignatureAlgorithm;
// import org.springframework.stereotype.Component;

// import java.util.Date;
// import java.util.HashMap;
// import java.util.Map;
// import java.util.function.Function;

// @Component
// public class JwtUtil {
//     private static final String SECRET_KEY = "your_secret_key"; // Replace with a secure key
//     private static final int TOKEN_VALIDITY = 1000 * 60 * 60 * 10; // 10 hours

//     public String extractUsername(String token) {
//         return extractClaim(token, Claims::getSubject);
//     }

//     public Date extractExpiration(String token) {
//         return extractClaim(token, Claims::getExpiration);
//     }

//     public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
//         final Claims claims = extractAllClaims(token);
//         return claimsResolver.apply(claims);
//     }

//     @SuppressWarnings("deprecation")
//     private Claims extractAllClaims(String token) {
//         return Jwts.parserBuilder().setSigningKey(SECRET_KEY).build().parseClaimsJws(token).getBody();
//     }

//     private boolean isTokenExpired(String token) {
//         return extractExpiration(token).before(new Date());
//     }

//     public String generateToken(String username) {
//         Map<String, Object> claims = new HashMap<>();
//         return createToken(claims, username);
//     }

//     @SuppressWarnings("deprecation")
//     private String createToken(Map<String, Object> claims, String subject) {
//         return Jwts.builder()
//                 .setClaims(claims)
//                 .setSubject(subject)
//                 .setIssuedAt(new Date(System.currentTimeMillis()))
//                 .setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALIDITY))
//                 .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
//                 .compact();
//     }

//     public boolean validateToken(String token, String username) {
//         final String extractedUsername = extractUsername(token);
//         return (extractedUsername.equals(username) && !isTokenExpired(token));
//     }
// }