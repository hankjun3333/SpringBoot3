package com.hschool.SpringDataJDBCSample.repository;

import com.hschool.SpringDataJDBCSample.entity.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberCrudRepository extends CrudRepository<Member, Integer> {

}
