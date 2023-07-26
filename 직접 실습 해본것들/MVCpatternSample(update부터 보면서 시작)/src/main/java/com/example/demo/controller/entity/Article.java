package com.example.demo.controller.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    //이 어노테이션이 붙은 클래스를 기반으로 DB에
    // 테이블이 생성됨 테이블 이름은 클래스 이름과 동일하게 생김
    //DTO 코드 작성할때 처럼 title, content 필드선언 두 필드를 column 도 선언해줌 각각
    @Id // 이게 엔티티의 대표값임 이게 대표값이라햇다 분명
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String title;
    @Column
    private String content;

    public Long getId() {
        return id;
    }
    //그리고 엔티티의 대표값을 설정해줘야함 그리고 그 대표값을 id 라고 어노테이션 붙여줌
    // 그리고 필드 선언하면 값을 초기화 해줘야겟지?

//toString 은 값이 잘 들어왔나 확인용으로 메소드 추가해주는 거임



}
