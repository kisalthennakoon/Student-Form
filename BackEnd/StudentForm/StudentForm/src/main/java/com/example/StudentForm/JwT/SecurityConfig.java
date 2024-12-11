package com.example.StudentForm.JwT;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @SuppressWarnings({ "removal", "deprecation" })
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeRequests()
            .requestMatchers("/api/v1/acc/saveAcc", "/api/v1/acc/login").permitAll() // Allow these endpoints without authentication
            .anyRequest().authenticated(); // Secure all other endpoints
        return http.build();
    }
}
