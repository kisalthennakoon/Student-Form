package com.example.StudentForm.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.StudentForm.Model.Student;
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
        accServices.saveorUpdate(acc);
        return acc.get_id();
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
        Form savedForm = formService.saveorUpdate(form);

        // Retrieve the Student document
        Account studentAcc = accServices.getStudentByID(studentId);
        if (studentAcc == null) {
            throw new RuntimeException("Student not found with ID: " + studentId);        }

        // Link the account to the student
        studentAcc.setAcc(savedForm);
        // Save the updated student
        return accServices.saveorUpdate(studentAcc);
    }
    
    //Getting the form of a student
    @GetMapping("/{studentId}/form")
    public ResponseEntity<?> getStudentForm(@PathVariable String studentId) {
        // Retrieve the Student document by ID
        Account studentAcc = accServices.getAccByID(studentId);

        if (studentAcc == null) {
            return ResponseEntity.status(404).body("Student not found with ID: " + studentId);
        }
        // Retrieve the associated account (acc)
        Form form = studentAcc.getAcc();

        if (form== null) {
            return ResponseEntity.status(404).body("Account not found for Student ID: " + studentId);
        }
        // Create a response object
        Map<String, Object> response = new HashMap<>();
        //response.put("student", student);
        response.put(form);

        return ResponseEntity.ok(response);
    }


    @PutMapping(value = "/{id}/editForm")
    private ResponseEntity<Account> fillStudentForm(@RequestBody Form form,
                                                    @PathVariable(name = "id") String _id) {

        Account studentAcc = accServices.getAccByID(_id);
        Form form = studentAcc.getForm();

        form.setAccId(form.getId());
        Form updatedform = formService.saveOrUpdate(form);
        // Return the updated student wrapped in ResponseEntity
        return ResponseEntity.ok(studentAcc);
    }

    @DeleteMapping("/{id}/deleteForm")
    public ResponseEntity<Void> deleteForm(@PathVariable String id) {
        
        Account studentAcc = accServices.getAccByID(id);
        Form form = studentAcc.getForm();

        String formId = form.getId();

        formService.deleteForm(formId);
        return ResponseEntity.noContent().build();
        
        
    }
    
}
