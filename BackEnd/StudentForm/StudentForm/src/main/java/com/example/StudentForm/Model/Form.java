package com.example.StudentForm.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;

@Document(collection = "Forms")
public class Form {

    @Id
    private String id;    

    private String studentName;

    @Min(1)
    private int age;
    
    private String address;

    @Pattern(regexp = "\\d{10}")
    private String contactNumber;

    @Pattern(regexp = "Male | Female")
    private String gender;

    private byte[] profilePhoto;

    public Form(String id, String studentName, int age, String address, String contactNumber, String gender, byte[] profilePhoto){
        this.id = id;
        this.studentName = studentName;
        this.age = age;
        this.address = address;
        this.contactNumber = contactNumber;
        this.gender = gender;
        this.profilePhoto = profilePhoto;
    }

    public Form(){

    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId(){
        return id;
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