package com.example.StudentForm.seeds;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.StudentForm.Model.Form;
import com.example.StudentForm.Model.Account;
import com.example.StudentForm.Repository.FormRepo;
import com.example.StudentForm.Repository.AccountRepo;

import java.util.Base64;

@Configuration
public class DatabaseSeeder {

    @Autowired
    private FormRepo formRepository;

    @Autowired
    private AccountRepo accountRepository;

    @Bean
    public CommandLineRunner seedDatabase() {
        return args -> {
            // Clear existing data to avoid duplicates
            formRepository.deleteAll();
            accountRepository.deleteAll();

            // Seed Forms
            Form form1 = new Form(null, "Alice Johnson", 20, "123 Maple St, Springfield", "1234567890", "Female", generateProfilePhoto("Photo1"));
            Form form2 = new Form(null, "Bob Smith", 22, "456 Elm St, Metropolis", "0987654321", "Male", generateProfilePhoto("Photo2"));
            Form form3 = new Form(null, "Charlie Brown", 19, "789 Oak St, Gotham", "1122334455", "Male", generateProfilePhoto("Photo3"));

            form1 = formRepository.save(form1); // Save and retrieve the saved document to get the ID
            form2 = formRepository.save(form2);
            form3 = formRepository.save(form3);

            // Seed Accounts linked to Forms
            Account account1 = new Account(null, "alice123", "password1", form1);
            Account account2 = new Account(null, "bob456", "password2", form2);
            Account account3 = new Account(null, "charlie789", "password3", form3);

            accountRepository.save(account1);
            accountRepository.save(account2);
            accountRepository.save(account3);

            System.out.println("Database seeded successfully with Forms and Accounts!");
        };
    }

    private byte[] generateProfilePhoto(String placeholder) {
        // Mock photo data, you can replace this with actual file data if needed
        return Base64.getEncoder().encode(placeholder.getBytes());
    }
}
