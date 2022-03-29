package com.spring.blog.service;

import com.spring.blog.domain.Blog;
import com.spring.blog.repository.BlogRepository;
import com.spring.blog.dto.BlogRequestDto;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
public class BlogService {

    private final BlogRepository blogRepository;

    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @Transactional // 이게 디비에진짜 반영이 필요해! 알려주기
    public void update(Long id, BlogRequestDto requestDto) {
        Blog blog = blogRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("아이디가 존재하지 않습니다.")
        );
        blog.update(requestDto);
    }
}