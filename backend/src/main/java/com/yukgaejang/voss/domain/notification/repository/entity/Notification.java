package com.yukgaejang.voss.domain.notification.repository.entity;

import com.yukgaejang.voss.domain.member.repository.entity.Member;
import com.yukgaejang.voss.global.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Notification extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long subjectId;
    private Long targetId;
    private Long contentId;
    private NotificationType type;

    public Notification(Long subjectId, Long targetId, Long contentId, NotificationType type) {
        this.subjectId = subjectId;
        this.targetId = targetId;
        this.contentId = contentId;
        this.type = type;
    }

    public Notification(Long subjectId, Long targetId, NotificationType type) {
        this.subjectId = subjectId;
        this.targetId = targetId;
        this.type = type;
    }
}
