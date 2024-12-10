package com.example.StudentForm.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentForm.Model.Student;
import com.example.StudentForm.Repository.FormRepo;

@Service
public class FormService {

    private FormRepo formRepo;

    @Autowired
    private AccRepo accRepo;

    public Form saveorUpdate(Form form) {
        return formRepo.save(form);
    }

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
