package fr.leddzip.demo.rancher.one.backconnectedservicejava.service;

import fr.leddzip.demo.rancher.one.backconnectedservicejava.client.internalservice.InternalServiceClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExternalUUIDService {

    private final InternalServiceClient internalServiceClient;

    public String newUUID() {
        return internalServiceClient.fetchRandomUUID().getUuid();
    }

}
