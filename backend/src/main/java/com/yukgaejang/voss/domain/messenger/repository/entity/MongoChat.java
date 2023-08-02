package com.yukgaejang.voss.domain.messenger.repository.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "chat")
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MongoChat {
    @Id
    private String id;
    private Long chatId;
    private String sessionId;
    private Long memberId;
    private String content;
    private LocalDateTime time;

    public MongoChat(Long chatId, String sessionId, Long memberId, String content, LocalDateTime time) {
        this.chatId = chatId;
        this.sessionId = sessionId;
        this.memberId = memberId;
        this.content = content;
        this.time = time;
    }
}
