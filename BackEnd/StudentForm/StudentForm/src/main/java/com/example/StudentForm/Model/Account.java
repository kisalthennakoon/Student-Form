package com.example.StudentForm.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Document(collection = "Users")
@AllArgsConstructor
@NoArgsConstructor
public class UserAccount {
    
    @Id
    private String studentId;

    private String userName;
    private String password;

    @DBRef
    private Form student;

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

    public Form getStudent() {
        return student;
    }

    public void setStudent(Form student) {
        this.student = student;
    }
   
}
