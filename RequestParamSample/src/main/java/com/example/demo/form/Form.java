package com.example.demo.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;

@Data

public class Form {
    private String name;
    private Integer age;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate birth;

}
