package com.example.StudentForm.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentForm.Model.Account;

import com.example.StudentForm.Repository.AccountRepo;


@Service
public class AccountService {

    @Autowired
    private AccountRepo repo;

    public Account saveOrUpdate(Account acc) {
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

    
}
