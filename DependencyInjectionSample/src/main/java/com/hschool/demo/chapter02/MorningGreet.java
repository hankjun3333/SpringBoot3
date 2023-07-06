package com.hschool.demo.chapter02;

import org.springframework.stereotype.Component;

//@Component
public class MorningGreet implements Greet{
    @Override
    public void greeting() {
      System.out.println("-----------");
      System.out.println("좋은아침");
      System.out.println("-----------");
    }
}
