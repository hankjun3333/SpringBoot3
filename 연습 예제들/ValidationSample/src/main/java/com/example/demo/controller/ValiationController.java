package com.example.demo.controller;

import com.example.demo.form.CalcForm;
import com.example.demo.validator.CalcValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import static org.thymeleaf.spring6.util.FieldUtils.hasErrors;

@Controller
public class ValiationController {
    //유효성 검사를 하기 위해서는 form-backing bean 설정 필요
    //html 에서 <form> 태그 안에서 input 태그 쓰는데 input에 name="value(내가입력값)"
    //값을 입력해서 그 값들을 바인딩된 데이터들을 Form 클래스 인스턴스라고함
    //그 바인딩 된 인스턴스를 form-backing bean 이라고 함
    //이것을 초기화 한 것이다 얘는 @ModelAttribute 어노 테이션을 부여해서 사용
    //CalcForm 값을 초기화 해준다고 보면됨
    @ModelAttribute //form-backing bean 초기화
    public CalcForm setUpForm(){ //여기선 생성자를 실행함
        return new CalcForm();

    }
    @GetMapping("show")
    public String showView(){
        return "entry";
    }

    @PostMapping("calc")
    public String confirmView(@Validated CalcForm form,
                              BindingResult bindingResult, Model model){

        if(bindingResult.hasErrors()){
            return "entry";

        }
        //잘 입력한 경우
        Integer result = form.getLeftNum() + form.getRightNum();
        model.addAttribute("result",result);
        return "confirm";
    }
    @Autowired
    CalcValidator calcValidator;
    @InitBinder("calcForm")
    public void initBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(calcValidator);

    }

}
