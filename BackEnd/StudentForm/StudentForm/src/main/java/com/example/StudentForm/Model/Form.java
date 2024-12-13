package com.example.StudentForm.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Forms")
public class Form {

    @Id
    private String id;    

    private String studentName;
    private int age;
    private String studentId;
    private String address;
    private String contactNo;
    private String gender;
    // private byte[] photo;

    public Form(String studentId,String id, String studentName, int age, String address, String contactNumber, String gender){
        this.id = id;
        this.studentId = studentId;
        this.studentName = studentName;
        this.age = age;
        this.address = address;
        this.contactNo = contactNumber;
        this.gender = gender;
        // this.photo = profilePhoto;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
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
        return contactNo;
    }

    public void setContactNumber(String contactNumber){
        this.contactNo = contactNumber;
    }

    public String getGender(){
        return gender;
    }

    public void setGender(String gender){
        this.gender = gender;
    }

    // public byte[] getProfilePhoto(){
    //     return photo;
    // }

    // public void setProfilePhoto(byte[] profilePhoto){
    //     this.photo = profilePhoto;
    // }

}