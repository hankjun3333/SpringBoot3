package com.example.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FirstController {
    @GetMapping("/hi")
    public String nicetomeetyou(Model model){
        model.addAttribute("username","박병준이아니올시다");
        return "greetings";
    }
    @GetMapping("/bye")
    public String goodbye(Model model){
        model.addAttribute("username","박병준님아 ㅋ");
        return "byebye";
    }
}
