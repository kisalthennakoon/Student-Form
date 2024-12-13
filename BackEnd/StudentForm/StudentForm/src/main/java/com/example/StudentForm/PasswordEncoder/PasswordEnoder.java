package com.example.StudentForm.PasswordEncoder;

import java.util.Base64;

public class PasswordEnoder {

    //Encode password
    public static String encodeString(String input){
        return Base64.getEncoder().encodeToString(input.getBytes());
    }

    //decode 
    public static String decodeString(String encodedInput){
        byte[] decodedBytes = Base64.getDecoder().decode(encodedInput);
        return new String(decodedBytes);
    }

}
