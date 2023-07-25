package com.example.demo.controller;

import com.example.demo.controller.entity.Article;
import com.example.demo.dto.ArticleForm;
import com.example.demo.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ArticleController {
    @Autowired//Autowired를 쓰면 스프링 부트가 미리 생성해놓은 객체를 가져다가 연결해줌
    private ArticleRepository articleRepository;
    @GetMapping("/articles/new")
    public String newArticleForm(){
        return "articles/new";
    }
    @PostMapping("/articles/create")
    public String createArticle(ArticleForm form){
        System.out.println(form.toString());
        //1.DTO를 엔티티로 변환
        Article article = form.toEntity();
        System.out.println(article.toString());
        //2.리파지토리 로 엔티티를 DB에 저장
        Article saved = articleRepository.save(article);
        System.out.println(saved.toString());
        // repository/ ArticleRepository 인터페이스를 정의하면
        //JPA에서 제공하는 CRUDRepository 인터페이스 상속해서 crud 메소드를 사용할 수 있음 save,findall 등등...
        return "";
    }
}
