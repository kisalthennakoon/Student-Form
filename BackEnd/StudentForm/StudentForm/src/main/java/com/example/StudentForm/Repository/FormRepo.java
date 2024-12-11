package com.example.StudentForm.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.StudentForm.Model.Form;

public interface FormRepo extends MongoRepository<Form, String>{

}
