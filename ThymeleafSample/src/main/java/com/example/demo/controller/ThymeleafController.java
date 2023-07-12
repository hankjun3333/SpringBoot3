package com.example.demo.controller;

import com.example.demo.entity.Member;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller // 교통정리라고 보면됨
@RequestMapping("hello")
public class ThymeleafController {
    @GetMapping("show")
    public  String showView(Model model){
        Member member = new Member(1000,"회원01");

        //model에 데이터를 추가
        //model 이 member의 상위 객체라 보면됨
        // 이런식으로도 사용 가능 클래스 안에 클래스 넣는느낌
        model.addAttribute("name","이순신");
        model.addAttribute("name2","박병준");
        model.addAttribute("mb",member);

        //ArrayList,HashMap,List,Map
        //기존배열은 크기가 안늘어나지만 얘내들은 자동 크기가늘어남
        //오라클 치면 varchar2같은 느낌 배열 이중에선 ArrayList를 젤많이씀 가치가 있긴함ㅋ

        Member member1 = new Member(18,"홍길동");
        Member member2 = new Member(28,"이영희");

        //List 생성 무한대로 추가 가능 배열크기가 안정해짐
        List<String> directionList = new ArrayList();
        directionList.add("동");
        directionList.add("서");
        directionList.add("남");
        directionList.add("북");

        //Map을 생성해서 Member를 저장
        Map<String, Member> memberMap = new HashMap<>();
        memberMap.put("hong",member1);
        memberMap.put("lee",member2);

        //List를 생성해서 Member를 저장
        List<Member> memberList = new ArrayList<>(); //list 하고 map하고 합쳐진 것
        memberList.add(member1);
        memberList.add(member2);

        //Model 에 데이터를 추가해보자 addAttribute를 해줘야 html 사용할수잇음!
        model.addAttribute("name","이순신");
        model.addAttribute("mb",member);
        model.addAttribute("list",directionList);
        model.addAttribute("map",memberMap);
        model.addAttribute("members",memberList);





        return "useThymeleaf";
    }
}
