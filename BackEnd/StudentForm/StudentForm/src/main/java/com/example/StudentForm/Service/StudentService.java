package com.example.StudentForm.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentForm.Model.Student;

import com.example.StudentForm.Repository.StudentRepo;

@Service
public class StudentService {

    @Autowired
    private StudentRepo repo;

    public Student saveOrUpdate(Student student) {
        return repo.save(student); // Save method handles both insert and update
    }

    public Iterable<Student> listAll() {
        return this.repo.findAll();
    }

    public void deleteStudent(String _id) {
        repo.deleteById(_id);
    }

    public Student getStudentByID(String studentid) {
        return repo.findById(studentid).get();
    }

    
}
