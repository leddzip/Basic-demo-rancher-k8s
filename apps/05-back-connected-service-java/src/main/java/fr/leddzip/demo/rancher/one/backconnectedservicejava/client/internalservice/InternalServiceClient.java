package fr.leddzip.demo.rancher.one.backconnectedservicejava.client.internalservice;

import fr.leddzip.demo.rancher.one.backconnectedservicejava.client.internalservice.response.UUIDResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RequiredArgsConstructor
@Service
public class InternalServiceClient {

    private final RestTemplate restTemplate;
    private final InternalServiceConfig config;

    public UUIDResponse fetchRandomUUID() {
        final String url = UriComponentsBuilder
            .fromHttpUrl(config.getBaseUrl())
            .pathSegment("api")
            .pathSegment("v1")
            .pathSegment("random")
            .toUriString();
        return restTemplate.getForObject(url, UUIDResponse.class);
    }
}
