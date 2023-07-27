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
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
        return "redirect:/articles/" + saved.getId();
        //롬북으로 @Getter 해도 되고 엔티티 Article에서 getId() 메소드 정의해도 되지만
        //메소드 정의할때 String에서 Long 타입 변환 해야줘야됨 이거 주의하셈 String 아니니까 "" 말고 id; 이렇게
    }
    @GetMapping("/articles/{id}")
    public String show(@PathVariable Long id, Model model){
        log.info("id = " + id);
        //1. id를 조회해 데이터 가져오기
        Article articleEntity = articleRepository.findById(id).orElse(null);
        // 2. 모델에 데이터 등록
        model.addAttribute("article",articleEntity); // 와진짜 따옴표 때문에 2시간동안해멧네 와 진짜 어이가없네
        //3. 뷰 페이지 반환하기
        return "articles/show";
    }
    @GetMapping("/articles")
    public String index(Model model){
        //1.모든데이터 가져오기
        ArrayList<Article> articleEntityList =articleRepository.findAll();
        //2.모델에 데이터 등록
        model.addAttribute("articleList",articleEntityList);
        //3.뷰로 반환하기
        return "articles/index";
    }
    @GetMapping("/articles/{id}/edit")
    public String edit(@PathVariable Long id, Model model){
        Article articleEntity = articleRepository.findById(id).orElse(null);
        model.addAttribute("article",articleEntity);
        return "articles/edit";
    }
    //1.DTO를 엔티티로 변환
    //2.엔티티를 DB에 저장
    //2-1 DB에서 기존데이터 가져오고
    //2-2 기존데이터 값 갱신하고
    //3.수정 결과 페이지로 리 다이렉트

    @PostMapping("/articles/update")
    public String update(ArticleForm form){
        log.info(form.toString());
        //1.DTO를 엔티티로 변환
        Article articleEntity = form.toEntity(); //엔티티 메소드는 이미 ArticleForm에서 정의함
        log.info(articleEntity.toString());
        //2-1.DB에서 기존 데이터 가져오기
        Article target = articleRepository.findById(articleEntity.getId()).orElse(null);

        //2-2 기존 데이터 값을 갱신하기
        if(target != null){
            articleRepository.save(articleEntity); // 엔티티를 DB에 저장(갱신)
            //기존 데이터가 있으면 save메서드 호출해서  articleEntity저장된 내용을 DB로 갱신
        }

        return "redirect:/articles/" + articleEntity.getId();
    }
    @GetMapping("/articles/{id}/delete")
    public String delete(@PathVariable Long id, RedirectAttributes rttr){
        log.info("삭제 요청이 들어 왔습니다.");
        //1. 삭제할 대상 가져오기
        Article target=articleRepository.findById(id).orElse(null);
        log.info(target.toString());
        //2. 대상 엔티티 삭제하기
        if(target != null){
            articleRepository.delete(target);
        }
        rttr.addFlashAttribute("msg","삭제가 완료되었습니다");
        //3. 결과 페이지로 리 다이렉트하기
        return "redirect:/articles";
    }
}

