package com.example.queusdb.demo.controller;

import com.example.queusdb.demo.dto.TestRequest;
import com.example.queusdb.demo.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/generate-test")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TestController {

    @Autowired
    private TestService testService;

    @PostMapping
    public Object generateTest(@RequestBody TestRequest testRequest) {
        return testService.execute(testRequest);
    }

}
