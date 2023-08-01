package com.hschool.demo.chapter02;

import org.springframework.stereotype.Component;
//인스턴스를 사용하고 싶은 클래스에 어노테이션을 부여한다.
@Component // 어노테이션을 클래스에 부여한다 (Evening을 실행하고싶으면)
public class EveningGreet implements Greet{
    @Override
    public void greeting() {
        System.out.println("-----------");
        System.out.println("좋은저녁");
        System.out.println("-----------");
        System.out.println("응 너도 ㅋ");
    }
}
