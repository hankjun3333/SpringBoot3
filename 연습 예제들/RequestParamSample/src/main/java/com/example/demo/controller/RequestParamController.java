package com.example.demo.controller;

import com.example.demo.form.Form;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;

@Controller

public class RequestParamController {
    @GetMapping("show")
    public String showView(){
        return "entry";
    }
    @PostMapping("confirm")
    // model은 클래스 파라미터로 받아서 필드만 정의
    public String confirmView(Form form){
        //f 라고 써도 기본 form 이 생김
            return "confirm2";
    }

}
