package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model; // ui model이 들어가야됨 임포트 시 주의
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("hello") // 주소줄에 hello라고 입력하면 밑에 클래스를 실행해라는뜻 클래스호출
public class HelloModelController {
    @GetMapping("model")
    public String helloView(Model model){
        model.addAttribute("msg","타임리프!!!!");
        model.addAttribute("name","홍길동");
        return "helloThymeleaf";
    }
}
