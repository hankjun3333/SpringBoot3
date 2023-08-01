package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //getter setter 자동생성 해주는 어노오오오오테이이이이이션
// 보통 private 이랑 같이씀 get set으로만 호출 되게끔
@NoArgsConstructor // 기본생성자 생성 매개변수 x
@AllArgsConstructor // 모든 필드값 초기화하는 인수로 받는 생성자 생성
//어노테이션이 매우중요


// 또는 -값이안나오도록 하는둥 값을통제할때

public class Member {

    private Integer id;
    private String name;
}
