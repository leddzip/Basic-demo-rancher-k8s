package fr.leddzip.demo.rancher.one.backconnectedservicejava.client.internalservice;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Getter
@Component
public class InternalServiceConfig {

    @Value("${internal-service.base-url}")
    private String baseUrl;

}
