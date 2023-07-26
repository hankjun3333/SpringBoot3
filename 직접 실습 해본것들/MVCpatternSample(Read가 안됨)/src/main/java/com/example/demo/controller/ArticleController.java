package com.example.demo.controller;

import com.example.demo.controller.entity.Article;
import com.example.demo.dto.ArticleForm;
import com.example.demo.repository.ArticleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;

@Slf4j
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
        log.info(form.toString());
        //System.out.println(form.toString());

        //1.DTO를 엔티티로 변환
        Article article = form.toEntity();
        log.info(article.toString());
        //System.out.println(article.toString());

        //2.리파지토리 로 엔티티를 DB에 저장
        Article saved = articleRepository.save(article);
        log.info(saved.toString());
        //System.out.println(saved.toString());
        // repository/ ArticleRepository 인터페이스를 정의하면
        //JPA에서 제공하는 CRUDRepository 인터페이스 상속해서 crud 메소드를 사용할 수 있음 save,등등...
        return "";
    }
    @GetMapping("/articles/{id}")
    public String show(@PathVariable Long id, Model model){
        log.info("id = " + id);
        //1. id를 조회해 데이터 가져오기
        Article articleEntity = articleRepository.findById(id).orElse(null);
        // 2. 모델에 데이터 등록
        model.addAttribute("article","articleEntity");
        //3. 뷰 페이지 반환하기
        return "articles/show";
    }
    @GetMapping("/articles")
    public String index(Model model){
        //1. 모든 데이터 가져오기
        ArrayList<Article> articleEntityList = articleRepository.findAll();
        //2. 모델에 데이터 등록하기
        model.addAttribute("articleList","articleEntityList");

        //3. 뷰 페이지 설정

        return "articles/index";
    }
}

