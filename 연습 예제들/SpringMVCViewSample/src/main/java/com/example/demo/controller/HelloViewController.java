package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//로그인화면을 예시로 들면
//view는 보이는 것(화면)
//controller(주소창에입력하면 실행하는 해당클래스를 실행하는 역할)
//model은 db에서 데이터를 비교하는 행위
@Controller //requestmapping 사용하기 위한것
@RequestMapping(value = {"hello","morning"}) //hello 치면(요청하면) 실행하란 뜻
//@RequestMapping(value = {"hello","hellospring"})
public class HelloViewController {
    @GetMapping("view")
    //@GetMapping(value = {"view","viewspring"})
    public String helloView(){
        return "hello"; // view라고 하고 hello.html을실행
    }
    @GetMapping("view2") // 주소창에 치는 값
    public String morning(){
        return "morning"; // view라고 하고 morning.html을 실행
    }

}
