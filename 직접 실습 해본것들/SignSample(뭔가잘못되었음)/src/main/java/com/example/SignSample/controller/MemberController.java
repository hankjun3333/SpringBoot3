package com.example.SignSample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MemberController {

    @GetMapping("/join")
    public String member(Model model){
        model.addAttribute("username","박병준");
        return "new";
    }



}
