package com.example.SignSample.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import org.springframework.data.annotation.Id;

@Entity
public class Article {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String text;
    @Column
    private String password;

    public Article(Long id, String text, String password) {
        this.id = id;
        this.text = text;
        this.password = password;
    }

    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
