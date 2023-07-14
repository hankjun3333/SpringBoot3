package com.hschool.demo.chapter02;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// 이놈이 메인이다 라는 것을 알려주는 문법
// 스프링부트 실행하자마자 요놈 실행해 라는뜻ㅋ main함수에 붙어잇겟네 ㅋ
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class,args)
                .getBean(DemoApplication.class).execute();

    }
    @Autowired // 스프링 프레임워크에서 인스턴스를 생성한다.
    Greet greet;

    private void execute(){
        greet.greeting();
    }
}
