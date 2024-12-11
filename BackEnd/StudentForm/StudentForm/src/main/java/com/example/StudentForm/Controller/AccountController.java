package com.example.StudentForm.Controller;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.StudentForm.Model.Account;
import com.example.StudentForm.Model.Form;
import com.example.StudentForm.Service.AccountService;
import com.example.StudentForm.Service.FormService;

import com.example.StudentForm.JwT.JwtUtil;
import com.example.StudentForm.JwT.LoginResponse;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/acc")

public class AccountController {

    @Autowired
    private AccountService accService;

    @Autowired
    private FormService formService;

    @Autowired
    private JwtUtil jwtUtil;

    // Acc controllers

    // Saving Account
    @PostMapping(value = "/saveAcc")
    public ResponseEntity<?> saveAcc(@RequestBody Account acc) {
        Account account = accService.findByUsername(acc.getUserName());
        if(!account.getUserName().equals(acc.getUserName())){
            return ResponseEntity.status(401).body("Username not available");
        }
        return ResponseEntity.ok(accService.saveOrUpdate(acc));
    }

    @PostMapping("/login")
    public ResponseEntity<?> validateLogin(@RequestBody Account loginRequest) {
        Account account = accService.findByUsername(loginRequest.getUserName());
        
        if (account == null || !account.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.status(401).body("Invalid username or password");
        }

        String token = jwtUtil.generateToken(account.getUserName());
        return ResponseEntity.ok(new LoginResponse(token));
    }
    
    // Get all acc by id
    @GetMapping("/getAll")
    public ResponseEntity<Iterable<Account>> getAllAcc() {
        return ResponseEntity.ok(accService.listAll());
    }

    // Delete acc by id
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteAcc(@PathVariable String id) {
        accService.deleteAcc(id);
        return ResponseEntity.noContent().build();
    }

    // Get acc by Id
    @GetMapping("/{id}")
    public ResponseEntity<Account> getAcc(@PathVariable String id) {
        return ResponseEntity.ok(accService.getAccByID(id));
    }

    // Form controllers for a acc

    //Assigning the form

    /* 
    @PutMapping(value = "/{studentId}/assignForm")
    public Account assignForm(@PathVariable String studentId, @RequestBody Form form) {
        // Save the StudentAcc document first
        Form savedForm = formService.saveOrUpdate(form);

        // Retrieve the Student document
        Account studentAcc = accService.getAccByID(studentId);
        if (studentAcc == null) {
        throw new RuntimeException("Student not found with ID: " + studentId); }

        // Link the account to the student
        studentAcc.setForm(savedForm);
        // Save the updated student
        return accService.saveOrUpdate(studentAcc);
    }*/

    //-----------------------------------------------------------------------------------------------------------
    @PutMapping(value = "/{id}/assignForm", consumes = "multipart/form-data")
    public ResponseEntity<Account> assignForm(
                                    @PathVariable String id,
                                    @RequestParam("name") String studentName,
                                    @RequestParam("address") String address,
                                    @RequestParam("age") int age,
                                    @RequestParam("mobile") String contactNumber,
                                    @RequestParam("gender") String gender,
                                    @RequestParam("photo") MultipartFile profilePhoto) {

        // Create a new Form object and populate fields
        Form form = new Form();
        form.setStudentName(studentName);
        form.setAge(age);
        form.setAddress(address);
        form.setContactNumber(contactNumber);
        form.setGender(gender);

        // Handle the profile photo file
        if (profilePhoto != null){
            try {
                if (!profilePhoto.isEmpty()) {
                    // Validate file type
                    String contentType = profilePhoto.getContentType();
                    if (!contentType.equals("image/jpeg") && !contentType.equals("image/png")) {
                        return ResponseEntity.badRequest().body(null); // Invalid file type
                    }

                    form.setProfilePhoto(profilePhoto.getBytes()); // Save photo as a byte array
                }
            } catch (IOException e) {
                throw new RuntimeException("Failed to process file: " + e.getMessage(), e);
            }
        }
        // Save the Form document
        Form savedForm = formService.saveOrUpdate(form);

        // Retrieve and update the associated Account document
        Account studentAcc = accService.getAccByID(id);
        if (studentAcc == null) {
            return ResponseEntity.status(404).body(null); // Account not found
        }

        studentAcc.setForm(savedForm);

        // Save and return the updated Account
        Account updatedAccount = accService.saveOrUpdate(studentAcc);
        return ResponseEntity.ok(updatedAccount);
    }




    //-----------------------------------------------------------------------------------------------------------

    // Getting the form of a student

    /*
    @GetMapping("/{id}/form")
    public ResponseEntity<?> getStudentForm(@PathVariable String id) {
        // Retrieve the Student document by ID
        Account studentAcc = accService.getAccByID(id);

        if (studentAcc == null) {
            return ResponseEntity.status(404).body("Student not found with ID: " + id);
        }
        // Retrieve the associated account (acc)
        Form form = studentAcc.getForm();

        if (form == null) {
            return ResponseEntity.status(404).body("Account not found for Student ID: " + id);
        }
        // Create a response object
        Map<String, Object> response = new HashMap<>();
        // response.put("student", student);
        response.put("form", form);

        return ResponseEntity.ok(response);
    }
    */

    @GetMapping("/{id}/form")
    public ResponseEntity<?> getStudentForm(@PathVariable String id) {
        // Retrieve the Student document by ID
        Account studentAcc = accService.getAccByID(id);

        if (studentAcc == null) {
            return ResponseEntity.status(404).body("Student not found with ID: " + id);
        }

        // Retrieve the associated form
        Form form = studentAcc.getForm();

        if (form == null) {
            return ResponseEntity.status(404).body("Form not found for Student ID: " + id);
        }

        // Create a response object
        Map<String, Object> response = new HashMap<>();
        
        // Add form data to response
        response.put("studentName", form.getStudentName());
        response.put("address", form.getAddress());
        response.put("age", form.getAge());
        response.put("contactNumber", form.getContactNumber());
        response.put("gender", form.getGender());

        // Check if the photo exists and encode it to Base64 if it does
        if (form.getProfilePhoto() != null) {
            String base64Photo = Base64.getEncoder().encodeToString(form.getProfilePhoto());
            response.put("profilePhoto", base64Photo);
        } else {
            response.put("profilePhoto", null);  // If no photo is available
        }

        return ResponseEntity.ok(response);
    }

    //edit form

    @PutMapping(value = "/{id}/editForm")
    public ResponseEntity<Form> editForm(
                                    @PathVariable String id,
                                    @RequestParam("name") String studentName,
                                    @RequestParam("address") String address,
                                    @RequestParam("age") int age,
                                    @RequestParam("mobile") String contactNumber,
                                    @RequestParam("gender") String gender,
                                    @RequestParam("photo") MultipartFile profilePhoto)  {

        Account studentAcc = accService.getAccByID(id);
        Form form = new Form();
        Form forminit = studentAcc.getForm();

        form.setId(forminit.getId());

        form.setStudentName(studentName);
        form.setAge(age);
        form.setAddress(address);
        form.setContactNumber(contactNumber);
        form.setGender(gender);

        // Handle the profile photo file
        if (profilePhoto != null){
            try {
                if (!profilePhoto.isEmpty()) {
                    // Validate file type
                    String contentType = profilePhoto.getContentType();
                    if (!contentType.equals("image/jpeg") && !contentType.equals("image/png")) {
                        return ResponseEntity.badRequest().body(null); // Invalid file type
                    }

                    form.setProfilePhoto(profilePhoto.getBytes()); // Save photo as a byte array
                }
            } catch (IOException e) {
                throw new RuntimeException("Failed to process file: " + e.getMessage(), e);
            }
        }
        // Save the Form document
        Form savedForm = formService.saveOrUpdate(form);

        
        return ResponseEntity.ok(savedForm);
    }


    @DeleteMapping("/{id}/deleteForm")
    public ResponseEntity<Void> deleteForm(@PathVariable String id) {

        Account studentAcc = accService.getAccByID(id);
        Form form = studentAcc.getForm();

        String formId = form.getId();

        formService.deleteForm(formId);
        return ResponseEntity.noContent().build();

    }

}
