package com.example.StudentForm.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentForm.Model.Form;
// import com.example.StudentForm.Repository.AccountRepo;
import com.example.StudentForm.Repository.FormRepo;

@Service
public class FormService {

    @Autowired
    private FormRepo formRepo;

    // @Autowired
    // private AccountRepo accRepo;

    public Form saveOrUpdate(Form form) {

        // validate name
        if (form.getStudentName() == null || form.getStudentName().isEmpty()){
            throw new IllegalArgumentException("Student name is required");
        }

        //validate age
        if (form.getAge() < 1){
            throw new IllegalArgumentException("Invalid age");
        }

        //validate address
        if (form.getAddress() == null || form.getAddress().isEmpty()){
            throw new IllegalStateException("Address feild is required");
        }

        //validate contact number
        if (!form.getContactNumber().matches("\\d{10}")){
            throw new IllegalArgumentException("Invalid contact number");
        }

        return formRepo.save(form);
    }

    // public ResponseEntity<?> saveOrUpdate(Form form) {

    //     // Validate student name
    //     if (form.getStudentName() == null || form.getStudentName().isEmpty()) {
    //         return ResponseEntity.badRequest().body("Student name is required.");
    //     }

    //     // Validate age
    //     if (form.getAge() < 1) {
    //         return ResponseEntity.badRequest().body("Invalid age. Age must be greater than 0.");
    //     }

    //     // Validate address
    //     if (form.getAddress() == null || form.getAddress().isEmpty()) {
    //         return ResponseEntity.badRequest().body("Address field is required.");
    //     }

    //     // Validate contact number
    //     if (form.getContactNumber() == null || !form.getContactNumber().matches("\\d{10}")) {
    //         return ResponseEntity.badRequest().body("Invalid contact number. It must be a 10-digit number.");
    //     }

    //     // If all validations pass, save the form
    //     Form savedForm = formRepo.save(form);
    //     return ResponseEntity.ok(savedForm); // Return the saved form with 200 status
    // }

    public Iterable<Form> listAll() {
        return this.formRepo.findAll();
    }

    public void deleteForm(String formId) {
        formRepo.deleteById(formId);
    }

    public Form getFormByID(String formId) {
        return formRepo.findById(formId).get();
    }
}
