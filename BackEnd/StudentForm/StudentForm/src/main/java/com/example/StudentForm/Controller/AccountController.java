package com.example.StudentForm.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.StudentForm.Model.Account;
import com.example.StudentForm.Model.Form;
import com.example.StudentForm.Service.AccountService;
import com.example.StudentForm.Service.FormService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/acc")

public class AccountController {

    @Autowired
    private AccountService accService;

    @Autowired
    private FormService formService;

    //Acc controllers

    //Saving Account
    @PostMapping(value="/saveAcc")
    public String saveAcc(@RequestBody Account acc){
        accService.saveOrUpdate(acc);
        return acc.getId();
    }

    //Get all acc by id
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


    //Form controllers for a acc

    //Assigning the form
    @PutMapping(value = "/{studentId}/assignForm")
    public Account assignAccount(@PathVariable String studentId, @RequestBody Form form) {
        // Save the StudentAcc document first
        Form savedForm = formService.saveOrUpdate(form);

        // Retrieve the Student document
        Account studentAcc = accService.getAccByID(studentId);
        if (studentAcc == null) {
            throw new RuntimeException("Student not found with ID: " + studentId);        }

        // Link the account to the student
        studentAcc.setForm(savedForm);
        // Save the updated student
        return accService.saveOrUpdate(studentAcc);
    }
    
    //Getting the form of a student
    @GetMapping("/{studentId}/form")
    public ResponseEntity<?> getStudentForm(@PathVariable String id) {
        // Retrieve the Student document by ID
        Account studentAcc = accService.getAccByID(id);

        if (studentAcc == null) {
            return ResponseEntity.status(404).body("Student not found with ID: " + id);
        }
        // Retrieve the associated account (acc)
        Form form = studentAcc.getForm();

        if (form== null) {
            return ResponseEntity.status(404).body("Account not found for Student ID: " + id);
        }
        // Create a response object
        Map<String, Object> response = new HashMap<>();
        //response.put("student", student);
        response.put("form", form);

        return ResponseEntity.ok(response);
    }


    @PutMapping(value = "/{id}/editForm")
    private ResponseEntity<Form> fillStudentForm(@RequestBody Form form,
                                                    @PathVariable(name = "id") String _id) {

        Account studentAcc = accService.getAccByID(_id);
        Form forminit = studentAcc.getForm();

        form.setId(forminit.getId());
        Form updatedform = formService.saveOrUpdate(form);
        // Return the updated student wrapped in ResponseEntity
        return ResponseEntity.ok(updatedform);
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
