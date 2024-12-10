package com.example.StudentForm.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface FormRepo extends MongoRepository<Account, String>{

}
