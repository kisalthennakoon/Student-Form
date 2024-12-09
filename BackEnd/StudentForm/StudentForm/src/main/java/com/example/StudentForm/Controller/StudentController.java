package com.example.StudentForm.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.StudentForm.Model.Student;
import com.example.StudentForm.Service.StudentService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/student")

public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping(value="/signUp")
    public ResponseEntity<Student> signUp(@RequestBody Student student){
        return ResponseEntity.ok(service.saveorUpdate(student));

    }

    @PutMapping(value = "/edit/{id}")
    private ResponseEntity<Student> fillStudentForm(
                            @RequestBody Student student,
                            @PathVariable(name = "id")String _id) 
    {
        student.set_id(_id);
        return ResponseEntity.ok(service.saveorUpdate(student));
    }
    
    @GetMapping("/getAll")
    public ResponseEntity<Iterable<Student>> getAllStudents() {
        return ResponseEntity.ok(service.listAll());
    }

    // Endpoint for deleting a student by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable String id) {
        service.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }

    // Endpoint for retrieving a student by ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable String id) {
        return ResponseEntity.ok(service.getStudentByID(id));
    }
    
}

