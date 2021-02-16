package fr.leddzip.demo.rancher.one.backconnectedservicejava.rest.controller;

import fr.leddzip.demo.rancher.one.backconnectedservicejava.rest.resources.RandomUUIDOut;
import fr.leddzip.demo.rancher.one.backconnectedservicejava.service.ExternalUUIDService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/random")
@RequiredArgsConstructor
public class RandomController {

    private final ExternalUUIDService externalUUIDService;

    @GetMapping
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public RandomUUIDOut getRandom() {
        return new RandomUUIDOut(externalUUIDService.newUUID());
    }

}
