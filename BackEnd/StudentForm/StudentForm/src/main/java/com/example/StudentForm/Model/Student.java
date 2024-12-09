package com.example.StudentForm.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
public class Student {

    @Id
    private String studentId;
    private String studentName;
    private int age;
    private String address;
    private String contactNumber;
    private String gender;
    private byte[] profilePhoto;

    private String userName;
    private String password;

    public Student(String studentId, String studentName, int age, String address, String contactNumber, String gender, byte[] profilePhoto, String userName, String password){
        this.studentId = studentId;
        this.studentName = studentName;
        this.age = age;
        this.address = address;
        this.contactNumber = contactNumber;
        this.gender = gender;
        this.profilePhoto = profilePhoto;
        this.userName = userName;
        this.password = password;
    }

    public Student(){

    }

    public String getStudentId(){
        return studentId;
    }

    public String getStudentName(){
        return studentName;
    }

    public void setStudentName(String studentName){
        this.studentName = studentName;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

    public String getAddress(){
        return address;
    }

    public void setAddress(String address){
        this.address = address;
    }

    public String getcontactNumber(){
        return contactNumber;
    }

    public void setContactNumber(String contactNumber){
        this.contactNumber = contactNumber;
    }

    public String getGender(){
        return gender;
    }

    public void setGender(String gender){
        this.gender = gender;
    }

    public byte[] getProfilePhoto(){
        return profilePhoto;
    }

    public void setProfilePhoto(byte[] profilePhoto){
        this.profilePhoto = profilePhoto;
    }

    public String getUserName(){
        return userName;
    }

    public void setUserName(String userName){
        this.userName = userName;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }
}
