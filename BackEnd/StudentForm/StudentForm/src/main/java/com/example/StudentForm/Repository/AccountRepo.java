package com.example.StudentForm.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.StudentForm.Model.Student;

public interface AccountRepo extends MongoRepository<Student, String>{

}
