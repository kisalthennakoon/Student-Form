package com.example.StudentForm.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
public class Form {

    @Id
    private String studentId;    

    private String studentName;
    private int age;
    private String address;
    private String contactNumber;
    private String gender;
    private byte[] profilePhoto;

    public Form(String studentId, String studentName, int age, String address, String contactNumber, String gender, byte[] profilePhoto){
        this.studentId = studentId;
        this.studentName = studentName;
        this.age = age;
        this.address = address;
        this.contactNumber = contactNumber;
        this.gender = gender;
        this.profilePhoto = profilePhoto;
    }

    public Form(){

    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
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

    public String getContactNumber(){
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

}