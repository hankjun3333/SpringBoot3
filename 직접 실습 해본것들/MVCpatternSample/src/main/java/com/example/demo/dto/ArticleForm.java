package com.example.demo.dto;

import com.example.demo.controller.entity.Article;

public class ArticleForm { // 이게 form 데이터를 받아 와주는 DTO 이다!!!
    //dto가 form 데이터를 받아 와주는 그릇인데 form 데이터가 지금 제목, 내용으로 필드가 2개가 선언되야함
    private String title;
    private String content;

    //toString 은  폼 데이터를 잘 받았는지 확인하는 용도로 사용
    @Override
    public String toString() {
        return "ArticleForm{" +
                "title='" + title + '\'' +
                ", content='" + content + '\'' +
                '}';
    }

    //Data 어노 테이션 쓰기전 title, content 에 대한 생성자가 필요해서 불러움 (필드값 초기화용)
    public ArticleForm(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public Article toEntity() { //toEntity() 메소드는 form 데이터를 담은 DTO객체를 Entity로 변환해주는메소드임
        return new Article(null,title,content);
    }
}
