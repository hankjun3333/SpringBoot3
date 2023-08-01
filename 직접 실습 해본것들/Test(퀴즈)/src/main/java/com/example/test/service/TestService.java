package com.example.test.service;

import com.example.test.entity.Test;

import java.util.Optional;

public interface TestService {
    //데이터를 전부 가져온다
    Iterable<Test> selectAll();
    //데이터를 한 건 가져온다
    Optional<Test> selectOneById(Integer id);
    //데이터를 랜덤으로 한건 가져온다
    Optional<Test> selectOneRandomTest();
    //데이터의 true false 여부를 판단
    Boolean checkTest(Integer id, Boolean myAnswer);
    //퀴즈등록
    void insertTest(Test test);
    //퀴즈변경
    void updateTest(Test test);
    //퀴즈 삭제
    void deleteTestById(Integer id);
}
