package com.example.firstproject.service;

import com.example.firstproject.dto.ArticleForm;
import com.example.firstproject.entity.Article;
import com.example.firstproject.repository.ArticleRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@AllArgsConstructor
@NoArgsConstructor
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository; // 게시글 리파지터리 객체 주입
    private Object articleService;


    public List<Article> index() {
        return articleRepository.findAll();
    }

    public Article show(Long id) {
        return articleRepository.findById(id).orElse(null);
    }


    public Article create(ArticleForm dto) {
        Article article = dto.toEntity();
        //생성시에 id를 입력해버리면 기존 id를 덮어씌워버리는 현상발생
        if(article.getId() !=null){  //null이 아니면 null이라는 값을 반환해주는 제어문 필요!!
            return null;
        }
        return articleRepository.save(article);

    }

    public Article update(Long id, ArticleForm dto) {
        //1. dto 를 entity로 변환하기
        Article article = dto.toEntity();
        log.info("id: {}, article: {}" , id, article.toString());
        //2. 타깃을 조회하기
        Article target = articleRepository.findById(id).orElse(null);
        //3. 잘못된 요청을 처리하기
        if(target==null || id!= article.getId()){
            //3-1. 잘못된 요청 응답해주기
            log.info("잘못된 요청! id:{}, article: {} ",id ,article.toString());
            return null; // 상태 메세지는 컨트롤러가 하니까 null을 반환
        }
        //4. 업데이트 및 정상 응답(200) 해주기
        target.patch(article);
        Article updated = articleRepository.save(target);
        return updated; // 응답은 컨트롤러가 하니까 서비스단에서는 수정된 값만 반환

    }

    public Article delete(Long id) {
        //1. 대상 찾기
        Article target = articleRepository.findById(id).orElse(null);
        //2. 잘못된 요청 처리하기
        if(target == null){
            return null;
        }
        //3. 대상 삭제하기
        articleRepository.delete(target);
        return target;

    }
    @Transactional
    public List<Article> createArticles(List<ArticleForm> dtos) {
        //1. dtos = 묶음을 엔티티 묶음으로 변환하기 dtos를 stream화 하기
        // 여기서 스트림 문법은 리스트와 같은 자료구조에 저장된 요소를 하나씩
        //순화하면서 처리하는 코드 패턴임 for문을 함축화해논 문법임 나중에 구글링참조
        List<Article> articleList = dtos.stream()
                .map(dto -> dto.toEntity()).
                collect(Collectors.toList());
        //2. 엔티티 묶음을 db에 저장하기
        articleList.stream().forEach(article -> articleRepository.save(article));
        //3. 강제 예외 발생시키기
        articleRepository.findById(-1L).orElseThrow(() -> new IllegalArgumentException("결제 실패"));
        //4. 결과 값 반환
        return articleList;
    }
}
