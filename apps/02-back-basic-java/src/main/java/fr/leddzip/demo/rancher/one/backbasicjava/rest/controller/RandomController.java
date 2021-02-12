package fr.leddzip.demo.rancher.one.backbasicjava.rest.controller;

import java.util.Random;
import java.util.UUID;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/random")
public class RandomController {

    @GetMapping
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String getRandom() {
        return UUID.randomUUID().toString();
    }

}
