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
