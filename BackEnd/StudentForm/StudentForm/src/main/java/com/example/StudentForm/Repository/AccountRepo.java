package com.example.StudentForm.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.StudentForm.Model.Account;


public interface AccountRepo extends MongoRepository<Account, String>{

}
