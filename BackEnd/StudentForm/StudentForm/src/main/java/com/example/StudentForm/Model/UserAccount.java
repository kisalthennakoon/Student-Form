package com.example.StudentForm.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
public class UserAccount {
    
    @Id
    private String studentId;

    private String userName;
    private String password;

    @DBRef
    private Student student;

    public UserAccount(String studentId, String userName, String password, Student student) {
        this.studentId = studentId;
        this.userName = userName;
        this.password = password;
        this.student = student;
    }

    public UserAccount(){

    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
   
}