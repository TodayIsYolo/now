package com.spring.blog.controller;

import com.spring.blog.domain.Blog;
import com.spring.blog.repository.BlogRepository;
import com.spring.blog.dto.BlogRequestDto;
import com.spring.blog.security.UserDetailsImpl;
import com.spring.blog.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class BlogController {
    private final BlogRepository blogRepository;
    private final BlogService blogService;

    //게시글 작성
    @PostMapping("/api/blogs")
    public Blog createBlog(@RequestBody BlogRequestDto requestDto,@AuthenticationPrincipal UserDetailsImpl userDetails){
        Long userId = userDetails.getUser().getId();
        Blog blog = new Blog(requestDto, userId, userDetails.getUsername());
        return blogRepository.save(blog);
    }

    //게시글 작성 ㄱㄱ
    @RequestMapping("/post")
    public ModelAndView post() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("post.html");
        return modelAndView;
    }

    //게시글 전체 조회
    @GetMapping("/api/blogs")
    public List<Blog> getBlogs(){
        return blogRepository.findAllByOrderByModifiedAtDesc();
    }
    //상세조회
    @GetMapping("/detail/{id}")
    public ModelAndView detailPage(@PathVariable("id") Long Id, @AuthenticationPrincipal UserDetailsImpl userDetails){
        Optional<Blog> article = blogRepository.findById(Id);
        ModelAndView modelAndView = new ModelAndView("detail.html");
        modelAndView.addObject("id", article.get().getId());
        modelAndView.addObject("title", article.get().getTitle());
        modelAndView.addObject("username", article.get().getUsername());
        modelAndView.addObject("contents", article.get().getContents());
        modelAndView.addObject("createdAt", article.get().getCreatedAt());
        modelAndView.addObject("modifiedAt", article.get().getModifiedAt());
        return modelAndView;
    }

    @DeleteMapping("/api/blogs/{id}")
    public String deleteBlog(@PathVariable Long id, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        String name = userDetails.getUser().getUsername();
        String BlogUserName = blogRepository.findById(id).get().getUsername();
        if (Objects.equals(name, BlogUserName)){
            blogRepository.deleteById(id);
        } else {
            return "삭제하지 못했습니다.";
        }
        return "삭제성공";
    }
    @PutMapping("/api/blogs/{id}")
    public Long updateBlog(@PathVariable Long id, @RequestBody BlogRequestDto requestDto){
        blogService.update(id,requestDto);
        return id;
    }

}