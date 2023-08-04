package com.example.Firstproject2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller //이 클래스가 컨트롤러 임을 명시해주는 어노테이션
public class FirstController {
    @GetMapping("/hi") // 주소창에 hi라는 값을 입력해서 nice메소드를 실행시켜줌
    public String niceToMeetYou(Model model){ //모델은 mvc패턴 중 데이터를 담당하는녀석으로서
        model.addAttribute("name","박병준"); //model.애드어트리뷰트로 속성이름,속성값을 지정할수잇음
        //이거는 템플릿 엔진 내에서 변수로 지정해놓고 컨트롤러에서 값만 바꿔주면됨
        return "greetings"; // greetings.mustache 즉 templates밑에 있는 해당 파일을 입력해줌
    }

    @GetMapping("/bye") //bye 주소창에 입력해서 해당 메소드 실행해줌
    public String seeYouNext(Model model){ //위와동일
        model.addAttribute("nickname","박병준");
        return "goodbye";
    }
}
