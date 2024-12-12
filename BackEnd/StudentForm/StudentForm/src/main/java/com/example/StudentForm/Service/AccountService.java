package com.example.StudentForm.Service;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.StudentForm.Model.Account;
import com.example.StudentForm.PasswordEncoder.PasswordEncoder;
import com.example.StudentForm.Repository.AccountRepo;


@Service
public class AccountService {

    @Autowired
    private AccountRepo repo;

    // private BCryptPasswordEncoder encoder;

    public Account saveOrUpdate(Account acc) {
        acc.setPassword(PasswordEncoder.encodeString(acc.getPassword()));
        return repo.save(acc); // Save method handles both insert and update
    }

    public Iterable<Account> listAll() {
        return this.repo.findAll();
    }

    public void deleteAcc(String _id) {
        repo.deleteById(_id);
    }

    public Account getAccByID(String studentid) {
        return repo.findById(studentid).get();
    }

    public Account findByUsername(String userName) {
        return repo.findByUserName(userName);
    }

    public boolean validateLogin(String username, String rawPassword){
        Account account = findByUsername(username);
        String encodedPassword = PasswordEncoder.encodeString(rawPassword);
        
        if(encodedPassword.equals(account.getPassword())){
            return true;
        }
        return false;
    }

    
}
