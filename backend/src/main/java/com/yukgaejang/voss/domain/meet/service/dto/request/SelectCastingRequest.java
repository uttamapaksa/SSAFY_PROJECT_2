package com.yukgaejang.voss.domain.meet.service.dto.request;

import lombok.Data;

@Data
public class SelectCastingRequest {
    private String email;
    private Long meetRoomId;
    private Long castingId;
}
