package com.spring.blog.repository;


import com.spring.blog.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    //코멘트에 저장해놓은 게시글 id를 이용해 조회
    List<Comment> findByBlogIdOrderByModifiedAtDesc(Long blogId);

}
