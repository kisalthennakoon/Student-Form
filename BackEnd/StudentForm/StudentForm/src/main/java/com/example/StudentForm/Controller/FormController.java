package com.example.StudentForm.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentForm.Model.Student;
import com.example.StudentForm.Service.FormService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/form")
public class FormController {

    @Autowired
    private FormService formService;

    @GetMapping("/getAll")
    public ResponseEntity<Iterable<Form>> getAllForms() {
        return ResponseEntity.ok(formService.listAll());
    }

}
