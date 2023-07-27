package com.example.demo.api;

import com.example.demo.controller.entity.Article;
import com.example.demo.dto.ArticleForm;
import com.example.demo.repository.ArticleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
public class ArticleApiController {
    @Autowired
    private ArticleRepository articleRepository;
    // GET
    @GetMapping("/api/articles")
    public List<Article> index() {
        return articleRepository.findAll();
    }

    @GetMapping("/api/articles/{id}")
    public Article show(@PathVariable Long id) {
        return articleRepository.findById(id).orElse(null);
    }

    // POST
    @PostMapping("/api/articles")
    public Article create(@RequestBody ArticleForm dto) {
        Article article = dto.toEntity();
        return articleRepository.save(article);

    }
    //PATCH
    @PatchMapping("/api/articles/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody ArticleForm dto) {

        //DTO -> 엔티티 변환하기
        Article article = dto.toEntity();
        log.info("id: {}, article:{}", id, article.toString());
        //타깃 조회하기
        Article target = articleRepository.findById(id).orElse(null);
        //잘못된 요청 처리하기
        if (target == null || id != article.getId()) {
            log.info("잘못된 요청! id:{}, article:{}", id, article.toString());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        //업데이트 및 정상 응답(200)하기
        Article updated = articleRepository.save(article);
        return ResponseEntity.status(HttpStatus.OK).body(updated);
    }
    //DELETE
}
