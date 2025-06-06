package br.com.dio.barbershoui.controller.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ClientScheduleAppointmentDetailResponse(
        @JsonProperty("id")
        Long id,
        @JsonProperty("name")
        String name,
        @JsonProperty("email")
        String email,
        @JsonProperty("phone")
        String phone
) {}
