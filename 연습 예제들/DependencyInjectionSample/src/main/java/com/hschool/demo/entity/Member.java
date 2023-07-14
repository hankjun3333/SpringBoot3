package com.hschool.demo.entity;

public class Member {
    private Integer id; //레파지토리 = db와 연동시키는 클래스를 의미
    //엔티티 = 레코드 = 행
    private  String name;
    //private 이니까 겟셋메소드사용 get set 메소드를 통해서만 값셋팅
    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id= id;
    }
    public String getName(){
        return name;
    }
    public void  setName(String name){
        this.name = name;
    }
}
